import { writeFileSync } from 'node:fs';
import { EOL } from 'node:os';
import { join } from 'node:path';

import { readPackageJson } from '@codemod-utils/package-json';

import type { Options } from '../types/index.js';
import { updateDependencies } from './update-package-json/index.js';

export function updatePackageJson(options: Options): void {
  const { projectRoot } = options;

  const packageJson = readPackageJson({ projectRoot });
  updateDependencies(packageJson, options);

  const destination = join(projectRoot, 'package.json');
  const file = JSON.stringify(packageJson, null, 2).replaceAll('\n', EOL) + EOL;

  writeFileSync(destination, file, 'utf8');
}
