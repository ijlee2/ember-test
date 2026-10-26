import {
  convertToMap,
  convertToObject,
  type PackageJson,
} from '@codemod-utils/package-json';

import type { Options } from '../../types/index.js';

const latestVersions = {
  'ember-testem': '^0.4.1',
} as const;

export function updateDependencies(
  packageJson: PackageJson,
  options: Options,
): void {
  const devDependencies = convertToMap(packageJson['devDependencies']) as Map<
    string,
    string
  >;

  devDependencies.set('ember-testem', latestVersions['ember-testem']);

  if (options.packageType === 'v2-addon') {
    // TODO
  }

  packageJson['devDependencies'] = convertToObject(devDependencies) as Record<
    string,
    string
  >;
}
