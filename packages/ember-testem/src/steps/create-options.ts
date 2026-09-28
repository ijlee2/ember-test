import type { CodemodOptions, Options } from '../types/index.js';

export function createOptions(codemodOptions: CodemodOptions): Options {
  const { buildPath, projectRoot, testPort } = codemodOptions;

  return {
    buildPath,
    projectRoot,
    testPort,
  };
}
