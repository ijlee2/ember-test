import {
  convertToMap,
  convertToObject,
  type PackageJson,
} from '@codemod-utils/package-json';

import type { Options } from '../../types/index.js';
import { getLatestVersion } from '../../utils/blueprints.js';

export function updateDependencies(
  packageJson: PackageJson,
  options: Options,
): void {
  const devDependencies = convertToMap(packageJson['devDependencies']) as Map<
    string,
    string
  >;

  const packagesToDelete = new Set(['testem']);

  packagesToDelete.forEach((packageName) => {
    devDependencies.delete(packageName);
  });

  const packagesToInstall = new Set(['ember-testem']);

  if (options.packageType === 'v2-addon') {
    packagesToInstall.add('@embroider/vite');
    packagesToInstall.add('vite');
  }

  packagesToInstall.forEach((packageName) => {
    const version = getLatestVersion(packageName);

    devDependencies.set(packageName, version);
  });

  packageJson['devDependencies'] = convertToObject(devDependencies) as Record<
    string,
    string
  >;
}
