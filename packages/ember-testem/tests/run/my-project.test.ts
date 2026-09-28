import { assertFixture, loadFixture, test } from '@codemod-utils/tests';

import { run } from '../../src/run.js';
import { inputProject, outputProject } from '../fixtures/my-project/index.js';
import { codemodOptions } from '../helpers/shared-test-setups/my-project.js';

test('run > my-project', function () {
  loadFixture(inputProject, codemodOptions);

  run(codemodOptions);

  assertFixture(outputProject, codemodOptions);

  // Check idempotence
  run(codemodOptions);

  assertFixture(outputProject, codemodOptions);
});
