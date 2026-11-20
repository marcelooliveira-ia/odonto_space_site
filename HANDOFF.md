# HANDOFF — ODONTO SPACE (site institucional)

Registro para retomar o projeto em nova sessão. Estado verificado em 2026-11-20, commit `f0cdc2e` na `main`.

- **Repositório:** https://github.com/marcelooliveira-ia/odonto_space_site
- **Site publicado (GitHub Pages):** https://marcelooliveira-ia.github.io/odonto_space_site/
- **Objetivo:** apresentar versão visual ao cliente e concluir o site definitivo em até 2 dias.
- **Regras do projeto (do responsável):** não inventar nomes, CRO, especialidades, horários, avaliações, tecnologias ou resultados clínicos; não usar o pacote ortodôntico de R$ 149,90; não associar a foto de uma pessoa ao nome de outra; não alterar os repositórios `odonto_space` (acervo privado) e `odonto_space_previa`; escrever sempre **ODONTO SPACE** em maiúsculas.

## 1. Arquitetura e tecnologias

- **Astro 7** estático (`output: 'static'`, `trailingSlash: 'never'`, `build.format: 'directory'`). Única dependência além do Astro: `@astrojs/sitemap`. Sem framework de UI e sem bibliotecas de animação.
- **Imagens:** `astro:assets` (`<Image>`, sharp) gera WebP responsivo a partir de `src/assets/`.
- **Fontes:** Montserrat 400/500/600/700 em WOFF2 (subconjunto latino), importadas no CSS a partir de `src/assets/fonts/`. Os TTFs oficiais da marca estão no Drive (pasta "Dela_Gothic_One,Montserrat"); no Drive há 18 estáticos e 2 variáveis, não 16.
- **Prefixo de publicação:** `astro.config.mjs` lê `PUBLIC_SITE_URL` (padrão `https://marcelooliveira-ia.github.io`) e `PUBLIC_BASE_PATH` (padrão `/odonto_space_site`). Todo link interno passa por `href()` de `src/utils/url.ts`. Para Vercel ou domínio próprio: `PUBLIC_SITE_URL=https://dominio` e `PUBLIC_BASE_PATH=/`.
- **Hospedagem atual:** GitHub Pages servindo a branch `gh-pages` (raiz). `vercel.json` existe, mas não há deploy na Vercel.
- **Node:** 22 (`.nvmrc`); `engines` >= 20.3.

## 2. Páginas e URLs

URLs finais (a publicação atual inclui o prefixo `/odonto_space_site`; as rotas em `src/pages` não têm prefixo):

| Página | URL | Arquivo |
|---|---|---|
| Início | `/` | `src/pages/index.astro` |
| Implantes dentários | `/implantes-dentarios` | `src/pages/implantes-dentarios.astro` |
| Próteses dentárias | `/proteses-dentarias` | `src/pages/proteses-dentarias.astro` |
| Ortodontia e Invisalign | `/ortodontia-invisalign` | `src/pages/ortodontia-invisalign.astro` |
| A clínica e equipe | `/a-clinica-e-equipe` | `src/pages/a-clinica-e-equipe.astro` |
| Contato e localização | `/contato-e-localizacao` | `src/pages/contato-e-localizacao.astro` |
| 404 | `/404` | `src/pages/404.astro` |
| robots / sitemap | `/robots.txt`, `/sitemap-index.xml` | `src/pages/robots.txt.ts`, integração sitemap |

Endodontia e Clínica geral aparecem só como cards na home ("Consulte a equipe"), sem página própria.

## 3. Arquivos principais e componentes

- `src/config/site.ts`: **fonte única de dados** (endereço, WhatsApp, serviços, mensagens de WhatsApp por serviço, NAV, dados do proprietário e da ortodontista). Campos pendentes ficam `null` e não são exibidos nem emitidos em dados estruturados.
- `src/layouts/BaseLayout.astro`: SEO (title, description, canonical, Open Graph), JSON-LD, Analytics, Motion, Footer, botão flutuante.
- `src/components/`: `Header` (sticky, ardósia, menu móvel), `Footer` (bloco de chamada + logo + links), `PageHero` (hero interno com slots `actions` e `media`), `Photo` (wrapper de `<Image>`; prop `illustrative` mostra a etiqueta "Imagem ilustrativa"), `Motion` (animações ao rolar, inline), `WhatsAppButton`, `FloatingWhatsApp`, `Analytics` + `ConsentBanner` (GTM com Consent Mode v2, **inativos** sem `PUBLIC_GTM_ID`), `Em` (destaque `*palavra*`), `Icon`.
- `src/utils/`: `url.ts` (`href`, `BASE`), `whatsapp.ts` (link `wa.me` com mensagem), `schema.ts` (`Dentist` e `BreadcrumbList`).
- `src/styles/global.css`: todo o CSS (tokens, componentes, responsivo, `prefers-reduced-motion`).
- `src/assets/index.ts`: exporta todas as imagens (ponto único para trocar fotos).
- `docs/`: `IMAGE-CREDITS.md`, `contexto-institucional.md`, `brand/README.md`, `brand/original/` (arquivos oficiais da marca, sem alteração).
- `README.md`: execução local e publicação.

## 4. Identidade visual implementada

- **Paleta (medida nos pixels das artes oficiais de redes sociais):** ardósia `#2F4A54`, teal-ardósia `#42646F`, azul-gelo `#C4E0E8` (destaque), preto da marca `#201E1E`, branco, névoa `#EEF4F6` (derivada do azul-gelo, a validar). Contrastes AA (menor: 6,4:1).
- **Histórico:** a logo oficial é preta e branca, mas as artes oficiais usam teal-ardósia. Uma fase intermediária foi monocromática (preto/branco/cinza); foi **substituída** pela paleta acima.
- **Tipografia:** Montserrat. Hero Bold 700 (`clamp(2.3rem,4.7vw,4rem)`), títulos de seção SemiBold 600, texto Regular 400, rótulos e informações Medium 500 em caixa alta.
- **Logo:** extraída do PDF vetorial oficial sem redesenho, `src/assets/brand/logo-branco.svg` (usada no cabeçalho e rodapé) e `logo-preto.svg`. Não recolorir nem esticar.
- **Linguagem:** hero ardósia com arcos finos, retrato do proprietário em arco com a ortodontista sobreposta, cards de serviço com foto, banners, seções alternadas branco/névoa/ardósia, passos com linha que se preenche.
- **Animações:** título sobe linha a linha, fotos se revelam por máscara, manifesto acende por palavra com a rolagem, parallax leve, botões com preenchimento no hover. Sem JS tudo fica visível; com `prefers-reduced-motion` sem animação; falha segura revela tudo após 6 s.

## 5. Imagens: origem e local

- **Fotos reais da equipe (`src/assets/team/`):**
  - `proprietario.jpg`: Dr. Marcelo Souza (nome bordado no jaleco; confirmado pelo responsável como proprietário e cirurgião-dentista clínico geral, **não** implantodontista). **Atenção:** é a foto substituta da pasta "Para usar" do Drive (`WhatsApp Image 2025-10-09 at 15.45.37 (4).jpeg`), tratada. O arquivo original enviado pelo responsável **nunca chegou ao disco**.
  - `ortodontista.jpg`: enviada pelo responsável (720×1280 px, baixa resolução), tratada. Nome e CRO não confirmados.
  - Tratamento: exposição pelo rosto, balanço de branco, neutralização só do fundo, contraste leve, nitidez só na luminância; sem retoque de pele.
- **Imagens de banco (`src/assets/photos/`, 12 arquivos):** Pexels (licença livre para uso comercial), copiadas do acervo privado `odonto_space` (pasta `2026-11/_Banco de fotos` e peças), redimensionadas a no máximo 2000 px. Origem de cada uma e página onde é usada em `docs/IMAGE-CREDITS.md`. Aparecem como "Imagem ilustrativa". Não mostram a clínica nem seus profissionais.
- **Marca e fontes:** `src/assets/brand/`, `src/assets/fonts/`. Favicon e imagem de compartilhamento em `public/` (`og-odonto-space.png` é a logo preta sobre fundo claro, 1200×630).
- Unsplash e Pexels não são acessíveis pela rede da sessão; as imagens vieram do acervo.

## 6. Alterações realizadas e publicação

- `main`: `fa2be25` (estrutura inicial) → `f0cdc2e` (versão visual completa). Árvore limpa, sem alterações locais pendentes.
- `gh-pages`: `b82b8ac`, build de `f0cdc2e` com `.nojekyll`; contém só o `dist/` (sem docs, originais ou código-fonte). A execução "pages build and deployment" do commit `b82b8ac` terminou com `success`.
- **Como publicar de novo:** `npm run build`; clonar `gh-pages`, apagar o conteúdo, copiar `dist/`, `touch .nojekyll`, commit e push (o histórico mostra o procedimento).
- **Não verificado:** o endereço `github.io` não pôde ser aberto da sessão (a rede bloqueia o domínio). A publicação foi confirmada só pela API (Actions) e pelo conteúdo da branch.
- As versões v3 e a prévia v4 (protótipo) que existiam na `gh-pages` foram removidas quando o site definitivo a substituiu. Um artefato privado antigo no claude.ai (`Proposta visual ODONTO SPACE`) ainda existe e está desatualizado.

## 7. Problemas e melhorias visuais pendentes

- **Hero:** a foto do proprietário é substituta e a da ortodontista tem baixa resolução (suaviza em telas de alta densidade). O hero fica melhor com as fotos originais.
- **Galeria "Atendimento" (`a-clinica-e-equipe`) e banners:** dependem de imagens de banco. Substituir por fotos reais da recepção, consultório e fachada.
- **Radiografia (`radiografia-panoramica.jpg`):** tem uma legenda pequena em outro idioma dentro da própria foto (página de implantes). Trocar ou recortar.
- **Imagens repetidas entre páginas** (`modelo-dentario-maos`, `explicando-modelo`, `consultorio-claro` e outras): variar quando houver mais material.
- **Nenhuma imagem de alinhador transparente** para Invisalign; a seção Ortodontia usa modelo dentário e retrato da ortodontista.
- **Card "Endodontia":** usa foto de avaliação genérica; **"Clínica geral"** usa foto de banco. Revisar crops depois de trocar imagens.
- **Texto dos passos e do FAQ:** rascunho genérico (sem prazos nem valores), a revisar por cirurgião-dentista.
- **Botão flutuante de WhatsApp** pode sobrepor texto no celular (aceito, mas revisar).
- **Páginas de Endodontia e Clínica geral** inexistentes (oportunidade de SEO e campanha).
- **Política de Privacidade** inexistente (obrigatória antes de ativar GTM/anúncios).
- **Referências de design** (Aure Odontologia, Thousand Smiles) **nunca foram analisadas**: os domínios `scalestudio.com.br` e `silverstonedigital.co.uk` estão bloqueados na rede da sessão. A direção atual veio das descrições do responsável e das artes oficiais.
- A foto exibida com o nome bordado "Dr. Marcelo Souza" revela o nome no jaleco; ele é exibido em texto também.

## 8. Testes executados (sessão atual)

- `npm run build`: 7 páginas, sem erros.
- Playwright em computador (1440 px), tablet (820 px) e celular (390 px) para as 6 páginas: sem erros de console, sem requisições falhas, nenhuma imagem quebrada, `h1` em Montserrat, 6 links internos únicos sem 404.
- Sem rolagem horizontal em 320, 360 e 390 px nas 6 páginas (depois de corrigir grades `1fr` e botões que não quebravam linha).
- Animações: com rolagem lenta todos os elementos `.rv` são revelados; um teste com rolagem rápida deixou itens ocultos até a falha segura de 6 s (artefato do teste, não do uso).
- SEO verificado no `dist`: canonical por página igual às URLs do sitemap; `robots.txt` com sitemap correto; JSON-LD `Dentist` (home e contato) e `BreadcrumbList`; `og:image` com URL absoluta.
- **Não testado:** Lighthouse, validação de acessibilidade (axe), navegação por teclado completa, Safari/Firefox, o link público no `github.io`, as animações com `prefers-reduced-motion` na versão final (testado só no protótipo anterior).

## 9. Próximas tarefas prioritárias (2 dias)

1. **Abrir e conferir o site publicado** no navegador (desktop e celular) e comparar com o `dist` local.
2. **Receber e aplicar fotos reais:** original do proprietário e da ortodontista (trocar `src/assets/team/*.jpg` mantendo o nome; proporção 4:5, mínimo 1000 px), fachada, recepção e consultório (substituir a galeria e os banners). Reaplicar o tratamento fotográfico (exposição, balanço de branco, fundo neutro).
3. **Confirmar com a clínica:** nome e CRO da ortodontista, CRO do Dr. Marcelo Souza, responsável técnico (`SITE.technicalResponsible`), horários (`SITE.hours`), CEP, Instagram (`@clinicaodontospace`, ainda sem URL no código), link do perfil no Google, Clínica geral e Invisalign, autorização de uso de imagem dos dois profissionais.
4. **Domínio final:** definir e ajustar `PUBLIC_SITE_URL` / `PUBLIC_BASE_PATH`; decidir entre GitHub Pages e Vercel.
5. **Política de Privacidade** e, só depois, `PUBLIC_GTM_ID` (consentimento já pronto), GA4 e Google Ads dentro do GTM.
6. **Páginas novas** (se aprovadas): Endodontia e Clínica geral; textos revisados por dentista; eventualmente páginas por bairro para SEO local.
7. **Referências de design:** liberar os dois domínios ou anexar capturas para analisar Aure e Thousand Smiles, e então refinar (formas, movimento).
8. **Qualidade:** rodar Lighthouse e axe, testar teclado e Safari/Firefox; revisar a legenda da radiografia; revisar sobreposição do WhatsApp flutuante no celular; remover o artefato desatualizado do claude.ai.
9. **Cadastros de SEO local:** Google Meu Negócio, Search Console e sitemap após o domínio final.

## Observações para quem assume

- O repositório vem com **hook de parada** que pede commit e push automaticamente; ao longo do projeto isso foi ignorado enquanto o design estava em aprovação. Agora o trabalho está na `main`.
- Dados pessoais e documentos do cliente (contrato, autorização de imagem) **não** devem entrar no repositório público.
- Contexto de marca e instruções do cliente estão no Drive de Marcelo (pasta "CLINICA ODONTOLOGICA ODONTO SPACE" e "ODONTO SPACE"; documento "Instruções para o Claude - Odonto space.docx").
