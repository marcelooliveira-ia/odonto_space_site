# Padrão de infraestrutura para clientes do MARCELO.IA

## Regra de propriedade
| Ativo | Dono | Onde |
|---|---|---|
| **Domínio** | O cliente (CPF/CNPJ dele) | Conta própria do cliente no Registro.br. **Nunca** na conta pessoal do MARCELO |
| Hospedagem | MARCELO.IA | Plano Unlimited Web Hosting (Hostinger), um site por cliente |
| Código-fonte | MARCELO.IA (licença de uso ao cliente, a combinar em contrato) | Repositório GitHub por cliente |
| Perfis (Google Meu Negócio, Instagram, GTM/GA4) | O cliente, com o MARCELO como administrador | Contas do cliente |

Motivo: o domínio é o ativo mais valioso e difícil de recuperar. Se ele ficar na conta do MARCELO, o cliente corre risco de perda e o MARCELO assume responsabilidade legal e de cobrança. Se ficar com o cliente, a troca de hospedagem é só apontar o DNS.

## Acesso ao DNS sem senha do cliente
Preferir que o cliente aponte os servidores DNS do domínio para a Hostinger uma única vez (ver `docs/DOMINIO.md`, opção B). Depois disso a zona é gerenciada no hPanel. Não compartilhar a senha do Registro.br.

## Roteiro por novo cliente
1. Cliente registra o domínio no Registro.br e paga.
2. Criar o repositório do cliente a partir deste modelo (Astro estático).
3. Criar um site novo no plano Unlimited.
4. Gerar a branch `*-dist` com o domínio definitivo e fazer o deploy estático.
5. Cliente delega o DNS (opção B); ativar SSL; validar.
6. Registrar no contrato: o que está incluso (hospedagem, atualizações, suporte), prazo e valor da mensalidade, e quem é dono do quê.

## Alerta
O plano Unlimited foi contratado por 4 anos no nome do MARCELO. Se a hospedagem ficar atrelada a um cliente que sai, o site dele deve poder ser exportado (a branch `*-dist` e o repositório permitem isso). Registre essa regra no contrato.
