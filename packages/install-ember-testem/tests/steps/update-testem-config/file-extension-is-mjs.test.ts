import {
  assertFixture,
  loadFixture,
  normalizeFile,
  test,
} from '@codemod-utils/tests';

import { updateTestemConfig } from '../../../src/steps/index.js';
import {
  codemodOptions,
  options,
} from '../../helpers/shared-test-setups/my-v2-app.js';

test('steps | update-testem-config > file extension is .mjs', function () {
  const inputProject = {
    'testem.mjs': normalizeFile([
      `export default {`,
      `  launch_in_ci: ['Chrome'],`,
      `  launch_in_dev: ['Chrome'],`,
      `  test_page: 'tests/index.html?hidepassed&nolint',`,
      `};`,
      ``,
    ]),
  };

  const outputProject = {
    'testem.mjs': normalizeFile([
      `export default {`,
      `  launch_in_ci: ['Chrome'],`,
      `  launch_in_dev: ['Chrome'],`,
      `  test_page: 'tests/index.html?hidepassed&nolint',`,
      `};`,
      ``,
    ]),
  };

  loadFixture(inputProject, codemodOptions);

  updateTestemConfig(options);

  assertFixture(outputProject, codemodOptions);
});
