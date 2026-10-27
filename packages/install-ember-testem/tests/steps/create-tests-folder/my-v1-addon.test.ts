import { assertFixture, loadFixture, test } from '@codemod-utils/tests';

import { createTestsFolder } from '../../../src/steps/index.js';
import {
  codemodOptions,
  options,
} from '../../helpers/shared-test-setups/my-v1-addon.js';

test('steps | create-tests-folder > my-v1-addon', function () {
  const inputProject = {};

  const outputProject = {};

  loadFixture(inputProject, codemodOptions);

  createTestsFolder(options);

  assertFixture(outputProject, codemodOptions);
});
