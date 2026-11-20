/** Prefixo de publicação (ex.: "/odonto_space_site" no GitHub Pages; "" na raiz). */
export const BASE: string = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Gera um link interno respeitando o prefixo de publicação. */
export function href(path: string): string {
  if (path === '/') return `${BASE}/`;
  return `${BASE}${path.startsWith('/') ? path : `/${path}`}`;
}
