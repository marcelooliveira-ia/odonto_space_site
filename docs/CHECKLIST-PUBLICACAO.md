# Checklist de publicação — ODONTO SPACE (Hostinger)

Base aprovada: prévia `previas/versao-final-candidata-instagram/` = commit `24f36a5` (build-commit confirmado na prévia). A base de produção é a branch `producao-hostinger`. Não alterar a prévia, `main`, `gh-pages` nem a branch da candidata.

## A. Já pronto (independe do domínio)
- [x] Código-fonte da versão aprovada em `producao-hostinger` (commits `24f36a5` + scripts de produção).
- [x] `npm run build:hostinger` (base `/`, indexável) e `npm run validar:dist` (caminhos, SEO, vestígios do GitHub Pages).
- [x] `public/.htaccess` (HTTPS, URLs sem barra, redirect antigo, 404, cabeçalhos, cache).
- [x] `scripts/gerar-branch-dist.sh` (gera `hostinger-dist`; recusa domínio provisório; não faz push).
- [x] `npm audit`: 0 vulnerabilidades (rodar de novo no dia da publicação).
- [x] Testes funcionais do `dist/` na raiz: 8 páginas, 404, redirect, fontes, imagens, WhatsApp, menu, sem erros de console.
- [x] Documentação: `DOMINIO.md`, `PUBLICACAO-HOSTINGER.md`, `CLIENTES-INFRAESTRUTURA.md`, este checklist.

## B. Pode ser preparado agora, sem domínio
- [ ] Decidir `www` ou domínio raiz como endereço principal (define `PUBLIC_SITE_URL`).
- [ ] Conectar o GitHub à Hostinger (hPanel) e confirmar acesso ao repositório.
- [ ] Criar o site estático novo no plano Unlimited (sem domínio, só para o deploy) e confirmar limites do plano.
- [ ] Rodar Lighthouse e axe no build final; testar Safari/Firefox e teclado.
- [ ] Revisar o botão flutuante de WhatsApp no celular e a legenda em outro idioma na radiografia.
- [ ] Preparar o Google Meu Negócio, Search Console e GA4/GTM nas contas da clínica (sem ativar `PUBLIC_GTM_ID` ainda).
- [ ] Rascunho de contrato/termo com a clínica: propriedade do domínio, mensalidade, escopo.

## C. Só depois do domínio registrado
- [ ] Confirmar registro concluído e titularidade na conta da clínica no Registro.br.
- [ ] `PUBLIC_SITE_URL=https://... scripts/gerar-branch-dist.sh` e `git push origin hostinger-dist`.
- [ ] Deploy estático da `hostinger-dist` no site novo.
- [ ] DNS (opção B de `DOMINIO.md`), SSL, aguardar propagação.
- [ ] Ativar o bloco opcional apex/www do `.htaccess` conforme o host escolhido.
- [ ] Conferir `robots.txt`, sitemap, 8 páginas, redirect, 404, WhatsApp e cabeçalhos.
- [ ] Enviar sitemap ao Search Console; atualizar Google Meu Negócio.
- [ ] Desligar ou redirecionar a prévia do GitHub Pages.

## D. Pendências do cliente (conteúdo) — não bloqueiam a publicação técnica, mas bloqueiam o "lançamento oficial"
Ver `docs/PENDENCIAS.md`. Resumo: CRO do Dr. Marcelo Souza e da Sayonara Dias; responsável técnico; razão social e CNPJ; revisão jurídica da Política de Privacidade; Facebook e perfil Google; fotos reais; aceitação das imagens geradas por IA pelo CRO/CFO; permissão da marca Invisalign.

## E. Pendências comerciais
- [ ] Fechar com a clínica quem paga hospedagem e manutenção, e o valor mensal.
- [ ] Contrato com cláusula de propriedade do domínio e portabilidade do site.
- [ ] Definir o plano de melhorias de conversão (fotos reais, páginas de Endodontia e Clínica geral, páginas locais, campanhas Google Ads/Meta) e quem cobra o quê.
- [ ] Definir quem administra as contas de anúncios e de medição.

## F. Riscos conhecidos
- O `.htaccess` não foi testado em servidor Apache/LiteSpeed da Hostinger.
- Ativar GTM exige ampliar a CSP e ter a Política de Privacidade revisada.
- Fotos reais e CROs entrarão depois: cada atualização exige novo build e novo commit na `hostinger-dist`.
- Imagens geradas por IA de pessoas e ambientes podem ser questionadas pelo CRO-RJ em publicidade.
