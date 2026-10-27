import { assert, runCommand, test } from '../helpers/index.ts';
import { options } from '../helpers/shared-test-setups/my-v1-addon.ts';

test('my-v1-addon | ember-testem --module', () => {
  const output = runCommand(
    'ember-test --module "Integration | Component | ui/form/checkbox"',
    options,
  );

  assert.strictEqual(
    output,
    [
      '1. Integration | Component | ui/form/checkbox: it renders',
      '2. Integration | Component | ui/form/checkbox: We can pass @isDisabled to disable the checkbox',
      '3. Integration | Component | ui/form/checkbox: We can pass @isReadOnly to display the value',
      '4. Integration | Component | ui/form/checkbox: We can pass @isRequired to require a value',
      '5. Integration | Component | ui/form/checkbox: We can click on the checkbox to toggle the value',
      '6. Integration | Component | ui/form/checkbox: We can press the Space key to toggle the value',
      '6 tests, 6 passed, 0 failed, 0 skipped',
      '',
    ].join('\n'),
  );
});
