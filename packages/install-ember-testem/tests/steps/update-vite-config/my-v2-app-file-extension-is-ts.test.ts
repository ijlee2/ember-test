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

test('steps | update-vite-config > my-v2-app (file extension is .ts)', function () {
  const inputProject = {
    'vite.config.ts': normalizeFile([
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
    'vite.config.ts': normalizeFile([
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
    'vite.test.config.mts': normalizeFile([
      `import { defineConfig } from 'vite';`,
      ``,
      `import baseConfiguration from './vite.config.ts';`,
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
