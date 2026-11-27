# Publicação na Hostinger (domínio próprio, base `/`)

Status: **preparada, não publicada.** Nenhum deploy, domínio ou configuração da Hostinger foi alterado.

## Branches
| Branch | Conteúdo | Uso |
|---|---|---|
| `producao-hostinger` | Código-fonte da candidata oficial (`24f36a5`) + scripts de build/validação + `.htaccess` | Fonte de verdade; rebuild quando mudar o domínio ou o conteúdo |
| `hostinger-dist` | Só o site pronto (`dist/`) na raiz | É o que a Hostinger publica. Gerada por `scripts/gerar-branch-dist.sh` |

`main` e `gh-pages` (GitHub Pages) não são alteradas por este fluxo.

## Por que duas branches
O deploy estático da Hostinger publica o conteúdo da branch como está, sem build. Publicar a branch de código expõe `src/`, `docs/` e arquivos internos. Por isso a branch publicada contém apenas o `dist/`.

## Gerar a versão final (depois de definir o domínio)
```bash
npm ci
PUBLIC_SITE_URL=https://www.SEUDOMINIO.com.br scripts/gerar-branch-dist.sh
git push origin hostinger-dist
```
`PUBLIC_SITE_URL` define canonical, sitemap, `robots.txt`, Open Graph e dados estruturados. Um build com domínio errado gera SEO errado: refaça o build se o domínio mudar. O build usa `PUBLIC_BASE_PATH=/`, não define `PUBLIC_NOINDEX` e não ativa GTM.

## Validações automáticas (`npm run validar:dist`)
Roda ao final de cada `build:hostinger`. Falha se houver: recurso (imagem, CSS, JS, fonte, link) inexistente; caminho relativo; link `http://`; resquício de `odonto_space_site` ou `github.io`; `noindex` fora da 404 e do redirecionamento; canonical, `robots.txt` ou sitemap fora do domínio informado.

## Publicar na Hostinger (ação manual, com confirmação)
1. No hPanel: conectar o GitHub (uma vez) e registrar/definir o domínio.
2. Criar um **site novo** no plano (não usar o site de teste Horizons, o deploy sobrescreve o conteúdo).
3. Deploy estático da branch `hostinger-dist` (pelo hPanel ou pelo conector: `hosting_deploy`, `type: static`, `branch: hostinger-dist`).
4. Apontar o domínio para o site e ativar o SSL.
5. Conferir: `https://DOMINIO/robots.txt`, `/sitemap-index.xml`, as 8 páginas, `/ortodontia-invisalign` (deve ir para `/invisalign`), uma URL inexistente (página 404 do site) e os botões de WhatsApp.
6. Conferir os cabeçalhos em securityheaders.com e `X-Frame-Options`/CSP.
7. Enviar o sitemap ao Search Console e atualizar o Google Meu Negócio.

## `.htaccess`
`public/.htaccess` substitui `_headers`/`vercel.json`: HTTPS obrigatório, redirecionamento de `/ortodontia-invisalign`, URLs sem barra final, página 404, cabeçalhos de segurança e cache (`/_astro/` com cache de 1 ano). **Não foi testado em servidor Apache/LiteSpeed**; confirme após o primeiro deploy. Se algo falhar nas regras de reescrita, remova o bloco `mod_rewrite` e ajuste conforme o suporte da Hostinger.

## Pendências do cliente que continuam valendo
Ver `docs/PENDENCIAS.md` (CROs, responsável técnico, CNPJ, política de privacidade revisada, fotos reais, etc.).
