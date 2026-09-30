#!/usr/bin/env sh

#----------
#
#  A. Purpose
#
#    Fix all test fixtures after updating the source code.
#
#  B. Usage
#
#    ./update-test-fixtures.sh
#
#---------

# Compile TypeScript
pnpm build

# Update fixtures
rm -r "tests/fixtures/my-v1-addon/output"
cp -r "tests/fixtures/my-v1-addon/input" "tests/fixtures/my-v1-addon/output"

./dist/bin/install-ember-testem.js \
  --root "tests/fixtures/my-v1-addon/output"

rm -r "tests/fixtures/my-v1-app/output"
cp -r "tests/fixtures/my-v1-app/input" "tests/fixtures/my-v1-app/output"

./dist/bin/install-ember-testem.js \
  --root "tests/fixtures/my-v1-app/output"

rm -r "tests/fixtures/my-v2-addon/output"
cp -r "tests/fixtures/my-v2-addon/input" "tests/fixtures/my-v2-addon/output"

./dist/bin/install-ember-testem.js \
  --root "tests/fixtures/my-v2-addon/output"

rm -r "tests/fixtures/my-v2-app/output"
cp -r "tests/fixtures/my-v2-app/input" "tests/fixtures/my-v2-app/output"

./dist/bin/install-ember-testem.js \
  --root "tests/fixtures/my-v2-app/output"
