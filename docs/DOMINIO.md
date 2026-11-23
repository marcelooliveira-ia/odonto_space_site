# Conectar o domínio definitivo

1. **Hospedagem recomendada:** Vercel, Netlify ou Cloudflare Pages (aplicam os cabeçalhos de segurança do repositório). GitHub Pages serve apenas como prévia.
2. **Importar o repositório** `marcelooliveira-ia/odonto_space_site` (branch de produção) e definir as variáveis de ambiente:
   - `PUBLIC_SITE_URL=https://www.SEUDOMINIO.com.br`
   - `PUBLIC_BASE_PATH=/`
   - Build: `npm run build` · Saída: `dist` · Node 22.
3. **DNS:** no Registro.br (ou provedor do domínio) criar o CNAME `www` apontando para o host indicado pela plataforma e o redirecionamento do domínio raiz para `www` (ou registros A/ALIAS conforme a plataforma). Aguardar o certificado HTTPS automático.
4. **Conferir:** `https://www.SEUDOMINIO.com.br/robots.txt` e `/sitemap-index.xml` (devem trazer o novo domínio); abrir cada página; testar os botões de WhatsApp e o mapa; checar os cabeçalhos em securityheaders.com.
5. **Search Console / Google Business:** enviar o sitemap e atualizar o site no perfil da empresa.
6. Só então desligar/redirecionar a prévia do GitHub Pages.
