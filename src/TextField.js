export class TextField {
    constructor(width, height) {
        this.width = width;
        this.height = height;

        this.element = this.createTextFieldElement();

        this.print = this.print.bind(this);
        this.hasFocus = this.hasFocus.bind(this);
        this.printSymbol = this.printSymbol.bind(this);
        this.deleteSymbol = this.deleteSymbol.bind(this);
        this.backspaceSymbol = this.backspaceSymbol.bind(this);
        this.getStartCursorPosition = this.getStartCursorPosition.bind(this);
        this.getEndCursorPosition = this.getEndCursorPosition.bind(this);
        this.setCursorPosition = this.setCursorPosition.bind(this);
    }

    get htmlElement() {
        return this.element;
    }

    createTextFieldElement() {
        let textAreaField = document.createElement('textarea');
        textAreaField.className = 'typingField';
        textAreaField.style.width = `${this.width}px`;
        textAreaField.style.height = `${this.height}px`;

        return textAreaField;
    }


    print(symbol) {
        switch (symbol) {
            case 'Del':
                this.deleteSymbol();
                break;
            case 'BackSpace':
                this.backspaceSymbol();
                break;
            default:
                this.printSymbol(symbol);
        }
    }

    hasFocus() {
        return this.element == document.activeElement;
    }

    printSymbol(symbol) {
        let messageArray = this.element.value.split('');
        let startCursorPosition = this.getStartCursorPosition();
        let endCursorPosition = this.getEndCursorPosition();
        let quantityOfSelectedLetters = endCursorPosition - startCursorPosition;

        if (startCursorPosition == endCursorPosition) {
            messageArray.splice(startCursorPosition, 0, symbol);
        } else {
            messageArray.splice(startCursorPosition, quantityOfSelectedLetters, symbol);
        }

        this.element.value = messageArray.join('');

        let newCursorPosition = (symbol != '') ? startCursorPosition + 1 : startCursorPosition;
        this.setCursorPosition(newCursorPosition);
    }

    backspaceSymbol() {
        let messageArray = this.element.value.split('');
        let startCursorPosition = this.getStartCursorPosition();
        let endCursorPosition = this.getEndCursorPosition();
        let quantityOfSelectedLetters = endCursorPosition - startCursorPosition;

        let newCursorPosition = startCursorPosition;
        if (startCursorPosition == endCursorPosition) {
            messageArray.splice(startCursorPosition - 1, 1);
            newCursorPosition = startCursorPosition - 1;
        } else {
            messageArray.splice(startCursorPosition, quantityOfSelectedLetters);
        }


        this.element.value = messageArray.join('');
        this.setCursorPosition(newCursorPosition);
    }

    deleteSymbol() {
        let messageArray = this.element.value.split('');
        let startCursorPosition = this.getStartCursorPosition();
        let endCursorPosition = this.getEndCursorPosition();
        let quantityOfSelectedLetters = endCursorPosition - startCursorPosition;

        if (startCursorPosition == endCursorPosition) {
            messageArray.splice(startCursorPosition, 1);
        } else {
            messageArray.splice(startCursorPosition, quantityOfSelectedLetters);
        }

        this.element.value = messageArray.join('');

        this.setCursorPosition(startCursorPosition);
    }

    getStartCursorPosition() {
        return this.element.selectionStart;
    }

    getEndCursorPosition() {
        return this.element.selectionEnd;
    }

    setCursorPosition(position) {
        this.element.selectionStart = this.element.selectionEnd = position;
    }
}