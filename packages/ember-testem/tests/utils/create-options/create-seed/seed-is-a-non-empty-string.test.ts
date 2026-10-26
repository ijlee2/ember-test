import { assert, test } from '@codemod-utils/tests';

import { createSeed } from '../../../../src/utils/create-options/create-seed.js';

test('utils | create-options | create-seed > seed is a non-empty string', function () {
  const seed = createSeed('gflqlwrm59j');

  assert.strictEqual(seed, 'gflqlwrm59j');
});
