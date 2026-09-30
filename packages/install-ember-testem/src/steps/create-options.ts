import { getPackageType, readPackageJson } from '@codemod-utils/package-json';

import type { CodemodOptions, Options } from '../types/index.js';

export function createOptions(codemodOptions: CodemodOptions): Options {
  const { projectRoot } = codemodOptions;

  const packageJson = readPackageJson({ projectRoot });
  const packageType = getPackageType(packageJson);

  if (packageType === 'node') {
    throw new Error('Unable to find an Ember project');
  }

  return {
    packageType,
    projectRoot,
  };
}
