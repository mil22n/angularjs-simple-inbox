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

    it('checks the data returned from the getMessages method is correct', (done) => {
        InboxService.getMessages().then((data) => {
            expect(data.length).toEqual(testMessages.length);

            data.forEach(item => {
                let { id, initial, from, subject, date } = item;

                expect(id).toBeDefined();
                expect(initial).toBeDefined();
                expect(from).toBeDefined();
                expect(subject).toBeDefined();
                expect(date).toBeDefined();
                expect(angular.isNumber(id)).toBeTruthy();
                expect(initial.length).toBe(1);
                expect(initial).toEqual(initial.toUpperCase());
                expect(Date.parse(date)).not.toBeNaN();
            });

            done();
        });

        $rootScope.$digest();

        expect(MailService.get).toHaveBeenCalled();
    });
});