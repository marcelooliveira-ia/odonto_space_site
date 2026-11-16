// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Domínio final: defina PUBLIC_SITE_URL (Vercel > Settings > Environment Variables).
// O valor abaixo é apenas um provisório para desenvolvimento/pré-visualização.
const site = process.env.PUBLIC_SITE_URL || 'https://odonto-space-site.vercel.app';

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'directory' },
  compressHTML: true,
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
});
