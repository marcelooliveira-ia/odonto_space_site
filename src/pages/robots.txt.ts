import type { APIRoute } from 'astro';
import { BASE } from '../utils/url';

export const GET: APIRoute = ({ site }) => {
  const origin = site?.origin ?? 'https://marcelooliveira-ia.github.io';
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${origin}${BASE}/sitemap-index.xml\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
