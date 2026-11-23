# HANDOFF — ODONTO SPACE (site institucional definitivo)

Referência visual oficial: **v15** (`/previas/v15/` no `gh-pages`). O site Astro deste repositório a reproduz página a página.

- Repositório: https://github.com/marcelooliveira-ia/odonto_space_site · branch de trabalho `claude/practical-pasteur-rgbvwu` (PR #2 — **não fazer merge sem autorização**).
- `gh-pages`: raiz = versão anterior; `previas/v10…v15` preservadas. Publicar só em pastas novas.

## Estado atual — candidata oficial congelada (2026-11-23)
- **URL pública (prévia, noindex):** https://marcelooliveira-ia.github.io/odonto_space_site/previas/versao-final-candidata/
- **Build publicado:** `fc96275` (branch `claude/practical-pasteur-rgbvwu`); `gh-pages` `39b6a6a`. Commits do site: `6b6cf48` base Astro · `0b92ef1` CSP/docs · `fa43cad`/`4199b2c` rodapé · `950d726` foto da Clínica · `eda003f` noindex · `fc96275` fontes/a11y · `1009af0` relatório (só docs).
- **Congelada:** não alterar a pasta `previas/versao-final-candidata/` (mudanças futuras vão para outra pasta ou para a produção). Raiz do `gh-pages` e `v10…v15` intactas (hashes verificados). PR #2 aberto e **não mesclado**.
- **Resultados:** ver `docs/RELATORIO-CANDIDATA.md` (comparação com a v15, Lighthouse, funcional, segurança, comandos).

## Pendências para a publicação definitiva
**Dependem exclusivamente do cliente:** CRO do Dr. Marcelo Souza e da Sayonara Dias; responsável técnico (nome + CRO); razão social, CNPJ e canal/encarregado de privacidade; revisão jurídica da Política de Privacidade e do texto clínico; validação CRO/CFO das imagens geradas por IA; permissão de uso da marca Invisalign; links de Instagram, Facebook e perfil do Google; fotografias reais; escolha/registro do domínio; decisão de manter duas páginas (`/ortodontia` e `/invisalign`).
**Dependem de nós, após a aprovação:** hospedagem com cabeçalhos HTTP (Vercel/Netlify/Cloudflare — `docs/DOMINIO.md`), variáveis `PUBLIC_SITE_URL` e `PUBLIC_BASE_PATH=/`, build **sem** `PUBLIC_NOINDEX`, merge do PR #2 e atualização da raiz do `gh-pages` (somente com autorização), `PUBLIC_GTM_ID` + ampliação da CSP se houver medição, envio do sitemap ao Search Console. Observação: a descrição do PR #2 está desatualizada em relação ao conteúdo atual.

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
