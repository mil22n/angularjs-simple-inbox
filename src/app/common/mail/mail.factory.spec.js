import Mail from "./mail.factory";
import messages from '../data/messages';

describe('MailService', () => {
    let MailService, $q, $rootScope;

    beforeEach(window.module(Mail));

    beforeEach(inject(($injector) => {
        MailService = $injector.get('MailService');
        $q = $injector.get('$q');
        $rootScope = $injector.get('$rootScope');
    }));

    it('checks if the service and methods are defined', () => {
        expect(MailService).toBeDefined();
        expect(MailService.get).toBeDefined();
    });

    it('checks the data returned from the get method is correct', () => {
        MailService.get().then((testMessages) => {
            expect(testMessages).toEqual(messages);
        });
    });

    it('checks if the data returned from the get method for a single message is correct', () => {
        const testMessage = messages[0];
        const { id } = testMessage;

        MailService.get(id).then((message) => {
            expect(message.toString()).toEqual(messages[0].toString());
        });
    });
});