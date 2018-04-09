import angular from 'angular';

const inboxFactory = angular.module('inbox.services', [])
    .factory('InboxService', [
        'MailService',
        function (MailService) {
            return {
                getMessages: () => {
                    return MailService.get().then((data) => {
                        return data.map(email => {
                            const { id, from, subject } = email,
                                initial = email.from[0].toUpperCase(),
                                date = new Date(email.date);

                            return { id, initial, from, subject, date }
                        }).sort((a, b) => b.date - a.date);
                    });
                }
            }
        }]);

export default inboxFactory.name;