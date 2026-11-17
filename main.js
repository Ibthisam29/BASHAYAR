(() => {
  const root = document.documentElement;
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];

  // Theme
  $('#themeBtn').addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch (e) {}
  });

  // Mobile menu
  const menu = $('#menu'), menuBtn = $('#menuBtn');
  menuBtn.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', open);
  });
  $$('#menu a').forEach(a => a.addEventListener('click', () => {
    menu.classList.remove('open'); menuBtn.setAttribute('aria-expanded', false);
  }));

  // Active nav link
  const links = $$('#menu a');
  const spy = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) links.forEach(l => l.classList.toggle('active', l.hash === '#' + e.target.id));
  }), { rootMargin: '-45% 0px -50% 0px' });
  links.forEach(l => { const s = $(l.hash); if (s) spy.observe(s); });

  // Reveal
  const rev = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); rev.unobserve(e.target); }
  }), { threshold: 0.12 });
  $$('.reveal').forEach(el => rev.observe(el));

  // Work filter
  $$('.chip-btn').forEach(b => b.addEventListener('click', () => {
    $$('.chip-btn').forEach(x => x.classList.toggle('active', x === b));
    const f = b.dataset.filter;
    $$('.work').forEach(w => w.classList.toggle('hide', f !== 'all' && w.dataset.cat !== f));
  }));

  // Contact form → mailto (no backend)
  $('#contactForm').addEventListener('submit', e => {
    e.preventDefault();
    const d = new FormData(e.target);
    const to = $('.contact-line a').textContent.trim();
    const body = `${d.get('message')}\n\n— ${d.get('name')} (${d.get('email')})`;
    location.href = `mailto:${to}?subject=${encodeURIComponent('[Bashayar] ' + d.get('subject'))}&body=${encodeURIComponent(body)}`;
    $('#formNote').textContent = 'Opening your email app…';
  });

  $('#yr').textContent = new Date().getFullYear();
})();
