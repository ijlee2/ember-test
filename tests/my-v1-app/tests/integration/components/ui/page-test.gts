import { render } from '@ember/test-helpers';
import { a11yAudit } from 'ember-a11y-testing/test-support';
import { UiPage } from 'my-v1-addon';
import { setupRenderingTest } from 'my-v1-app/tests/helpers';
import { module, test } from 'qunit';

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
});
