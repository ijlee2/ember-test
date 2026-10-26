type CodemodOptions = {
  buildPath: string;
  port: number | undefined;
  projectRoot: string;
  qunit: {
    filter: string | undefined;
    module: string | undefined;
  };
  server: boolean | undefined;
};

type Options = {
  buildPath: string;
  launchBrowser: boolean;
  port: number | undefined;
  projectRoot: string;
  qunit: {
    filter: string | undefined;
    module: string | undefined;
  };
};

export type { CodemodOptions, Options };
