(() => {
  const root = document.documentElement;
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];

  // Theme
  $('#themeBtn')?.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch (e) {}
  });

  // Mobile menu
  const menu = $('#menu'), menuBtn = $('#menuBtn');
  menuBtn?.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', open);
  });

  // Reveal on scroll
  if ('IntersectionObserver' in window) {
    const rev = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); rev.unobserve(e.target); }
    }), { threshold: 0.1 });
    $$('.reveal').forEach(el => rev.observe(el));
  } else $$('.reveal').forEach(el => el.classList.add('in'));

  // Filters (work + writing pages)
  const target = $('[data-filter-target]');
  if (target) {
    const items = [...target.children];
    const count = $('#workCount');
    const apply = f => {
      let n = 0;
      items.forEach(i => { const show = f === 'all' || i.dataset.cat === f; i.classList.toggle('hide', !show); if (show) { n++; i.classList.add('in'); } });
      if (count) count.textContent = `${n} item${n === 1 ? '' : 's'}`;
    };
    $$('.chip-btn').forEach(b => b.addEventListener('click', () => {
      $$('.chip-btn').forEach(x => { x.classList.toggle('active', x === b); x.setAttribute('aria-pressed', x === b); });
      apply(b.dataset.filter);
    }));
    apply('all');
  }

  // Contact form → mailto (no backend)
  $('#contactForm')?.addEventListener('submit', e => {
    e.preventDefault();
    const d = new FormData(e.target);
    const to = $('#contactEmail').textContent.trim();
    const body = `${d.get('message')}\n\n— ${d.get('name')} (${d.get('email')})`;
    location.href = `mailto:${to}?subject=${encodeURIComponent('[Bashayar] ' + d.get('subject'))}&body=${encodeURIComponent(body)}`;
    $('#formNote').textContent = 'Opening your email app…';
  });

  const yr = $('#yr'); if (yr) yr.textContent = new Date().getFullYear();
})();
