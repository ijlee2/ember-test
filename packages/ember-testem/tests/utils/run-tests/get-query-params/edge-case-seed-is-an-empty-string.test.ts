import { assert, test } from '@codemod-utils/tests';

import { getQueryParams } from '../../../../src/utils/run-tests/get-query-params.js';

test('utils | run-tests | get-query-params > edge case (seed is an empty string)', function () {
  const queryParams = getQueryParams({
    qunit: {
      filter: undefined,
      module: undefined,
      seed: '',
    },
  });

  assert.strictEqual(queryParams, '');
});
