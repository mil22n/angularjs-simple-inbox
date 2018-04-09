import InboxServices from "./inbox.factory";
import messages from '../../common/data/messages';
import testMessages from '../../common/data/messages.test';

describe('MailService', () => {
    let InboxService, MailService, $q, $rootScope;

    beforeEach(window.module(InboxServices));
    beforeEach(angular.mock.module("mail", ($provide) => {
        MailService = {
            get: jasmine.createSpy('get').and.callFake(() => $q.resolve(messages))
        };
        $provide.value('MailService', MailService);
    }));

    beforeEach(inject(($injector) => {
        InboxService = $injector.get('InboxService');
        $q = $injector.get('$q');
        $rootScope = $injector.get('$rootScope');
    }));

    it('checks if the service and methods are defined', () => {
        expect(InboxService).toBeDefined();
        expect(InboxService.getMessages).toBeDefined();
    });

    it('checks the data returned from the getMessages method is correct', () => {
        InboxService.getMessages().then((data) => {
            expect(MailService.get).toHaveBeenCalled();
            expect(testMessages).toEqual(data);
        });
    });
});