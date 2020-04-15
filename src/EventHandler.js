export class EventHandler {
    constructor(keyBoard, textField) {
        this.keyBoard = keyBoard;
        this.textField = textField;
    }

    pressKey() {
        throw new Error('You have to implement the method pressKey!');
    }

    releaseKey() {
        throw new Error('You have to implement the method releaseKey!');
     }
}