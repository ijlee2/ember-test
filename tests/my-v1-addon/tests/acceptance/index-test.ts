import { visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'dummy/tests/helpers';
import { module, test } from 'qunit';

module('Acceptance | index', function (hooks) {
  setupApplicationTest(hooks);

  test('We can visit the page', async function (assert) {
    await visit('/');

    assert.ok(true);
  });
});
