import type { CodemodOptions, Options } from '../../../src/types/index.js';

const codemodOptions: CodemodOptions = {
  buildPath: 'dist',
  projectRoot: 'tmp/my-project',
  testPort: undefined,
};

const options: Options = {
  buildPath: 'dist',
  projectRoot: 'tmp/my-project',
  testPort: undefined,
};

export { codemodOptions, options };
