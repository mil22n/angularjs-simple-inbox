import angular from 'angular';
import Inbox from './inbox/inbox';

const componentModule = angular.module('app.components', [
    Inbox
]).name;

export default componentModule;
