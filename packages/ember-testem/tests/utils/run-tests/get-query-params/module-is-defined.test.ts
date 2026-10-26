import { assert, test } from '@codemod-utils/tests';

import { getQueryParams } from '../../../../src/utils/run-tests/get-query-params.js';

test('utils | run-tests | get-query-params > module is defined', function () {
  const queryParams = getQueryParams({
    qunit: {
      filter: undefined,
      module: 'Acceptance | index',
    },
  });

  assert.strictEqual(queryParams, 'module=Acceptance | index');
});
