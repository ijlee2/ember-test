import {
  assertFixture,
  loadFixture,
  normalizeFile,
  test,
} from '@codemod-utils/tests';

import { updateViteConfig } from '../../../src/steps/index.js';
import {
  codemodOptions,
  options,
} from '../../helpers/shared-test-setups/my-v2-app.js';

test('steps | update-vite-config > my-v2-app (file extension is .mts)', function () {
  const inputProject = {
    'vite.config.mts': normalizeFile([
      `import { classicEmberSupport, ember, extensions } from '@embroider/vite';`,
      `import { babel } from '@rollup/plugin-babel';`,
      `import type { UserConfig } from 'vite';`,
      ``,
      `export default {`,
      `  plugins: [`,
      `    classicEmberSupport(),`,
      `    ember(),`,
      `    babel({`,
      `      babelHelpers: 'runtime',`,
      `      extensions,`,
      `      parallel: true,`,
      `    }),`,
      `  ],`,
      `} satisfies UserConfig;`,
      ``,
    ]),
  };

  const outputProject = {
    'vite.config.mts': normalizeFile([
      `import { classicEmberSupport, ember, extensions } from '@embroider/vite';`,
      `import { babel } from '@rollup/plugin-babel';`,
      `import type { UserConfig } from 'vite';`,
      ``,
      `export default {`,
      `  plugins: [`,
      `    classicEmberSupport(),`,
      `    ember(),`,
      `    babel({`,
      `      babelHelpers: 'runtime',`,
      `      extensions,`,
      `      parallel: true,`,
      `    }),`,
      `  ],`,
      `} satisfies UserConfig;`,
      ``,
    ]),
    'vite.test.config.mts': normalizeFile([
      `import { defineConfig } from 'vite';`,
      ``,
      `import baseConfiguration from './vite.config.mts';`,
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

  updateViteConfig(options);

  assertFixture(outputProject, codemodOptions);
});
