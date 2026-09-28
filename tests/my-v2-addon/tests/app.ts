import './app.css';

import EmberRouter from '@ember/routing/router';
import IntlService from 'ember-intl/services/intl';
import Application from 'ember-strict-application-resolver';

class Router extends EmberRouter {
  location = 'none';
  rootURL = '/';
}

Router.map(function () {});

export default class App extends Application {
  modules = {
    './router': Router,
    './services/intl': IntlService,
  };
}
