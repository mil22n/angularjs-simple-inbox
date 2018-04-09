import MessageServices from "./message.factory";
import messages from '../../common/data/messages';
import testMessage from '../../common/data/message.test';

describe('MailService', () => {
    let MessageService, MailService, $q, $rootScope;

    beforeEach(window.module(MessageServices));
    beforeEach(angular.mock.module("mail", ($provide) => {
        MailService = {
            get: jasmine.createSpy('get').and.callFake(() => $q.resolve(messages))
        };
        $provide.value('MailService', MailService);
    }));

    beforeEach(inject(($injector) => {
        MessageService = $injector.get('MessageService');
        $q = $injector.get('$q');
        $rootScope = $injector.get('$rootScope');
    }));

    it('checks if the service and methods are defined', () => {
        expect(MessageService).toBeDefined();
        expect(MessageService.getMessage).toBeDefined();
    });

    it('checks the data returned from the getMessage method is correct', () => {
        const { id } = messages[0];
        MessageService.getMessage(id).then((data) => {
            expect(MailService.get).toHaveBeenCalledWith(id);
            expect(testMessage).toEqual(data);
        });
    });
});