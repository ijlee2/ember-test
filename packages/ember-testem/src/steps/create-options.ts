import type { CodemodOptions, Options } from '../types/index.js';

export function createOptions(codemodOptions: CodemodOptions): Options {
  const { buildPath, filters, projectRoot, server, testPort } = codemodOptions;

  return {
    buildPath,
    filters,
    launchBrowser: Boolean(server),
    projectRoot,
    testPort,
  };
}
