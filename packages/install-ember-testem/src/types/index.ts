import type { PackageType } from '@codemod-utils/package-json';

type CodemodOptions = {
  projectRoot: string;
};

type Options = {
  packageType: Exclude<PackageType, 'node'>;
  project: {
    hasEmberTestem: boolean;
    hasTypeScript: boolean;
  };
  projectRoot: string;
};

export type { CodemodOptions, Options };
