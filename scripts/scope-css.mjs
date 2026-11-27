// Gera src/styles/dm.css e src/styles/v6.css isolando cada sistema visual em um escopo (.dm / .v6).
// Motivo: a v15 aprovada combina dois sistemas de estilo (o das páginas Início/Ortodontia/Invisalign,
// cabeçalho e rodapé; e o das páginas Implantes/Próteses/Clínica/Contato). Eles usam nomes de classe iguais
// com definições diferentes, então cada um fica restrito ao seu contêiner, sem alterar a aparência.
// Uso: npm run css   (edite sempre os arquivos em src/styles/source/, nunca os gerados)
import postcss from 'postcss';
import fs from 'node:fs';

const SRC = new URL('../src/styles/source/', import.meta.url);
const OUT = new URL('../src/styles/', import.meta.url);

function scopeSelector(sel, scope) {
  const s = sel.trim();
  if (s === ':root' || s === 'html' || s === 'body' || s === 'main') return `.${scope}`;
  let m = s.match(/^(?:html)?\.js\s+(.*)$/);
  if (m) return `.js .${scope} ${m[1]}`;
  return `.${scope} ${s}`;
}

function scopeCss(css, scope) {
  const root = postcss.parse(css);
  const kf = new Set();
  root.walkAtRules('keyframes', (a) => { kf.add(a.params); a.params = `${scope}-${a.params}`; });
  const fonts = [];
  root.walkAtRules('font-face', (a) => { fonts.push(a.toString()); a.remove(); });
  root.walkRules((r) => {
    if (r.parent?.type === 'atrule' && /keyframes$/.test(r.parent.name)) return;
    r.selectors = r.selectors.map((x) => scopeSelector(x, scope));
  });
  root.walkDecls(/^animation(-name)?$/, (d) => {
    for (const n of kf) d.value = d.value.replace(new RegExp(`(^|[\\s,])${n}(?=[\\s,;]|$)`, 'g'), `$1${scope}-${n}`);
  });
  return { css: root.toString(), fonts };
}

const read = (n) => fs.readFileSync(new URL(n, SRC), 'utf8');
const dm = scopeCss(read('dm.css'), 'dm');
const v6 = scopeCss(read('v6.css') + '\n' + read('v6-overrides.css'), 'v6');
const banner = (n) => `/* GERADO por scripts/scope-css.mjs a partir de src/styles/source/ — não edite. Escopo: .${n} */\n`;
fs.writeFileSync(new URL('dm.css', OUT), banner('dm') + dm.css);
fs.writeFileSync(new URL('v6.css', OUT), banner('v6') + v6.css);
console.log('dm.css', dm.css.length, 'bytes | v6.css', v6.css.length, 'bytes | @font-face removidos:', dm.fonts.length + v6.fonts.length);
