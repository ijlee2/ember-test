import { assert, test } from '@codemod-utils/tests';

import { createOptions } from '../../../src/steps/index.js';
import {
  codemodOptions,
  options,
} from '../../helpers/shared-test-setups/my-project.js';

test('steps | create-options > filter is defined', function () {
  assert.deepStrictEqual(
    createOptions({
      ...codemodOptions,
      qunit: {
        filter: 'Integration |',
        module: undefined,
        random: undefined,
      },
    }),
    {
      ...options,
      qunit: {
        filter: 'Integration |',
        module: undefined,
        seed: undefined,
      },
    },
  );
});
