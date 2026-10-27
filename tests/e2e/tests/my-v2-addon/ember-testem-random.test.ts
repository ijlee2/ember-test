import { assert, runCommand, test } from '../helpers/index.ts';
import { options } from '../helpers/shared-test-setups/my-v2-addon.ts';

test('my-v2-addon | ember-testem --random', () => {
  const output = runCommand(
    'ember-test --path dist-for-testing --random kj05l8ejz5',
    options,
  );

  assert.strictEqual(
    output,
    [
      '1. Integration | Component | ui/form: it renders',
      '2. Integration | Component | ui/form/checkbox: We can pass @isReadOnly to display the value',
      '3. Integration | Component | ui/form/input: We can pass @isReadOnly to display the value',
      '4. Integration | Component | ui/form/field: it renders',
      '5. Integration | Component | ui/form/textarea: We can pass @onUpdate to get the updated value',
      '6. Integration | Component | ui/form/number: We can pass @onUpdate to get the updated value',
      '7. Integration | Component | navigation-menu: CSS modules',
      '8. Integration | Component | ui/page: it renders',
      '9. Integration | Component | ui/form/select: We can pass @isDisabled to disable the select',
      '10. Integration | Component | ui/form/number: We can pass @isDisabled to disable the input',
      '11. Integration | Component | ui/form/checkbox: it renders',
      '12. Integration | Component | ui/form/select: it renders when @options is undefined',
      '13. Integration | Component | ui/form/checkbox: We can press the Space key to toggle the value',
      '14. Integration | Component | ui/form/checkbox: We can pass @isDisabled to disable the checkbox',
      '15. Integration | Component | ui/form/select: We can pass @onUpdate to get the updated value',
      '16. Integration | Component | ui/form/input: We can pass @onUpdate to get the updated value',
      '17. Integration | Component | ui/form/checkbox: We can click on the checkbox to toggle the value',
      '18. Integration | Component | ui/form/input: We can pass @isDisabled to disable the input',
      '19. Integration | Component | ui/form/information: We can pass @title to display the form title',
      '20. Integration | Component | ui/form/textarea: We can pass @isDisabled to disable the text area',
      '21. Integration | Component | navigation-menu: it renders',
      '22. Integration | Component | ui/form/number: it renders',
      '23. Integration | Component | ui/page: CSS modules',
      '24. Integration | Component | ui/form/number: We can pass @isRequired to require a value',
      '25. Integration | Component | ui/form/input: it renders',
      '26. Integration | Component | ui/form/textarea: We can pass @isRequired to require a value',
      '27. Integration | Component | ui/form/number: We can pass @maxValue, @minValue, and @step to limit values',
      '28. ember-qunit: Ember.onerror validation: Ember.onerror is functioning properly',
      '29. Integration | Component | ui/form/information: We can pass @instructions to display the form instructions',
      '30. Integration | Component | ui/form/number: We can pass @isReadOnly to display the value',
      '31. Integration | Component | ui/form/select: We can pass @isRequired to require a value',
      '32. Integration | Component | ui/form/select: We can pass @isReadOnly to display the value',
      '33. Integration | Component | ui/form/select: We can click on the clear button to reset the option',
      '34. Integration | Component | ui/form/input: We can pass @type to create an email input',
      '35. Integration | Component | ui/form/select: it renders',
      '36. Integration | Component | ui/form/input: We can pass @isRequired to require a value',
      '37. Integration | Component | ui/form/checkbox: We can pass @isRequired to require a value',
      '38. Integration | Component | ui/form/textarea: it renders',
      '39. Integration | Component | ui/form/field: We can pass @errorMessage to show an error message',
      '40. Integration | Component | ui/form/information: it renders',
      '41. Integration | Component | ui/form/textarea: We can pass @isReadOnly to display the value',
      '42. Integration | Component | ui/form: We can submit the form',
      '42 tests, 42 passed, 0 failed, 0 skipped',
      '',
    ].join('\n'),
  );
});
