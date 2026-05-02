/* =========================================================
   PBL CORE CONDITIONS — SITE BEHAVIOUR
   All interaction lives here: login, search, filters, cards,
   sidebar, font-size control and image fallback handling.
   ========================================================= */
"use strict";

(() => {
  const GA_ID = "G-YZRLZ7XTX4";
  const AUTH_KEY = "pbl_auth";
  const FONT_KEY = "pbl_font_step_v5";
  const THEME_KEY = "pbl_theme_choice";
  const SEARCH_TAGS_URL = "./data/search-tags.json";
  const DEFAULT_FONT_INDEX = 2;

  let activeFilter = "all";
  let searchQuery = "";
  let allExpanded = false;
  let fontIndex = DEFAULT_FONT_INDEX;
  let themeChoice = "light";
  let themeChoiceIsManual = false;

  const fontSteps = [
    { label: "80%", cls: "font-small" },
    { label: "90%", cls: "font-reduced" },
    { label: "100%", cls: "" },
    { label: "110%", cls: "font-large" },
    { label: "120%", cls: "font-xlarge" },
  ];
  const fontStepClasses = fontSteps.map((step) => step.cls).filter(Boolean);

  /* -----------------------------
     Analytics
     ----------------------------- */
  function loadAnalytics() {
    if (!GA_ID) return;

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(script);

    window.gtag("js", new Date());
    window.gtag("config", GA_ID);
  }

  /* -----------------------------
     Layout helpers
     ----------------------------- */
  function mastheadHeight() {
    const masthead = document.querySelector(".masthead");
    return masthead ? masthead.offsetHeight : 0;
  }

  function updateMastheadHeightVariable() {
    document.documentElement.style.setProperty(
      "--masthead-height",
      `${mastheadHeight()}px`,
    );
  }

  function normalizeSearchTags(tags) {
    if (Array.isArray(tags)) {
      return tags.filter(Boolean).join(" ");
    }

    return typeof tags === "string" ? tags : "";
  }

  async function loadSearchTags() {
    try {
      const response = await fetch(SEARCH_TAGS_URL);
      if (!response.ok) return;

      const tagsByCardId = await response.json();
      Object.entries(tagsByCardId).forEach(([id, tags]) => {
        const card = document.getElementById(id);
        const searchTags = normalizeSearchTags(tags);
        if (card?.classList.contains("condition") && searchTags) {
          card.dataset.searchTags = searchTags;
        }
      });
    } catch (_) {
      /* Search tags are optional; visible condition names still work. */
    }
  }

  function setHamburgerState(isOpen) {
    document.querySelectorAll(".hamburger").forEach((button) => {
      button.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  function toggleSidebar(forceOpen) {
    const sidebar = document.querySelector(".sidebar");
    const overlay = document.getElementById("sidebarOverlay");
    if (!sidebar || !overlay) return;

    const shouldOpen =
      typeof forceOpen === "boolean"
        ? forceOpen
        : !sidebar.classList.contains("open");

    sidebar.classList.toggle("open", shouldOpen);
    overlay.classList.toggle("show", shouldOpen);
    overlay.setAttribute("aria-hidden", shouldOpen ? "false" : "true");
    document.body.classList.toggle("sidebar-open", shouldOpen);
    setHamburgerState(shouldOpen);
  }

  function closeSidebar() {
    toggleSidebar(false);
  }

  /* -----------------------------
     Expandable condition cards
     ----------------------------- */
  function setCardOpen(card, shouldOpen) {
    if (!card) return;

    const header = card.querySelector(".condition-header");
    const body = card.querySelector(".condition-body");
    const chevron = card.querySelector(".chevron");
    if (!header || !body) return;

    body.classList.toggle("open", shouldOpen);
    body.setAttribute("aria-hidden", shouldOpen ? "false" : "true");

    card.classList.toggle("is-open", shouldOpen);

    header.classList.toggle("open", shouldOpen);
    header.setAttribute("aria-expanded", shouldOpen ? "true" : "false");

    if (chevron) chevron.classList.toggle("open", shouldOpen);
  }

  function toggleCardFromHeader(header) {
    const card = header.closest(".condition");
    const body = card ? card.querySelector(".condition-body") : null;
    setCardOpen(card, !(body && body.classList.contains("open")));
  }

  function openAndScrollTo(id, event) {
    if (event) event.preventDefault();

    const target = document.getElementById(id);
    if (!target) return;

    target.classList.remove("is-hidden");

    if (target.classList.contains("condition")) {
      setCardOpen(target, true);
    }

    closeSidebar();

    window.setTimeout(() => {
      const top =
        target.getBoundingClientRect().top +
        window.scrollY -
        mastheadHeight() -
        14;
      window.scrollTo({ top, behavior: "smooth" });
      target.focus?.({ preventScroll: true });
    }, 40);
  }

  function toggleAllCards() {
    allExpanded = !allExpanded;

    document.querySelectorAll(".condition:not(.is-hidden)").forEach((card) => {
      setCardOpen(card, allExpanded);
    });

    const button = document.getElementById("expandAllBtn");
    if (button) {
      button.textContent = allExpanded ? "Collapse All" : "Expand All";
      button.classList.toggle("active", allExpanded);
      button.setAttribute("aria-pressed", allExpanded ? "true" : "false");
    }
  }

  /* -----------------------------
     Search and rank filtering
     ----------------------------- */
  function getCardRank(card) {
    const rankBadge = card.querySelector(".rank-badge");
    if (!rankBadge) return "";
    return (
      Array.from(rankBadge.classList).find((cls) => /^r[123]$/.test(cls)) || ""
    );
  }

  function cardMatchesSearch(card) {
    if (!searchQuery) return true;

    const title = card.querySelector(".condition-name")?.textContent || "";
    const tags = card.dataset.searchTags || "";
    return `${title} ${tags}`.toLowerCase().includes(searchQuery);
  }

  function shouldShowCard(card) {
    const rank = getCardRank(card);
    const rankMatch = activeFilter === "all" || rank === activeFilter;
    return rankMatch && cardMatchesSearch(card);
  }

  function hasVisibleCardBelow(label) {
    const isSystemHeader = label.classList.contains("system-header");
    let sibling = label.nextElementSibling;

    while (sibling) {
      if (isSystemHeader && sibling.classList.contains("system-header")) break;
      if (
        !isSystemHeader &&
        (sibling.classList.contains("system-header") ||
          sibling.classList.contains("category-label"))
      )
        break;
      if (
        sibling.classList.contains("condition") &&
        !sibling.classList.contains("is-hidden")
      )
        return true;
      sibling = sibling.nextElementSibling;
    }

    return false;
  }

  function applyFilters() {
    let visibleCount = 0;

    document.querySelectorAll(".condition").forEach((card) => {
      const show = shouldShowCard(card);
      card.classList.toggle("is-hidden", !show);

      if (show) {
        visibleCount += 1;
      }
    });

    document
      .querySelectorAll(".system-header, .category-label")
      .forEach((label) => {
        label.classList.toggle("is-hidden", !hasVisibleCardBelow(label));
      });

    const noResults = document.getElementById("noResults");
    if (noResults) noResults.classList.toggle("show", visibleCount === 0);

    updateActiveSidebarLink();
  }

  function setFilter(rank, button) {
    activeFilter = rank || "all";

    document.querySelectorAll(".filter-btn").forEach((btn) => {
      const isActive = btn === button || btn.dataset.filter === activeFilter;
      btn.classList.toggle("active", isActive);
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    });

    applyFilters();
  }

  function handleSearch(value) {
    searchQuery = (value || "").trim().toLowerCase();

    const clearButton = document.getElementById("searchClear");
    if (clearButton) clearButton.classList.toggle("show", Boolean(searchQuery));

    applyFilters();
  }

  function clearSearch() {
    const input = document.getElementById("searchInput");
    if (!input) return;

    input.value = "";
    handleSearch("");
    input.focus();
  }

  /* -----------------------------
     Active sidebar link
     ----------------------------- */
  function updateActiveSidebarLink() {
    const offset = mastheadHeight() + 30;
    let current = "";

    document.querySelectorAll(".condition:not(.is-hidden)").forEach((card) => {
      if (window.scrollY >= card.offsetTop - offset) {
        current = card.id;
      }
    });

    document.querySelectorAll(".sidebar-link").forEach((link) => {
      const isActive = link.getAttribute("href") === `#${current}`;
      link.classList.toggle("active", isActive);

      if (isActive) {
        link.setAttribute("aria-current", "true");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  /* -----------------------------
     Login
     ----------------------------- */
  function doLogin() {
    const idInput = document.getElementById("login-id");
    const pwInput = document.getElementById("login-pw");
    const overlay = document.getElementById("login-overlay");
    const error = document.getElementById("login-error");
    if (!idInput || !pwInput || !overlay || !error) return;

    const username = idInput.value.trim();
    const password = pwInput.value;

    if (username === "admin" && password === "pbl") {
      try {
        sessionStorage.setItem(AUTH_KEY, "1");
      } catch (_) {
        /* Session storage can fail in private/restricted browsers. */
      }

      overlay.classList.add("is-hidden");
      error.classList.remove("show");
    } else {
      error.classList.add("show");
      pwInput.value = "";
      pwInput.focus();
    }
  }

  function restoreLoginSession() {
    let authenticated = false;

    try {
      authenticated = sessionStorage.getItem(AUTH_KEY) === "1";
    } catch (_) {
      authenticated = false;
    }

    const overlay = document.getElementById("login-overlay");
    if (overlay && authenticated) overlay.classList.add("is-hidden");
  }

  /* -----------------------------
     Font-size control
     ----------------------------- */
  function applyFontStep(index) {
    fontIndex = Math.min(Math.max(index, 0), fontSteps.length - 1);

    document.body.classList.remove(...fontStepClasses);

    const step = fontSteps[fontIndex];
    if (step.cls) document.body.classList.add(step.cls);

    const value = document.getElementById("fontSizeValue");
    const decreaseButton = document.getElementById("fontDecreaseBtn");
    const increaseButton = document.getElementById("fontIncreaseBtn");

    if (value) value.textContent = step.label;
    if (decreaseButton) decreaseButton.disabled = fontIndex === 0;
    if (increaseButton)
      increaseButton.disabled = fontIndex === fontSteps.length - 1;

    try {
      localStorage.setItem(FONT_KEY, String(fontIndex));
    } catch (_) {
      /* Ignore storage errors. */
    }

    updateMastheadHeightVariable();
  }

  function restoreFontStep() {
    let saved = DEFAULT_FONT_INDEX;

    try {
      const stored = localStorage.getItem(FONT_KEY);
      saved = stored === null ? DEFAULT_FONT_INDEX : Number(stored);
    } catch (_) {
      saved = DEFAULT_FONT_INDEX;
    }

    if (!Number.isFinite(saved) || saved < 0) saved = 0;
    applyFontStep(saved);
  }

  function decreaseFontSize() {
    applyFontStep(fontIndex - 1);
  }

  function increaseFontSize() {
    applyFontStep(fontIndex + 1);
  }

  /* -----------------------------
     Theme control
     ----------------------------- */
  function getSystemThemeChoice() {
    return typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  function isThemeChoice(choice) {
    return choice === "light" || choice === "dark";
  }

  function normalizeThemeChoice(choice) {
    return isThemeChoice(choice) ? choice : getSystemThemeChoice();
  }

  function applyThemeChoice(choice, { persist = true } = {}) {
    themeChoice = normalizeThemeChoice(choice);
    document.documentElement.dataset.theme = themeChoice;

    document.querySelectorAll(".theme-btn[data-theme-choice]").forEach((button) => {
      const isActive = button.dataset.themeChoice === themeChoice;
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-pressed", isActive ? "true" : "false");
    });

    if (persist) {
      themeChoiceIsManual = true;
      try {
        localStorage.setItem(THEME_KEY, themeChoice);
      } catch (_) {
        /* Ignore storage errors. */
      }
    }
  }

  function restoreThemeChoice() {
    let saved = null;

    try {
      saved = localStorage.getItem(THEME_KEY);
      if (saved && !isThemeChoice(saved)) {
        localStorage.removeItem(THEME_KEY);
        saved = null;
      }
    } catch (_) {
      saved = null;
    }

    themeChoiceIsManual = isThemeChoice(saved);
    applyThemeChoice(saved || getSystemThemeChoice(), { persist: false });
  }

  function bindThemeControls() {
    document.querySelectorAll(".theme-btn[data-theme-choice]").forEach((button) => {
      button.addEventListener("click", () => {
        applyThemeChoice(button.dataset.themeChoice || getSystemThemeChoice());
        updateMastheadHeightVariable();
      });
    });

    if (typeof window.matchMedia !== "function") return;

    const systemThemeQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemThemeChange = () => {
      if (!themeChoiceIsManual) {
        applyThemeChoice(getSystemThemeChoice(), { persist: false });
      }
    };

    if (typeof systemThemeQuery.addEventListener === "function") {
      systemThemeQuery.addEventListener("change", handleSystemThemeChange);
    } else if (typeof systemThemeQuery.addListener === "function") {
      systemThemeQuery.addListener(handleSystemThemeChange);
    }
  }

  /* -----------------------------
     Image fallback
     ----------------------------- */
  function handleImageFallback(img) {
    const wrapper = img.closest(".histo-img-wrap") || img.parentElement;
    if (!wrapper) return;

    wrapper.classList.add("is-missing");
    wrapper.textContent = img.dataset.fallback || "Image unavailable";
  }

  /* -----------------------------
     Event binding
     ----------------------------- */
  function bindEvents() {
    document.querySelectorAll(".hamburger").forEach((button) => {
      button.addEventListener("click", () => toggleSidebar());
    });

    document
      .getElementById("sidebarOverlay")
      ?.addEventListener("click", closeSidebar);

    document.querySelectorAll(".condition-header").forEach((header) => {
      header.addEventListener("click", () => toggleCardFromHeader(header));

      if (header.tagName !== "BUTTON") {
        header.addEventListener("keydown", (event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            toggleCardFromHeader(header);
          }
        });
      }
    });

    document.querySelectorAll(".sidebar-link").forEach((link) => {
      link.addEventListener("click", (event) => {
        const id = link.hash ? link.hash.slice(1) : "";
        if (id) openAndScrollTo(id, event);
      });
    });

    document.querySelectorAll(".filter-btn").forEach((button) => {
      button.addEventListener("click", () =>
        setFilter(button.dataset.filter || "all", button),
      );
    });

    document
      .getElementById("searchInput")
      ?.addEventListener("input", (event) => handleSearch(event.target.value));
    document
      .getElementById("searchClear")
      ?.addEventListener("click", clearSearch);
    document
      .getElementById("expandAllBtn")
      ?.addEventListener("click", toggleAllCards);
    document
      .getElementById("fontDecreaseBtn")
      ?.addEventListener("click", decreaseFontSize);
    document
      .getElementById("fontIncreaseBtn")
      ?.addEventListener("click", increaseFontSize);
    bindThemeControls();
    document.querySelector(".login-btn")?.addEventListener("click", doLogin);

    ["login-id", "login-pw"].forEach((id) => {
      document.getElementById(id)?.addEventListener("keydown", (event) => {
        if (event.key === "Enter") doLogin();
      });
    });

    document.querySelectorAll("img.js-image-fallback").forEach((img) => {
      if (img.complete && img.naturalWidth === 0) {
        handleImageFallback(img);
      } else {
        img.addEventListener("error", () => handleImageFallback(img), {
          once: true,
        });
      }
    });

    window.addEventListener("scroll", updateActiveSidebarLink, {
      passive: true,
    });
    window.addEventListener("resize", () => {
      updateMastheadHeightVariable();
      if (window.innerWidth > 768) closeSidebar();
      updateActiveSidebarLink();
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    loadAnalytics();
    restoreLoginSession();
    restoreThemeChoice();
    restoreFontStep();
    bindEvents();
    updateMastheadHeightVariable();
    applyFilters();
    loadSearchTags().then(applyFilters);
  });
})();
