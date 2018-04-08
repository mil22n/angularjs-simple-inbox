import angular from 'angular';
import uiRouter from 'angular-ui-router';

import Components from './components/components';
import template from './app.html';

angular.module('app', [
    uiRouter,
    Components
]).component('app', { template });
