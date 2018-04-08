import angular from 'angular';

import MailService from './mail/mail.factory';

const commonModule = angular.module('app.common', [
    MailService
]);

export default commonModule.name;