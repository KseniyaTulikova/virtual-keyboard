export {LANGUAGES, KEYBOARD_LANGUAGES};

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
            printValue: '',
            displayValue: 'BackSpace'

        },
        additional: null,
        type: 'BackSpace'
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
            printValue: '',
            displayValue: 'Del'
        },
        additional: null,
        type: 'Del'
    }
];

let thirdRowEN = [
    {
        main: {
            printValue: '',
            displayValue: 'CapsLock'
        },
        additional: null,
        type: 'CapsLock'
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
            displayValue: 'Enter'
        },
        additional: null,
        type: 'Enter'
    }
];

let fourthRowEN = [
    {
        main: {
            printValue: '',
            displayValue: 'Shift'
        },
        additional: null,
        type: 'Shift'
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
            printValue: '',
            displayValue: 'Shift'
        },
        additional: null,
        type: 'Shift'
    }
];

let fifthRowEN = [
    {
        main: {
            printValue: '',
            displayValue: 'Ctrl'
        },
        additional: null,
        type: 'Ctrl'
    },
    {
        main: {
            printValue: '',
            displayValue: 'Win'
        },
        additional: null
    },
    {
        main: {
            printValue: '',
            displayValue: 'Alt'
        },
        additional: null,
        type: 'Alt'
    },
    {
        main: {
            printValue: ' ',
            displayValue: ' '
        },
        additional: null
    },
    {
        main: {
            printValue: '',
            displayValue: 'Alt'
        },
        additional: null,
        type: 'Alt'
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
            printValue: '',
            displayValue: 'Ctrl'
        },
        additional: null,
        type: 'Ctrl'
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
            printValue: '',
            displayValue: 'BackSpace'

        },
        additional: null,
        type: 'BackSpace'
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
            printValue: '',
            displayValue: 'Del'
        },
        additional: null,
        type: 'Del'
    }
];

let thirdRowRU = [
    {
        main: {
            printValue: '',
            displayValue: 'CapsLock'
        },
        additional: null,
        type: 'CapsLock'
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
            displayValue: 'Enter'
        },
        additional: null,
        type: 'Enter'
    }
];

let fourthRowRU = [
    {
        main: {
            printValue: '',
            displayValue: 'Shift'
        },
        additional: null,
        type: 'Shift'
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
            printValue: '',
            displayValue: 'Shift'
        },
        additional: null,
        type: 'Shift'
    }
];

let fifthRowRU = [
    {
        main: {
            printValue: '',
            displayValue: 'Ctrl'
        },
        additional: null,
        type: 'Ctrl'
    },
    {
        main: {
            printValue: '',
            displayValue: 'Win'
        },
        additional: null
    },
    {
        main: {
            printValue: '',
            displayValue: 'Alt',
        },
        additional: null,
        type: 'Alt'
    },
    {
        main: {
            printValue: ' ',
            displayValue: ' '
        },
        additional: null
    },
    {
        main: {
            printValue: '',
            displayValue: 'Alt'
        },
        additional: null,
        type: 'Alt'
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
            printValue: '',
            displayValue: 'Ctrl',
            type: 'Ctrl'
        },
        additional: null
    }
];

const KEYBOARD_LANGUAGES = {
    'en': [firstRowEN, secondRowEN, thirdRowEN, fourthRowEN, fifthRowEN],
    'ru': [firstRowRU, secondRowRU, thirdRowRU, fourthRowRU, fifthRowRU]
}

const LANGUAGES = Object.keys(KEYBOARD_LANGUAGES);

