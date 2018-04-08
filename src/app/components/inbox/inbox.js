import angular from 'angular';
import uiRouter from 'angular-ui-router';

import InboxComponent from './inbox.component';

const inboxModule = angular.module('inbox', [uiRouter])
    .config(($stateProvider, $urlRouterProvider) =>{

        $urlRouterProvider.otherwise('/inbox');
        $stateProvider.state('inbox', {
            url: '/inbox',
            template: '<inbox></inbox>'
        });
    })
    .component('inbox', InboxComponent);

export default inboxModule.name;