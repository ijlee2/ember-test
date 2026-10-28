import { assert, test } from '@codemod-utils/tests';

import { createOptions } from '../../../src/steps/index.js';
import {
  codemodOptions,
  options,
} from '../../helpers/shared-test-setups/my-project.js';

test('steps | create-options > module is defined', function () {
  assert.deepStrictEqual(
    createOptions({
      ...codemodOptions,
      qunit: {
        filter: undefined,
        module: 'Acceptance | index',
        random: undefined,
      },
    }),
    {
      ...options,
      qunit: {
        filter: undefined,
        module: 'Acceptance | index',
        seed: undefined,
      },
    },
  );
});
