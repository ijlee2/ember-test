import { assertFixture, loadFixture, test } from '@codemod-utils/tests';

import { run } from '../../src/run.js';
import { inputProject, outputProject } from '../fixtures/my-project/index.js';
import { codemodOptions } from '../helpers/shared-test-setups/my-project.js';

test('run > my-project', async function () {
  loadFixture(inputProject, codemodOptions);

  await run(codemodOptions);

  assertFixture(outputProject, codemodOptions);

  // Check idempotence
  await run(codemodOptions);

  assertFixture(outputProject, codemodOptions);
});
