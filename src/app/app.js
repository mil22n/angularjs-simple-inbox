import angular from 'angular';
import uiRouter from 'angular-ui-router';

import Components from './components/components';
import Common from './common/common';
import template from './app.html';

angular.module('app', [
    uiRouter,
    Components,
    Common
]).component('app', { template });
