import {
  assertFixture,
  loadFixture,
  normalizeFile,
  test,
} from '@codemod-utils/tests';

import { createTestsFolder } from '../../../src/steps/index.js';
import {
  codemodOptions,
  options,
} from '../../helpers/shared-test-setups/my-v2-addon.js';

test('steps | create-tests-folder > my-v2-addon (folder does not exist)', function () {
  const inputProject = {};

  const outputProject = {
    tests: {
      helpers: {
        'index.js': normalizeFile([
          `import {`,
          `  setupApplicationTest as upstreamSetupApplicationTest,`,
          `  setupRenderingTest as upstreamSetupRenderingTest,`,
          `  setupTest as upstreamSetupTest,`,
          `} from 'ember-qunit';`,
          ``,
          `function setupApplicationTest(hooks, options) {`,
          `  upstreamSetupApplicationTest(hooks, options);`,
          ``,
          `  // Additional setup for application tests can be done here.`,
          `}`,
          ``,
          `function setupRenderingTest(hooks, options) {`,
          `  upstreamSetupRenderingTest(hooks, options);`,
          ``,
          `  // Additional setup for rendering tests can be done here.`,
          `}`,
          ``,
          `function setupTest(hooks, options) {`,
          `  upstreamSetupTest(hooks, options);`,
          ``,
          `  // Additional setup for unit tests can be done here.`,
          `}`,
          ``,
          `export { setupApplicationTest, setupRenderingTest, setupTest };`,
          ``,
        ]),
      },
      integration: {
        '.gitkeep': '',
      },
      'app.js': normalizeFile([
        `import EmberRouter from '@ember/routing/router';`,
        `import Application from 'ember-strict-application-resolver';`,
        ``,
        `class Router extends EmberRouter {`,
        `  location = 'none';`,
        `  rootURL = '/';`,
        `}`,
        ``,
        `Router.map(function () {});`,
        ``,
        `export default class App extends Application {`,
        `  modules = {`,
        `    './router': Router,`,
        `  };`,
        `}`,
        ``,
      ]),
      'index.html': normalizeFile([
        `<!DOCTYPE html>`,
        `<html>`,
        `  <head>`,
        `    <meta charset="utf-8" />`,
        `    <title>Tests</title>`,
        `    <meta name="description" content="">`,
        `    <meta name="viewport" content="width=device-width, initial-scale=1">`,
        `  </head>`,
        `  <body>`,
        `    <div id="qunit"></div>`,
        `    <div id="qunit-fixture">`,
        `      <div id="ember-testing-container">`,
        `        <div id="ember-testing"></div>`,
        `      </div>`,
        `    </div>`,
        ``,
        `    <script src="/testem.js" integrity="" data-embroider-ignore></script>`,
        ``,
        `    <script type="module">import 'ember-testing';</script>`,
        `    <script type="module">`,
        `      import { start } from './test-helper';`,
        `      import.meta.glob('./**/*.{gjs,gts,js,ts}', { eager: true });`,
        ``,
        `      start();`,
        `    </script>`,
        `  </body>`,
        `</html>`,
        ``,
      ]),
      'test-helper.js': normalizeFile([
        `import { setApplication } from '@ember/test-helpers';`,
        `import { setTesting } from '@embroider/macros';`,
        `import { setupEmberOnerrorValidation, start as qunitStart } from 'ember-qunit';`,
        `import QUnit from 'qunit';`,
        `import { setup } from 'qunit-dom';`,
        ``,
        `import Application from './app';`,
        ``,
        `export function start() {`,
        `  setTesting(true);`,
        `  setApplication(`,
        `    Application.create({`,
        `      autoboot: false,`,
        `      rootElement: '#ember-testing',`,
        `    }),`,
        `  );`,
        `  setup(QUnit.assert);`,
        `  setupEmberOnerrorValidation();`,
        `  qunitStart();`,
        `}`,
        ``,
      ]),
    },
  };

  loadFixture(inputProject, codemodOptions);

  createTestsFolder(options);

  assertFixture(outputProject, codemodOptions);
});
