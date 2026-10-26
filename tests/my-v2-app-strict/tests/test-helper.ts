import { setApplication } from '@ember/test-helpers';
import { setupEmberOnerrorValidation, start as qunitStart } from 'ember-qunit';
import Application from 'my-v2-app-strict/app';
import config from 'my-v2-app-strict/config';
import QUnit from 'qunit';
import { setup } from 'qunit-dom';
import { restore } from 'sinon';

QUnit.config.urlConfig.push({
  id: 'mirageLogging',
  label: 'Mirage logging',
});

export interface ExtendedQUnitConfig extends Config {
  mirageLogging: boolean;
}

function setConfig(): void {
  // Testem prefers this...
  config.locationType = 'none';

  // keep test console output quieter
  config.APP.LOG_ACTIVE_GENERATION = false;
  config.APP.LOG_VIEW_LOOKUPS = false;

  config.APP.rootElement = '#ember-testing';
  config.APP.autoboot = false;
}

export function start(): void {
  setConfig();
  setApplication(Application.create(config.APP));

  setup(QUnit.assert);
  setupEmberOnerrorValidation();
  qunitStart();

  QUnit.testDone(function () {
    restore();
  });
}
