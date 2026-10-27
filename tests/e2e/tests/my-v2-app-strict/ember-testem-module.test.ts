import { assert, runCommand, test } from '../helpers/index.ts';
import { options } from '../helpers/shared-test-setups/my-v2-app-strict.ts';

test('my-v2-app-strict | ember-testem --module', () => {
  const output = runCommand(
    'ember-test --module "Acceptance | products"',
    options,
  );

  assert.strictEqual(
    output,
    [
      '1. Acceptance | products: Accessibility audit',
      '2. Acceptance | products > nest-product-details, control: We can visit the page',
      '3. Acceptance | products > nest-product-details, control: We can filter and sort products',
      '4. Acceptance | products > nest-product-details, control: We can check the details of a product',
      '5. Acceptance | products > nest-product-details, v1: We can visit the page',
      '6. Acceptance | products > nest-product-details, v1: We can filter and sort products',
      '7. Acceptance | products > nest-product-details, v1: We can check the details of a product',
      '7 tests, 5 passed, 0 failed, 2 skipped',
      '',
    ].join('\n'),
  );
});
