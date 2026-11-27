# Conectar o domínio definitivo (Hostinger)

Status: o domínio da ODONTO SPACE foi definido e aguarda pagamento e conclusão do registro no Registro.br. **Nenhuma configuração de DNS foi feita.** Este roteiro vale quando o registro estiver concluído.

1. **Hospedagem:** plano Unlimited Web Hosting da Hostinger (conta do MARCELO.IA), site estático. Vercel, Netlify e Cloudflare deixaram de ser o destino; `vercel.json` e `public/_headers` ficam só como referência. GitHub Pages segue como prévia.
2. **Propriedade do domínio:** fica na conta do **cliente** no Registro.br (CPF/CNPJ da clínica). Não registrar nem transferir para a conta pessoal do MARCELO. Ver `docs/CLIENTES-INFRAESTRUTURA.md`.
3. **Gerar o build final** (só depois do registro concluído):
   ```bash
   PUBLIC_SITE_URL=https://www.SEUDOMINIO.com.br scripts/gerar-branch-dist.sh
   git push origin hostinger-dist
   ```
   `PUBLIC_SITE_URL` deve ter o mesmo host (com ou sem `www`) que será servido; ele define canonical, sitemap, `robots.txt` e dados estruturados. O script recusa domínios provisórios.
4. **Deploy** da branch `hostinger-dist` como site estático (site novo; nunca sobre o Horizons de teste).
5. **DNS:** somente quando o domínio estiver ativo e o site criado na Hostinger. Duas opções, a decidir com o cliente:
   - **A)** manter o DNS no Registro.br e criar os registros que a Hostinger indicar no hPanel (A para o domínio raiz e `www`);
   - **B)** o cliente altera uma vez os servidores DNS no Registro.br para os da Hostinger, e a zona passa a ser editada no hPanel (o MARCELO gerencia sem precisar da senha do cliente).
   A recomendação é a B. Se o domínio tiver DNSSEC ativo no Registro.br, desativar antes de trocar os servidores DNS. Confirme as opções vigentes no Registro.br e no hPanel.
6. **SSL:** ativar no hPanel depois que o DNS propagar.
7. **Conferir:** `/robots.txt` e `/sitemap-index.xml` com o novo domínio; as 8 páginas; `/ortodontia-invisalign` redirecionando para `/invisalign`; uma URL inexistente (404 do site); botões de WhatsApp; cabeçalhos em securityheaders.com.
8. **Search Console / Google Meu Negócio:** enviar o sitemap e atualizar o site no perfil da empresa.
9. Só então desligar ou redirecionar a prévia do GitHub Pages.

Checklist completo: `docs/CHECKLIST-PUBLICACAO.md`.
