import MessegeInfo from './message-info';
import message from '../../common/data/message.test';

describe('MessegeInfo', () => {
    let $rootScope, $componentController, $compile;

    beforeEach(window.module(MessegeInfo));

    beforeEach(inject(($injector) => {
        $rootScope = $injector.get('$rootScope');
        $componentController = $injector.get('$componentController');
        $compile = $injector.get('$compile');
    }));

    describe('Controller', () => {
        let controller;
        beforeEach(() => {
            controller = $componentController('messageInfo', {
                $scope: $rootScope.$new()
            }, { message });
        });

        it('has a all properties defined', () => {
            expect(controller.dateFormat).toBeDefined();
            expect(controller.dateFormat).toEqual('M/d/yyyy, h:mm a');
            expect(controller.message).toBeDefined();
            expect(controller.message).toEqual(message);
        });
    });
});
