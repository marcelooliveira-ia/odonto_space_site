# HANDOFF — ODONTO SPACE (site institucional)

Registro para retomar o projeto em nova sessão. Estado verificado em 2026-11-20.

- **Repositório:** https://github.com/marcelooliveira-ia/odonto_space_site (não alterar `odonto_space` nem `odonto_space_previa`)
- **Site publicado (GitHub Pages, branch `gh-pages`):** https://marcelooliveira-ia.github.io/odonto_space_site/
- **Objetivo:** apresentar a versão visual ao cliente e concluir o site definitivo.
- **Regras do projeto:** não inventar nomes, CRO, especialidades, horários, avaliações, tecnologias nem resultados clínicos; não usar o pacote ortodôntico de R$ 149,90; não associar a foto de uma pessoa ao nome de outra; escrever sempre **ODONTO SPACE** em maiúsculas; **não atribuir título de posse ou hierarquia ao Dr. Marcelo Souza** (usar só o nome e "cirurgião-dentista clínico geral"; a palavra proibida pelo cliente não deve aparecer em nenhum arquivo); não usar imagens já publicadas em redes sociais da ODONTO SPACE ou da Clear Dent.

## 1. Arquitetura

- **Astro 7** estático (`output: 'static'`, `trailingSlash: 'never'`). Única dependência além do Astro: `@astrojs/sitemap`. Sem framework de UI.
- **Imagens:** `astro:assets` (`<Image>`, sharp) gera WebP responsivo a partir de `src/assets/`. Ponto único de importação: `src/assets/index.ts`.
- **Fontes:** Montserrat 400/500/600/700 (WOFF2, subconjunto latino).
- **Prefixo de publicação:** `PUBLIC_SITE_URL` (padrão `https://marcelooliveira-ia.github.io`) e `PUBLIC_BASE_PATH` (padrão `/odonto_space_site`). Todo link interno usa `href()` de `src/utils/url.ts`. Para domínio próprio: `PUBLIC_SITE_URL=https://dominio` e `PUBLIC_BASE_PATH=/`.
- **Como publicar:** `npm run build`; clonar `gh-pages`, apagar o conteúdo, copiar `dist/`, `touch .nojekyll`, commit e push. Confirmar o resultado da execução "pages build and deployment".
- **Node:** 22 (`.nvmrc`).

## 2. Páginas

`/` (Início), `/implantes-dentarios`, `/proteses-dentarias`, `/ortodontia-invisalign`, `/a-clinica-e-equipe`, `/contato-e-localizacao`, `/404`, `/robots.txt`, `/sitemap-index.xml`.

Serviços na home (lista editorial, `SERVICES` em `src/config/site.ts`): Implantes dentários, Próteses dentárias, Ortodontia e Invisalign (Invisalign sempre dentro de Ortodontia), **Estética do Sorriso** e Clínica geral. Estética do Sorriso e Clínica geral não têm página própria: o link abre o WhatsApp com mensagem pronta. Endodontia **não** é mais apresentada como serviço.

## 3. Componentes e dados

- `src/config/site.ts`: fonte única (endereço, WhatsApp, serviços, `generalDentist`, `orthodontist`). Campos pendentes ficam `null` e não são exibidos.
- `WhatsAppButton` (botão verde, ícone 22/26/30 px, altura mínima 48 px), `WhatsAppCta` (ícone grande + número + botão; usado no rodapé, na localização da home e no endereço do contato), `FloatingWhatsApp` (pílula verde "Fale pelo WhatsApp" no desktop; círculo de 64 px no celular). Todos apontam para `https://wa.me/5521996139234` (com `?text=` nos botões com mensagem).
- `PageHero` foi removido; cada página monta a própria abertura.
- `Photo` (prop `illustrative` mostra "Imagem ilustrativa"; `ai` mostra "Imagem ilustrativa · gerada por IA"), `Header`, `Footer`, `Motion`, `Analytics` + `ConsentBanner` (GTM com Consent Mode v2, **inativos** sem `PUBLIC_GTM_ID`).
- `src/styles/global.css`: todo o CSS. Linguagem editorial v5: fotos grandes em proporção natural que sangram até a borda (`.bleed-l/-r`), sem molduras, arcos ou folhas; listas com linhas finas no lugar de cartões; uma abertura diferente por página (`.hx` imersiva, `.hs` foto com borda dissolvida, `.hl` claro com foto sobre a divisa, `.hn` centralizada com faixa panorâmica, `.ht` tipográfica, `.hk` claro com faixa vertical).

## 4. Imagens

- **Inéditas, geradas no Magnific (Nano Banana 2.1)** em `src/assets/gen/` (11 arquivos). IDs, descrição e páginas em `docs/IMAGE-CREDITS.md`. Registradas na aba `SITES` da planilha central "REGISTRO DE TRILHAS E VOZES — BEY MARKETING" (Drive). Exclusivas da ODONTO SPACE.
- **Fotos reais da equipe** (`src/assets/team/`), exibidas **somente** em `/a-clinica-e-equipe`:
  - `dr-marcelo-souza.jpg`: Dr. Marcelo Souza, cirurgião-dentista clínico geral (nome confirmado; **não** é implantodontista). É uma foto substituta (o original nunca chegou ao disco).
  - `ortodontista.jpg`: ortodontista (nome e CRO não confirmados; baixa resolução).
  - Para trocar: substituir o arquivo mantendo o nome (4:5, mínimo 1000 px).
- A imagem `paciente-sorriso-ia.jpg` mostra uma **pessoa fictícia gerada por IA**; sempre com a etiqueta "gerada por IA"; nunca como paciente, depoimento ou integrante da equipe.
- Não gerar novas imagens sem autorização (custo: 65 créditos cada).

## 5. Pendências que dependem da clínica

- Fotos originais do Dr. Marcelo Souza e da ortodontista; fotos reais de fachada, recepção e consultório (substituem as imagens ilustrativas).
- Nome e CRO da ortodontista; CRO do Dr. Marcelo Souza; responsável técnico (`SITE.technicalResponsible`).
- Horários (`SITE.hours`), CEP, URL do Instagram (`@clinicaodontospace`), link do perfil no Google.
- Autorização de uso de imagem dos dois profissionais.
- Confirmar Invisalign, Estética do Sorriso (ex.: clareamento) e Clínica geral como serviços a divulgar; revisão dos textos por cirurgião-dentista.
- Domínio final e decisão entre GitHub Pages e Vercel; Política de Privacidade antes de ativar `PUBLIC_GTM_ID`, GA4 e Google Ads.
- Páginas próprias de Estética do Sorriso e Clínica geral (se aprovadas).

## 6. Publicação: como confirmar de verdade

O `success` do GitHub Actions só prova que o deploy rodou. O build grava `<meta name="build-commit">` (use `PUBLIC_BUILD_COMMIT=$(git rev-parse --short HEAD) npm run build`). Depois do push no `gh-pages`, rode `scripts/verificar-publicacao.sh`: ele compara o marcador do endereço público com `dist/`. O Pages usa cache de até 10 minutos (`cache-control: max-age=600`), então uma consulta feita logo após o deploy, ou um navegador com cache, pode mostrar a versão anterior.

## 7. Testes já executados (2026-11-20)

Build de produção (7 páginas); 1440, 768 e 390 px nas 6 páginas (sem rolagem horizontal, sem imagem quebrada, sem erro de console); links internos; WhatsApp (`wa.me/5521996139234`); menu móvel; axe (WCAG A/AA). Não testados: Lighthouse, Safari/Firefox, navegação por teclado manual.

## 8. Observações

- Dados pessoais e documentos do cliente (contrato, autorização de imagem) **não** devem entrar no repositório público.
- Contexto de marca e instruções do cliente estão no Drive de Marcelo (pastas "CLINICA ODONTOLOGICA ODONTO SPACE" e "ODONTO SPACE").
- Referências de design (Aure Odontologia, Thousand Smiles) nunca foram analisadas: domínios bloqueados na rede da sessão.
