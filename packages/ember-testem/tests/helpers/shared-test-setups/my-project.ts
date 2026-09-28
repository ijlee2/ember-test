import type { CodemodOptions, Options } from '../../../src/types/index.js';

const codemodOptions: CodemodOptions = {
  buildPath: 'dist',
  projectRoot: 'tmp/my-project',
  testPort: 0,
};

const options: Options = {
  buildPath: 'dist',
  projectRoot: 'tmp/my-project',
  testPort: 0,
};

export { codemodOptions, options };
