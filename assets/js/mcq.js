"use strict";

(() => {
  const SYSTEM_CATALOG = [
    {
      id: "cvs",
      shortName: "CVS",
      name: "Cardiovascular",
      accentClass: "cvs",
      countId: "mcqCountCvs",
    },
    {
      id: "resp",
      shortName: "RESP",
      name: "Respiratory",
      accentClass: "resp",
      countId: "mcqCountResp",
    },
    {
      id: "hep",
      shortName: "HEP",
      name: "Hepatobiliary",
      accentClass: "hep",
      countId: "mcqCountHep",
    },
    {
      id: "gi",
      shortName: "GI",
      name: "Gastrointestinal",
      accentClass: "gi",
      countId: "mcqCountGi",
    },
  ];

  const RANK_CATALOG = [
    {
      id: "r1",
      label: "R1",
      name: "Core detail",
    },
    {
      id: "r2",
      label: "R2",
      name: "Moderate detail",
    },
    {
      id: "r3",
      label: "R3",
      name: "Recognition level",
    },
  ];

  const QUESTION_META = {
    "cvs-1": { conditionId: "acs", condition: "ACS / MI", rank: "r1" },
    "cvs-2": {
      conditionId: "atrial-tachy",
      condition: "Atrial Tachyarrhythmias",
      rank: "r1",
    },
    "cvs-3": {
      conditionId: "aorta",
      condition: "Aortic Aneurysm / Dissection",
      rank: "r1",
    },
    "cvs-4": {
      conditionId: "brady",
      condition: "Bradyarrhythmias",
      rank: "r1",
    },
    "cvs-5": {
      conditionId: "chf",
      condition: "Congestive Cardiac Failure",
      rank: "r1",
    },
    "cvs-6": {
      conditionId: "valve",
      condition: "Mitral / Aortic Valve Disease",
      rank: "r1",
    },
    "cvs-7": {
      conditionId: "ie",
      condition: "Infective Endocarditis",
      rank: "r2",
    },
    "cvs-8": {
      conditionId: "pvd",
      condition: "Peripheral Vascular Disease",
      rank: "r1",
    },
    "cvs-9": { conditionId: "htn", condition: "Hypertension", rank: "r1" },
    "cvs-10": {
      conditionId: "peri",
      condition: "Pericarditis / Tamponade",
      rank: "r2",
    },
    "resp-1": { conditionId: "asthma", condition: "Asthma", rank: "r1" },
    "resp-2": { conditionId: "copd", condition: "COPD", rank: "r1" },
    "resp-3": {
      conditionId: "pneumonia",
      condition: "Pneumonia",
      rank: "r1",
    },
    "resp-4": { conditionId: "tb", condition: "Tuberculosis", rank: "r1" },
    "resp-5": {
      conditionId: "ptx",
      condition: "Pneumothorax",
      rank: "r1",
    },
    "resp-6": {
      conditionId: "eff",
      condition: "Pleural Effusion",
      rank: "r1",
    },
    "resp-7": {
      conditionId: "lung-ca",
      condition: "Lung Cancer",
      rank: "r1",
    },
    "resp-8": {
      conditionId: "osa",
      condition: "Obstructive Sleep Apnoea",
      rank: "r1",
    },
    "resp-9": {
      conditionId: "bronch",
      condition: "Bronchiectasis",
      rank: "r2",
    },
    "resp-10": {
      conditionId: "ipf",
      condition: "Pulmonary Fibrosis",
      rank: "r2",
    },
    "hep-1": {
      conditionId: "viral-hep",
      condition: "Viral Hepatitis",
      rank: "r1",
    },
    "hep-2": {
      conditionId: "viral-hep",
      condition: "Viral Hepatitis",
      rank: "r1",
    },
    "hep-3": { conditionId: "cirrhosis", condition: "Cirrhosis", rank: "r1" },
    "hep-4": { conditionId: "cirrhosis", condition: "Cirrhosis", rank: "r1" },
    "hep-5": {
      conditionId: "portal-htn",
      condition: "Portal Hypertension",
      rank: "r1",
    },
    "hep-6": { conditionId: "cirrhosis", condition: "Cirrhosis", rank: "r1" },
    "hep-7": { conditionId: "nafld", condition: "NAFLD", rank: "r1" },
    "hep-8": {
      conditionId: "ald",
      condition: "Alcoholic Liver Disease",
      rank: "r1",
    },
    "hep-9": { conditionId: "gallstones", condition: "Gallstones", rank: "r1" },
    "hep-10": {
      conditionId: "hcc",
      condition: "Hepatocellular Carcinoma",
      rank: "r2",
    },
    "gi-1": {
      conditionId: "oes-ca",
      condition: "Oesophageal / Gastric Cancer",
      rank: "r2",
    },
    "gi-2": {
      conditionId: "pud",
      condition: "Peptic Ulcer Disease",
      rank: "r1",
    },
    "gi-3": {
      conditionId: "acute-panc",
      condition: "Acute Pancreatitis",
      rank: "r1",
    },
    "gi-4": {
      conditionId: "chron-panc",
      condition: "Chronic Pancreatitis",
      rank: "r2",
    },
    "gi-5": {
      conditionId: "appendicitis",
      condition: "Acute Appendicitis",
      rank: "r1",
    },
    "gi-6": {
      conditionId: "ibd",
      condition: "Inflammatory Bowel Disease",
      rank: "r1",
    },
    "gi-7": {
      conditionId: "crc",
      condition: "Colorectal Cancer",
      rank: "r1",
    },
    "gi-8": {
      conditionId: "intestinal-obs",
      condition: "Intestinal Obstruction / Ischaemia",
      rank: "r1",
    },
    "gi-9": {
      conditionId: "coeliac",
      condition: "Coeliac Disease",
      rank: "r2",
    },
    "gi-10": {
      conditionId: "angiodysplasia",
      condition: "Angiodysplasia",
      rank: "r3",
    },
  };

  const SYSTEM_CATALOG_BY_ID = new Map(
    SYSTEM_CATALOG.map((system, index) => [system.id, { ...system, index }]),
  );
  const RAW_BANKS = Array.isArray(window.PBL_QUESTION_BANKS)
    ? window.PBL_QUESTION_BANKS
    : [];
  const BANKS = normalizeBanks(RAW_BANKS);
  const SYSTEMS = buildSystems(BANKS);
  const SYSTEMS_BY_ID = new Map(SYSTEMS.map((system) => [system.id, system]));
  const RANKS_BY_ID = new Map(RANK_CATALOG.map((rank) => [rank.id, rank]));

  let selectedBankIds = new Set();
  let selectedSystemIds = new Set(SYSTEMS.map((system) => system.id));
  let selectedRankIds = new Set(RANK_CATALOG.map((rank) => rank.id));
  let activeEntries = [];
  let currentIndex = 0;
  let quizComplete = false;
  let quizPhase = "setup";
  let bankSearchQuery = "";
  let bankSortDirection = "desc";
  let noteIndexPromise = null;
  let noteBundlePromise = null;
  let noteModalLastFocus = null;
  const notePreviewCache = new Map();

  function normalizeBanks(banks) {
    return banks
      .map((bank, bankIndex) => {
        const id = String(bank.id || `QB_V${bankIndex + 1}`).trim();
        const generatedAt = String(bank.generatedAt || "").trim();
        const questions = Array.isArray(bank.questions)
          ? bank.questions
              .map((question, index) => normalizeQuestion(question, id, index))
              .filter(Boolean)
          : [];

        return {
          id,
          title: String(bank.title || id).trim(),
          generatedAt,
          description: String(bank.description || "").trim(),
          questions,
        };
      })
      .filter((bank) => bank.questions.length > 0);
  }

  function normalizeRank(rank) {
    const normalized = String(rank || "")
      .trim()
      .toLowerCase();
    return RANK_CATALOG.some((rank) => rank.id === normalized)
      ? normalized
      : "r3";
  }

  function normalizeQuestion(question, bankId, index) {
    const id = String(question.id || `${bankId}-${index + 1}`).trim();
    const metadata = QUESTION_META[id] || {};
    const systemId = String(question.system || "")
      .trim()
      .toLowerCase();
    const options = Array.isArray(question.options)
      ? question.options.map((option) => String(option || "").trim())
      : [];
    const answer = Number(question.answer);
    const conditionId = String(
      question.conditionId || metadata.conditionId || id,
    ).trim();

    if (
      !systemId ||
      !String(question.stem || "").trim() ||
      options.length < 2 ||
      !Number.isInteger(answer) ||
      answer < 0 ||
      answer >= options.length
    ) {
      return null;
    }

    return {
      id,
      system: systemId,
      conditionId,
      condition: String(
        question.condition || metadata.condition || titleFromId(conditionId),
      ).trim(),
      rank: normalizeRank(question.rank || metadata.rank),
      stem: String(question.stem).trim(),
      options,
      answer,
      explanation: String(question.explanation || "").trim(),
    };
  }

  function titleFromId(id) {
    return id
      .split(/[-_\s]+/)
      .filter(Boolean)
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(" ");
  }

  function shortNameFromId(id) {
    const parts = id.split(/[-_\s]+/).filter(Boolean);
    if (parts.length > 1) {
      return parts.map((part) => part.charAt(0).toUpperCase()).join("");
    }

    return id.length <= 8 ? id.toUpperCase() : id.slice(0, 8).toUpperCase();
  }

  function getSystemDefinition(systemId) {
    const known = SYSTEM_CATALOG_BY_ID.get(systemId);
    if (known) return known;

    return {
      id: systemId,
      shortName: shortNameFromId(systemId),
      name: titleFromId(systemId),
      accentClass: "neutral",
      countId: "",
      index: Number.MAX_SAFE_INTEGER,
    };
  }

  function buildSystems(banks) {
    const ids = new Set();

    banks.forEach((bank) => {
      bank.questions.forEach((question) => ids.add(question.system));
    });

    return Array.from(ids)
      .map(getSystemDefinition)
      .sort((a, b) => {
        if (a.index !== b.index) return a.index - b.index;
        return a.name.localeCompare(b.name);
      });
  }

  function bankVersionNumber(bank) {
    const match = bank.id.match(/QB_V(\d+)/i);
    return match ? Number(match[1]) : 0;
  }

  function compareBanksDesc(a, b) {
    const dateCompare = String(b.generatedAt).localeCompare(
      String(a.generatedAt),
    );
    if (dateCompare !== 0) return dateCompare;
    return bankVersionNumber(b) - bankVersionNumber(a);
  }

  function compareBanksAsc(a, b) {
    const dateCompare = String(a.generatedAt).localeCompare(
      String(b.generatedAt),
    );
    if (dateCompare !== 0) return dateCompare;
    return bankVersionNumber(a) - bankVersionNumber(b);
  }

  function sortBanksForPicker(banks) {
    return banks
      .slice()
      .sort(bankSortDirection === "desc" ? compareBanksDesc : compareBanksAsc);
  }

  function todayString() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  function defaultBankIds() {
    if (!BANKS.length) return [];

    const today = todayString();
    const todayBanks = BANKS.filter((bank) => bank.generatedAt === today).sort(
      compareBanksDesc,
    );

    if (todayBanks.length) {
      return todayBanks.map((bank) => bank.id);
    }

    const [latest] = BANKS.slice().sort(compareBanksDesc);
    return latest ? [latest.id] : [];
  }

  function defaultBankNote() {
    const ids = defaultBankIds();
    if (!ids.length) return "No banks";

    const today = todayString();
    const hasToday = BANKS.some(
      (bank) => ids.includes(bank.id) && bank.generatedAt === today,
    );

    return hasToday ? "Default: today" : "Default: most recent";
  }

  function latestBankIds(limit = 7) {
    return BANKS.slice()
      .sort(compareBanksDesc)
      .slice(0, limit)
      .map((bank) => bank.id);
  }

  function matchesSearch(values, query) {
    if (!query) return true;

    const text = values.join(" ").toLowerCase();
    return query.split(/\s+/).every((term) => text.includes(term));
  }

  function bankMatchesSearch(bank) {
    return matchesSearch(
      [bank.id, bank.title, bank.generatedAt, bank.description],
      bankSearchQuery,
    );
  }

  function selectedBanks() {
    return BANKS.filter((bank) => selectedBankIds.has(bank.id)).sort(
      compareBanksDesc,
    );
  }

  function optionLetter(index) {
    return String.fromCharCode(65 + index);
  }

  function buildSystemCode(system, tagName = "span") {
    const element = document.createElement(tagName);
    element.className = `mcq-system-code ${system.accentClass}`;
    element.dataset.systemId = system.id;
    element.title = system.name;
    element.textContent = system.shortName;
    element.setAttribute("aria-label", `System: ${system.name}`);
    return element;
  }

  function buildMetaTag(text, className, dataset = {}) {
    const tag = document.createElement("span");
    tag.className = `mcq-meta-tag ${className}`.trim();
    tag.textContent = text;

    Object.entries(dataset).forEach(([key, value]) => {
      tag.dataset[key] = value;
    });

    return tag;
  }

  function buildSystemMetaTag(system) {
    const tag = buildSystemCode(system);
    tag.classList.add("mcq-meta-tag", "mcq-system-tag");
    return tag;
  }

  function buildRankTag(rankId, tagName = "span") {
    const rank = RANKS_BY_ID.get(rankId) || RANKS_BY_ID.get("r3");
    const element = document.createElement(tagName);
    element.className = `mcq-rank-code ${rank.id}`;
    element.dataset.rankId = rank.id;
    element.title = rank.name;
    element.textContent = rank.label;
    element.setAttribute("aria-label", `Revision tier: ${rank.label}`);
    return element;
  }

  function buildRankMetaTag(question) {
    const tag = buildRankTag(question.rank);
    tag.classList.add("mcq-meta-tag", "mcq-rank-tag");
    return tag;
  }

  function buildDiseaseMetaTag(question) {
    const tag = buildMetaTag(question.condition, "mcq-disease-tag", {
      conditionId: question.conditionId,
      rankId: question.rank,
    });
    tag.title = `${question.condition} (${question.rank.toUpperCase()})`;
    return tag;
  }

  function isValidOption(question, selected) {
    return (
      Number.isInteger(selected) &&
      selected >= 0 &&
      selected < question.options.length
    );
  }

  function baseEntries({
    ignoreSystemFilter = false,
    ignoreRankFilter = false,
  } = {}) {
    const entries = [];

    selectedBanks().forEach((bank) => {
      bank.questions.forEach((question, index) => {
        const system = SYSTEMS_BY_ID.get(question.system);
        if (!system) return;
        if (!ignoreSystemFilter && !selectedSystemIds.has(system.id)) return;
        if (!ignoreRankFilter && !selectedRankIds.has(question.rank)) return;

        entries.push({
          bank,
          system,
          question,
          sourceIndex: index + 1,
          sourceId: `${bank.id}:${question.id}`,
        });
      });
    });

    return entries;
  }

  function questionEntries() {
    return activeEntries;
  }

  function currentEntry() {
    const entries = questionEntries();
    return entries[currentIndex] || entries[0];
  }

  function shuffle(entries) {
    const copy = entries.slice();

    for (let index = copy.length - 1; index > 0; index -= 1) {
      const swapIndex = Math.floor(Math.random() * (index + 1));
      [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
    }

    return copy;
  }

  function shuffledQuestion(question) {
    const shuffledOptions = shuffle(
      question.options.map((text, originalIndex) => ({ text, originalIndex })),
    );

    return {
      ...question,
      options: shuffledOptions.map((option) => option.text),
      answer: shuffledOptions.findIndex(
        (option) => option.originalIndex === question.answer,
      ),
    };
  }

  function copyEntry(entry, globalNumber) {
    return {
      bank: entry.bank,
      system: entry.system,
      sourceIndex: entry.sourceIndex,
      sourceId: entry.sourceId,
      globalNumber,
      question: shuffledQuestion(entry.question),
    };
  }

  function scrollToElement(element) {
    if (!element) return;

    window.scrollTo({
      top:
        element.getBoundingClientRect().top +
        window.scrollY -
        (document.querySelector(".masthead")?.offsetHeight || 0) -
        14,
      behavior: "smooth",
    });
  }

  function scrollToQuestion() {
    scrollToElement(document.getElementById("mcqQuestionRoot"));
  }

  function scrollToQuizWorkspace() {
    scrollToElement(document.getElementById("mcqQuizPanel"));
  }

  function scrollToSummary() {
    const target = document.getElementById("reviewSummary");
    if (!target || target.hidden) return;
    scrollToElement(target);
  }

  function ensureNoteModal() {
    let modal = document.getElementById("mcqNoteModal");
    if (modal) return modal;

    modal = document.createElement("div");
    modal.className = "mcq-note-modal";
    modal.hidden = true;
    modal.id = "mcqNoteModal";
    modal.setAttribute("aria-labelledby", "mcqNoteModalTitle");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("role", "dialog");

    const backdrop = document.createElement("button");
    backdrop.className = "mcq-note-modal-backdrop";
    backdrop.type = "button";
    backdrop.setAttribute("aria-label", "Close note preview");
    backdrop.addEventListener("click", closeNoteModal);

    const panel = document.createElement("section");
    panel.className = "mcq-note-modal-panel";
    panel.tabIndex = -1;

    const header = document.createElement("header");
    header.className = "mcq-note-modal-header";

    const titleBlock = document.createElement("div");
    const eyebrow = document.createElement("p");
    eyebrow.className = "eyebrow";
    eyebrow.textContent = "Note preview";
    const title = document.createElement("h2");
    title.id = "mcqNoteModalTitle";
    title.textContent = "Loading note";
    titleBlock.append(eyebrow, title);

    const close = document.createElement("button");
    close.className = "mcq-note-modal-close";
    close.type = "button";
    close.setAttribute("aria-label", "Close note preview");
    close.textContent = "x";
    close.addEventListener("click", closeNoteModal);

    const body = document.createElement("div");
    body.className = "mcq-note-modal-body";
    body.id = "mcqNoteModalBody";

    header.append(titleBlock, close);
    panel.append(header, body);
    modal.append(backdrop, panel);
    document.body.append(modal);
    return modal;
  }

  function closeNoteModal() {
    const modal = document.getElementById("mcqNoteModal");
    if (!modal || modal.hidden) return;

    modal.hidden = true;
    document.body.classList.remove("mcq-note-modal-open");
    if (noteModalLastFocus?.focus) {
      noteModalLastFocus.focus({ preventScroll: true });
    }
    noteModalLastFocus = null;
  }

  function handleNoteModalKeydown(event) {
    if (event.key === "Escape") closeNoteModal();
  }

  async function loadNoteIndexDocument() {
    if (!noteIndexPromise) {
      noteIndexPromise = fetch("index.html")
        .then((response) => {
          if (!response.ok) throw new Error("Unable to load notes.");
          return response.text();
        })
        .then((htmlText) =>
          new DOMParser().parseFromString(htmlText, "text/html"),
        );
    }

    return noteIndexPromise;
  }

  async function loadNotePreviewBundle() {
    if (window.PBL_NOTE_PREVIEWS) return window.PBL_NOTE_PREVIEWS;

    if (!noteBundlePromise) {
      noteBundlePromise = new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = "data/note-previews.js";
        script.onload = () => {
          if (window.PBL_NOTE_PREVIEWS) {
            resolve(window.PBL_NOTE_PREVIEWS);
          } else {
            reject(new Error("Note preview bundle was empty."));
          }
        };
        script.onerror = () =>
          reject(new Error("Unable to load note preview bundle."));
        document.head.append(script);
      });
    }

    return noteBundlePromise;
  }

  async function loadConditionPreview(conditionId) {
    if (notePreviewCache.has(conditionId)) {
      return notePreviewCache.get(conditionId);
    }

    try {
      const noteDocument = await loadNoteIndexDocument();
      const article = noteDocument.getElementById(conditionId);
      const body = article?.querySelector(".condition-body");
      if (!article || !body) {
        throw new Error("No matching note card was found.");
      }

      const title =
        article.querySelector(".condition-name")?.textContent.trim() ||
        "Condition note";
      const preview = {
        html: body.innerHTML,
        title,
      };
      notePreviewCache.set(conditionId, preview);
      return preview;
    } catch (error) {
      const bundle = await loadNotePreviewBundle();
      const preview = bundle[conditionId];
      if (!preview) throw error;
      notePreviewCache.set(conditionId, preview);
      return preview;
    }
  }

  function renderNotePreviewHtml(container, html) {
    const template = document.createElement("template");
    template.innerHTML = html;
    template.content.querySelectorAll("script").forEach((script) => {
      script.remove();
    });
    template.content.querySelectorAll("[id]").forEach((element) => {
      element.removeAttribute("id");
    });
    template.content.querySelectorAll('a[href^="#"]').forEach((link) => {
      const anchor = link.getAttribute("href");
      if (anchor) link.setAttribute("href", `index.html${anchor}`);
    });
    container.replaceChildren(template.content.cloneNode(true));
  }

  function renderNotePreviewError(container, conditionId) {
    const message = document.createElement("p");
    message.className = "mcq-note-modal-message";
    message.textContent =
      "This note preview could not be loaded here. Open the full note instead.";

    const link = document.createElement("a");
    link.className = "expand-btn";
    link.href = `index.html#${encodeURIComponent(conditionId)}`;
    link.textContent = "Open full note";

    container.replaceChildren(message, link);
  }

  async function openConditionNotePreview(conditionId, fallbackTitle) {
    if (!conditionId) return;

    const modal = ensureNoteModal();
    const title = modal.querySelector("#mcqNoteModalTitle");
    const body = modal.querySelector("#mcqNoteModalBody");
    const panel = modal.querySelector(".mcq-note-modal-panel");

    noteModalLastFocus = document.activeElement;
    if (title) title.textContent = fallbackTitle || "Condition note";
    if (body) {
      const loading = document.createElement("p");
      loading.className = "mcq-note-modal-message";
      loading.textContent = "Loading note...";
      body.replaceChildren(loading);
    }

    modal.hidden = false;
    document.body.classList.add("mcq-note-modal-open");
    panel?.focus({ preventScroll: true });

    try {
      const preview = await loadConditionPreview(conditionId);
      if (title) title.textContent = preview.title;
      if (body) renderNotePreviewHtml(body, preview.html);
    } catch (_) {
      if (body) renderNotePreviewError(body, conditionId);
    }
  }

  function updatePhaseVisibility() {
    const setup = document.getElementById("mcq-top");
    const quizPanel = document.getElementById("mcqQuizPanel");
    if (setup) setup.hidden = quizPhase !== "setup";
    if (quizPanel) quizPanel.hidden = quizPhase !== "quiz";
  }

  function showSetup(shouldScroll = true) {
    quizPhase = "setup";
    quizComplete = false;
    renderSummary();
    updatePhaseVisibility();
    updateProgress();
    updateActiveMcqNav();
    if (shouldScroll) scrollToElement(document.getElementById("mcq-top"));
  }

  function setCurrentIndex(index, shouldScroll = true) {
    const entries = questionEntries();
    if (!entries.length) return;

    currentIndex = Math.min(Math.max(index, 0), entries.length - 1);
    quizComplete = false;
    renderSummary();
    renderQuestions();
    updateProgress();
    updateSidebarCounts();
    updateActiveMcqNav();
    if (shouldScroll) scrollToQuizWorkspace();
  }

  function canStopAndReview() {
    const entries = questionEntries();
    const currentQuestion = entries[currentIndex]?.question;
    const hasReviewedQuestion = entries.some(
      ({ question }) => question.reviewed,
    );
    const hasCurrentSelection =
      currentQuestion && isValidOption(currentQuestion, currentQuestion.selected);

    return (
      quizPhase === "quiz" &&
      !quizComplete &&
      (hasReviewedQuestion || hasCurrentSelection)
    );
  }

  function updateStopReviewButton() {
    const button = document.getElementById("stopReviewBtn");
    if (!button) return;

    button.disabled = !canStopAndReview();
  }

  function scoreState() {
    const entries = questionEntries();
    const selected = entries.filter(({ question }) =>
      isValidOption(question, question.selected),
    );
    const reviewed = entries.filter(({ question }) => question.reviewed);
    const correct = reviewed.filter(
      ({ question }) => question.selected === question.answer,
    );

    return {
      total: entries.length,
      selected: selected.length,
      reviewed: reviewed.length,
      correct: correct.length,
      current: entries.length ? currentIndex + 1 : 0,
      bySystem: SYSTEMS.map((system) => {
        const systemEntries = entries.filter(
          (entry) => entry.system.id === system.id,
        );
        const systemReviewed = systemEntries.filter(
          ({ question }) => question.reviewed,
        );
        const systemCorrect = systemReviewed.filter(
          ({ question }) => question.selected === question.answer,
        );
        return {
          ...system,
          reviewed: systemReviewed.length,
          correct: systemCorrect.length,
          total: systemEntries.length,
        };
      }),
      incorrectTags: incorrectDiseaseTags(entries),
    };
  }

  function incorrectDiseaseTags(entries) {
    const tags = new Map();

    entries
      .filter(
        ({ question }) =>
          question.reviewed && question.selected !== question.answer,
      )
      .forEach(({ question, system }) => {
        const key = question.conditionId || question.id;
        const current = tags.get(key) || {
          conditionId: key,
          condition: question.condition,
          rank: question.rank,
          system,
          count: 0,
        };
        current.count += 1;
        tags.set(key, current);
      });

    return Array.from(tags.values()).sort((a, b) => {
      const rankCompare =
        RANK_CATALOG.findIndex((rank) => rank.id === a.rank) -
        RANK_CATALOG.findIndex((rank) => rank.id === b.rank);
      if (rankCompare !== 0) return rankCompare;
      return a.condition.localeCompare(b.condition);
    });
  }

  function updateProgress() {
    updateStopReviewButton();
  }

  function updateSidebarCounts() {
    const entries = questionEntries().length
      ? questionEntries()
      : baseEntries();
    SYSTEMS.forEach((system) => {
      const total = entries.filter(
        (entry) => entry.system.id === system.id,
      ).length;
      const badge = document.getElementById(system.countId);
      if (badge) badge.textContent = String(total);

      document
        .querySelectorAll(`.mcq-nav-link[href="#mcq-${system.id}"]`)
        .forEach((link) => {
          const disabled = total === 0;
          link.classList.toggle("is-disabled", disabled);
          link.setAttribute("aria-disabled", disabled ? "true" : "false");
        });
    });
  }

  function renderBankPicker() {
    const root = document.getElementById("qbList");
    if (!root) return;

    root.replaceChildren();
    updateBankSortButton();

    const defaultIds = new Set(defaultBankIds());
    const today = todayString();
    const sortedBanks = sortBanksForPicker(BANKS);
    const visibleBanks = sortedBanks.filter(bankMatchesSearch);

    if (!visibleBanks.length) {
      const empty = document.createElement("p");
      empty.className = "mcq-empty-bank-message";
      empty.textContent = "No question banks match this search.";
      root.append(empty);
      return;
    }

    visibleBanks.forEach((bank) => {
      const label = document.createElement("label");
      label.className = "mcq-choice-chip";
      if (selectedBankIds.has(bank.id)) label.classList.add("is-selected");

      const input = document.createElement("input");
      input.type = "checkbox";
      input.value = bank.id;
      input.checked = selectedBankIds.has(bank.id);
      input.addEventListener("change", () => {
        if (input.checked) {
          selectedBankIds.add(bank.id);
        } else {
          selectedBankIds.delete(bank.id);
        }
        renderBuilder(true);
      });

      const text = document.createElement("span");
      const title = document.createElement("strong");
      title.textContent = bank.id;
      const detail = document.createElement("small");
      detail.textContent = bank.generatedAt || "No date";
      text.append(title, detail);

      if (defaultIds.has(bank.id)) {
        const tag = document.createElement("em");
        tag.textContent = bank.generatedAt === today ? "Today" : "Recent";
        text.append(tag);
      }

      label.append(input, text);
      root.append(label);
    });
  }

  function renderSystemPicker() {
    const root = document.getElementById("systemList");
    if (!root) return;

    root.replaceChildren();

    SYSTEMS.forEach((system) => {
      const label = document.createElement("label");
      label.className = `mcq-choice-chip ${system.accentClass}`;
      if (selectedSystemIds.has(system.id)) label.classList.add("is-selected");

      const input = document.createElement("input");
      input.type = "checkbox";
      input.value = system.id;
      input.checked = selectedSystemIds.has(system.id);
      input.addEventListener("change", () => {
        if (input.checked) {
          selectedSystemIds.add(system.id);
        } else {
          selectedSystemIds.delete(system.id);
        }
        renderBuilder(true);
      });

      const text = document.createElement("span");
      const title = buildSystemCode(system, "strong");
      text.append(title);

      label.dataset.systemId = system.id;
      label.append(input, text);
      root.append(label);
    });
  }

  function renderRankPicker() {
    const root = document.getElementById("rankList");
    if (!root) return;

    root.replaceChildren();

    const entriesByRank = baseEntries({ ignoreRankFilter: true });

    RANK_CATALOG.forEach((rank) => {
      const conditionCount = new Set(
        entriesByRank
          .filter(({ question }) => question.rank === rank.id)
          .map(({ question }) => question.conditionId),
      ).size;
      const label = document.createElement("label");
      label.className = `mcq-choice-chip mcq-rank-choice ${rank.id}`;
      if (selectedRankIds.has(rank.id)) label.classList.add("is-selected");

      const input = document.createElement("input");
      input.type = "checkbox";
      input.value = rank.id;
      input.checked = selectedRankIds.has(rank.id);
      input.addEventListener("change", () => {
        if (input.checked) {
          selectedRankIds.add(rank.id);
        } else {
          selectedRankIds.delete(rank.id);
        }
        renderBuilder(true);
      });

      const text = document.createElement("span");
      const title = buildRankTag(rank.id, "strong");
      const detail = document.createElement("small");
      detail.textContent = `${conditionCount} condition${conditionCount === 1 ? "" : "s"}`;
      text.append(title, detail);

      label.dataset.rankId = rank.id;
      label.append(input, text);
      root.append(label);
    });
  }

  function updateBankSortButton() {
    const button = document.getElementById("sortBanksByDateBtn");
    if (!button) return;

    const newestFirst = bankSortDirection === "desc";
    button.textContent = newestFirst ? "Date: Newest" : "Date: Oldest";
    button.title = newestFirst
      ? "Sorting question banks by newest date first"
      : "Sorting question banks by oldest date first";
    button.setAttribute(
      "aria-label",
      newestFirst
        ? "Sort question banks by date, newest first"
        : "Sort question banks by date, oldest first",
    );
  }

  function syncQuestionCount(forceToAvailable = false) {
    const input = document.getElementById("questionCountInput");
    if (!input) return 0;

    const available = baseEntries().length;
    input.max = String(Math.max(available, 1));

    if (!available) {
      input.value = "0";
      input.disabled = true;
      return 0;
    }

    input.disabled = false;

    const current = Number(input.value);
    if (
      forceToAvailable ||
      !Number.isFinite(current) ||
      current < 1 ||
      current > available
    ) {
      input.value = String(available);
    }

    return Math.min(Math.max(Number(input.value), 1), available);
  }

  function updateBuilderStatus() {
    const status = document.getElementById("quizBuilderStatus");
    const generateButton = document.getElementById("generateQuizBtn");
    const latestButton = document.getElementById("selectLatestBanksBtn");
    const available = baseEntries().length;
    const count = syncQuestionCount(false);
    const bankCount = selectedBankIds.size;
    const systemCount = selectedSystemIds.size;
    const rankCount = selectedRankIds.size;

    if (status) {
      status.textContent = `${available} available from ${bankCount} bank${
        bankCount === 1 ? "" : "s"
      }, ${systemCount} system${systemCount === 1 ? "" : "s"}, and ${rankCount} tier${
        rankCount === 1 ? "" : "s"
      }. ${
        count ? `${count} will be generated.` : "Select at least one question."
      }`;
    }

    if (generateButton) generateButton.disabled = available === 0;

    if (latestButton) latestButton.disabled = BANKS.length === 0;
  }

  function renderBuilder(forceCountToAvailable = false) {
    const defaultNote = document.getElementById("qbDefaultNote");
    if (defaultNote) defaultNote.textContent = defaultBankNote();

    renderBankPicker();
    renderSystemPicker();
    renderRankPicker();
    syncQuestionCount(forceCountToAvailable);
    updateBuilderStatus();
    updateSidebarCounts();
  }

  function renderSummary() {
    const summary = document.getElementById("reviewSummary");
    if (!summary) return;

    if (!quizComplete) {
      summary.hidden = true;
      summary.replaceChildren();
      return;
    }

    const state = scoreState();
    summary.hidden = false;
    summary.replaceChildren();

    const title = document.createElement("h2");
    title.textContent = "Quiz Summary";

    const score = document.createElement("p");
    score.className = "mcq-summary-score";
    score.textContent =
      state.reviewed > 0
        ? `${state.correct} of ${state.reviewed} reviewed correct`
        : "No reviewed questions yet";

    const detail = document.createElement("p");
    detail.className = "mcq-summary-detail";
    const unreviewed = state.total - state.reviewed;
    detail.textContent =
      unreviewed > 0
        ? `${unreviewed} question${
            unreviewed === 1 ? "" : "s"
          } not yet reviewed. Review your answers or return to the edit list.`
        : "All questions reviewed. Review your answers or return to the edit list for another set.";

    const grid = document.createElement("div");
    grid.className = "mcq-summary-grid";
    state.bySystem.forEach((system) => {
      const item = document.createElement("div");
      item.className = `mcq-summary-pill ${system.accentClass}`;
      item.dataset.systemId = system.id;
      const label = buildSystemCode(system);
      const result = document.createElement("strong");
      result.textContent = `${system.correct}/${system.reviewed}`;
      item.append(label, result);
      grid.append(item);
    });

    const incorrect = document.createElement("div");
    incorrect.className = "mcq-incorrect-tags";
    const incorrectTitle = document.createElement("h3");
    incorrectTitle.textContent = "Incorrect Disease Tags";
    const tagList = document.createElement("div");
    tagList.className = "mcq-incorrect-tag-list";

    if (state.incorrectTags.length) {
      state.incorrectTags.forEach((tag) => {
        const item = document.createElement("button");
        item.className = `mcq-incorrect-tag ${tag.system.accentClass}`;
        item.dataset.conditionId = tag.conditionId;
        item.dataset.rankId = tag.rank;
        item.type = "button";
        item.title = `Open ${tag.condition} note preview`;
        item.addEventListener("click", () => {
          openConditionNotePreview(tag.conditionId, tag.condition);
        });

        const rank = buildRankTag(tag.rank);
        const name = document.createElement("strong");
        name.textContent = tag.condition;
        const count = document.createElement("em");
        count.textContent = `x${tag.count}`;
        item.append(rank, name);
        if (tag.count > 1) item.append(count);
        tagList.append(item);
      });
    } else {
      const empty = document.createElement("p");
      empty.textContent = "No incorrect disease tags.";
      tagList.append(empty);
    }

    incorrect.append(incorrectTitle, tagList);
    summary.append(title, score, detail, grid, incorrect);
  }

  function buildOption(entry, optionText, optionIndex) {
    const { question } = entry;
    const label = document.createElement("label");
    label.className = "mcq-option";

    if (question.reviewed) label.classList.add("is-locked-option");
    if (question.reviewed && optionIndex === question.answer) {
      label.classList.add("is-correct-option");
    }
    if (
      question.reviewed &&
      question.selected === optionIndex &&
      question.selected !== question.answer
    ) {
      label.classList.add("is-wrong-option");
    }
    if (question.selected === optionIndex) {
      label.classList.add("is-selected-option");
    }

    const input = document.createElement("input");
    input.type = "radio";
    input.name = entry.sourceId;
    input.value = String(optionIndex);
    input.checked = question.selected === optionIndex;
    input.disabled = Boolean(question.reviewed);
    input.addEventListener("change", () => {
      if (question.reviewed) return;
      question.selected = optionIndex;
      renderQuestions();
      updateProgress();
    });

    const letter = document.createElement("span");
    letter.className = "mcq-option-letter";
    letter.textContent = optionLetter(optionIndex);

    const text = document.createElement("span");
    text.className = "mcq-option-text";
    text.textContent = optionText;

    label.append(input, letter, text);
    return label;
  }

  function buildFeedback(entry) {
    const { question } = entry;
    const isCorrect = question.selected === question.answer;
    const feedback = document.createElement("div");
    feedback.className = `mcq-feedback ${isCorrect ? "is-correct" : "is-incorrect"}`;
    feedback.tabIndex = -1;

    const status = document.createElement("strong");
    status.textContent = isCorrect ? "Correct." : "Review.";

    const selected = document.createElement("span");
    selected.textContent = ` Your answer: ${optionLetter(question.selected)}. ${
      question.options[question.selected]
    }`;

    const answer = document.createElement("span");
    answer.textContent = ` Correct answer: ${optionLetter(question.answer)}. ${
      question.options[question.answer]
    }`;

    const explanation = document.createElement("p");
    explanation.textContent = question.explanation;

    feedback.append(
      status,
      selected,
      document.createElement("br"),
      answer,
      explanation,
    );
    return feedback;
  }

  function buildActions(entry) {
    const entries = questionEntries();
    const { question } = entry;
    const hasSelection = isValidOption(question, question.selected);
    const actions = document.createElement("div");
    actions.className = "mcq-card-actions";

    const previous = document.createElement("button");
    previous.className = "expand-btn";
    previous.type = "button";
    previous.textContent = "Previous";
    previous.disabled = currentIndex === 0;
    previous.addEventListener("click", () => setCurrentIndex(currentIndex - 1));

    const status = document.createElement("p");
    status.className = "mcq-action-status";
    if (!hasSelection) {
      status.textContent = "Select an answer to continue.";
    } else if (!question.reviewed) {
      status.textContent = "Press Next to check this question.";
    } else {
      status.textContent = "Review the explanation, then continue.";
    }

    const next = document.createElement("button");
    next.className = "expand-btn mcq-primary-action";
    next.type = "button";
    next.disabled = !question.reviewed && !hasSelection;
    next.textContent = question.reviewed
      ? currentIndex === entries.length - 1
        ? "Finish Quiz"
        : "Next Question"
      : "Next";
    next.addEventListener("click", () => {
      if (!question.reviewed) {
        question.reviewed = true;
        renderQuestions();
        updateProgress();
        document.querySelector(".mcq-feedback")?.focus({ preventScroll: true });
        return;
      }

      if (currentIndex === entries.length - 1) {
        quizComplete = true;
        renderSummary();
        renderQuestions();
        updateProgress();
        updateActiveMcqNav();
        scrollToQuizWorkspace();
        return;
      }

      setCurrentIndex(currentIndex + 1);
    });

    actions.append(previous, status, next);
    return actions;
  }

  function renderEmptyCard(root, message) {
    const card = document.createElement("article");
    card.className = "mcq-card mcq-finish-card";

    const title = document.createElement("h2");
    title.textContent = "No Questions Generated";

    const detail = document.createElement("p");
    detail.textContent = message;

    card.append(title, detail);
    root.append(card);
  }

  function stopAndReviewSolved() {
    const entries = questionEntries();
    if (!entries.length || quizComplete) return;

    const currentQuestion = entries[currentIndex]?.question;
    if (
      currentQuestion &&
      !currentQuestion.reviewed &&
      isValidOption(currentQuestion, currentQuestion.selected)
    ) {
      currentQuestion.reviewed = true;
    }

    const reviewedEntries = entries.filter(({ question }) => question.reviewed);
    if (!reviewedEntries.length) {
      updateProgress();
      return;
    }

    activeEntries = reviewedEntries.map((entry, index) => ({
      ...entry,
      globalNumber: index + 1,
    }));
    currentIndex = 0;
    quizComplete = true;

    renderSummary();
    renderQuestions();
    updateProgress();
    updateSidebarCounts();
    updateActiveMcqNav();
    scrollToQuizWorkspace();
  }

  function renderFinishCard(root) {
    const card = document.createElement("article");
    card.className = "mcq-card mcq-finish-card";

    const title = document.createElement("h2");
    title.textContent = "Question Bank Complete";

    const detail = document.createElement("p");
    detail.textContent =
      "Your summary is above. Review the attempt or return to the edit list to build another set.";

    const actions = document.createElement("div");
    actions.className = "mcq-card-actions mcq-finish-actions";

    const reviewFirst = document.createElement("button");
    reviewFirst.className = "expand-btn";
    reviewFirst.type = "button";
    reviewFirst.textContent = "Review";
    reviewFirst.addEventListener("click", () => setCurrentIndex(0));

    const editList = document.createElement("button");
    editList.className = "expand-btn mcq-primary-action";
    editList.type = "button";
    editList.textContent = "Back to Edit List";
    editList.addEventListener("click", () => showSetup());

    actions.append(reviewFirst, editList);
    card.append(title, detail, actions);
    root.append(card);
  }

  function renderQuestions() {
    const root = document.getElementById("mcqQuestionRoot");
    if (!root) return;

    root.replaceChildren();

    if (!BANKS.length) {
      renderEmptyCard(
        root,
        "No question-bank dataset was found in data/question-banks/question-banks.js.",
      );
      return;
    }

    if (!questionEntries().length) {
      renderEmptyCard(
        root,
        "Choose at least one bank and system, then generate.",
      );
      return;
    }

    if (quizComplete) {
      renderFinishCard(root);
      return;
    }

    const entry = currentEntry();
    if (!entry) return;

    const { bank, system, question } = entry;
    const isCorrect =
      question.reviewed && question.selected === question.answer;
    const isIncorrect =
      question.reviewed && question.selected !== question.answer;

    const section = document.createElement("section");
    section.className = `mcq-system-section ${system.accentClass}`;
    section.id = `mcq-${system.id}`;
    section.tabIndex = -1;
    section.dataset.systemId = system.id;

    const card = document.createElement("article");
    card.className = "mcq-card";
    card.id = question.id;
    card.dataset.bankId = bank.id;
    card.dataset.systemId = system.id;
    card.dataset.conditionId = question.conditionId;
    card.dataset.rankId = question.rank;
    if (isCorrect) card.classList.add("is-correct");
    if (isIncorrect) card.classList.add("is-incorrect");

    const meta = document.createElement("div");
    meta.className = "mcq-card-meta";
    const qNumber = buildMetaTag(
      `Question ${entry.globalNumber} of ${questionEntries().length}`,
      "mcq-question-tag",
      { questionId: question.id },
    );
    meta.append(qNumber);

    const progress = document.createElement("div");
    progress.className = "mcq-progress-meter";
    progress.setAttribute("aria-hidden", "true");
    const progressFill = document.createElement("span");
    progressFill.style.width = `${
      (entry.globalNumber / questionEntries().length) * 100
    }%`;
    progress.append(progressFill);

    const stem = document.createElement("p");
    stem.className = "mcq-stem";
    stem.textContent = question.stem;

    const options = document.createElement("div");
    options.className = "mcq-options";
    question.options.forEach((option, optionIndex) => {
      options.append(buildOption(entry, option, optionIndex));
    });

    card.append(meta, progress, stem, options);
    if (question.reviewed) card.append(buildFeedback(entry));
    card.append(buildActions(entry));
    section.append(card);
    root.append(section);
  }

  function generateQuiz({ random = false, shouldScroll = true } = {}) {
    const pool = baseEntries();
    const count = syncQuestionCount(false);

    if (!pool.length || !count) {
      activeEntries = [];
      currentIndex = 0;
      quizComplete = false;
      quizPhase = "setup";
      renderSummary();
      renderQuestions();
      updateProgress();
      updateSidebarCounts();
      updateActiveMcqNav();
      updateBuilderStatus();
      updatePhaseVisibility();
      return;
    }

    const selected = (random ? shuffle(pool) : pool).slice(0, count);
    activeEntries = selected.map((entry, index) => copyEntry(entry, index + 1));
    currentIndex = 0;
    quizComplete = false;
    quizPhase = "quiz";

    renderSummary();
    renderQuestions();
    updateProgress();
    updateSidebarCounts();
    updateActiveMcqNav();
    updateBuilderStatus();
    updatePhaseVisibility();
    if (shouldScroll) scrollToQuizWorkspace();
  }

  function updateActiveMcqNav() {
    const entry = currentEntry();
    const current = quizComplete || !entry ? "" : `#mcq-${entry.system.id}`;

    document.querySelectorAll(".mcq-nav-link").forEach((link) => {
      const active = link.getAttribute("href") === current;
      link.classList.toggle("active", active);
      if (active) {
        link.setAttribute("aria-current", "true");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  function bindSystemLinks() {
    document.querySelectorAll('a[href^="#mcq-"]').forEach((link) => {
      const match = link
        .getAttribute("href")
        ?.match(/^#mcq-(cvs|resp|hep|gi)$/);
      if (!match) return;

      link.addEventListener("click", (event) => {
        event.preventDefault();
        if (link.getAttribute("aria-disabled") === "true") return;

        const targetIndex = questionEntries().findIndex(
          ({ system }) => system.id === match[1],
        );
        if (targetIndex >= 0) setCurrentIndex(targetIndex);
      });
    });
  }

  function bindEvents() {
    document
      .getElementById("qbSearchInput")
      ?.addEventListener("input", (event) => {
        bankSearchQuery = event.target.value.trim().toLowerCase();
        renderBankPicker();
      });

    document
      .getElementById("sortBanksByDateBtn")
      ?.addEventListener("click", () => {
        bankSortDirection = bankSortDirection === "desc" ? "asc" : "desc";
        renderBankPicker();
      });

    document
      .getElementById("selectLatestBanksBtn")
      ?.addEventListener("click", () => {
        selectedBankIds = new Set(latestBankIds(7));
        renderBuilder(true);
      });

    document
      .getElementById("selectAllBanksBtn")
      ?.addEventListener("click", () => {
        selectedBankIds = new Set(BANKS.map((bank) => bank.id));
        renderBuilder(true);
      });

    document.getElementById("clearBanksBtn")?.addEventListener("click", () => {
      selectedBankIds = new Set();
      renderBuilder(true);
    });

    document
      .getElementById("selectAllSystemsBtn")
      ?.addEventListener("click", () => {
        selectedSystemIds = new Set(SYSTEMS.map((system) => system.id));
        renderBuilder(true);
      });

    document
      .getElementById("clearSystemsBtn")
      ?.addEventListener("click", () => {
        selectedSystemIds = new Set();
        renderBuilder(true);
      });

    document
      .getElementById("selectAllRanksBtn")
      ?.addEventListener("click", () => {
        selectedRankIds = new Set(RANK_CATALOG.map((rank) => rank.id));
        renderBuilder(true);
      });

    document.getElementById("clearRanksBtn")?.addEventListener("click", () => {
      selectedRankIds = new Set();
      renderBuilder(true);
    });

    document
      .getElementById("stopReviewBtn")
      ?.addEventListener("click", stopAndReviewSolved);

    document
      .getElementById("generateQuizBtn")
      ?.addEventListener("click", () => generateQuiz({ random: true }));
    document
      .getElementById("questionCountInput")
      ?.addEventListener("change", () => {
        syncQuestionCount(false);
        updateBuilderStatus();
        updateSidebarCounts();
      });

    bindSystemLinks();
    document.addEventListener("keydown", handleNoteModalKeydown);
    window.addEventListener("scroll", updateActiveMcqNav, { passive: true });
    window.addEventListener("resize", updateActiveMcqNav);
  }

  document.addEventListener("DOMContentLoaded", () => {
    selectedBankIds = new Set(defaultBankIds());
    selectedSystemIds = new Set(SYSTEMS.map((system) => system.id));
    selectedRankIds = new Set(RANK_CATALOG.map((rank) => rank.id));
    bindEvents();
    renderBuilder(true);
    renderSummary();
    renderQuestions();
    updateProgress();
    updateSidebarCounts();
    updateActiveMcqNav();
    updatePhaseVisibility();
  });
})();
