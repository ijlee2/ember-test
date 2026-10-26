import { assert, test } from '@codemod-utils/tests';

import { createSeed } from '../../../../src/utils/create-options/create-seed.js';

test('utils | create-options | create-seed > seed is an empty string', function () {
  const seed = createSeed('');

  assert.strictEqual(typeof seed, 'string');
});
