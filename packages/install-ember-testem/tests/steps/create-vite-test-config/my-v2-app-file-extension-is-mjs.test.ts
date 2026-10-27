import {
  assertFixture,
  loadFixture,
  normalizeFile,
  test,
} from '@codemod-utils/tests';

import { createViteTestConfig } from '../../../src/steps/index.js';
import {
  codemodOptions,
  options,
} from '../../helpers/shared-test-setups/my-v2-app.js';

test('steps | create-vite-test-config > my-v2-app (file extension is .mjs)', function () {
  const inputProject = {
    'vite.config.mjs': normalizeFile([
      `import { classicEmberSupport, ember, extensions } from '@embroider/vite';`,
      `import { babel } from '@rollup/plugin-babel';`,
      `import { defineConfig } from 'vite';`,
      ``,
      `export default defineConfig({`,
      `  plugins: [`,
      `    classicEmberSupport(),`,
      `    ember(),`,
      `    babel({`,
      `      babelHelpers: 'runtime',`,
      `      extensions,`,
      `      parallel: true,`,
      `    }),`,
      `  ],`,
      `});`,
      ``,
    ]),
  };

  const outputProject = {
    'vite.config.mjs': normalizeFile([
      `import { classicEmberSupport, ember, extensions } from '@embroider/vite';`,
      `import { babel } from '@rollup/plugin-babel';`,
      `import { defineConfig } from 'vite';`,
      ``,
      `export default defineConfig({`,
      `  plugins: [`,
      `    classicEmberSupport(),`,
      `    ember(),`,
      `    babel({`,
      `      babelHelpers: 'runtime',`,
      `      extensions,`,
      `      parallel: true,`,
      `    }),`,
      `  ],`,
      `});`,
      ``,
    ]),
    'vite.test.config.mjs': normalizeFile([
      `import { defineConfig } from 'vite';`,
      ``,
      `import baseConfiguration from './vite.config.mjs';`,
      ``,
      `export default defineConfig({`,
      `  ...baseConfiguration,`,
      `  build: {`,
      `    minify: false,`,
      `    sourcemap: true,`,
      `  },`,
      `});`,
      ``,
    ]),
  };

  loadFixture(inputProject, codemodOptions);

  createViteTestConfig(options);

  assertFixture(outputProject, codemodOptions);
});
