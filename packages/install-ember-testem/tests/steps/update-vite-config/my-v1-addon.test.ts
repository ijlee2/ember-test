import { assertFixture, loadFixture, test } from '@codemod-utils/tests';

import { updateViteConfig } from '../../../src/steps/index.js';
import {
  codemodOptions,
  options,
} from '../../helpers/shared-test-setups/my-v1-addon.js';

test('steps | update-vite-config > my-v1-addon', function () {
  const inputProject = {};

  const outputProject = {};

  loadFixture(inputProject, codemodOptions);

  updateViteConfig(options);

  assertFixture(outputProject, codemodOptions);
});
