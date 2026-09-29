type CodemodOptions = {
  buildPath: string;
  filters: {
    filter: string | undefined;
    module: string | undefined;
  };
  port: number | undefined;
  projectRoot: string;
  server: boolean | undefined;
};

type Options = {
  buildPath: string;
  filters: {
    filter: string | undefined;
    module: string | undefined;
  };
  launchBrowser: boolean;
  port: number | undefined;
  projectRoot: string;
};

export type { CodemodOptions, Options };
