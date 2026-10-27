import {
  getPackageType,
  type PackageJson,
  readPackageJson,
} from '@codemod-utils/package-json';

import type { CodemodOptions, Options } from '../types/index.js';

function analyzeProject(packageJson: PackageJson): Options['project'] {
  const { dependencies, devDependencies } = packageJson;

  const projectDependencies = new Map([
    ...Object.entries(dependencies ?? {}),
    ...Object.entries(devDependencies ?? {}),
  ]);

  return {
    hasEmberTestem: projectDependencies.has('ember-testem'),
    hasTypeScript: projectDependencies.has('typescript'),
  };
}

export function createOptions(codemodOptions: CodemodOptions): Options {
  const { projectRoot } = codemodOptions;

  const packageJson = readPackageJson({ projectRoot });
  const packageType = getPackageType(packageJson);

  if (packageType === 'node') {
    throw new Error('Unable to find an Ember project');
  }

  return {
    packageType,
    project: analyzeProject(packageJson),
    projectRoot,
  };
}
