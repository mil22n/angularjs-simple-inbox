import angular from 'angular';
import MessageInfo from './message-info.component';

const messageInfoModule = angular.module('message.info', [])
    .component('messageInfo', MessageInfo);

export default messageInfoModule.name;