import { assert, runCommand, test } from '../helpers/index.ts';
import { options } from '../helpers/shared-test-setups/my-v2-addon.ts';

test('my-v2-addon | ember-testem --module', () => {
  const output = runCommand(
    'ember-test --module "Integration | Component | ui/form/input" --path dist-for-testing',
    options,
  );

  assert.strictEqual(
    output,
    [
      '1. Integration | Component | ui/form/input: it renders',
      '2. Integration | Component | ui/form/input: We can pass @isDisabled to disable the input',
      '3. Integration | Component | ui/form/input: We can pass @isReadOnly to display the value',
      '4. Integration | Component | ui/form/input: We can pass @isRequired to require a value',
      '5. Integration | Component | ui/form/input: We can pass @onUpdate to get the updated value',
      '6. Integration | Component | ui/form/input: We can pass @type to create an email input',
      '6 tests, 6 passed, 0 failed, 0 skipped',
      '',
    ].join('\n'),
  );
});
