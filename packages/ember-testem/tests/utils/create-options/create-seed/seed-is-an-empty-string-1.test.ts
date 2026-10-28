import { assert, test } from '@codemod-utils/tests';

import { createSeed } from '../../../../src/utils/create-options/create-seed.js';
import { restoreMethods, stubMethods } from '../../../helpers/stub.js';

test('utils | create-options | create-seed > seed is an empty string (1)', function () {
  const stubs = stubMethods();

  stubs.mathRandom.onCall(0).returns(0.045);

  const seed = createSeed('');

  assert.strictEqual(seed, '1mbipx4bipx');

  assert.strictEqual(stubs.consoleLog.calledOnce, true);
  assert.strictEqual(stubs.mathRandom.calledOnce, true);

  assert.deepStrictEqual(
    stubs.consoleLog.args[0]?.[0],
    'Randomizing tests with seed: 1mbipx4bipx',
  );

  restoreMethods();
});
