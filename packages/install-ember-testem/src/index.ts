import {
  createOptions,
  createTestsFolder,
  createViteTestConfig,
  updatePackageJson,
  updateTestemConfig,
} from './steps/index.js';
import type { CodemodOptions } from './types/index.js';

export function runCodemod(codemodOptions: CodemodOptions): void {
  const options = createOptions(codemodOptions);

  if (options.project.hasEmberTestem) {
    return;
  }

  updateTestemConfig(options);
  createViteTestConfig(options);
  createTestsFolder(options);
  updatePackageJson(options);
}
