

window.onload = function () {
    showKeyBoard();
}


let firstRowEN = [
    {
        main: {
            printValue: '`',
            displayValue: '`'
        },
        additional: {
            printValue: '~',
            displayValue: '~'
        }
    },
    {
        main: {
            printValue: '1',
            displayValue: '1'
        },
        additional: {
            printValue: '!',
            displayValue: '!'
        }
    },
    {
        main: {
            printValue: '2',
            displayValue: '2'
        },
        additional: {
            printValue: '@',
            displayValue: '@'
        }
    },
    {
        main: {
            printValue: '3',
            displayValue: '3'
        },
        additional: {
            printValue: '#',
            displayValue: '#'
        }
    },
    {
        main: {
            printValue: '4',
            displayValue: '4'
        },
        additional: {
            printValue: '$',
            displayValue: '$'
        }
    },
    {
        main: {
            printValue: '5',
            displayValue: '5'
        },
        additional: {
            printValue: '%',
            displayValue: '%'
        }
    },
    {
        main: {
            printValue: '6',
            displayValue: '6'
        },
        additional: {
            printValue: ':',
            displayValue: ':'
        }
    },
    {
        main: {
            printValue: '7',
            displayValue: '7'
        },
        additional: {
            printValue: '?',
            displayValue: '?'
        }
    },
    {
        main: {
            printValue: '8',
            displayValue: '8'
        },
        additional: {
            printValue: '*',
            displayValue: '*'
        }
    },
    {
        main: {
            printValue: '9',
            displayValue: '9'
        },
        additional: {
            printValue: '(',
            displayValue: '('
        }
    },
    {
        main: {
            printValue: '0',
            displayValue: '0'
        },
        additional: {
            printValue: ')',
            displayValue: ')'
        }
    },
    {
        main: {
            printValue: '-',
            displayValue: '-'
        },
        additional: {
            printValue: '_',
            displayValue: '_'
        }
    },
    {
        main: {
            printValue: '=',
            displayValue: '='
        },
        additional: {
            printValue: '+',
            displayValue: '+'
        }
    },
    {
        main: {
            printValue: null,
            displayValue: 'BackSpace',
            type: 'BackSpace'

        },
        additional: null
    }
];

let secondRowEN = [
    {
        main: {
            printValue: '\t',
            displayValue: 'Tab'
        },
        additional: null
    },
    {
        main: {
            printValue: 'q',
            displayValue: 'q'
        },
        additional: null
    },
    {
        main: {
            printValue: 'w',
            displayValue: 'w'
        },
        additional: null
    },
    {
        main: {
            printValue: 'e',
            displayValue: 'e'
        },
        additional: null
    },
    {
        main: {
            printValue: 'r',
            displayValue: 'r'
        },
        additional: null
    },
    {
        main: {
            printValue: 't',
            displayValue: 't'
        },
        additional: null
    },
    {
        main: {
            printValue: 'y',
            displayValue: 'y'
        },
        additional: null
    },
    {
        main: {
            printValue: 'u',
            displayValue: 'u'
        },
        additional: null
    },
    {
        main: {
            printValue: 'i',
            displayValue: 'i'
        },
        additional: null
    },
    {
        main: {
            printValue: 'o',
            displayValue: 'o'
        },
        additional: null
    },
    {
        main: {
            printValue: 'p',
            displayValue: 'p'
        },
        additional: null
    },
    {
        main: {
            printValue: '[',
            displayValue: '['
        },
        additional: null
    },
    {
        main: {
            printValue: ']',
            displayValue: ']'
        },
        additional: null
    },
    {
        main: {
            printValue: '\\',
            displayValue: '\\'
        },
        additional: null
    },
    {
        main: {
            printValue: '\127',
            displayValue: 'Del',
            type: 'Del'
        },
        additional: null
    }
];

let thirdRowEN = [
    {
        main: {
            printValue: null,
            displayValue: 'CapsLock',
            type: 'CapsLock'
        },
        additional: null
    },
    {
        main: {
            printValue: 'a',
            displayValue: 'a'
        },
        additional: null
    },
    {
        main: {
            printValue: 's',
            displayValue: 's'
        },
        additional: null
    },
    {
        main: {
            printValue: 'd',
            displayValue: 'd'
        },
        additional: null
    },
    {
        main: {
            printValue: 'f',
            displayValue: 'f'
        },
        additional: null
    },
    {
        main: {
            printValue: 'g',
            displayValue: 'g'
        },
        additional: null
    },
    {
        main: {
            printValue: 'h',
            displayValue: 'h'
        },
        additional: null
    },
    {
        main: {
            printValue: 'j',
            displayValue: 'j'
        },
        additional: null
    },
    {
        main: {
            printValue: 'k',
            displayValue: 'k'
        },
        additional: null
    },
    {
        main: {
            printValue: 'l',
            displayValue: 'l'
        },
        additional: null
    },
    {
        main: {
            printValue: ';',
            displayValue: ';'
        },
        additional: null
    },
    {
        main: {
            printValue: "'",
            displayValue: '\''
        },
        additional: null
    },
    {
        main: {
            printValue: '\n',
            displayValue: 'Enter',
            type: 'Enter'
        },
        additional: null
    }
];

let fourthRowEN = [
    {
        main: {
            printValue: null,
            displayValue: 'Shift',
            type: 'Shift'
        },
        additional: null
    },
    {
        main: {
            printValue: 'z',
            displayValue: 'z'
        },
        additional: null
    },
    {
        main: {
            printValue: 'x',
            displayValue: 'x'
        },
        additional: null
    },
    {
        main: {
            printValue: 'c',
            displayValue: 'c'
        },
        additional: null
    },
    {
        main: {
            printValue: 'v',
            displayValue: 'v'
        },
        additional: null
    },
    {
        main: {
            printValue: 'b',
            displayValue: 'b'
        },
        additional: null
    },
    {
        main: {
            printValue: 'n',
            displayValue: 'n'
        },
        additional: null
    },
    {
        main: {
            printValue: 'm',
            displayValue: 'm'
        },
        additional: null
    },
    {
        main: {
            printValue: '.',
            displayValue: '.'
        },
        additional: null
    },
    {
        main: {
            printValue: ',',
            displayValue: ','
        },
        additional: null
    },
    {
        main: {
            printValue: '/',
            displayValue: '/'
        },
        additional: null
    },
    {
        main: {
            printValue: '↑',
            displayValue: '↑'
        },
        additional: null
    },
    {
        main: {
            printValue: null,
            displayValue: 'Shift',
            type: 'Shift'
        },
        additional: null
    }
];

let fifthRowEN = [
    {
        main: {
            printValue: null,
            displayValue: 'Ctrl'
        },
        additional: null
    },
    {
        main: {
            printValue: null,
            displayValue: 'Win'
        },
        additional: null
    },
    {
        main: {
            printValue: null,
            displayValue: 'Alt',
            type: 'Alt'
        },
        additional: null
    },
    {
        main: {
            printValue: '\240',
            displayValue: '\240'
        },
        additional: null
    },
    {
        main: {
            printValue: null,
            displayValue: 'Alt',
            type: 'Alt'
        },
        additional: null
    },
    {
        main: {
            printValue: '←',
            displayValue: '←'
        },
        additional: null
    },
    {
        main: {
            printValue: '↓',
            displayValue: '↓'
        },
        additional: null
    },
    {
        main: {
            printValue: '→',
            displayValue: '→'
        },
        additional: null
    },
    {
        main: {
            printValue: null,
            displayValue: 'Ctrl'
        },
        additional: null
    }
];

let firstRowRU = [
    {
        main: {
            printValue: 'ё',
            displayValue: 'ё'
        },
        additional: null
    },
    {
        main: {
            printValue: '1',
            displayValue: '1'
        },
        additional: {
            printValue: '!',
            displayValue: '!'
        }
    },
    {
        main: {
            printValue: '2',
            displayValue: '2'
        },
        additional: {
            printValue: '"',
            displayValue: '"'
        }
    },
    {
        main: {
            printValue: '3',
            displayValue: '3'
        },
        additional: {
            printValue: '№',
            displayValue: '№'
        }
    },
    {
        main: {
            printValue: '4',
            displayValue: '4'
        },
        additional: {
            printValue: ';',
            displayValue: ';'
        }
    },
    {
        main: {
            printValue: '5',
            displayValue: '5'
        },
        additional: {
            printValue: '%',
            displayValue: '%'
        }
    },
    {
        main: {
            printValue: '6',
            displayValue: '6'
        },
        additional: {
            printValue: '^',
            displayValue: '^'
        }
    },
    {
        main: {
            printValue: '7',
            displayValue: '7'
        },
        additional: {
            printValue: '&',
            displayValue: '&'
        }
    },
    {
        main: {
            printValue: '8',
            displayValue: '8'
        },
        additional: {
            printValue: '*',
            displayValue: '*'
        }
    },
    {
        main: {
            printValue: '9',
            displayValue: '9'
        },
        additional: {
            printValue: '(',
            displayValue: '('
        }
    },
    {
        main: {
            printValue: '0',
            displayValue: '0'
        },
        additional: {
            printValue: ')',
            displayValue: ')'
        }
    },
    {
        main: {
            printValue: '-',
            displayValue: '-'
        },
        additional: {
            printValue: '_',
            displayValue: '_'
        }
    },
    {
        main: {
            printValue: '=',
            displayValue: '='
        },
        additional: {
            printValue: '+',
            displayValue: '+'
        }
    },
    {
        main: {
            printValue: null,
            displayValue: 'BackSpace',
            type: 'BackSpace'

        },
        additional: null
    }
];

let secondRowRU = [
    {
        main: {
            printValue: '\t',
            displayValue: 'Tab'
        },
        additional: null
    },
    {
        main: {
            printValue: 'й',
            displayValue: 'й'
        },
        additional: null
    },
    {
        main: {
            printValue: 'ц',
            displayValue: 'ц'
        },
        additional: null
    },
    {
        main: {
            printValue: 'у',
            displayValue: 'у'
        },
        additional: null
    },
    {
        main: {
            printValue: 'к',
            displayValue: 'к'
        },
        additional: null
    },
    {
        main: {
            printValue: 'е',
            displayValue: 'е'
        },
        additional: null
    },
    {
        main: {
            printValue: 'н',
            displayValue: 'н'
        },
        additional: null
    },
    {
        main: {
            printValue: 'г',
            displayValue: 'г'
        },
        additional: null
    },
    {
        main: {
            printValue: 'ш',
            displayValue: 'ш'
        },
        additional: null
    },
    {
        main: {
            printValue: 'щ',
            displayValue: 'щ'
        },
        additional: null
    },
    {
        main: {
            printValue: 'з',
            displayValue: 'з'
        },
        additional: null
    },
    {
        main: {
            printValue: 'х',
            displayValue: 'х'
        },
        additional: null
    },
    {
        main: {
            printValue: 'ъ',
            displayValue: 'ъ'
        },
        additional: null
    },
    {
        main: {
            printValue: '\\',
            displayValue: '\\'
        },
        additional: null
    },
    {
        main: {
            printValue: '\127',
            displayValue: 'Del',
            type: 'Del'
        },
        additional: null
    }
];

let thirdRowRU = [
    {
        main: {
            printValue: null,
            displayValue: 'CapsLock',
            type: 'CapsLock'
        },
        additional: null
    },
    {
        main: {
            printValue: 'ф',
            displayValue: 'ф'
        },
        additional: null
    },
    {
        main: {
            printValue: 'ы',
            displayValue: 'ы'
        },
        additional: null
    },
    {
        main: {
            printValue: 'в',
            displayValue: 'в'
        },
        additional: null
    },
    {
        main: {
            printValue: 'а',
            displayValue: 'а'
        },
        additional: null
    },
    {
        main: {
            printValue: 'п',
            displayValue: 'п'
        },
        additional: null
    },
    {
        main: {
            printValue: 'р',
            displayValue: 'р'
        },
        additional: null
    },
    {
        main: {
            printValue: 'о',
            displayValue: 'о'
        },
        additional: null
    },
    {
        main: {
            printValue: 'л',
            displayValue: 'л'
        },
        additional: null
    },
    {
        main: {
            printValue: 'д',
            displayValue: 'д'
        },
        additional: null
    },
    {
        main: {
            printValue: 'ж',
            displayValue: 'ж'
        },
        additional: null
    },
    {
        main: {
            printValue: "э",
            displayValue: 'э'
        },
        additional: null
    },
    {
        main: {
            printValue: '\n',
            displayValue: 'Enter',
            type: 'Enter'
        },
        additional: null
    }
];

let fourthRowRU = [
    {
        main: {
            printValue: null,
            displayValue: 'Shift',
            type: 'Shift'
        },
        additional: null
    },
    {
        main: {
            printValue: 'я',
            displayValue: 'я'
        },
        additional: null
    },
    {
        main: {
            printValue: 'ч',
            displayValue: 'ч'
        },
        additional: null
    },
    {
        main: {
            printValue: 'с',
            displayValue: 'с'
        },
        additional: null
    },
    {
        main: {
            printValue: 'м',
            displayValue: 'м'
        },
        additional: null
    },
    {
        main: {
            printValue: 'и',
            displayValue: 'и'
        },
        additional: null
    },
    {
        main: {
            printValue: 'т',
            displayValue: 'т'
        },
        additional: null
    },
    {
        main: {
            printValue: 'ь',
            displayValue: 'ь'
        },
        additional: null
    },
    {
        main: {
            printValue: 'б',
            displayValue: 'б'
        },
        additional: null
    },
    {
        main: {
            printValue: 'ю',
            displayValue: 'ю'
        },
        additional: null
    },
    {
        main: {
            printValue: '.',
            displayValue: '.'
        },
        additional: {
            printValue: ',',
            displayValue: ','
        }
    },
    {
        main: {
            printValue: '↑',
            displayValue: '↑'
        },
        additional: null
    },
    {
        main: {
            printValue: null,
            displayValue: 'Shift',
            type: 'Shift'
        },
        additional: null
    }
];

let fifthRowRU = [
    {
        main: {
            printValue: null,
            displayValue: 'Ctrl'
        },
        additional: null
    },
    {
        main: {
            printValue: null,
            displayValue: 'Win'
        },
        additional: null
    },
    {
        main: {
            printValue: null,
            displayValue: 'Alt',
            type: 'Alt'
        },
        additional: null
    },
    {
        main: {
            printValue: '\240',
            displayValue: '\240'
        },
        additional: null
    },
    {
        main: {
            printValue: null,
            displayValue: 'Alt',
            type: 'Alt'
        },
        additional: null
    },
    {
        main: {
            printValue: '←',
            displayValue: '←'
        },
        additional: null
    },
    {
        main: {
            printValue: '↓',
            displayValue: '↓'
        },
        additional: null
    },
    {
        main: {
            printValue: '→',
            displayValue: '→'
        },
        additional: null
    },
    {
        main: {
            printValue: null,
            displayValue: 'Ctrl'
        },
        additional: null
    }
];
let keyBoardLanguages = {
    'en': [firstRowEN, secondRowEN, thirdRowEN, fourthRowEN, fifthRowEN],
    'ru': [firstRowRU, secondRowRU, thirdRowRU, fourthRowRU, fifthRowRU]
}

let languages = Object.keys(keyBoardLanguages);

class TextField {
    constructor(width, height) {
        this.width = width;
        this.height = height / 2;
    }

    createTextFieldElement() {
        let textAreaField = document.createElement('textarea');
        textAreaField.className = 'typingField';
        textAreaField.style.width = `${this.width}px`;
        textAreaField.style.height = `${this.height}px`;
        return textAreaField;
    }

}

class KeyBoard {
    constructor(width) {
        this.width = width;
        this.height = 0.363 * width;

        this.basicKeyWidth = 0.056 * width;
        this.keyHeight = this.basicKeyWidth;
        this.tabWidth = 1.25 * this.basicKeyWidth;
        this.shiftWidth = this.capsLockWidth = this.backSpaceWidth = 2.5 * this.basicKeyWidth;
        this.capsLockFlag = false;
        this.shiftFlag = false;
        this.ctrl = 1.58 * this.basicKeyWidth;
        this.enter = 2.15 * this.basicKeyWidth;
        this.space = 7.1 * this.basicKeyWidth;

        this.createKeyBoard = this.createKeyBoard.bind(this);
        this.printSymbol = this.printSymbol.bind(this);
        this.createField = this.createField.bind(this);
        this.keyBoard = this.createKeyBoard();
        this.writeLanguageToStorage();
        this.currentLanguage = null;
        this.setLanguage(); // переделай метод
        this.element = this.createKeyBoardElement();
        this.textFiledElement = this.createTextField();
        this.container = this.createField(this.textFiledElement, this.element);
    }

    createTextField() {
        let textField = new TextField(this.width, this.height);

        return textField.createTextFieldElement();
    }

    createKeyBoard() {
        let keyBoardArray = new Array(5);

        // create first row
        keyBoardArray[0] = this.createBasicKeys(13);
        keyBoardArray[0].push(new Key(this.backSpaceWidth, this.keyHeight));

        // create second row
        keyBoardArray[1] = this.createBasicKeys(14);
        keyBoardArray[1].unshift(new Key(this.tabWidth, this.keyHeight));

        // create third row
        keyBoardArray[2] = this.createBasicKeys(11);
        keyBoardArray[2].unshift(new Key(this.capsLockWidth, this.keyHeight));
        keyBoardArray[2].push(new Key(this.enter, this.keyHeight));

        // create fourth row
        keyBoardArray[3] = this.createBasicKeys(11);
        keyBoardArray[3].unshift(new Key(this.shiftWidth, this.keyHeight));
        keyBoardArray[3].push(new Key(this.shiftWidth, this.keyHeight));

        // create fifth row
        keyBoardArray[4] = this.createBasicKeys(5);
        keyBoardArray[4].unshift(new Key(this.space, this.keyHeight));
        keyBoardArray[4].unshift(new Key(this.basicKeyWidth, this.keyHeight));
        keyBoardArray[4].unshift(new Key(this.basicKeyWidth, this.keyHeight));
        keyBoardArray[4].unshift(new Key(this.ctrl, this.keyHeight));

        return keyBoardArray;

    }

    createBasicKeys(quantityOfBasicKeys) {
        let array = new Array();

        for (let i = quantityOfBasicKeys; i > 0; i--) {
            array.push(new Key(this.basicKeyWidth, this.keyHeight));
        }

        return array;
    }

    createKeyBoardElement() {
        let element = document.createElement("div");
        element.className = 'keyboard';
        element.style.width = `${this.width}px`;
        element.style.height = `${this.height}px`;

        this.keyBoard.forEach((array, rowIndex) => {
            let row = document.createElement('div');
            row.className = 'keyboard-row';

            array.forEach((key, columnIndex) => {
                key.htmlElement.dataset.row = rowIndex;
                key.htmlElement.dataset.column = columnIndex;

                row.append(key.htmlElement);
            });

            element.append(row);
        });

        element.addEventListener('click', e => this.printHandler(e));

        return element;
    }

    setLanguage() {
        let language = sessionStorage.getItem('lang');
        this.keyBoard.forEach((row, rowIndex) => {
            row.forEach((key, colIndex) => {
                key.setValue(keyBoardLanguages[language][rowIndex][colIndex]);
            });
        })

        return this.currentLanguage = language;
    }

    createField(textField, keyBoard) {
        let container = document.createElement('div');
        container.className = 'keyBoardContainer';
        container.append(textField, keyBoard);

        return container;
    }

    printHandler(event) {
        if (event.target.parentElement.classList.contains('key')) {
            let row = event.target.parentElement.dataset.row;
            let column = event.target.parentElement.dataset.column;
            let keyObject = this.keyBoard[row][column].value;
            let currentCursorPosition = this.getCurrentCursorPosition(this.textFiledElement)

            if (keyObject.main.type == 'CapsLock') {
                this.capsLockFlag = !this.capsLockFlag;
                this.toggleClassNameToKey(this.selectKeysByType('CapsLock'), 'active-key');

            } else if (keyObject.main.type == 'Shift') {
                this.shiftFlag = !this.shiftFlag;
                this.toggleClassNameToKey(this.selectKeysByType('Shift'), 'active-key');

            } else if (this.capsLockFlag && !this.shiftFlag) {
                let upperCaseSymbol = keyObject.main.printValue.toUpperCase();
                this.textFiledElement.value = this.printSymbol(this.textFiledElement, currentCursorPosition, upperCaseSymbol);

            } else if (keyObject.main.type == 'BackSpace') {

                if (currentCursorPosition > 0) {
                    this.textFiledElement.value = this.backspaceSymbol(this.textFiledElement, currentCursorPosition);
                    currentCursorPosition -= 2;
                }

            } else if (keyObject.main.type == 'Del') {
                this.textFiledElement.value = this.deleteSymbol(this.textFiledElement, currentCursorPosition--);
            } else if (this.shiftFlag && keyObject.main.type == 'Alt') {

                this.shiftFlag = false;
                this.toggleClassNameToKey(this.selectKeysByType('Alt'), 'active-key');

                this.setNextLanguage(languages);

                this.toggleClassNameToKey(this.selectKeysByType('Alt'), 'active-key');
                this.toggleClassNameToKey(this.selectKeysByType('Shift'), 'active-key');

            } else if (this.shiftFlag && (keyObject.additional || this.capsLockFlag)) {
                let symbol = (keyObject.additional != null) ? keyObject.additional.printValue : keyObject.main.printValue;
                this.textFiledElement.value = this.printSymbol(this.textFiledElement, currentCursorPosition, symbol);
                this.shiftFlag = false;
                this.toggleClassNameToKey(this.selectKeysByType('Shift'), 'active-key');
            } else if (this.shiftFlag && !this.capsLockFlag) {
                let upperCaseSymbol = keyObject.main.printValue.toUpperCase();
                this.textFiledElement.value = this.printSymbol(this.textFiledElement, currentCursorPosition, upperCaseSymbol);
                this.shiftFlag = !this.shiftFlag;
                this.toggleClassNameToKey(this.selectKeysByType('Shift'), 'active-key');
            }else {
                this.textFiledElement.value = this.printSymbol(this.textFiledElement, currentCursorPosition, keyObject.main.printValue);
            }
            this.textFiledElement.selectionStart = this.textFiledElement.selectionEnd = currentCursorPosition + 1;
            this.textFiledElement.focus();
        }

    }

    getCurrentCursorPosition(textAreaField) {
        if (textAreaField.selectionStart == textAreaField.selectionStart) return textAreaField.selectionStart;
    }

    printSymbol(textAreaField, currentCursorPosition, symbol) {
        let messageArray = textAreaField.value.split('');
        if (currentCursorPosition == 0) {
            messageArray.push(symbol);
        } else {
            messageArray.splice((currentCursorPosition), 0, symbol);
        }

        return messageArray.join('');
    }

    backspaceSymbol(textAreaField, currentCursorPosition) {
        let messageArray = textAreaField.value.split('');

        messageArray.splice(currentCursorPosition - 1, 1);

        return messageArray.join('');
    }

    deleteSymbol(textAreaField, currentCursorPosition) {
        let messageArray = textAreaField.value.split('');

        messageArray.splice(currentCursorPosition, 1);

        return messageArray.join('');
    }

    toggleClassNameToKey(arrayOfKeys, className) {
        return arrayOfKeys.forEach(key => key.element.classList.toggle(className));
    }

    selectKeysByType(type) {
        let result = [];
        this.keyBoard.forEach((row) => {
            result = result.concat(row.filter(key => key.value.main.type == type));
        });

        return result;
    }

    setNextLanguage(languagesArr) {
        let indexOfCurrentLang = languagesArr.indexOf(this.currentLanguage);
        indexOfCurrentLang == languagesArr.length - 1 ? indexOfCurrentLang = 0 : ++indexOfCurrentLang;

        sessionStorage.setItem('lang', languagesArr[indexOfCurrentLang]);

        return this.setLanguage();
    }

    writeLanguageToStorage() {
        if(!sessionStorage.getItem('lang')) {
            sessionStorage.setItem('lang', languages[0]);
        }
        
    }

    get htmlElement() {
        return this.container;
    }

}

class Key {
    constructor(width, height, row, column) {
        this.value = null;

        this.element = document.createElement('div');
        this.element.className = 'key';
        this.element.style.width = `${width}px`;
        this.element.style.height = `${height}px`;
        this.element.style.lineHeight = this.element.style.height;
    }

    setValue(value) {
        this.value = value;
        if (value.additional != null) {
            this.element.innerHTML = `<sup>${value.additional.displayValue}</sup><span>${value.main.displayValue}</span>`;
        } else {
            this.element.innerHTML = `<span>${value.main.displayValue}</span>`;
        }

    }

    get htmlElement() {
        return this.element;
    }
}

class KeyBoboardInstruction {
    constructor (width, textMessage){
        this.width = width;
        this.instructionsMessage = textMessage;
        this.instructionHtml = null;
        this.createInstructionElement();
    }

    createInstructionElement() {
        let instruction = document.createElement('div');
        instruction.className = 'instuctionToKeyboard';
        instruction.style.width = `${this.width}px`;
        instruction.innerHTML = `<div>${this.instructionsMessage}</div>`;

        return this.instructionHtml = instruction;
    }

    get htmlElement () {
        return this.instructionHtml;
    }
}


const instructionToBoard = `Приветствую!</br>
Для того,чтобы что-то написать в textarea просто нажимай на символы клавиатуры.</br>
1) Если Вы хотите сменить язык,то воспользуйтесь комбинацией клавиш Shift+Alt, после этого произойдёт смена языка.</br>
2) Если нужно написать большими буквами, то для данного действия на клавиатуре присутствует 2 клавиши (CapsLock и Shift).</br>
3) Для удаления символов можно воспользоваться клавишами DEL и BackSpace.</br>
4) Переход на новую строку произойдёт после нажатия клавиши Enter.</br>
5) Для написания добавочного символа(%, №, ^ и др.) просто сначала нажми Shift, а затем по тому символу,который тебе нужен. 
Клавиатура создавалась в Wndows.
Пришла пора тестировать :D</br>
 P.S: возможность работы с физической клавиатурой будет добавлена чуть позже`;
const showKeyBoard = () => {
    let keyBoard = new KeyBoard(713);
    let instruction = new KeyBoboardInstruction(713, instructionToBoard);

    document.body.append(keyBoard.htmlElement, instruction.htmlElement);
}
