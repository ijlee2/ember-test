import {
  assertFixture,
  loadFixture,
  normalizeFile,
  test,
} from '@codemod-utils/tests';

import { updateConfig } from '../../../src/steps/index.js';
import {
  codemodOptions,
  options,
} from '../../helpers/shared-test-setups/my-v2-app.js';

test('steps | update-config > file extension is .js (2)', function () {
  const inputProject = {
    'testem.js': normalizeFile([
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

  updateConfig(options);

  assertFixture(outputProject, codemodOptions);
});
