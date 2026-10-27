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
} from '../../helpers/shared-test-setups/my-v2-addon.js';

test('steps | create-vite-test-config > my-v2-addon', function () {
  const inputProject = {};

  const outputProject = {
    'vite.test.config.mjs': normalizeFile([
      `import { classicEmberSupport, ember, extensions } from '@embroider/vite';`,
      `import { babel } from '@rollup/plugin-babel';`,
      `import { defineConfig } from 'vite';`,
      ``,
      `// For scenario testing`,
      `const isCompat = Boolean(process.env.ENABLE_COMPAT_BUILD);`,
      ``,
      `export default defineConfig({`,
      `  build: {`,
      `    minify: false,`,
      `    rollupOptions: {`,
      `      input: {`,
      `        tests: 'tests/index.html',`,
      `      },`,
      `    },`,
      `    sourcemap: true,`,
      `  },`,
      `  plugins: [`,
      `    ...(isCompat ? [classicEmberSupport()] : []),`,
      `    ember(),`,
      `    babel({`,
      `      babelHelpers: 'inline',`,
      `      extensions,`,
      `      parallel: true,`,
      `    }),`,
      `  ],`,
      `});`,
      ``,
    ]),
  };

  loadFixture(inputProject, codemodOptions);

  createViteTestConfig(options);

  assertFixture(outputProject, codemodOptions);
});
