// Build de produção para domínio próprio (Hostinger): base "/", indexável, sem prefixo do GitHub Pages.
// Uso: PUBLIC_SITE_URL=https://www.SEUDOMINIO.com.br npm run build:hostinger
import { execSync } from 'node:child_process';

const site = process.env.PUBLIC_SITE_URL;
if (!site || !/^https:\/\/[a-z0-9.-]+$/i.test(site)) {
  console.error('Defina PUBLIC_SITE_URL com o domínio final, sem barra no fim. Ex.: PUBLIC_SITE_URL=https://www.exemplo.com.br');
  process.exit(1);
}

const host = new URL(site).hostname;
if (/(\.invalid|\.test|\.example|^example\.|localhost|github\.io|hostingersite\.com|vercel\.app|a-definir)/i.test(host) && process.env.ALLOW_PROVISIONAL_DOMAIN !== '1') {
  console.error(`"${host}" parece provisório. Use o domínio definitivo (ex.: o .com.br do Registro.br).\nPara um teste local descartável: ALLOW_PROVISIONAL_DOMAIN=1.`);
  process.exit(1);
}

let commit = 'local';
try { commit = execSync('git rev-parse --short HEAD', { encoding: 'utf8' }).trim(); } catch {}

const env = { ...process.env, PUBLIC_SITE_URL: site, PUBLIC_BASE_PATH: '/', PUBLIC_BUILD_COMMIT: commit };
delete env.PUBLIC_NOINDEX; // produção deve ser indexável

execSync('npx astro build', { stdio: 'inherit', env });
execSync('node scripts/validar-dist.mjs', { stdio: 'inherit', env });
