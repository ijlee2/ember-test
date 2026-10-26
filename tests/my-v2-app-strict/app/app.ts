import 'ember-a11y-refocus/styles/navigation-narrator.css';
import './assets/app.css';

import setupInspector from '@embroider/legacy-inspector-support/ember-source-4.12';
import IntlService from 'ember-intl/services/intl';
import PageTitleService from 'ember-page-title/services/page-title';
import Application from 'ember-strict-application-resolver';

import Router from './router';
import ApiService from './services/api';
import ExperimentsService from './services/experiments';

export default class App extends Application {
  inspector = setupInspector(this);
  modules = {
    './router': Router,
    './services/api': ApiService,
    './services/experiments': ExperimentsService,
    './services/intl': IntlService,
    './services/page-title': PageTitleService,
    ...import.meta.glob('./controllers/**/*.{js,ts}', { eager: true }),
    ...import.meta.glob('./routes/**/*.{js,ts}', { eager: true }),
    ...import.meta.glob('./services/**/*.{js,ts}', { eager: true }),
    ...import.meta.glob('./templates/**/*.{gjs,gts}', { eager: true }),
  };
}
