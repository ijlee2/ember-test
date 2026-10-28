import { join } from 'node:path';

import chokidar from 'chokidar';
import Testem from 'testem';

import type { Options } from '../../types/index.js';
import { getQueryParams } from '../../utils/run-tests/get-query-params.js';

export async function runTestsInDev(options: Options): Promise<void> {
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
    query_params: getQueryParams(options),
  });

  const watcher = chokidar.watch([buildPath], {
    awaitWriteFinish: true,
    backend: 'polling',
  });

  watcher.on('change', () => {
    testem.restart();
  });

  return new Promise((resolve, reject) => {
    testem.startDev(startOptions, (exitCode, error) => {
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
