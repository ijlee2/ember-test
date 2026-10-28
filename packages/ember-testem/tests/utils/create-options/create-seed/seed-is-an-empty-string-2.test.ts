import { assert, test } from '@codemod-utils/tests';
import { stub } from 'sinon';

import { createSeed } from '../../../../src/utils/create-options/create-seed.js';

test('utils | create-options | create-seed > seed is an empty string (2)', function () {
  const consoleLog = stub(console, 'log');
  const mathRandom = stub(Math, 'random');

  mathRandom.onCall(0).returns(0);
  mathRandom.onCall(1).returns(1 - 1e-17);
  mathRandom.onCall(2).returns(0.913);

  const seed = createSeed('');

  assert.strictEqual(seed, 'wv8xeornbtb');

  assert.strictEqual(consoleLog.calledOnce, true);
  assert.strictEqual(mathRandom.calledThrice, true);

  assert.deepStrictEqual(
    consoleLog.args[0]?.[0],
    'Randomizing tests with seed: wv8xeornbtb',
  );

  consoleLog.restore();
  mathRandom.restore();
});
