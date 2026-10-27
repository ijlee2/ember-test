import { assertFixture, loadFixture, test } from '@codemod-utils/tests';

import { updateViteConfig } from '../../../src/steps/index.js';
import {
  codemodOptions,
  options,
} from '../../helpers/shared-test-setups/my-v2-app.js';

test('steps | update-vite-config > my-v2-app (config does not exist)', function () {
  const inputProject = {};

  const outputProject = {};

  loadFixture(inputProject, codemodOptions);

  updateViteConfig(options);

  assertFixture(outputProject, codemodOptions);
});
