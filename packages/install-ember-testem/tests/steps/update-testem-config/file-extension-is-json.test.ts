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

test('steps | update-testem-config > file extension is .json', function () {
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

  updateTestemConfig(options);

  assertFixture(outputProject, codemodOptions);
});
