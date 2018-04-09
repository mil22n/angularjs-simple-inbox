import angular from 'angular';

const messageFactory = angular.module('message.services', [  ])
    .factory('MessageService', [
        'MailService',
        function (MailService) {
            return {
                getMessage: (messageId) => {
                    return MailService.get(messageId).then((data) => {
                        const message = data[0];
                        const { id, from, subject, text } = message,
                            initial = message.from[0].toUpperCase(),
                            date = new Date(message.date);

                        return { id, initial, from, subject, date, text }
                    });
                }
            }
        }]);

export default messageFactory.name;