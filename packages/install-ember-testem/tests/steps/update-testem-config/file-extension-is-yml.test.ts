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

test('steps | update-testem-config > file extension is .yml', function () {
  const inputProject = {
    'testem.yml': normalizeFile([
      `framework: qunit`,
      `before_tests: tsc`,
      `on_exit: rm -f hello.js tests.js`,
      `src_files:`,
      `- "src/**/*.ts"`,
      `serve_files:`,
      `- "*.js"`,
      ``,
    ]),
  };

  const outputProject = {
    'testem.yml': normalizeFile([
      `framework: qunit`,
      `before_tests: tsc`,
      `on_exit: rm -f hello.js tests.js`,
      `src_files:`,
      `- "src/**/*.ts"`,
      `serve_files:`,
      `- "*.js"`,
      ``,
    ]),
  };

  loadFixture(inputProject, codemodOptions);

  updateTestemConfig(options);

  assertFixture(outputProject, codemodOptions);
});
