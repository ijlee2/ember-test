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

test('steps | create-tests-folder > my-v2-addon (folder exists)', function () {
  const inputProject = {
    tests: {
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
    },
  };

  const outputProject = {
    tests: {
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
    },
  };

  loadFixture(inputProject, codemodOptions);

  createTestsFolder(options);

  assertFixture(outputProject, codemodOptions);
});
