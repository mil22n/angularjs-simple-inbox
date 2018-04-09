class InboxController {
    constructor(InboxService) {
        InboxService.getMessages().then((messages) => this.messages = messages);
    }
}

export default InboxController;
