class MessageController {
    constructor(MessageService, $stateParams) {
        this.message = MessageService.getMessage($stateParams.id);
    }
}

MessageController.$inject = ['MessageService', '$stateParams'];

export default MessageController;


