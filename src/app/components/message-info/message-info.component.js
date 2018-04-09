import template from './message-info.html';
import './message-info.scss';

class MessageInfoController {
    constructor() {
        this.dateFormat = 'M/d/yyyy, h:mm a';
    }
}

export default {
    template,
    controller: MessageInfoController,
    bindings: {
        message: '<'
    }
};