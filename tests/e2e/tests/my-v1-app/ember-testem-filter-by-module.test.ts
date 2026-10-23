import { assert, runCommand, test } from '../helpers/index.ts';
import { options } from '../helpers/shared-test-setups/my-v1-app.ts';

test('my-v1-app | ember-testem (filter by --module)', () => {
  const output = runCommand('ember-test --module "Acceptance | form"', options);

  assert.strictEqual(
    output,
    [
      '1. Acceptance | form: Accessibility audit',
      '2. Acceptance | form > subscribe-to-ember-times, control: We can visit the page',
      '3. Acceptance | form > subscribe-to-ember-times, control: We can submit the contact me form',
      '4. Acceptance | form > subscribe-to-ember-times, v1: We can visit the page',
      '5. Acceptance | form > subscribe-to-ember-times, v1: We can submit the contact me form',
      '5 tests, 5 passed, 0 failed, 0 skipped',
      '',
    ].join('\n'),
  );
});
