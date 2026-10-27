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
    'babel.test.config.mjs': normalizeFile([
      `import { buildMacros } from '@embroider/macros/babel';`,
      ``,
      `const macros = buildMacros();`,
      ``,
      `export default {`,
      `  generatorOpts: {`,
      `    compact: false,`,
      `  },`,
      `  plugins: [`,
      `    [`,
      `      '@babel/plugin-transform-typescript',`,
      `      {`,
      `        allExtensions: true,`,
      `        allowDeclareFields: true,`,
      `        onlyRemoveTypeImports: true,`,
      `      },`,
      `    ],`,
      `    '@embroider/addon-dev/template-colocation-plugin',`,
      `    [`,
      `      'babel-plugin-ember-template-compilation',`,
      `      {`,
      `        transforms: [...macros.templateMacros],`,
      `      },`,
      `    ],`,
      `    [`,
      `      'module:decorator-transforms',`,
      `      {`,
      `        runtime: {`,
      `          import: 'decorator-transforms/runtime-esm',`,
      `        },`,
      `      },`,
      `    ],`,
      `    ...macros.babelMacros,`,
      `  ],`,
      `};`,
      ``,
    ]),
    'vite.test.config.mjs': normalizeFile([
      `import { ember, extensions } from '@embroider/vite';`,
      `import { babel } from '@rollup/plugin-babel';`,
      `import { defineConfig } from 'vite';`,
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
      `    ember(),`,
      `    babel({`,
      `      babelHelpers: 'inline',`,
      `      configFile: './babel.test.config.mjs',`,
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
