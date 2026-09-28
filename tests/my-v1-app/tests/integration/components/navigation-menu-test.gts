import { findAll, render } from '@ember/test-helpers';
import { a11yAudit } from 'ember-a11y-testing/test-support';
import { NavigationMenu } from 'my-v1-addon';
import { setupRenderingTest } from 'my-v1-app/tests/helpers';
import { module, test } from 'qunit';

module('Integration | Component | navigation-menu', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    const menuItems = [
      {
        label: 'Home',
        route: 'index',
      },
    ];

    await render(
      <template>
        <NavigationMenu @menuItems={{menuItems}} @name="Main Navigation" />
      </template>,
    );

    assert
      .dom('[data-test-nav="Main Navigation"]')
      .hasAria('label', 'Main Navigation')
      .hasTagName('nav');

    const links = findAll('[data-test-link]');

    assert.strictEqual(links.length, 1);

    assert.dom(links[0]).hasAttribute('href', '/').hasText('Home');

    await a11yAudit();
  });
});
