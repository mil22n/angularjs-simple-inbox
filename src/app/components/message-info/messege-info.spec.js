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
        // controller specs
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

    describe('View', () => {
        // view layer specs.
        let scope, template;

        beforeEach(() => {
            scope = $rootScope.$new();
            template = $compile('<message-info></message-info>')(scope);
            scope.$apply();
        });

        it('has name in template', () => {
            // expect(template.find('h1').html()).to.eq('Found in home.html');

        });

        it('has the correct div structure', () => {
            expect(template.find('div').length).toEqual(1);

            // console.log(JSON.stringify(template.find('div')));
        });

    });
});
