import { assert, test } from '@codemod-utils/tests';
import { stub } from 'sinon';

import { createSeed } from '../../../../src/utils/create-options/create-seed.js';

test('utils | create-options | create-seed > seed is an empty string (1)', function () {
  const consoleLog = stub(console, 'log');
  const mathRandom = stub(Math, 'random');

  mathRandom.onCall(0).returns(0.045);

  const seed = createSeed('');

  assert.strictEqual(seed, '1mbipx4bipx');

  assert.strictEqual(consoleLog.calledOnce, true);
  assert.strictEqual(mathRandom.calledOnce, true);

  assert.deepStrictEqual(
    consoleLog.args[0]?.[0],
    'Randomizing tests with seed: 1mbipx4bipx',
  );

  consoleLog.restore();
  mathRandom.restore();
});
