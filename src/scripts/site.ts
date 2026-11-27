/**
 * Comportamentos comuns a todas as páginas: menu móvel, revelação ao rolar, manifesto da Clínica,
 * carrossel de 3 imagens e medição dos cliques no WhatsApp (somente com consentimento, quando houver GTM).
 * Sem JavaScript o conteúdo continua visível (a classe `js` só é aplicada por script).
 */
const d = document;
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

// Menu móvel
const toggle = d.querySelector<HTMLButtonElement>('.nav-toggle');
const nav = d.getElementById('menu');
if (toggle && nav) {
  const setOpen = (open: boolean) => {
    nav.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  };
  toggle.addEventListener('click', () => setOpen(!nav.classList.contains('is-open')));
  d.addEventListener('keydown', (e) => { if (e.key === 'Escape' && nav.classList.contains('is-open')) { setOpen(false); toggle.focus(); } });
}

// Revelação ao rolar
const els = [...d.querySelectorAll<HTMLElement>('.rv,.mk')];
if (reduce || !('IntersectionObserver' in window)) els.forEach((e) => e.classList.add('in'));
else {
  const io = new IntersectionObserver((es) => es.forEach((x) => { if (x.isIntersecting) { x.target.classList.add('in'); io.unobserve(x.target); } }), { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
  els.forEach((e) => io.observe(e));
  setTimeout(() => els.forEach((e) => e.classList.add('in')), 6000);
}

// Manifesto (A clínica): palavras acendem conforme a rolagem
const man = d.querySelector<HTMLElement>('[data-man]');
let words: HTMLElement[] = [];
if (man) {
  man.innerHTML = (man.textContent ?? '').trim().split(/\s+/).map((w) => `<span>${w}</span>`).join(' ');
  words = [...man.children] as HTMLElement[];
  if (reduce) words.forEach((s) => s.classList.add('on'));
  else {
    let ticking = false;
    const upd = () => {
      const vh = innerHeight, r = man.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (vh * 0.85 - r.top) / (r.height + vh * 0.3)));
      const n = Math.round(p * words.length);
      words.forEach((s, i) => s.classList.toggle('on', i < n));
    };
    addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(() => { upd(); ticking = false; }); } }, { passive: true });
    addEventListener('resize', upd);
    upd();
  }
}

// Medição de cliques no WhatsApp (dataLayer só existe com GTM e consentimento)
d.addEventListener('click', (e) => {
  const a = (e.target as Element).closest<HTMLAnchorElement>('a[data-wa]');
  const w = window as unknown as { dataLayer?: unknown[]; __odontoGtmLoaded?: boolean };
  if (a && w.dataLayer && w.__odontoGtmLoaded) w.dataLayer.push({ event: 'whatsapp_click', wa_origem: a.dataset.wa, wa_pagina: location.pathname });
});
