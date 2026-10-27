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

test('steps | update-testem-config > file extension is .js (1)', function () {
  const inputProject = {
    'testem.js': normalizeFile([
      `'use strict';`,
      ``,
      `module.exports = {`,
      `  test_page: 'tests/index.html?hidepassed',`,
      `  disable_watching: true,`,
      `  launch_in_ci: ['Chrome'],`,
      `  launch_in_dev: ['Chrome'],`,
      `  browser_start_timeout: 120,`,
      `  browser_args: {`,
      `    Chrome: {`,
      `      ci: [`,
      `        // --no-sandbox is needed when running Chrome inside a container`,
      `        process.env.CI ? '--no-sandbox' : null,`,
      `        '--headless',`,
      `        '--disable-dev-shm-usage',`,
      `        '--disable-software-rasterizer',`,
      `        '--mute-audio',`,
      `        '--remote-debugging-port=0',`,
      `        '--window-size=1440,900',`,
      `      ].filter(Boolean),`,
      `    },`,
      `  },`,
      `};`,
      ``,
    ]),
  };

  const outputProject = {
    'testem.mjs': normalizeFile([
      `export default {`,
      `  test_page: 'tests/index.html?hidepassed',`,
      `  disable_watching: true,`,
      `  launch_in_ci: ['Chrome'],`,
      `  launch_in_dev: ['Chrome'],`,
      `  browser_start_timeout: 120,`,
      ``,
      `  browser_args: {`,
      `    Chrome: {`,
      `      ci: [`,
      `        // --no-sandbox is needed when running Chrome inside a container`,
      `        process.env.CI ? '--no-sandbox' : null,`,
      `        '--headless',`,
      `        '--disable-dev-shm-usage',`,
      `        '--disable-software-rasterizer',`,
      `        '--mute-audio',`,
      `        '--remote-debugging-port=0',`,
      `        '--window-size=1440,900',`,
      `      ].filter(Boolean),`,
      `    },`,
      `  }`,
      `};`,
      ``,
    ]),
  };

  loadFixture(inputProject, codemodOptions);

  updateTestemConfig(options);

  assertFixture(outputProject, codemodOptions);
});
