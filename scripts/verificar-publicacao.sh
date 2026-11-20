#!/usr/bin/env bash
# Confere se o endereço público serve o mesmo build que está em dist/ (não basta o GitHub Actions marcar success).
# Uso: PUBLIC_BUILD_COMMIT=$(git rev-parse --short HEAD) npm run build && scripts/verificar-publicacao.sh
set -u
BASE="${1:-https://marcelooliveira-ia.github.io/odonto_space_site}"
ok=1
for p in "" implantes-dentarios proteses-dentarias ortodontia-invisalign a-clinica-e-equipe contato-e-localizacao; do
  local_f="dist/${p:+$p/}index.html"
  pub=$(curl -sSL -m 30 -H 'Cache-Control: no-cache' "$BASE/${p:+$p/}?v=$(date +%s)")
  want=$(grep -o 'name="build-commit" content="[^"]*"' "$local_f" | head -1)
  got=$(printf '%s' "$pub" | grep -o 'name="build-commit" content="[^"]*"' | head -1)
  if [ "$want" = "$got" ] && [ -n "$got" ]; then echo "OK   /${p}  ($got)"; else echo "DIFF /${p}  esperado: $want | publicado: ${got:-<sem marcador>}"; ok=0; fi
done
[ $ok = 1 ] && echo "Publicação confere com o build local." || { echo "ATENÇÃO: o endereço público NÃO serve este build (cache do Pages dura até 10 min, ou o deploy não chegou)."; exit 1; }
