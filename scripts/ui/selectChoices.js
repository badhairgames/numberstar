import { NumberButton } from "./numberButton.js";

class SelectChoices {
    get width() { return (this.columns * this.numberButtons[0].size * 2) + (this.gap * (this.columns - 1)); }
    get height() { return (this.rows * this.numberButtons[0].size * 2) + (this.gap * (this.rows - 1)); }
    get rows() { return this.numberCount / this.columns; }
    get isValid() { return this.numberButtons.some(b => b.active); }

    constructor(game, numbers, answer, startX, startY) {
        this.game = game;
        this.numberCount = numbers.length;
        this.numbers = numbers;
        this.numberButtons = [];
        this.columns = 4;
        this.answer = answer;
        this.startX = startX;
        this.startY = startY;
        this.gap = 10;

        let x = startX;
        let y = startY;

        for (let i = 0; i < this.numberCount; i++) {
            x = this.startX;
            y = this.startY;
            const button = new NumberButton(this.game, x, y, numbers[i]);
            this.numberButtons.push(button);
        }
    }

    setup() {
        let x = this.startX;
        let y = this.startY;
        let count = 0;
        let size = this.numberButtons[0].size;

        for (let i = 0; i < this.numberCount; i++) {
            if (count >= this.columns) {
                x = this.startX;
                y += (size * 2) + this.gap;
                count = 0;
            }

            const button = this.numberButtons[i];
            button.x = x;
            button.y = y;
            button.setup();
            count++;
            x += (size * 2) + this.gap;
        }
    }

    update(elapsed) {
    }

    draw() {
        for (let i = 0; i < this.numberCount; i++) {
            this.numberButtons[i].draw();
        }
    }
    
    teardown() {
        for (let i = 0; i < this.numberCount; i++) {
            this.numberButtons[i].teardown();
        }
    }

    getSelectedNumbers() {
        const result = [];
        for (let i = 0; i < this.numberCount; i++) {
            if (this.numberButtons[i].active) result.push(i + 1);
        }
        return result;
    }
}

export { SelectChoices };
