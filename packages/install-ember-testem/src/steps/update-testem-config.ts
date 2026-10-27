import { findFiles } from '@codemod-utils/files';

import type { Options } from '../types/index.js';
import { convertToEsm, createConfig } from './update-testem-config/index.js';

function findUserConfig(projectRoot: string): string | undefined {
  // https://github.com/testem/testem/blob/v3.21.5/lib/config.js#L73-L84
  const filePaths = findFiles('{testem,.testem}.{cjs,js,json,mjs,yml}', {
    projectRoot,
  });

  if (filePaths.length === 1) {
    return filePaths[0];
  }

  return undefined;
}

export function updateTestemConfig(options: Options): void {
  const { projectRoot } = options;

  const filePath = findUserConfig(projectRoot);

  if (filePath === undefined) {
    createConfig(options);
    return;
  }

  if (filePath.endsWith('.cjs') || filePath.endsWith('.js')) {
    convertToEsm(filePath, options);
    return;
  }
}
