import angular from 'angular';
import uiRouter from 'angular-ui-router';

import MessageService from './message.factory';
import MessageComponent from './message.component';

const messageModule = angular.module('message', [ uiRouter, MessageService ])
    .config(($stateProvider) => {
        $stateProvider.state('message', {
            url: '/inbox/message/:id',
            template: '<message></message>'
        });
    })
    .component('message', MessageComponent);

export default messageModule.name;