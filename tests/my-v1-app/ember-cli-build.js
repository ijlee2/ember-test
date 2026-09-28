'use strict';

const { compatBuild } = require('@embroider/compat');
const { Webpack } = require('@embroider/webpack');
const EmberApp = require('ember-cli/lib/broccoli/ember-app');

function isProduction() {
  return EmberApp.env() === 'production';
}

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    // Add options here
    babel: {
      plugins: [
        require.resolve('ember-concurrency/async-arrow-task-transform'),
      ],
    },

    'ember-cli-babel': {
      enableTypeScriptTransform: true,
    },
  });

  const options = {
    packagerOptions: {
      cssLoaderOptions: {
        modules: {
          localIdentName: isProduction()
            ? '[sha512:hash:base64:5]'
            : '[path][name]__[local]',
          mode: (resourcePath) => {
            const hostAppLocation = 'tests/my-v1-app';

            return resourcePath.includes(hostAppLocation) ? 'local' : 'global';
          },
        },
        sourceMap: !isProduction(),
      },
      publicAssetURL: '/',
    },
    skipBabel: [
      {
        package: 'qunit',
      },
    ],
    splitAtRoutes: ['form', 'product-details', 'products'],
    staticAddonTestSupportTrees: true,
    staticAddonTrees: true,
    staticEmberSource: true,
    staticInvokables: true,
  };

  return compatBuild(app, Webpack, options);
};
