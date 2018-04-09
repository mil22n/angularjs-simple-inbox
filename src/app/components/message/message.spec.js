import Message from './message';
import message from '../../common/data/message.test';

describe('Message', () => {
    let $rootScope, $componentController, $compile, $q, $scope;

    beforeEach(window.module(Message));

    beforeEach(inject(($injector) => {
        $rootScope = $injector.get('$rootScope');
        $componentController = $injector.get('$componentController');
        $compile = $injector.get('$compile');
        $q = $injector.get('$q');
    }));

    describe('Controller', () => {
        let controller,
            MessageService = {
                getMessage: jasmine.createSpy('getMessage').and.callFake(() => $q.resolve(message))
            };

        beforeEach(() => {
            $scope = $rootScope.$new();
            controller = $componentController('message', {
                $scope,
                MessageService
            });
        });

        it('calls getMessage', () => {
            expect(MessageService.getMessage).toHaveBeenCalled();
        });

        it('initializes message with the value returned from MessageService', () => {
            $scope.$digest();
            expect(controller.message).toBeDefined();
            expect(controller.message).toEqual(message);
        });
    });
});
