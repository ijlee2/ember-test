import { join } from 'node:path';

import Testem from 'testem';

import type { Options } from '../../types/index.js';
import { getQueryParams } from '../../utils/run-tests/get-query-params.js';

export async function runTestsInCI(options: Options): Promise<void> {
  const { buildPath, port, projectRoot } = options;

  const testem = new Testem();

  const startOptions = {
    launch: false,
    port,
  };

  testem.setDefaultOptions({
    ...startOptions,
    config_dir: projectRoot,
    cwd: join(projectRoot, buildPath),
    parallel: 1,
    query_params: getQueryParams(options),
  });

  return new Promise((resolve, reject) => {
    testem.startCI(startOptions, (exitCode, error) => {
      if (error) {
        reject(error);
      } else if (exitCode !== 0) {
        reject(
          new Error(`testem finished with the non-zero exit code ${exitCode}`),
        );
      } else {
        resolve();
      }
    });
  });
}
