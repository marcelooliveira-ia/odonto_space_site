# Direção de arte — "Espaço e luz" (v6)

Registro do processo e das decisões do redesign editorial. Referência anterior preservada: commit `d093424` (tag local `ref-pre-redesign`).

## Fase 1 — Estado e classificação

**Estado verificado:** branch `claude/practical-pasteur-rgbvwu`; `main` = `d7607b3`; `gh-pages` = `107ee0d`; PR #2 aberto, não integrado.

**Inventário do projeto:** 6 páginas + 404; componentes `Header`, `Footer`, `Photo`, `WhatsAppButton`, `FloatingWhatsApp`, `Em`, `Icon`, `Motion`, `Analytics`, `ConsentBanner`; layout `BaseLayout`; um CSS (`src/styles/global.css`); scripts inline (menu, movimento, painel de serviços); fontes Montserrat 400/500/600/700; logos `logo-preto.svg` e `logo-branco.svg`; 11 imagens geradas + 2 retratos reais.

| Elemento | Decisão |
|---|---|
| Paleta aprovada, Montserrat, logotipos, textos revisados e regras de conformidade (sem termo proibido, sem Endodontia, sem pacote de R$ 149,90) | **Preservar** |
| Número e link do WhatsApp, áreas de toque ≥ 44 px, marcador `build-commit`, `scripts/verificar-publicacao.sh`, SEO e dados estruturados | **Preservar** |
| Índice tipográfico de serviços, número gigante do Contato, nome grande na equipe, manifesto com palavras que acendem | **Refinar** (índice ganhou painel compartilhado; manifesto ganhou campo azul-gelo) |
| Componente de WhatsApp, botão flutuante, rodapé, regra "uma imagem, um uso" | **Refinar** |
| Abertura imersiva com gradiente escuro, faixas escuras repetidas, linha do tempo de 4 colunas, FAQ com coluna fixa, bloco de chamada no rodapé de todas as páginas, cabeçalho escuro | **Redesenhar** |
| Pílulas verdes de WhatsApp, etiqueta "Imagem ilustrativa" em cada foto, pessoa gerada por IA em destaque, palavra final colorida em todo título | **Redesenhar** |
| `PageHero`, `WhatsAppCta`, arcos/folhas/círculos, sombras, cartões, itálico sintético, verde fora da paleta | **Eliminar** |

## Fase 2 — Identidade (regras fixas)

- **Cores (medidas nas artes oficiais; ver `HANDOFF.md`):** ardósia `#2F4A54`, teal-ardósia `#42646F`, azul-gelo `#C4E0E8`, preto da marca `#201E1E`, branco. Névoa, azul-gelo suave, cinzas de texto e linhas são **derivados por `color-mix` dessas cores** (só luminosidade/transparência). O CSS final contém apenas esses cinco hex (+ `#fff`). Não há azul-marinho novo.
- **Verde do WhatsApp:** removido (fora da paleta). O WhatsApp é reconhecido pelo glifo, em ardósia/branco. A cor fica numa variável e é reversível.
- **Tipografia:** Montserrat 400/500/600/700 (as únicas autorizadas e carregadas). Sem itálico (`em` é `font-style: normal`; ênfase por peso ou cor).
- **Achado:** `docs/brand/README.md` estava desatualizado (descrevia paleta cinza e Poppins/Inter). Foi corrigido.
- **Marca:** logotipo preto em fundo claro (cabeçalho e rodapé), sem alteração.

## Fase 3 — Referências (pesquisa em 5 campos)

Capturas feitas na sessão (não versionadas: pertencem a terceiros). "Visto" = observado na captura; "fonte" = descrito por fonte indicada (a captura não carregou ou o site bloqueou). Várias imagens dos sites não carregaram, então só registro o que apareceu.

| # | Referência (campo) | Endereço | Recurso observado | Uso para a ODONTO SPACE |
|---|---|---|---|---|
| 1 | Kinfolk (editorial) | https://www.kinfolk.com/ | Visto: fundo branco, logotipo minúsculo com espaçamento largo, título serifado centrado, quase nenhum elemento de interface | Contraste de escala: interface mínima, mensagem grande |
| 2 | Cereal Magazine (editorial) | https://www.readcereal.com/ | Fonte ([Wikipedia](https://en.wikipedia.org/wiki/Cereal_(magazine)), Monocle): margens brancas amplas, fotografia calma e contida (site não carregou) | Margem como respiro; fotografia "uma ideia por imagem" |
| 3 | Apartamento (editorial) | https://www.apartamentomagazine.com/ | Visto: campos de cor chapada (amarelo, azul), títulos de seção centrados com linha fina | Campo de cor da marca (azul-gelo) como superfície |
| 4 | John Pawson (arquitetura) | https://www.johnpawson.com/ | Visto: fotografia de arquitetura ocupando a tela inteira, sem texto nem filtro, logotipo pequeno sobre a imagem | Foto como abertura inteira, sem sobreposição escura |
| 5 | Hufton+Crow (fotografia de arquitetura) | https://www.huftonandcrow.com/ | Visto (parcial): fotografia vertical em proporção natural, sem moldura | Proporção original, sem recortes decorativos |
| 6 | Maggie's Centres, via Dezeen (saúde/arquitetura) | https://www.dezeen.com/2020/02/17/royal-marsden-maggies-centre-ab-rogers-design/ | Fonte: luz natural como princípio do projeto; ambiente "acolhedor, não clínico" | Gradação de foto clara e luminosa; acolhimento |
| 7 | Pentagram — Remission Biome (branding de saúde) | https://www.pentagram.com/work/remission-biome | Visto: página branca, título grande à esquerda, etiquetas discretas, bloco de imagem amplo | Título grande à esquerda + metadado discreto; espaço negativo |
| 8 | Collins (branding) | https://wearecollins.com/ | Visto: fundo quase branco, uma única frase serifada centrada, detalhes minúsculos abaixo | Seção tipográfica sem foto (manifesto) |
| 9 | Locomotive (estúdio digital) | https://locomotive.ca/en | Visto: foto de tela cheia com título gigante e leve ancorado no canto inferior esquerdo, interface mínima | Título ancorado no canto; escala |
| 10 | Studio Freight (estúdio digital) | https://studiofreight.com/ | Visto: declaração central cercada de fragmentos de imagem de tamanhos diferentes, em grade irregular | Colagem assimétrica de ambientes (três momentos da Início) |
| 11 | Tend (odontologia premium, contraponto) | https://www.hellotend.com/ | Visto: retratos recortados em formas orgânicas, serifa com palavras em negrito dentro da frase | **Evitar** o recorte em formas; usar ênfase por peso |
| 12 | Aesop (branding, via Work & Co) | https://work.co/clients/aesop | Fonte: layout e tipografia inspirados na embalagem; movimento calmo, "visita à loja" (o site do Aesop bloqueou a captura) | Movimento que acompanha a narrativa, sem exibição |
| 13 | Vincent Van Duysen (interiores) | listagem: https://www.archdaily.com/office/vincent-van-duysen-architects | Fonte: arquitetura sóbria, planos amplos (domínio oficial não resolveu) | Planos amplos e material calmo |

**Princípios extraídos (aplicados):**
1. Uma ideia por tela.
2. Foto como abertura inteira quando for forte, sem filtro escuro (Pawson).
3. Título ancorado em um canto, não centralizado (Locomotive).
4. Abertura só tipográfica quando a mensagem basta (Collins).
5. Contraste extremo de escala: interface pequena, mensagem gigante (Kinfolk).
6. Colagem irregular de fragmentos em tamanhos distintos (Studio Freight).
7. Foto em proporção natural, sem molduras nem formas (Hufton+Crow; Tend como contraexemplo).
8. Campo de cor chapada como superfície editorial, com linhas finas (Apartamento).
9. Metadado discreto ao lado do título (Pentagram).
10. Ênfase por peso, não por cor ou itálico.
11. Luz natural como protagonista (Maggie's).
12. Movimento que acompanha a leitura (Aesop).

## Fase 4 — Padrões eliminados

| Padrão repetitivo (d093424) | Como foi eliminado |
|---|---|
| Mesmo esqueleto nas 6 páginas | Prefixo e estrutura próprios por página (`hm-`, `im-`, `pr-`, `or-`, `cl-`, `ct-`), cada uma com abertura distinta |
| Faixas escuras (3 por página) | Campos de azul-gelo e névoa; ardósia só no fecho da Início |
| Fotos em largura total com gradiente escuro | Gradiente removido; foto sem filtro (única exceção: véu branco leve na Ortodontia, foto clara) |
| Pílulas verdes de WhatsApp (5 por página) | Link discreto no topo, botão apenas onde a conversão é o objetivo, flutuante pequeno |
| Bloco "Vamos conversar…" no rodapé de todas as páginas | Rodapé enxuto; cada página fecha com composição própria |
| Título sempre "palavra final colorida" | Pesos 700/400 e cor só em títulos selecionados; variações por página |
| Listas com marca de verificação, FAQ com coluna fixa | Listas numeradas, escada (Próteses), Q&A aberto (Implantes), acordeão (Próteses), pergunta a pergunta (Ortodontia) |
| Espaços vazios sem função | Cada vazio tem papel (respiro de manifesto, escalonamento do colage); seção "O que é" reorganizada |
| Foto sangrando por reflexo | Só onde há ganho (abertura da Início, abertura de Implantes, tipos de Próteses); demais em largura de grade |
| Chip "Imagem ilustrativa" sobre a foto | Legenda editorial "Fig. 01 · Imagem ilustrativa" abaixo da foto |

## Fases 5 e 6 — Sistema e direção por página

Alternância deliberada: impacto, silêncio, informação, fotografia, expressão tipográfica, narrativa, conversão.

- **Início:** título gigante e leve à esquerda com foto do consultório ao lado (sem gradiente); "três momentos" (recepção, ambiente clínico em recorte arquitetônico, preparação) em colagem assimétrica com os quatro pilares ao lado; manifesto tipográfico em campo azul-gelo; serviços como índice monumental com **painel de imagem compartilhado** (hover e foco no desktop; botão "+" acessível no celular); Estética do Sorriso como composição gráfica (palavra gigante recortada, sem pessoa); percurso em narrativa vertical com numeração grande alternada; fecho ardósia com endereço e número.
- **Implantes (precisão):** foto à esquerda sangrando, título "Implantes" gigante; declaração longa e imagem pequena (macro); radiografia em panorama e etapas em texto corrido de duas colunas; perguntas e respostas abertas em grade.
- **Próteses (função):** panorama no topo, título abaixo; tipos em escada diagonal com foto do laboratório fixa ao lado; avaliação em campo azul-gelo; perguntas em acordeão.
- **Ortodontia e Invisalign (leveza):** foto clara de tela cheia com título sobre ela (véu branco leve); "Ortodontia" e "Invisalign" como duas palavras gigantes em pesos diferentes; foto panorâmica e primeiro passo; perguntas numeradas, sem acordeão.
- **Clínica e equipe (humana):** abertura só tipográfica ("ODONTO SPACE" em escala máxima); manifesto em campo névoa; retratos reais sem moldura, em tamanhos diferentes (um maior com o nome gigante acima, outro menor deslocado); seção "Ambientes" **reservada no código** (`ambientes` em `a-clinica-e-equipe.astro`), exibida somente quando houver fotografias reais.
- **Contato (orientação):** número em escala gigante; endereço em campo azul-gelo e atendimento em lista; sem mapa (ver limitações).

## Fase 7 — Sistema de fotografia

Tratamento único (CSS): saturação −14%, brilho +2% e véu multiplicado em azul-gelo (16%), aplicado a todas as fotos para unificar origens diferentes. Legenda editorial "Fig. NN · Imagem ilustrativa" (ou "gerada por IA"). Retratos reais sem legenda de ilustração.

| Imagem | Categoria | Comunica | Onde | Proporção | Ilustrativa |
|---|---|---|---|---|---|
| consultorio-moderno | Ambiente | Luz, amplitude, tecnologia discreta | Início: abertura (lado esquerdo) e recorte de detalhe (lado direito, sem sobreposição) | 5:4 e 2:3 | sim |
| clinica-recepcao | Ambiente | Chegada, acolhimento | Início: três momentos | 16:9 | sim |
| clinica-instrumentos | Instrumentais | Preparação, esterilização | Início: três momentos | 5:4 | sim |
| implante-maos-modelo | Procedimento/modelo | Explicação ao paciente | Implantes: abertura | retrato recortado | sim |
| implante-coroa | Material clínico | Peça do implante | Implantes: "O que é"; Início: prévia de serviço | 4:5 | sim |
| implante-radiografia | Exame | Diagnóstico | Implantes: panorama | 21:9 | sim |
| protese-coroas-ponte | Material clínico | Cerâmica, precisão | Próteses: panorama; Início: prévia | 21:9 | sim |
| protese-laboratorio-maos | Procedimento | Trabalho técnico | Próteses: tipos | 4:5 | sim |
| invisalign-alinhadores | Material clínico | Alinhadores transparentes | Ortodontia: abertura; Início: prévia | tela cheia | sim |
| ortodontia-maos-alinhador | Procedimento/modelo | Encaixe do alinhador | Ortodontia: primeiro passo | 2:1 | sim |
| paciente-sorriso-ia | Pessoa (IA) | — | **Reservada: fora do site** (não representa paciente nem equipe) | — | gerada por IA |
| dr-marcelo-souza, ortodontista | Pessoas reais | Identidade da equipe | Somente Clínica e equipe | 4:5 | não |

Reutilizações: **consultório** (duas regiões distintas, ambas na Início) e **prévia dos serviços** (interação pedida: Implantes, Próteses e Ortodontia aparecem no painel da Início e na própria página). Nenhuma outra repetição.

## Fases 8 e 9 — Movimento e responsividade

- **Movimento:** título que sobe por linha; revelação das fotos por máscara; manifesto que acende por palavra; painel de serviços com transição suave; links com estado de linha. Sem parallax, sem animação obrigatória. `prefers-reduced-motion`: tudo visível, sem animação (testado).
- **Desktop 1440:** composições de 12 colunas, assimétricas.
- **Tablet 768:** composições próprias em duas colunas onde se sustentam (abertura da Início, Implantes, Próteses, Ortodontia, Clínica, Contato); o restante empilha.
- **Celular 390:** ordem reescrita (foto antes do texto onde ajuda), títulos em escala fluida, painel de serviços vira acordeão com botão, menu em tela.

## Limitações (dependem de material externo)

- Sem fotografias reais da clínica, a identidade visual depende de imagens ilustrativas geradas por IA. É o principal limite de qualidade.
- Retratos reais: o do Dr. Marcelo Souza é substituto; o da ortodontista tem baixa resolução e enquadramento diferente.
- Sem fachada ou fotos reais, a Clínica não tem ambientes; sem coordenadas confirmadas, o Contato não tem mapa (só link).
- Estética do Sorriso e Clínica geral não têm imagem própria.
- Nomes, CROs, horários, CEP, Instagram e responsável técnico seguem pendentes (ver `HANDOFF.md`).
