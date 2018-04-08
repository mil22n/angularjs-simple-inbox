class InboxController {
    constructor(InboxService) {
        this.dateFormat = 'M/d/yyyy, h:mm a';
        this.messages = InboxService.getMessages();
    }
}

export default InboxController;
