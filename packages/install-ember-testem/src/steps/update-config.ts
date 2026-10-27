import { findFiles } from '@codemod-utils/files';

import type { Options } from '../types/index.js';
import { convertToEsm, createConfig } from './update-config/index.js';

function findUserConfig(projectRoot: string): string | undefined {
  const filePaths = findFiles('{testem,.testem}.{cjs,js,json,mjs,yml}', {
    projectRoot,
  });

  if (filePaths.length === 1) {
    return filePaths[0];
  }

  return undefined;
}

export function updateConfig(options: Options): void {
  const { projectRoot } = options;

  const filePath = findUserConfig(projectRoot);

  if (filePath === undefined) {
    createConfig(projectRoot);
    return;
  }

  if (filePath.endsWith('.cjs') || filePath.endsWith('.js')) {
    convertToEsm(filePath, projectRoot);
    return;
  }
}
