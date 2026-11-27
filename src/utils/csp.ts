import { createHash } from 'node:crypto';

/** Único script inline do site: marca `js` no <html> antes da pintura (evita piscar o conteúdo revelado por script). */
export const JS_CLASS_SCRIPT = "document.documentElement.classList.add('js')";
export const JS_CLASS_HASH = `sha256-${createHash('sha256').update(JS_CLASS_SCRIPT).digest('base64')}`;

/** CSP restritiva: tudo do próprio domínio; sem scripts de terceiros. Se ativar GTM/Analytics, ampliar (ver docs/SEGURANCA-E-PRIVACIDADE.md). */
export const CSP = [
  "default-src 'self'",
  `script-src 'self' '${JS_CLASS_HASH}'`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
].join('; ');
