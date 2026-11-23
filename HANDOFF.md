# HANDOFF — ODONTO SPACE (site institucional definitivo)

Referência visual oficial: **v15** (`/previas/v15/` no `gh-pages`). O site Astro deste repositório a reproduz página a página.

- Repositório: https://github.com/marcelooliveira-ia/odonto_space_site · branch de trabalho `claude/practical-pasteur-rgbvwu` (PR #2 — **não fazer merge sem autorização**).
- `gh-pages`: raiz = versão anterior; `previas/v10…v15` preservadas. Publicar só em pastas novas.

## Arquitetura
- Astro 7 estático (`trailingSlash: 'never'`), `@astrojs/sitemap`, imagens via `astro:assets` (WebP responsivo; ponto único: `src/assets/index.ts`).
- **Dois sistemas visuais isolados** (herdados da v15) por escopo CSS, sem Shadow DOM: `.dm` (Início, Ortodontia, Invisalign, privacidade, 404, cabeçalho, rodapé, barra fixa) e `.v6` (Implantes, Próteses, Clínica, Contato). Edite `src/styles/source/*.css` e rode `npm run css` (gera `src/styles/dm.css` e `v6.css` — não editar à mão). `src/styles/base.css`: fontes e regras globais.
- `BaseLayout.astro`: metadados, canonical, OG/Twitter, JSON-LD, CSP por `<meta>`, cabeçalho/rodapé/barra. Props `system="dm|v6"`, `crumbs`, `schemas`.
- Scripts empacotados em `src/scripts/` (`site.ts` menu/revelação/manifesto/medição WhatsApp; `home.ts` guia e painel; `ortodontia.ts` abas ARIA). Único script inline: classe `js` (hash em `src/utils/csp.ts`).
- Dados: `src/config/site.ts` (endereço, horários, WhatsApp, mensagens, navegação). Campos pendentes = `null`.
- WhatsApp: `https://wa.me/5521996139234?text=…` com mensagem por origem e `data-wa="origem"` (medição só com consentimento).

## Páginas
`/`, `/implantes-dentarios`, `/proteses-dentarias`, `/ortodontia`, `/invisalign`, `/a-clinica-e-equipe`, `/contato-e-localizacao`, `/politica-de-privacidade`, `/404`, `/robots.txt`, `/sitemap-index.xml`; `/ortodontia-invisalign` → `/invisalign`.

## Comandos
`npm ci` · `npm run css` · `npm run build` (padrão para GitHub Pages; domínio próprio: `PUBLIC_SITE_URL` + `PUBLIC_BASE_PATH=/`).

## Documentos
`docs/PENDENCIAS.md`, `docs/SEGURANCA-E-PRIVACIDADE.md`, `docs/DOMINIO.md`, `docs/IMAGE-CREDITS.md`, `docs/INVENTARIO-IMAGENS.md`.

## Regras
Não inventar CRO, credenciais, horários ou especialidades; "ODONTO SPACE" em maiúsculas; sem legendas "imagem ilustrativa/IA" no site; não gastar créditos Magnific sem autorização.
