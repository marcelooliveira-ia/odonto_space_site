# Relatório da versão candidata (prévia técnica)

- **URL:** https://marcelooliveira-ia.github.io/odonto_space_site/previas/versao-final-candidata/ (noindex, só prévia)
- **Build publicado:** commit `fc96275` da branch `claude/practical-pasteur-rgbvwu` (commits posteriores alteram apenas documentação). Publicação no `gh-pages`: commit `39b6a6a`, somente a pasta nova; raiz e v10–v15 com hashes de árvore idênticos.
- **Comparação visual com a v15:** 7 páginas × 8 larguras (320–1440): 56/56 com a mesma altura; diferença de pixels (limiar 40/255): corpo ≤ 0,085%, rodapé ≤ 0,23% (antialiasing); 0 rolagem horizontal, 0 imagem quebrada, 0 erro de console.
- **Lighthouse (URL pública):** desempenho 100, acessibilidade 100, boas práticas 100 em todas as páginas, desktop e mobile; CLS 0; LCP 0,3–0,4 s (desktop) e 1,5–1,7 s (mobile, throttling). SEO 66 na prévia **apenas** por causa do `noindex` intencional; build indexável: SEO 100 nas 7 páginas.
- **Segurança:** `npm audit` 0 vulnerabilidades; varredura de segredos em todo o histórico (18 commits, 714 blobs): 0 ocorrências. No GitHub Pages só o HSTS da plataforma está ativo; CSP vale por `<meta>` (testado: script inline injetado e script de terceiro são bloqueados). Os demais cabeçalhos (`vercel.json`/`_headers`) só funcionam na hospedagem definitiva.
- **Limitação do GitHub Pages:** URLs sem barra final redirecionam para `/…/`; o canonical usa a forma sem barra (correto na hospedagem definitiva).
