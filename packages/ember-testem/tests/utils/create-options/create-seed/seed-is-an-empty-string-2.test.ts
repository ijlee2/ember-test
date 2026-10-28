import { assert, test } from '@codemod-utils/tests';

import { createSeed } from '../../../../src/utils/create-options/create-seed.js';
import { restoreMethods, stubMethods } from '../../../helpers/stub.js';

test('utils | create-options | create-seed > seed is an empty string (2)', function () {
  const stubs = stubMethods();

  stubs.mathRandom.onCall(0).returns(0);
  stubs.mathRandom.onCall(1).returns(1 - 1e-17);
  stubs.mathRandom.onCall(2).returns(0.913);

  const seed = createSeed('');

  assert.strictEqual(seed, 'wv8xeornbtb');

  assert.strictEqual(stubs.consoleLog.calledOnce, true);
  assert.strictEqual(stubs.mathRandom.calledThrice, true);

  assert.deepStrictEqual(
    stubs.consoleLog.args[0]?.[0],
    'Randomizing tests with seed: wv8xeornbtb',
  );

  restoreMethods();
});
