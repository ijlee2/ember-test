import type { UserConfig } from 'vite';

import baseConfiguration from './vite.config.mts';

export default {
  ...baseConfiguration,
  build: {
    minify: false,
    sourcemap: true,
  },
} satisfies UserConfig;
