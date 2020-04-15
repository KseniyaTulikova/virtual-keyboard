export class Key {
    constructor(width, height, row, column) {
        this.value = null;
        this.isKeyPressed = false;

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

    get isPressed() {
        return this.isKeyPressed;
    }

    set isPressed(value) {
        this.isKeyPressed = value;
    }

    get htmlElement() {
        return this.element;
    }
}