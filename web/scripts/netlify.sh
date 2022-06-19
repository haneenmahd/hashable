#!/bin/bash
set -xeuo pipefail
test "$CI" = true || exit 1
npx pnpm install --no-frozen-lockfile -r --store-dir=node_modules/.pnpm-store

npx pnpm run dev
