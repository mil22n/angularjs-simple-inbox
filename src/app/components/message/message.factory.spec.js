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

    it('checks the data returned from the getMessage method is correct', (done) => {
        const { id } = messages[0];

        MessageService.getMessage(id).then(data => {
            let { id, initial, from, subject, date, text } = data;

            expect(id).toBeDefined();
            expect(initial).toBeDefined();
            expect(from).toBeDefined();
            expect(subject).toBeDefined();
            expect(date).toBeDefined();
            expect(text).toBeDefined();
            expect(angular.isNumber(id)).toBeTruthy();
            expect(initial.length).toBe(1);
            expect(initial).toEqual(initial.toUpperCase());
            expect(Date.parse(date)).not.toBeNaN();
            done();
        });

        $rootScope.$digest();

        expect(MailService.get).toHaveBeenCalledWith(id);
    });
});