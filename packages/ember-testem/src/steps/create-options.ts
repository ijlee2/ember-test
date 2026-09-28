import type { CodemodOptions, Options } from '../types/index.js';

export function createOptions(codemodOptions: CodemodOptions): Options {
  const { buildPath, projectRoot, server, testPort } = codemodOptions;

  return {
    buildPath,
    launchBrowser: Boolean(server),
    projectRoot,
    testPort,
  };
}
