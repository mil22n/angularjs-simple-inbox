class InboxController {
    constructor(InboxService) {
        console.log(InboxService.getEmails());
    }
}

export default InboxController;
