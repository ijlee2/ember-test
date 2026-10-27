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
  const { packageType, project } = options;

  const devDependencies = convertToMap(packageJson['devDependencies']) as Map<
    string,
    string
  >;

  const packagesToDelete = new Set(['testem']);

  packagesToDelete.forEach((packageName) => {
    devDependencies.delete(packageName);
  });

  const packagesToInstall = new Set(['ember-testem']);

  if (packageType === 'v2-addon') {
    packagesToInstall.add('@ember/test-helpers');
    packagesToInstall.add('@embroider/macros');
    packagesToInstall.add('@embroider/vite');
    packagesToInstall.add('ember-qunit');
    packagesToInstall.add('ember-strict-application-resolver');
    packagesToInstall.add('qunit');
    packagesToInstall.add('qunit-dom');
    packagesToInstall.add('vite');

    if (project.hasTypeScript) {
      packagesToInstall.add('@types/qunit');
    }
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
