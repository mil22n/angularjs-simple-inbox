import angular from 'angular';
import Inbox from './inbox/inbox';
import Message from './message/message';
import MessageHeader from './message-info/message-info';

const componentModule = angular.module('app.components', [
    Inbox,
    Message,
    MessageHeader
]).name;

export default componentModule;
