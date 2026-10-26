import { assert, test } from '@codemod-utils/tests';

import { createSeed } from '../../../../src/utils/create-options/create-seed.js';

test('utils | create-options | create-seed > base case', function () {
  const seed = createSeed(undefined);

  assert.strictEqual(seed, undefined);
});
