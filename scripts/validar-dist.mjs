// Valida o dist/ para publicação em domínio próprio: caminhos, recursos, SEO e vestígios do GitHub Pages.
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, resolve, dirname } from 'node:path';

const DIST = resolve('dist');
const SITE = process.env.PUBLIC_SITE_URL;
const errors = [];
const err = (m) => errors.push(m);

const walk = (d) => readdirSync(d).flatMap((n) => {
  const p = join(d, n);
  return statSync(p).isDirectory() ? walk(p) : [p];
});
const files = walk(DIST);
const htmls = files.filter((f) => f.endsWith('.html'));
const rel = (f) => f.slice(DIST.length);

function exists(urlPath) {
  const clean = decodeURIComponent(urlPath.split('#')[0].split('?')[0]);
  if (!clean || clean === '/') return existsSync(join(DIST, 'index.html'));
  const p = join(DIST, clean);
  return existsSync(p) && (!statSync(p).isDirectory() || existsSync(join(p, 'index.html')));
}

let refs = 0;
for (const f of htmls) {
  const html = readFileSync(f, 'utf8');
  if (html.includes('odonto_space_site')) err(`${rel(f)}: contém "odonto_space_site" (prefixo do GitHub Pages)`);
  const isRedirectStub = /http-equiv="refresh"/i.test(html);
  if (/noindex/i.test(html) && !isRedirectStub && !rel(f).endsWith('404.html')) err(`${rel(f)}: contém noindex`);
  if (SITE && !isRedirectStub && !rel(f).endsWith('404.html') && !html.includes(`<link rel="canonical" href="${SITE}`)) err(`${rel(f)}: canonical não usa ${SITE}`);
  const urls = new Set();
  for (const m of html.matchAll(/\b(?:href|src|poster|data-src)=["']([^"']+)["']/g)) urls.add(m[1]);
  for (const m of html.matchAll(/\bsrcset=["']([^"']+)["']/g)) m[1].split(',').forEach((s) => urls.add(s.trim().split(/\s+/)[0]));
  for (const u of urls) {
    if (/^(https?:|mailto:|tel:|data:|#|javascript:)/i.test(u)) {
      if (/^http:\/\//i.test(u)) err(`${rel(f)}: link http inseguro ${u}`);
      continue;
    }
    refs++;
    if (!u.startsWith('/')) { err(`${rel(f)}: caminho relativo ${u}`); continue; }
    if (!exists(u)) err(`${rel(f)}: recurso inexistente ${u}`);
  }
}

for (const f of files.filter((f) => f.endsWith('.css'))) {
  const css = readFileSync(f, 'utf8');
  for (const m of css.matchAll(/url\(\s*["']?([^)"']+)["']?\s*\)/g)) {
    const u = m[1];
    if (/^(data:|https?:|#)/.test(u)) continue;
    refs++;
    const target = u.startsWith('/') ? join(DIST, u.split('?')[0]) : join(dirname(f), u.split('?')[0]);
    if (!existsSync(target)) err(`${rel(f)}: url() inexistente ${u}`);
  }
}

for (const f of ['robots.txt', 'sitemap-index.xml', 'sitemap-0.xml', '404.html']) {
  if (!existsSync(join(DIST, f))) err(`falta ${f}`);
}
if (SITE) {
  for (const f of ['robots.txt', 'sitemap-index.xml', 'sitemap-0.xml']) {
    const p = join(DIST, f);
    if (existsSync(p)) {
      const t = readFileSync(p, 'utf8');
      if (!t.includes(SITE)) err(`${f}: não usa ${SITE}`);
      if (/\/odonto_space_site|github\.io/.test(t)) err(`${f}: contém endereço do GitHub Pages`);
    }
  }
}

console.log(`dist: ${files.length} arquivos, ${htmls.length} páginas HTML, ${refs} referências internas verificadas.`);
if (errors.length) {
  console.error(`\n${errors.length} problema(s):\n- ` + errors.join('\n- '));
  process.exit(1);
}
console.log('Validação OK.');
