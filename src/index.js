import { KEYBOARD_LANGUAGES } from './languages.js';
import { KeyBoardInstruction, INSTRUCTION_TO_BOARD } from './KeyBoardInstruction.js';

import { TextField } from './TextField.js';
import { MouseEventHandler } from './MouseEventHandler.js';
import { KeyBoardEventHandler } from './KeyBoardEventHandler.js';
import { KeyBoard } from './KeyBoard.js'

window.onload = () => {
    showKeyBoard();
}

const showKeyBoard = () => {
    let keyBoard = new KeyBoard(KEYBOARD_LANGUAGES, 713);
    let textField = new TextField(713, 200);
    let keyBoardInstruction = new KeyBoardInstruction(713, INSTRUCTION_TO_BOARD);

    let mouseEventHandler = new MouseEventHandler(keyBoard, textField);
    let keyBoardEventHandler = new KeyBoardEventHandler(keyBoard, textField);

    document.body.append(textField.htmlElement, keyBoard.htmlElement, keyBoardInstruction.htmlElement);
}
