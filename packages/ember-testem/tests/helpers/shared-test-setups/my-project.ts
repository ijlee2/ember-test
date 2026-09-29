import type { CodemodOptions, Options } from '../../../src/types/index.js';

const codemodOptions: CodemodOptions = {
  buildPath: 'dist',
  filters: {
    filter: undefined,
    module: undefined,
  },
  port: 0,
  projectRoot: 'tmp/my-project',
  server: undefined,
};

const options: Options = {
  buildPath: 'dist',
  filters: {
    filter: undefined,
    module: undefined,
  },
  launchBrowser: false,
  port: 0,
  projectRoot: 'tmp/my-project',
};

export { codemodOptions, options };
