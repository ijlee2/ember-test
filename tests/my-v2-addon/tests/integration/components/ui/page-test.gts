import { render } from '@ember/test-helpers';
import { a11yAudit } from 'ember-a11y-testing/test-support';
import { module, test } from 'qunit';

import { UiPage } from '#src';
import { getClassForUiPage as getClass } from '#src/test-support';
import { setupRenderingTest } from '#tests/helpers';

module('Integration | Component | ui/page', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(
      <template>
        <UiPage @title="Form">
          <div data-test-content>
            Content goes here.
          </div>
        </UiPage>
      </template>,
    );

    assert.dom('h1').hasText('Form');

    assert.dom('[data-test-content]').exists();

    await a11yAudit();
  });

  test('CSS modules', async function (assert) {
    await render(
      <template>
        <UiPage @title="Form">
          <div data-test-content>
            Content goes here.
          </div>
        </UiPage>
      </template>,
    );

    assert.dom('h1').hasClass(getClass('title'));
  });
});
