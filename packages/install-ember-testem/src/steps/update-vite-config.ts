import { readFileSync } from 'node:fs';
import { join } from 'node:path';

import { processTemplate } from '@codemod-utils/blueprints';
import { createFiles, findFiles } from '@codemod-utils/files';

import type { Options } from '../types/index.js';
import { blueprintsRoot } from '../utils/blueprints.js';

type Data = {
  hasTypeScript: boolean;
  hasViteConfig: boolean;
  viteConfigFilePath: string | undefined;
};

function findUserConfig(projectRoot: string): string | undefined {
  // https://github.com/vitejs/vite/blob/v8.3.5/packages/vite/src/node/constants.ts
  const filePaths = findFiles('vite.config.{js,mjs,mts,ts}', {
    projectRoot,
  });

  if (filePaths.length === 1) {
    return filePaths[0];
  }

  return undefined;
}

function getFilesToSkip(data: Data): string[] {
  const { hasViteConfig } = data;

  const files = new Set<string>();

  if (hasViteConfig) {
    files.add('vite.config.__mjs__');
  }

  return Array.from(files);
}

function resolveBlueprintFilePath(
  blueprintFilePath: string,
  data: Data,
): string {
  const { hasTypeScript } = data;

  return blueprintFilePath.replace('__mjs__', hasTypeScript ? 'mts' : 'mjs');
}

export function updateViteConfig(options: Options): void {
  const { packageType, projectRoot } = options;

  if (packageType === 'v1-addon' || packageType === 'v1-app') {
    return;
  }

  let filePath: string | undefined;

  if (packageType === 'v2-app') {
    filePath = findUserConfig(projectRoot);
  }

  const data = {
    hasTypeScript: Boolean(
      filePath && (filePath.endsWith('.mts') || filePath.endsWith('.ts')),
    ),
    hasViteConfig: Boolean(filePath),
    viteConfigFilePath: filePath ?? 'vite.config.mjs',
  };

  const filesToSkip = getFilesToSkip(data);
  const cwd = join(blueprintsRoot, packageType);

  const blueprintFilePaths = findFiles('**/*', {
    ignoreList: filesToSkip,
    projectRoot: cwd,
  });

  const fileMap = new Map(
    blueprintFilePaths.map((blueprintFilePath) => {
      const filePath = resolveBlueprintFilePath(blueprintFilePath, data);

      const blueprintFile = readFileSync(join(cwd, blueprintFilePath), 'utf8');

      const file = processTemplate(blueprintFile, { data });

      return [filePath, file];
    }),
  );

  createFiles(fileMap, options);
}
