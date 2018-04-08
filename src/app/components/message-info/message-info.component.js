import template from './message-info.html';
import './message-info.scss';

class MessageHeaderController {
    constructor() {}
}

export default {
    template,
    controller: MessageHeaderController,
    bindings: {
        message: '<'
    }
};