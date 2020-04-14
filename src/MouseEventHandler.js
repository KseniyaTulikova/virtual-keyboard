import { EventHandler } from "./EventHandler.js";

export class MouseEventHandler extends EventHandler {
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

            let key = event.target.closest('.key');
            if (key) {
                let column = key.dataset.column;
                let row = key.dataset.row;

                this.textField.print(this.keyBoard.keyDown(row, column));
            }
        }
    }

    releaseKey(event) {
        if (this.textField.hasFocus()) {
            let key = event.target.closest('.key');
            if (key) {
                let column = key.dataset.column;
                let row = key.dataset.row;

                this.keyBoard.keyUp(row, column);
            }
        }
    }

    setListeners() {
        this.keyBoard.htmlElement.addEventListener('mousedown', this.pressKey);
        this.keyBoard.htmlElement.addEventListener('mouseup', this.releaseKey);
    }
}