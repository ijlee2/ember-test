import { assertFixture, loadFixture, test } from '@codemod-utils/tests';

import { createViteTestConfig } from '../../../src/steps/index.js';
import {
  codemodOptions,
  options,
} from '../../helpers/shared-test-setups/my-v1-app.js';

test('steps | create-vite-test-config > my-v1-app', function () {
  const inputProject = {};

  const outputProject = {};

  loadFixture(inputProject, codemodOptions);

  createViteTestConfig(options);

  assertFixture(outputProject, codemodOptions);
});
