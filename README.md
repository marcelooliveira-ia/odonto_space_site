# ODONTO SPACE — Site institucional

Site estático da clínica **ODONTO SPACE** (Rua Francisco Real, 1910 – Sala 201, Bangu, Rio de Janeiro/RJ), construído com [Astro](https://astro.build).

> Status: versão visual para apresentação ao cliente, publicada no GitHub Pages: https://marcelooliveira-ia.github.io/odonto_space_site/

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
npm run dev        # http://localhost:4321/odonto_space_site/
npm run build      # gera ./dist
npm run preview    # serve o build
```

## Publicação

**GitHub Pages (atual):** `npm run build` já gera o site com o prefixo `/odonto_space_site`. O conteúdo de `dist/` é publicado na branch `gh-pages` (raiz), que é a fonte configurada do Pages. Passos: `npm run build`, copiar `dist/` para a branch `gh-pages` (com `.nojekyll`) e fazer push.

**Vercel / domínio próprio:** defina `PUBLIC_SITE_URL=https://seudominio.com.br` e `PUBLIC_BASE_PATH=/` e rode o build. Links, sitemap, canonical e dados estruturados se ajustam sozinhos.

## Estrutura

```
src/
  assets/             # fotos da equipe (team/), imagens de banco (photos/), logos (brand/), fontes Montserrat (fonts/)
  config/site.ts      # dados institucionais (fonte única) e serviços
  utils/              # url.ts (prefixo de publicação), whatsapp.ts, schema.ts
  layouts/            # BaseLayout: SEO, canonical, Open Graph, JSON-LD
  components/         # Header, Footer, PageHero, Photo (WebP responsivo), Motion (animações), ...
  pages/              # uma página por URL + robots.txt.ts + 404
  styles/global.css   # identidade visual (ardósia/teal, branco, Montserrat)
public/               # favicon e imagem de compartilhamento
docs/                 # contexto institucional, créditos de imagens e marca (originais)
```

## Identidade visual

Paleta medida nas artes oficiais (ardósia `#2F4A54`, teal-ardósia `#42646F`, azul-gelo `#C4E0E8`, preto da marca `#201E1E`, branco) e tipografia oficial Montserrat. Marca em [`docs/brand/README.md`](docs/brand/README.md); créditos das imagens em [`docs/IMAGE-CREDITS.md`](docs/IMAGE-CREDITS.md). Informações confirmadas × pendentes em [`docs/contexto-institucional.md`](docs/contexto-institucional.md).

## Regras de conteúdo

- Só informações **confirmadas** entram no site. Campos pendentes ficam `null` em `src/config/site.ts` e não são exibidos nem enviados em dados estruturados.
- Não há nomes de dentistas, CRO, horários, avaliações ou preços inventados.
- Fotos: as imagens de banco são ilustrativas e levam a etiqueta "Imagem ilustrativa". Fotos reais da equipe ficam em `src/assets/team/` (substitua mantendo o nome). Para fotos reais da clínica, adicione em `src/assets/photos/`, exporte em `src/assets/index.ts` e troque nas páginas (componente `Photo`). Sempre use `alt` descritivo.

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
