import angular from 'angular';
import messages from '../data/messages.json';

const mailFactory = angular.module('mail', [])
    .factory('MailService', [
    function () {
        return {
            get: (id) => {
                return new Promise((resolve, reject) => {
                    if(id) {
                        resolve(messages.filter( message => parseInt(message.id) === parseInt(id)));
                    }
                    return resolve(messages);
                });
            }
        }
    }]);

export default mailFactory.name;