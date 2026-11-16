# ODONTO SPACE — Site institucional

Site estático da clínica **ODONTO SPACE** (Rua Francisco Real, 1910 – Sala 201, Bangu, Rio de Janeiro/RJ), construído com [Astro](https://astro.build).

> Status: estrutura técnica inicial. **Ainda não publicado** — validar o desenvolvimento antes do deploy.

## Páginas

| URL | Conteúdo |
|---|---|
| `/` | Página inicial |
| `/implantes-dentarios` | Implantes dentários |
| `/proteses-dentarias` | Próteses dentárias |
| `/ortodontia-invisalign` | Ortodontia e Invisalign |
| `/a-clinica-e-equipe` | A clínica e equipe |
| `/contato-e-localizacao` | Contato e localização |
| `/sitemap-index.xml`, `/robots.txt` | Gerados no build |

## Executar localmente

Requer Node.js 20.3+ (recomendado 22, ver `.nvmrc`).

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # gera ./dist
npm run preview    # serve o build
```

## Estrutura

```
src/
  config/site.ts      # dados institucionais (fonte única) e serviços
  utils/              # links de WhatsApp e dados estruturados (schema.org)
  layouts/            # BaseLayout: SEO, canonical, Open Graph, JSON-LD
  components/         # Header, Footer, botões de WhatsApp, placeholders de foto...
  pages/              # uma página por URL + robots.txt.ts + 404
  styles/global.css   # identidade visual (teal/turquesa, branco, azul-marinho)
public/               # favicon e imagens estáticas (public/images)
```

## Regras de conteúdo

- Só informações **confirmadas** entram no site. Campos pendentes ficam `null` em `src/config/site.ts` e não são exibidos nem enviados em dados estruturados.
- Não há nomes de dentistas, CRO, horários, avaliações ou preços inventados.
- Fotos: os componentes `PhotoPlaceholder` (atributo `data-photo-slot`) marcam onde entram as fotos reais. Coloque os arquivos em `public/images/` e substitua o placeholder pela tag `<img>` (com `alt`, `width`, `height`).

## WhatsApp

`src/utils/whatsapp.ts` gera links `wa.me` com mensagem contextual por serviço (definidas em `SERVICES`, em `src/config/site.ts`).

## Analytics, GTM e Google Ads (LGPD)

Nada é carregado por padrão. Defina `PUBLIC_GTM_ID` (ver `.env.example`) para ativar:

- Consent Mode v2 iniciando como **negado**;
- banner de cookies (aceitar/recusar);
- GTM carregado **somente após o aceite**;
- evento `whatsapp_click` no `dataLayer` (apenas com consentimento).

GA4 e Google Ads devem ser configurados dentro do GTM. Antes de ativar, publique uma **Política de Privacidade**.

## Publicação na Vercel (quando aprovado)

1. Importar o repositório na Vercel (framework Astro detectado; `vercel.json` já incluso).
2. Definir `PUBLIC_SITE_URL` com o domínio final (afeta canonical, sitemap, robots e schema) e, se for o caso, `PUBLIC_GTM_ID`.
3. Fazer o deploy.

## Pendências

Veja a lista de informações a confirmar no comentário de `src/config/site.ts` e no relatório de entrega.
