type Config = {
  APP: Record<string, unknown> & {
    autoboot?: boolean;
    rootElement?: string;
  };
  EmberENV?: Record<string, unknown>;
  environment: 'development' | 'production';
  locationType: 'auto' | 'hash' | 'history' | 'none';
  modulePrefix: string;
  rootURL: string;
} & Record<string, unknown>;

const ENV: Config = {
  APP: {},
  EmberENV: {
    EXTEND_PROTOTYPES: false,
    FEATURES: {
      // Here you can enable experimental features on an ember canary build
      // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
    },
  },
  environment: import.meta.env.DEV ? 'development' : 'production',
  locationType: 'history',
  modulePrefix: 'my-v2-app-strict',
  rootURL: '/',
};

export default ENV;
