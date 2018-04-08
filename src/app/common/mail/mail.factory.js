import angular from 'angular';
import messages from '../data/messages.json';

const mailFactory = angular.module('mail', [])
    .factory('MailService', [
    function () {
        return {
            get: (id) => {
                if(id) {
                    return messages.filter( message => parseInt(message.id) === parseInt(id));
                }
                return messages;
            }
        }
    }]);

export default mailFactory.name;