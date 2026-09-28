import { render } from '@ember/test-helpers';
import sort from 'my-v1-app/helpers/sort';
import { setupRenderingTest } from 'my-v1-app/tests/helpers';
import { module, test } from 'qunit';

module('Integration | Helper | sort', function (hooks) {
  setupRenderingTest(hooks);

  module('value is a number', function () {
    const arrayOfObjects = [
      { key: -3 },
      { key: 4 },
      { key: 1.5 },
      { key: 0 },
      { key: -7.0 },
    ];

    test('it works', async function (assert) {
      await render(
        <template>
          <div data-test-output="1">
            {{#each (sort arrayOfObjects sortBy="key") as |obj|}}
              {{obj.key}}
            {{/each}}
          </div>

          <div data-test-output="2">
            {{#each (sort arrayOfObjects sortBy="key:asc") as |obj|}}
              {{obj.key}}
            {{/each}}
          </div>

          <div data-test-output="3">
            {{#each (sort arrayOfObjects sortBy="key:desc") as |obj|}}
              {{obj.key}}
            {{/each}}
          </div>

          <div data-test-output="4">
            {{#each (sort arrayOfObjects sortBy=null) as |obj|}}
              {{obj.key}}
            {{/each}}
          </div>

          <div data-test-output="5">
            {{#each (sort arrayOfObjects sortBy=undefined) as |obj|}}
              {{obj.key}}
            {{/each}}
          </div>
        </template>,
      );

      assert.dom('[data-test-output="1"]').hasText('-7 -3 0 1.5 4');

      assert.dom('[data-test-output="2"]').hasText('-7 -3 0 1.5 4');

      assert.dom('[data-test-output="3"]').hasText('4 1.5 0 -3 -7');

      assert.dom('[data-test-output="4"]').hasText('-3 4 1.5 0 -7');

      assert.dom('[data-test-output="5"]').hasText('-3 4 1.5 0 -7');
    });
  });

  module('value is a string', function () {
    const arrayOfObjects = [
      { key: 'c1' },
      { key: 'a0' },
      { key: 'b2' },
      { key: 'c2' },
      { key: 'a2' },
    ];

    test('it works', async function (assert) {
      await render(
        <template>
          <div data-test-output="1">
            {{#each (sort arrayOfObjects sortBy="key") as |obj|}}
              {{obj.key}}
            {{/each}}
          </div>

          <div data-test-output="2">
            {{#each (sort arrayOfObjects sortBy="key:asc") as |obj|}}
              {{obj.key}}
            {{/each}}
          </div>

          <div data-test-output="3">
            {{#each (sort arrayOfObjects sortBy="key:desc") as |obj|}}
              {{obj.key}}
            {{/each}}
          </div>

          <div data-test-output="4">
            {{#each (sort arrayOfObjects sortBy=null) as |obj|}}
              {{obj.key}}
            {{/each}}
          </div>

          <div data-test-output="5">
            {{#each (sort arrayOfObjects sortBy=undefined) as |obj|}}
              {{obj.key}}
            {{/each}}
          </div>
        </template>,
      );

      assert.dom('[data-test-output="1"]').hasText('a0 a2 b2 c1 c2');

      assert.dom('[data-test-output="2"]').hasText('a0 a2 b2 c1 c2');

      assert.dom('[data-test-output="3"]').hasText('c2 c1 b2 a2 a0');

      assert.dom('[data-test-output="4"]').hasText('c1 a0 b2 c2 a2');

      assert.dom('[data-test-output="5"]').hasText('c1 a0 b2 c2 a2');
    });
  });
});
