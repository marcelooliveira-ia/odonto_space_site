# Pendências externas e validações profissionais

Nada abaixo foi inventado no site: os campos ficam ocultos (`null` em `src/config/site.ts`) até a clínica confirmar.

| # | Item | Quem resolve | Onde entra |
|---|------|--------------|-----------|
| 1 | CRO do Dr. Marcelo Souza e da ortodontista Sayonara Dias | Clínica | `SITE.generalDentist.cro`, `SITE.orthodontist.cro`; exigência do CFO para publicidade |
| 2 | Responsável técnico (nome + CRO) | Clínica | `SITE.technicalResponsible` (aparece no rodapé quando preenchido) |
| 3 | Razão social e CNPJ | Clínica | `SITE.legalName`, `SITE.cnpj` (Política de Privacidade) |
| 4 | Revisão da Política de Privacidade e do texto clínico por profissional/assessoria jurídica | Clínica + jurídico | `src/pages/politica-de-privacidade.astro` |
| 5 | Domínio definido; **aguardando pagamento e registro no Registro.br** (conta da clínica). Depois: DNS e deploy na Hostinger (ver `docs/DOMINIO.md` e `docs/CHECKLIST-PUBLICACAO.md`) | Clínica/Marcelo | Registro.br + Hostinger (`.htaccess` aplica os cabeçalhos) |
| 6 | Facebook e perfil do Google (Maps) — o Instagram já foi informado e está no site | Clínica | `SITE.facebook`, `SITE.googleMapsUrl` (melhora schema `sameAs` e o botão "Como chegar") |
| 7 | Fotografias reais (fachada, recepção, consultório, equipe em alta resolução) | Clínica | substituir arquivos em `src/assets/gen` e `src/assets/team` mantendo o nome |
| 8 | Imagens geradas por IA mostrando pessoas/ambientes: confirmar aceitação pelo CFO (publicidade) | Clínica/CRO-RJ | Home e Ortodontia |
| 9 | Permissão de uso da marca Invisalign (Align Technology) | Clínica | Página `/invisalign` |
| 10 | `PUBLIC_GTM_ID` (GTM/GA4/Ads) — hoje inativo, sem cookies | Marcelo | Variável de ambiente; ampliar CSP (ver segurança) |
| 11 | Coordenadas e perfil Google Business para o schema `geo` | Clínica | `SITE.geo` |

## Observações de escopo
- A lista do pedido cita "Ortodontia e Invisalign"; a v15 aprovada tem **duas páginas** (`/ortodontia` e `/invisalign`). Foi mantida. `/ortodontia-invisalign` redireciona para `/invisalign`.
- Adicionado, fora da v15: link "Política de Privacidade" na linha de crédito do rodapé (exigência LGPD). No celular, o rodapé fica 37 px mais alto por causa dessa linha extra.
