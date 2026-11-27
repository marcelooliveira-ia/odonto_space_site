# Relatório de segurança e privacidade

## Superfície
Site 100% estático (Astro): sem servidor, banco de dados, formulários, login, cookies próprios ou integrações ativas. Dependências de produção: `astro` e `@astrojs/sitemap` (+ `sharp` no build).

## Verificações realizadas
- `npm audit`: 0 vulnerabilidades (rodar de novo antes de publicar).
- Credenciais: nenhuma chave/token no código nem em `.env` versionado; variáveis só `PUBLIC_*` opcionais (`PUBLIC_GTM_ID`, `PUBLIC_SITE_URL`, `PUBLIC_BASE_PATH`).
- Links externos com `rel="noopener noreferrer"`; mapa sem iframe (nenhum recurso do Google carregado na visita).
- WhatsApp: link `wa.me` com mensagem pré-preenchida editável; nada é enviado sem ação do usuário; a mensagem identifica a origem ("pelo site") sem dado pessoal.
- Sem formulários e sem coleta de dados clínicos. Política de Privacidade em `/politica-de-privacidade`.

## Cabeçalhos HTTP
Definidos em `vercel.json` e `public/_headers` (Netlify/Cloudflare): CSP restritiva (`script-src 'self'` + hash do único script inline), HSTS, `X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`, `Permissions-Policy`, COOP. Cache imutável em `/_astro/*`.
- **GitHub Pages não aceita cabeçalhos**: lá vale só a CSP por `<meta>` (sem `frame-ancestors`) e HTTPS forçado nas configurações do repositório. HSTS e demais cabeçalhos dependem da hospedagem definitiva.
- Ao ativar GTM: remover a `<meta>` CSP automática (já omitida quando há `PUBLIC_GTM_ID`) e liberar `googletagmanager.com`, `google-analytics.com` no `script-src`/`connect-src`/`img-src`; o Consent Mode inicia negado e há banner de consentimento.

## LGPD — itens que dependem da clínica
Controlador (razão social/CNPJ), canal e encarregado, revisão jurídica do texto e definição de retenção das conversas de WhatsApp. Ver `docs/PENDENCIAS.md`.
