import baseConfiguration from '@shared-configs/eslint-config-ember/v2-addon';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  ...baseConfiguration,
  {
    ignores: ['dist-for-testing/'],
  },
]);
