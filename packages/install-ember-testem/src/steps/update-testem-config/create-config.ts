import { writeFileSync } from 'node:fs';
import { EOL } from 'node:os';
import { join } from 'node:path';

import type { Options } from '../../types/index.js';

export function createConfig(options: Options): void {
  const { project, projectRoot } = options;

  const filePath = project.hasTypeScript ? 'testem.mts' : 'testem.mjs';

  const file = [
    `export default {`,
    `  browser_args: {`,
    `    Chrome: {`,
    `      ci: [`,
    `        // --no-sandbox is needed when running Chrome inside a container`,
    `        process.env['CI'] ? '--no-sandbox' : null,`,
    `        '--headless',`,
    `        '--disable-dev-shm-usage',`,
    `        '--disable-software-rasterizer',`,
    `        '--mute-audio',`,
    `        '--remote-debugging-port=0',`,
    `        '--window-size=1440,900',`,
    `      ].filter(Boolean),`,
    `    },`,
    `  },`,
    `  browser_start_timeout: 120,`,
    `  disable_watching: true,`,
    `  launch_in_ci: ['Chrome'],`,
    `  launch_in_dev: ['Chrome'],`,
    `  test_page: 'tests/index.html?hidepassed&nolint',`,
    `};`,
    ``,
  ].join(EOL);

  writeFileSync(join(projectRoot, filePath), file, 'utf8');
}
