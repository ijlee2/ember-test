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

test('steps | update-config > file extension is .json', function () {
  const inputProject = {
    'testem.json': normalizeFile([
      `{`,
      `  "framework": "qunit",`,
      `  "test_page": "test.html",`,
      `  "src_files": ["*.js"]`,
      `}`,
      ``,
    ]),
  };

  const outputProject = {
    'testem.json': normalizeFile([
      `{`,
      `  "framework": "qunit",`,
      `  "test_page": "test.html",`,
      `  "src_files": ["*.js"]`,
      `}`,
      ``,
    ]),
  };

  loadFixture(inputProject, codemodOptions);

  updateConfig(options);

  assertFixture(outputProject, codemodOptions);
});
