import { assert, test } from '@codemod-utils/tests';

import { createOptions } from '../../../src/steps/index.js';
import {
  codemodOptions,
  options,
} from '../../helpers/shared-test-setups/my-project.js';

test('steps | create-options > server is defined', function () {
  assert.deepStrictEqual(
    createOptions({
      ...codemodOptions,
      server: true,
    }),
    {
      ...options,
      launchBrowser: true,
    },
  );
});
