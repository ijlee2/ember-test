import type { CodemodOptions, Options } from '../../../src/types/index.js';

const codemodOptions: CodemodOptions = {
  projectRoot: 'tmp/my-v1-addon',
};

const options: Options = {
  packageType: 'v1-addon',
  project: {
    hasEmberTestem: false,
    hasTypeScript: false,
  },
  projectRoot: 'tmp/my-v1-addon',
};

export { codemodOptions, options };
