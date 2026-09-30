import type { CodemodOptions, Options } from '../../../src/types/index.js';

const codemodOptions: CodemodOptions = {
  projectRoot: 'tmp/my-v2-addon',
};

const options: Options = {
  packageType: 'v2-addon',
  projectRoot: 'tmp/my-v2-addon',
};

export { codemodOptions, options };
