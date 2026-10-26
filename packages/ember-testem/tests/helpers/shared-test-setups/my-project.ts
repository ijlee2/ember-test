import type { CodemodOptions, Options } from '../../../src/types/index.js';

const codemodOptions: CodemodOptions = {
  buildPath: 'dist',
  port: 0,
  projectRoot: 'tmp/my-project',
  qunit: {
    filter: undefined,
    module: undefined,
  },
  server: undefined,
};

const options: Options = {
  buildPath: 'dist',
  launchBrowser: false,
  port: 0,
  projectRoot: 'tmp/my-project',
  qunit: {
    filter: undefined,
    module: undefined,
  },
};

export { codemodOptions, options };
