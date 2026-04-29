  /* ── HELPERS ─────────────────────────────────────────────────── */
  function mastheadH() {
    return document.querySelector('.masthead').offsetHeight;
  }

  /* ── MOBILE SIDEBAR ──────────────────────────────────────────── */
  function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    const isOpen  = sidebar.classList.contains('open');
    sidebar.classList.toggle('open', !isOpen);
    overlay.classList.toggle('show', !isOpen);
    document.body.style.overflow = isOpen ? '' : 'hidden';
  }
  function closeSidebar() {
    document.querySelector('.sidebar').classList.remove('open');
    document.getElementById('sidebarOverlay').classList.remove('show');
    document.body.style.overflow = '';
  }

  /* ── TOGGLE a single card ────────────────────────────────────── */
  function toggle(header) {
    const body    = header.nextElementSibling;
    const chevron = header.querySelector('.chevron');
    const isOpen  = body.classList.contains('open');
    body.classList.toggle('open', !isOpen);
    header.classList.toggle('open', !isOpen);
    chevron.classList.toggle('open', !isOpen);
  }

  /* ── OPEN card and scroll to it (sidebar links) ──────────────── */
  function openAndScrollTo(id, event) {
    if (event) event.preventDefault();
    const card = document.getElementById(id);
    if (!card) return;
    const header  = card.querySelector('.condition-header');
    const body    = card.querySelector('.condition-body');
    const chevron = header.querySelector('.chevron');
    card.style.display = '';
    if (!body.classList.contains('open')) {
      body.classList.add('open');
      header.classList.add('open');
      chevron.classList.add('open');
    }
    closeSidebar();
    setTimeout(() => {
      const top = card.getBoundingClientRect().top + window.scrollY - mastheadH() - 14;
      window.scrollTo({ top, behavior: 'smooth' });
    }, 50);
  }

  /* ── EXPAND / COLLAPSE ALL ───────────────────────────────────── */
  let allExpanded = false;
  function toggleAllCards() {
    allExpanded = !allExpanded;
    document.getElementById('expandAllBtn').textContent = allExpanded ? 'Collapse All' : 'Expand All';
    document.querySelectorAll('.condition:not([style*="display: none"])').forEach(card => {
      const header  = card.querySelector('.condition-header');
      const body    = card.querySelector('.condition-body');
      const chevron = header.querySelector('.chevron');
      body.classList.toggle('open', allExpanded);
      header.classList.toggle('open', allExpanded);
      chevron.classList.toggle('open', allExpanded);
    });
  }

  /* ── RANK FILTER ─────────────────────────────────────────────── */
  let activeFilter = 'all';
  function setFilter(rank, btn) {
    activeFilter = rank;
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    applyFilters();
  }

  /* ── SEARCH ──────────────────────────────────────────────────── */
  let searchQuery = '';
  function handleSearch(val) {
    searchQuery = val.trim().toLowerCase();
    document.getElementById('searchClear').style.display = searchQuery ? 'block' : 'none';
    applyFilters();
  }
  function clearSearch() {
    const input = document.getElementById('searchInput');
    input.value = '';
    handleSearch('');
    input.focus();
  }

  /* ── APPLY BOTH FILTERS ──────────────────────────────────────── */
  function applyFilters() {
    let visibleCount = 0;
    document.querySelectorAll('.condition').forEach(card => {
      const rankBadge = card.querySelector('.rank-badge');
      const rankClass = rankBadge
        ? Array.from(rankBadge.classList).find(c => /^r[123]$/.test(c))
        : '';
      const name = (card.querySelector('.condition-name') || {}).textContent || '';
      const rankMatch   = activeFilter === 'all' || rankClass === activeFilter;
      const searchMatch = !searchQuery || name.toLowerCase().includes(searchQuery);
      if (rankMatch && searchMatch) {
        card.style.display = '';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    /* hide section headers / category labels that have no visible cards beneath them */
    document.querySelectorAll('.system-header, .category-label').forEach(el => {
      let sib = el.nextElementSibling;
      let hasVisible = false;
      while (sib && !sib.classList.contains('system-header') && !sib.classList.contains('category-label')) {
        if (sib.classList.contains('condition') && sib.style.display !== 'none') {
          hasVisible = true; break;
        }
        sib = sib.nextElementSibling;
      }
      el.style.display = hasVisible ? '' : 'none';
    });

    document.getElementById('noResults').style.display = visibleCount === 0 ? 'block' : 'none';
  }

  /* ── SIDEBAR ACTIVE HIGHLIGHT ON SCROLL ─────────────────────── */
  const sidebarLinks = document.querySelectorAll('.sidebar-link');
  window.addEventListener('scroll', () => {
    const offset = mastheadH() + 24;
    let current = '';
    document.querySelectorAll('.condition').forEach(s => {
      if (s.style.display !== 'none' && window.scrollY >= s.offsetTop - offset) current = s.id;
    });
    sidebarLinks.forEach(link => {
      const active = link.getAttribute('href') === '#' + current;
      link.style.color           = active ? '#e6edf3' : '';
      link.style.background      = active ? 'rgba(255,255,255,0.04)' : '';
      link.style.borderLeftColor = active
        ? (link.classList.contains('resp') ? '#52b0e0'
          : link.classList.contains('hep') ? '#a3e635'
          : link.classList.contains('gi')  ? '#fb923c'
          : '#e05252')
        : '';
    });
  });

  /* ── SIDEBAR STICKY TOP — recalculate on resize ──────────────── */
  function updateSidebarTop() {
    const mh      = mastheadH();
    const sidebar = document.querySelector('.sidebar');
    if (window.innerWidth > 768) {
      sidebar.style.top    = mh + 'px';
      sidebar.style.height = `calc(100vh - ${mh}px)`;
    } else {
      sidebar.style.top    = '';
      sidebar.style.height = '';
    }
  }
  window.addEventListener('resize', () => {
    updateSidebarTop();
    if (window.innerWidth > 768) closeSidebar();
  });

  /* ── INIT ────────────────────────────────────────────────────── */
/* ── LOGIN ───────────────────────────────────────────────────── */
  function doLogin() {
    const id = document.getElementById('login-id').value.trim();
    const pw = document.getElementById('login-pw').value;
    const err = document.getElementById('login-error');
    if (id === 'admin' && pw === 'pbl') {
      sessionStorage.setItem('pbl_auth', '1');
      document.getElementById('login-overlay').style.display = 'none';
      err.style.display = 'none';
    } else {
      err.style.display = 'block';
      document.getElementById('login-pw').value = '';
      document.getElementById('login-pw').focus();
    }
  }
  /* Allow Enter key to submit */
  document.addEventListener('DOMContentLoaded', () => {
    updateSidebarTop();
    /* Check session */
    if (sessionStorage.getItem('pbl_auth') === '1') {
      const ov = document.getElementById('login-overlay');
      if (ov) ov.style.display = 'none';
    }
    ['login-id','login-pw'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.addEventListener('keydown', e => { if (e.key === 'Enter') doLogin(); });
    });
  });
  /* FONT SIZE CYCLE */
  var _fontIdx = 0;
  var _fontSteps = [
    { label: '\u{1D400} Normal', cls: '' },
    { label: '\u{1D400}⁺ Large', cls: 'font-large' },
    { label: '\u{1D400}⁺⁺ XL',   cls: 'font-xlarge' }
  ];
  function cycleFontSize() {
    _fontIdx = (_fontIdx + 1) % _fontSteps.length;
    document.body.classList.remove('font-large', 'font-xlarge');
    if (_fontSteps[_fontIdx].cls) document.body.classList.add(_fontSteps[_fontIdx].cls);
    var btn = document.getElementById('fontSizeBtn');
    btn.textContent = _fontSteps[_fontIdx].label;
    btn.classList.toggle('active', _fontIdx !== 0);
  }
