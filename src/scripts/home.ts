/** Início: guia "Como podemos ajudar?" e painel de serviços (hover/foco no desktop, "+" no celular). */
import { whatsappLink } from '../utils/whatsapp';

interface Reply { t: string; links: [string, string][]; m: string }
const d = document;
const guide = d.getElementById('guia');
const reply = d.getElementById('reply');
if (guide && reply) {
  const data: Record<string, Reply> = JSON.parse(guide.dataset.replies ?? '{}');
  const chips = [...d.querySelectorAll<HTMLButtonElement>('.chip')];
  chips.forEach((c) => c.addEventListener('click', () => {
    chips.forEach((x) => x.setAttribute('aria-pressed', String(x === c)));
    const r = data[c.dataset.k ?? ''];
    if (!r) return;
    reply.classList.add('has');
    reply.replaceChildren();
    const p = d.createElement('p'); p.textContent = r.t;
    const row = d.createElement('div'); row.className = 'row';
    const btn = d.createElement('a'); btn.className = 'btn'; btn.target = '_blank'; btn.rel = 'noopener noreferrer'; btn.href = whatsappLink(r.m); btn.textContent = 'Conversar no WhatsApp'; btn.dataset.wa = 'guia';
    row.append(btn);
    r.links.forEach(([label, url]) => { const a = d.createElement('a'); a.className = 'link'; a.href = url; a.textContent = label; row.append(a); });
    reply.append(p, row);
  }));
}

const ul = d.querySelector('[data-needs]');
if (ul) {
  const panels = [...d.querySelectorAll<HTMLElement>('[data-p]')];
  const show = (i: number) => panels.forEach((p) => p.classList.toggle('on', Number(p.dataset.p) === i));
  [...ul.children].forEach((li, i) => {
    li.addEventListener('mouseenter', () => show(i));
    li.addEventListener('focusin', () => show(i));
    const t = li.querySelector<HTMLButtonElement>('.tg');
    t?.addEventListener('click', () => { const o = li.classList.toggle('open'); t.setAttribute('aria-expanded', String(o)); });
  });
}
