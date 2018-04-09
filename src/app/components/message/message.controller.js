class MessageController {
    constructor(MessageService, $stateParams) {
        MessageService.getMessage($stateParams.id).then((message) => this.message = message);
    }
}

MessageController.$inject = ['MessageService', '$stateParams'];

export default MessageController;


