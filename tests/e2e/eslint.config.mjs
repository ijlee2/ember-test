import baseConfiguration from '@shared-configs/eslint-config-node/typescript';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  ...baseConfiguration,
  {
    ignores: [
      'dist/',
      'dist-for-testing/',
      'node_modules/',
      'src/blueprints/',
      'tests/fixtures/',
      'tmp/',
      '.*/',
    ],
  },
  {
    files: ['tests/**/*.test.ts'],
    rules: {
      '@typescript-eslint/no-floating-promises': 'off',
    },
  },
]);
