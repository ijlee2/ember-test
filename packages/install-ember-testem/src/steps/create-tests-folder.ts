import { readFileSync } from 'node:fs';
import { join } from 'node:path';

import { processTemplate } from '@codemod-utils/blueprints';
import { createFiles, findFiles } from '@codemod-utils/files';

import type { Options } from '../types/index.js';
import { blueprintsRoot } from '../utils/blueprints.js';

type Data = {
  hasTypeScript: boolean;
};

function getFilesToSkip(data: Data): string[] {
  const { hasTypeScript } = data;

  const files = new Set<string>([
    'babel.test.config.mjs',
    'vite.test.config.__mjs__',
  ]);

  if (hasTypeScript) {
    files.add('tests/helpers/index.js');
  } else {
    files.add('tests/helpers/index.ts');
  }

  return Array.from(files);
}

function resolveBlueprintFilePath(
  blueprintFilePath: string,
  data: Data,
): string {
  const { hasTypeScript } = data;

  return blueprintFilePath
    .replace('__gitkeep__', '.gitkeep')
    .replace('__js__', hasTypeScript ? 'ts' : 'js')
    .replace('__mjs__', hasTypeScript ? 'mts' : 'mjs');
}

export function createTestsFolder(options: Options): void {
  const { packageType, projectRoot } = options;

  if (packageType !== 'v2-addon') {
    return;
  }

  const hasTestsFolder = findFiles('tests/**/*', { projectRoot }).length > 0;

  if (hasTestsFolder) {
    return;
  }

  const data = {
    hasTypeScript: false,
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

  createFiles(fileMap, { projectRoot });
}
