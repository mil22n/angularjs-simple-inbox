import Inbox from './inbox';
import messages from '../../common/data/messages.test';

describe('Inbox', () => {
    let $rootScope, $componentController, $compile, $q, $scope;

    beforeEach(window.module(Inbox));

    beforeEach(inject(($injector) => {
        $rootScope = $injector.get('$rootScope');
        $componentController = $injector.get('$componentController');
        $compile = $injector.get('$compile');
        $q = $injector.get('$q');
    }));

    describe('Controller', () => {
        let controller,
            InboxService = {
                getMessages: jasmine.createSpy('getMessages').and.callFake(() => $q.resolve(messages))
            };

        beforeEach(() => {
            $scope = $rootScope.$new();
            controller = $componentController('inbox', {
                $scope,
                InboxService
            });
        });

        it('calls getMessages', () => {
            expect(InboxService.getMessages).toHaveBeenCalled();
        });

        it('initializes messages with the value returned from InboxService', () => {
            $scope.$digest();
            expect(controller.messages).toBeDefined();
            expect(controller.messages).toEqual(messages);
        });
    });
});
