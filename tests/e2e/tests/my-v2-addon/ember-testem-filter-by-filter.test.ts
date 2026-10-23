import { assert, runCommand, test } from '../helpers/index.ts';
import { options } from '../helpers/shared-test-setups/my-v2-addon.ts';

test('my-v2-addon | ember-testem (filter by --filter)', () => {
  const output = runCommand(
    'ember-test --filter "!it renders" --path dist-for-testing',
    options,
  );

  assert.strictEqual(
    output,
    [
      '1. Integration | Component | navigation-menu: CSS modules',
      '2. Integration | Component | ui/form/checkbox: We can pass @isDisabled to disable the checkbox',
      '3. Integration | Component | ui/form/checkbox: We can pass @isReadOnly to display the value',
      '4. Integration | Component | ui/form/checkbox: We can pass @isRequired to require a value',
      '5. Integration | Component | ui/form/checkbox: We can click on the checkbox to toggle the value',
      '6. Integration | Component | ui/form/checkbox: We can press the Space key to toggle the value',
      '7. Integration | Component | ui/form/field: We can pass @errorMessage to show an error message',
      '8. Integration | Component | ui/form/information: We can pass @title to display the form title',
      '9. Integration | Component | ui/form/information: We can pass @instructions to display the form instructions',
      '10. Integration | Component | ui/form/input: We can pass @isDisabled to disable the input',
      '11. Integration | Component | ui/form/input: We can pass @isReadOnly to display the value',
      '12. Integration | Component | ui/form/input: We can pass @isRequired to require a value',
      '13. Integration | Component | ui/form/input: We can pass @onUpdate to get the updated value',
      '14. Integration | Component | ui/form/input: We can pass @type to create an email input',
      '15. Integration | Component | ui/form/number: We can pass @isDisabled to disable the input',
      '16. Integration | Component | ui/form/number: We can pass @isReadOnly to display the value',
      '17. Integration | Component | ui/form/number: We can pass @isRequired to require a value',
      '18. Integration | Component | ui/form/number: We can pass @maxValue, @minValue, and @step to limit values',
      '19. Integration | Component | ui/form/number: We can pass @onUpdate to get the updated value',
      '20. Integration | Component | ui/form/select: We can pass @isDisabled to disable the select',
      '21. Integration | Component | ui/form/select: We can pass @isReadOnly to display the value',
      '22. Integration | Component | ui/form/select: We can pass @isRequired to require a value',
      '23. Integration | Component | ui/form/select: We can pass @onUpdate to get the updated value',
      '24. Integration | Component | ui/form/select: We can click on the clear button to reset the option',
      '25. Integration | Component | ui/form/textarea: We can pass @isDisabled to disable the text area',
      '26. Integration | Component | ui/form/textarea: We can pass @isReadOnly to display the value',
      '27. Integration | Component | ui/form/textarea: We can pass @isRequired to require a value',
      '28. Integration | Component | ui/form/textarea: We can pass @onUpdate to get the updated value',
      '29. Integration | Component | ui/form: We can submit the form',
      '30. Integration | Component | ui/page: CSS modules',
      '31. ember-qunit: Ember.onerror validation: Ember.onerror is functioning properly',
      '31 tests, 31 passed, 0 failed, 0 skipped',
      '',
    ].join('\n'),
  );
});
