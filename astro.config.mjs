// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Padrão = GitHub Pages do projeto (https://marcelooliveira-ia.github.io/odonto_space_site/).
// Domínio próprio / Vercel: defina PUBLIC_SITE_URL=https://seudominio.com.br e PUBLIC_BASE_PATH=/
const site = process.env.PUBLIC_SITE_URL || 'https://marcelooliveira-ia.github.io';
const base = process.env.PUBLIC_BASE_PATH || '/odonto_space_site';
const prefix = base === '/' ? '' : base.replace(/\/$/, '');

export default defineConfig({
  site,
  base,
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'directory', assetsInlineLimit: 0 },
  compressHTML: true,
  // Endereço antigo (versão anterior do site): Ortodontia e Invisalign agora são duas páginas.
  redirects: { '/ortodontia-invisalign': `${prefix}/invisalign` },
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
});
