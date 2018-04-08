import template from './message-info.html';
import './message-info.scss';

class MessageHeaderController {
    constructor() {
        this.dateFormat = 'M/d/yyyy, h:mm a';
    }
}

export default {
    template,
    controller: MessageHeaderController,
    bindings: {
        message: '<'
    }
};