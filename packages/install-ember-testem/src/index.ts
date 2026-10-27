import {
  createOptions,
  updatePackageJson,
  updateTestemConfig,
  updateViteConfig,
} from './steps/index.js';
import type { CodemodOptions } from './types/index.js';

export function runCodemod(codemodOptions: CodemodOptions): void {
  const options = createOptions(codemodOptions);
  updateTestemConfig(options);
  updateViteConfig(options);
  updatePackageJson(options);
}
