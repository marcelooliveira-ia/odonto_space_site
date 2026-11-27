# Relatório da versão candidata (prévia técnica)

- **URL:** https://marcelooliveira-ia.github.io/odonto_space_site/previas/versao-final-candidata/ (noindex, só prévia)
- **Build publicado:** commit `fc96275` da branch `claude/practical-pasteur-rgbvwu` (commits posteriores alteram apenas documentação). Publicação no `gh-pages`: commit `39b6a6a`, somente a pasta nova; raiz e v10–v15 com hashes de árvore idênticos.
- **Comparação visual com a v15:** 7 páginas × 8 larguras (320–1440): 56/56 com a mesma altura; diferença de pixels (limiar 40/255): corpo ≤ 0,085%, rodapé ≤ 0,23% (antialiasing); 0 rolagem horizontal, 0 imagem quebrada, 0 erro de console.
- **Lighthouse (URL pública):** desempenho 100, acessibilidade 100, boas práticas 100 em todas as páginas, desktop e mobile; CLS 0; LCP 0,3–0,4 s (desktop) e 1,5–1,7 s (mobile, throttling). SEO 66 na prévia **apenas** por causa do `noindex` intencional; build indexável: SEO 100 nas 7 páginas.
- **Segurança:** `npm audit` 0 vulnerabilidades; varredura de segredos em todo o histórico (18 commits, 714 blobs): 0 ocorrências. No GitHub Pages só o HSTS da plataforma está ativo; CSP vale por `<meta>` (testado: script inline injetado e script de terceiro são bloqueados). Os demais cabeçalhos (`vercel.json`/`_headers`) só funcionam na hospedagem definitiva.
- **Limitação do GitHub Pages:** URLs sem barra final redirecionam para `/…/`; o canonical usa a forma sem barra (correto na hospedagem definitiva).

## Páginas cobertas por cada teste
- **Comparação visual com a v15 (7 páginas):** Início, Ortodontia, Invisalign, Implantes, Próteses, A clínica, Contato.
- **Lighthouse, funcional e capturas públicas (8 páginas):** as 7 acima **+ `/politica-de-privacidade`**, página nova que não existe na v15 (por isso não entra na comparação visual). A `404` não foi medida (é servida pela raiz do GitHub Pages).

## Resultados por página (Lighthouse, URL pública)
Desempenho / acessibilidade / boas práticas = 100/100/100 em todas as 8 páginas, em desktop e mobile. CLS 0 em todas. LCP desktop: início 0,39 s · ortodontia 0,39 · invisalign 0,40 · implantes 0,43 · próteses 0,43 · clínica 0,37 · contato 0,41 · privacidade 0,33. LCP mobile: 1,58 · 1,69 · 1,54 · 1,67 · 1,71 · 1,68 · 1,53 · 1,52 s. TBT ≤ 10 ms. SEO 66 na prévia (somente `noindex`); build indexável: 100 nas 7 páginas indexáveis.

## Comandos utilizados
```bash
# build (candidata) e build local de teste
PUBLIC_NOINDEX=1 PUBLIC_BASE_PATH=/odonto_space_site/previas/versao-final-candidata PUBLIC_BUILD_COMMIT=$(git rev-parse --short HEAD) npx astro build --outDir <pasta>
npm run css && npx astro build

# dependências e segredos
npm audit ; npm audit --omit=dev ; npm outdated
git rev-list --all --objects | git cat-file --batch-check   # 714 blobs lidos e varridos por regex (chaves AWS/Google/GitHub/Slack/JWT, chaves privadas, "senha/token/secret = '…'")
git log --all --diff-filter=A --name-only | grep -i "\.env\|\.pem\|\.key\|credential\|secret"   # só .env.example (placeholders)

# comparação visual (Playwright/Chromium; v15 = arquivo publicado servido localmente; candidata servida sob o mesmo prefixo da prévia)
node cmpC.js     # 7 páginas × 8 larguras, captura full-page, altura, rolagem horizontal, imagens, erros e respostas ≥ 400
python3 diffN.py # diferença de pixels (limiar 40/255), corpo e rodapé

# funcional (guia, menu móvel, abas + teclado, 27 links internos, WhatsApp, console)
node funcC.js

# público (navegador novo, sem sessão): hash do arquivo servido, cabeçalhos, CSP, 404, redirecionamento, capturas
node pub.js
curl -sI https://marcelooliveira-ia.github.io/odonto_space_site/previas/versao-final-candidata/

# Lighthouse 12 (desktop: --preset=desktop; mobile: padrão), URL pública
lighthouse <url> --output=json [--preset=desktop] --chrome-flags="--headless=new --no-sandbox"
lighthouse http://localhost:4310/odonto_space_site/<página> --only-categories=seo   # build indexável
```
Observação: nos testes de CSP/404 aparecem 3 mensagens no console **provocadas pelo próprio teste** (script inline injetado, script de terceiro e URL inexistente); a navegação real não gera erros.
