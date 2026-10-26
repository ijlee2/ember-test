import { assert, runCommand, test } from '../helpers/index.ts';
import { options } from '../helpers/shared-test-setups/my-v2-app-strict.ts';

test('my-v2-app-strict | ember-testem (filter by --module)', () => {
  const output = runCommand(
    'ember-test --module "Acceptance | product-details"',
    options,
  );

  assert.strictEqual(
    output,
    [
      '1. Acceptance | product-details > nest-product-details, control: Accessibility audit',
      '2. Acceptance | product-details > nest-product-details, control: We can visit the page',
      '3. Acceptance | product-details > nest-product-details, control: We can check the details of another product',
      '4. Acceptance | product-details > nest-product-details, control: When we check a product that does not exist, we are redirected to the products route',
      '5. Acceptance | product-details > nest-product-details, v1: We cannot visit the page',
      '5 tests, 5 passed, 0 failed, 0 skipped',
      '',
    ].join('\n'),
  );
});
