import ProductsProductRoute from 'my-v2-app-strict/routes/products/product';
import { setupTest } from 'my-v2-app-strict/tests/helpers';
import { module, test } from 'qunit';

module('Unit | Route | products/product', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(function () {
    this.owner.register('route:products/product', ProductsProductRoute);
  });

  test('it exists', function (assert) {
    const route = this.owner.lookup('route:products/product');

    assert.ok(route);
  });
});
