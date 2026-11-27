/** Ortodontia: abas acessíveis (ARIA tablist). Os painéis já vêm renderizados no HTML; o script só alterna. */
const tl = document.getElementById('tablist');
if (tl) {
  const tabs = [...tl.querySelectorAll<HTMLButtonElement>('[role=tab]')];
  const panes = [...document.querySelectorAll<HTMLElement>('[role=tabpanel]')];
  const sel = (i: number, focus = false) => {
    tabs.forEach((t, k) => { t.setAttribute('aria-selected', String(k === i)); t.tabIndex = k === i ? 0 : -1; });
    panes.forEach((p, k) => { p.hidden = k !== i; });
    if (focus) tabs[i].focus();
  };
  tabs.forEach((t, i) => {
    t.addEventListener('click', () => sel(i));
    t.addEventListener('keydown', (e) => {
      const n = tabs.length;
      const go = (k: number) => { e.preventDefault(); sel(k, true); };
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') go((i + 1) % n);
      else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') go((i + n - 1) % n);
      else if (e.key === 'Home') go(0);
      else if (e.key === 'End') go(n - 1);
    });
  });
  const orient = () => tl.setAttribute('aria-orientation', innerWidth <= 860 ? 'horizontal' : 'vertical');
  orient(); addEventListener('resize', orient);
}
