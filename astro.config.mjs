// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Padrão = GitHub Pages do projeto (https://marcelooliveira-ia.github.io/odonto_space_site/).
// Vercel / domínio próprio: defina PUBLIC_SITE_URL=https://seudominio.com.br e PUBLIC_BASE_PATH=/
const site = process.env.PUBLIC_SITE_URL || 'https://marcelooliveira-ia.github.io';
const base = process.env.PUBLIC_BASE_PATH || '/odonto_space_site';

export default defineConfig({
  site,
  base,
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'directory' },
  compressHTML: true,
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
});
