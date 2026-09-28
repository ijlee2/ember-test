type CodemodOptions = {
  buildPath: string;
  filters: {
    filter: string | undefined;
    module: string | undefined;
  };
  projectRoot: string;
  testPort: number | undefined;
  server: boolean | undefined;
};

type Options = {
  buildPath: string;
  filters: {
    filter: string | undefined;
    module: string | undefined;
  };
  launchBrowser: boolean;
  projectRoot: string;
  testPort: number | undefined;
};

export type { CodemodOptions, Options };
