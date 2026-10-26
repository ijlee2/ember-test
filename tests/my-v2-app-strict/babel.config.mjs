import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import { babelMacros } from '@embroider/compat/babel';
import asyncArrowTaskTransform from 'ember-concurrency/async-arrow-task-transform';

export default {
  generatorOpts: {
    compact: false,
  },
  plugins: [
    [
      '@babel/plugin-transform-typescript',
      {
        allExtensions: true,
        allowDeclareFields: true,
        onlyRemoveTypeImports: true,
      },
    ],
    [
      'babel-plugin-ember-template-compilation',
      {
        transforms: [],
      },
    ],
    [
      'module:decorator-transforms',
      {
        runtime: {
          import: fileURLToPath(
            import.meta.resolve('decorator-transforms/runtime-esm'),
          ),
        },
      },
    ],
    [
      '@babel/plugin-transform-runtime',
      {
        absoluteRuntime: dirname(fileURLToPath(import.meta.url)),
      },
    ],
    ...babelMacros(),
    asyncArrowTaskTransform,
  ],
};
