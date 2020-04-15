export class KeyBoardInstruction {
    constructor(width, textMessage) {
        this.width = width;
        this.instructionsMessage = textMessage;
        this.element = this.createInstructionElement();
    }

    createInstructionElement() {
        let instruction = document.createElement('div');
        instruction.className = 'instuctionToKeyboard';
        instruction.style.width = `${this.width}px`;
        instruction.innerHTML = `<div>${this.instructionsMessage}</div>`;

        return instruction;
    }

    get htmlElement() {
        return this.element;
    }
}


export const INSTRUCTION_TO_BOARD = `Приветствую!</br>
Для того,чтобы что-то написать в textarea сделайте клик по ней и приступайте к печати.</br>
1) Смена языка: Shift+Alt </br>
2) Учтите,что есть залипающие клавиши - Shift и CapsLock.</br>
Клавиатура создавалась в Wndows.</br>
Пришла пора тестировать :D`;