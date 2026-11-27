#!/usr/bin/env bash
# Gera/atualiza a branch "hostinger-dist": contém SOMENTE o site pronto (conteúdo de dist/) na raiz,
# que é o que a Hostinger publica. Não faz push; não altera a branch atual.
# Uso: PUBLIC_SITE_URL=https://www.SEUDOMINIO.com.br scripts/gerar-branch-dist.sh
set -euo pipefail
: "${PUBLIC_SITE_URL:?Defina PUBLIC_SITE_URL com o domínio final (https://..., sem barra no fim)}"
BRANCH="${DIST_BRANCH:-hostinger-dist}"
ROOT="$(git rev-parse --show-toplevel)"; cd "$ROOT"
SRC="$(git rev-parse --short HEAD)"
[ -z "$(git status --porcelain)" ] || { echo "Há alterações não commitadas; faça commit antes."; exit 1; }

npm run build:hostinger
rm -f dist/_headers   # só vale em Netlify/Cloudflare; na Hostinger o equivalente é o .htaccess

WT="$(mktemp -d)"; trap 'git worktree remove --force "$WT" 2>/dev/null || true' EXIT
if git show-ref --verify --quiet "refs/heads/$BRANCH"; then
  git worktree add "$WT" "$BRANCH"
else
  git worktree add --detach "$WT"; git -C "$WT" checkout --orphan "$BRANCH"
fi
git -C "$WT" rm -rfq . 2>/dev/null || true
find "$WT" -mindepth 1 -maxdepth 1 ! -name .git -exec rm -rf {} +
cp -a dist/. "$WT"/
git -C "$WT" add -A -f
git -C "$WT" commit -q -m "deploy: build de $SRC para $PUBLIC_SITE_URL" || echo "Nada mudou desde o último build."
echo "Branch '$BRANCH' pronta (build de $SRC). Para enviar: git push origin $BRANCH"
