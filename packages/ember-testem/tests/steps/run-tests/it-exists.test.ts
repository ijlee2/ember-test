import { assert, test } from '@codemod-utils/tests';

import { runTests } from '../../../src/steps/index.js';

test('steps | run-tests > it exists', function () {
  assert.ok(runTests);
});
