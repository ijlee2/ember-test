import type { CodemodOptions, Options } from '../../../src/types/index.js';

const codemodOptions: CodemodOptions = {
  buildPath: 'dist',
  projectRoot: 'tmp/my-project',
  server: undefined,
  testPort: 0,
};

const options: Options = {
  buildPath: 'dist',
  launchBrowser: false,
  projectRoot: 'tmp/my-project',
  testPort: 0,
};

export { codemodOptions, options };
