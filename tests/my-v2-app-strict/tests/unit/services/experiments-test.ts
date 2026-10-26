import type { Registry as Services } from '@ember/service';
import {
  settled,
  type TestContext as BaseTestContext,
} from '@ember/test-helpers';
import { setupTest } from 'my-v2-app-strict/tests/helpers';
import { module, skip, test } from 'qunit';
import { stub } from 'sinon';

interface TestContext extends BaseTestContext {
  experiments: Services['experiments'];
}

module('Unit | Service | experiments', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(function (this: TestContext) {
    this.experiments = this.owner.lookup('service:experiments');
  });

  module('decideVariant', function () {
    test('sets a variant at random', async function (this: TestContext, assert) {
      const random = stub(Math, 'random');
      random.onCall(0).returns(0.045);
      random.onCall(1).returns(0.779);

      this.experiments.decideVariant('experiment-a');
      await settled();
      let variant: string = this.experiments.getVariant('experiment-a');

      assert.strictEqual(variant, 'control');
      assert.strictEqual(random.callCount, 1);

      // Check another experiment
      random.reset();
      random.onCall(0).returns(0.913);
      random.onCall(1).returns(0.278);

      this.experiments.decideVariant('experiment-b');
      await settled();
      variant = this.experiments.getVariant('experiment-b');

      assert.strictEqual(variant, 'v2');
      assert.strictEqual(random.callCount, 1);

      random.restore();
    });

    test('sets a variant only once', async function (this: TestContext, assert) {
      // Check one experiment
      const random = stub(Math, 'random');
      random.onCall(0).returns(0.045);
      random.onCall(1).returns(0.779);

      this.experiments.decideVariant('experiment-a');
      await settled();
      this.experiments.decideVariant('experiment-a');
      await settled();
      let variant: string = this.experiments.getVariant('experiment-a');

      assert.strictEqual(variant, 'control');
      assert.strictEqual(random.callCount, 1);

      // Check another experiment
      random.reset();
      random.onCall(0).returns(0.913);
      random.onCall(1).returns(0.278);

      this.experiments.decideVariant('experiment-b');
      await settled();
      this.experiments.decideVariant('experiment-b');
      await settled();
      variant = this.experiments.getVariant('experiment-b');

      assert.strictEqual(variant, 'v2');
      assert.strictEqual(random.callCount, 1);

      random.restore();
    });
  });

  module('getVariant', function () {
    test('throws an error when the experiment is unknown', function (this: TestContext, assert) {
      assert.throws(
        () => {
          // @ts-expect-error: We want an error to occur.
          this.experiments.getVariant('experiment-c');
        },
        (error: Error) => {
          return (
            error.message ===
            'Assertion Failed: experiment-c is an unknown experiment.'
          );
        },
      );
    });

    skip('throws an error when the variant has not been assigned', function (this: TestContext, assert) {
      assert.throws(
        () => {
          this.experiments.getVariant('experiment-a');
        },
        (error: Error) => {
          return (
            error.message ===
            'Assertion Failed: The variant for experiment-a has not been assigned. Call decideVariant() first.'
          );
        },
      );
    });
  });
});
