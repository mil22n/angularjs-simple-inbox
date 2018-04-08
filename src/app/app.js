import angular from 'angular';
import uiRouter from 'angular-ui-router';
import "bootstrap/dist/css/bootstrap.css";

import Components from './components/components';
import Common from './common/common';
import template from './app.html';
import './app.scss';

angular.module('app', [
    uiRouter,
    Components,
    Common
]).component('app', { template });
