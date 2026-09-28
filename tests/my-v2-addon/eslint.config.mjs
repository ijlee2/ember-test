import baseConfiguration from '@shared-configs/eslint-config-ember/v2-addon';

export default [
  ...baseConfiguration,
  {
    ignores: ['dist-for-testing/'],
  },
];
