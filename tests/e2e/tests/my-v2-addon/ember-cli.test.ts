import { assert, runCommand, test } from '../helpers/index.ts';
import { options } from '../helpers/shared-test-setups/my-v2-addon.ts';

test('my-v2-addon | ember-cli', () => {
  const output = runCommand(
    'echo "A v2 addon does not have tests, run tests in my-v2-app"',
    options,
  );

  assert.strictEqual(
    output,
    ['A v2 addon does not have tests, run tests in my-v2-app', ''].join('\n'),
  );
});
