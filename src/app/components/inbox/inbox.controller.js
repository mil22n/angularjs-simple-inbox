class InboxController {
    constructor(InboxService) {
        this.messages = InboxService.getMessages();
    }
}

export default InboxController;
