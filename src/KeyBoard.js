import { Key } from './Key.js';

export class KeyBoard {
    constructor(keyBoardLanguages, width) {
        this.keyDown = this.keyDown.bind(this);
        this.keyUp = this.keyUp.bind(this);
        this.setNextLanguage = this.setNextLanguage.bind(this);
        this.setLanguage = this.setLanguage.bind(this);
        this.removeActive = this.removeActive.bind(this);
        this.removeActiveClassNameToKeys = this.removeActiveClassNameToKeys.bind(this);
        this.addActive = this.addActive.bind(this);
        this.addActiveClassNameToKeys = this.addActiveClassNameToKeys.bind(this);
        this.createKeyBoard = this.createKeyBoard.bind(this);
        this.createBasicKeys = this.createBasicKeys.bind(this);
        this.createKeyBoardElement = this.createKeyBoardElement.bind(this);

        this.keyBoardLanguages = keyBoardLanguages;
        this.languages = Object.keys(keyBoardLanguages);

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
        
        
        this.keyBoard = this.createKeyBoard();
        this.currentLanguage = null;
        this.setLanguage(sessionStorage.getItem('lang'));
        this.element = this.createKeyBoardElement();
    }

    keyDown(row, column) {
        let key = this.keyBoard[row][column];

        if(key.isPressed) {
            return '';
        }
        
        let result = null;
        if (key.value.type == 'CapsLock') {
            this.capsLockFlag = !this.capsLockFlag;

            result = key.value.main.printValue;
        } else if (key.value.type == 'Shift') {
            this.shiftFlag = !this.shiftFlag;
            
            result = key.value.main.printValue;
        } else if (this.shiftFlag && key.value.type == 'Alt') {
            this.setNextLanguage();
        } else if(key.value.type != null && (key.value.type == 'BackSpace' || key.value.type == 'Del')) {
            result = key.value.type;
        } else if (this.shiftFlag && (key.value.additional || this.capsLockFlag)) {
            result = (key.value.additional != null) ? key.value.additional.printValue : key.value.main.printValue;
        } else if ((this.capsLockFlag && !this.shiftFlag) || (this.shiftFlag && !this.capsLockFlag)) {
            result = key.value.main.printValue.toUpperCase();
        } else {
            result = key.value.main.printValue;
        }
        

        key.isPressed = true;
        this.addActive(key);

        return result;
    }

    keyUp(row,column) {
        let key = this.keyBoard[row][column];
        if (key.value.type != 'Shift' && key.value.type != 'CapsLock') {
            this.removeActive(key);
        } else if((!this.shiftFlag && (key.value.type == 'Shift')) || ( !this.capsLockFlag && (key.value.type == 'CapsLock')))  {
            this.removeActive(key);
        }

        key.isPressed = false;
    }

    setNextLanguage() {
        let currentLanguageIndex = this.languages.indexOf(this.currentLanguage);
        let nextLanguageIndex = (currentLanguageIndex == this.languages.length - 1) ? 0 : currentLanguageIndex + 1;
        
        return this.setLanguage(this.languages[nextLanguageIndex]);
    }

    setLanguage(language) {
        if(language == null) {
            language = this.languages[0];
        }
        this.keyBoard.forEach((row, rowIndex) => {
            row.forEach((key, colIndex) => {
                key.setValue(this.keyBoardLanguages[language][rowIndex][colIndex]);
            });
        });

        sessionStorage.setItem('lang', language);
        this.currentLanguage = language;
    }

    get htmlElement() {
        return this.element;
    }

    addActive(key) {
        if(key.value.type != null) {
            this.addActiveClassNameToKeys(this.selectKeysByType(key.value.type), 'active-key');
        } else {
            this.addActiveClassNameToKey(key, 'active-key');
        }
    }

    addActiveClassNameToKey(key, className) {
        key.htmlElement.classList.add(className); 
    }

    addActiveClassNameToKeys(keys, className) {
        keys.forEach(key => this.addActiveClassNameToKey(key, className));
    }
 
    removeActive(key) {
        if(key.value.type != null) {
            this.removeActiveClassNameToKeys(this.selectKeysByType(key.value.type), 'active-key');
        } else {
            this.removeActiveClassNameToKey(key, 'active-key');
        }
    }

    removeActiveClassNameToKey(key, className) {
        key.htmlElement.classList.remove(className);
    }

    removeActiveClassNameToKeys(keys, className) {
        keys.forEach(key => this.removeActiveClassNameToKey(key, className));
    }
    
    selectKeysByType(type) {
        let result = [];
        this.keyBoard.forEach((row) => {
            result = result.concat(row.filter(key => key.value.type == type));
        });

        return result;
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

        return element;
    }
}
