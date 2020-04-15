import { EventHandler } from "./EventHandler.js";
import { KEYCODES } from "./keycodes.js";

export class KeyBoardEventHandler extends EventHandler {
    constructor(keyBoard, textField) {
        super(keyBoard, textField);

        this.pressKey = this.pressKey.bind(this);
        this.releaseKey = this.releaseKey.bind(this);
        this.setListeners = this.setListeners.bind(this);
        this.setListeners();
    }

    pressKey(event) {
        if (this.textField.hasFocus()) {
            event.preventDefault();

            let row = KEYCODES[event.keyCode].row;
            let column = KEYCODES[event.keyCode].column;

            this.textField.print(this.keyBoard.keyDown(row, column));
        }
    }

    releaseKey(event) {
        if (this.textField.hasFocus()) {
            event.preventDefault();

            let row = KEYCODES[event.keyCode].row;
            let column = KEYCODES[event.keyCode].column;

            this.keyBoard.keyUp(row, column);
        }
    }

    setListeners() {
        window.addEventListener('keydown', this.pressKey);
        window.addEventListener('keyup', this.releaseKey);
    }
}