import type { CodemodOptions, Options } from '../../../src/types/index.js';

const codemodOptions: CodemodOptions = {
  projectRoot: 'tmp/my-v2-app',
};

const options: Options = {
  packageType: 'v2-app',
  project: {
    hasEmberTestem: false,
    hasTypeScript: true,
  },
  projectRoot: 'tmp/my-v2-app',
};

export { codemodOptions, options };
