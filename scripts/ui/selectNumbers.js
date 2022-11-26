import { NumberButton } from "./numberButton.js";

class SelectNumbers {
    get width() { return this.game.isPortrait ? this.game.width : this.game.width / 2; }
    get height() { return (this.rows * this.radius * 2) + (this.gap * (this.rows - 1)); }

    get widthUsed() { return this.width - this.gap - this.gap; }
    get rows() { return this.numberCount / this.columns; }
    get isValid() { return this.numberButtons.some(b => b.active); }

    get startX() { return this.gap + this.radius; }
    get startY() { return this.gap + this.radius; }
    get gap() { return 10; }
    get radius() { return (this.widthUsed - ((this.columns - 1) * this.gap)) / (2 * this.columns); }

    constructor(game) {
        this.game = game;
        this.numberCount = 12;
        this.numberButtons = [];
        this.columns = 4;

        let x = this.startX;
        let y = this.startY;

        for (let i = 0; i < this.numberCount; i++) {
            x = this.startX;
            y = this.startY;
            const button = new NumberButton(this.game, x, y, i+1);
            this.numberButtons.push(button);
        }

        if (!this.isValid) {
            this.numberButtons[1].active = true;
        }
    }

    setup() {
        for (let i = 0; i < this.numberCount; i++) {
            this.numberButtons[i].setup();
        }
    }

    update(elapsed) {
        let x = this.startX;
        let y = this.startY;
        let count = 0;
        let size = this.radius;

        for (let i = 0; i < this.numberCount; i++) {
            if (count >= this.columns) {
                x = this.startX;
                y += (size * 2) + this.gap;
                count = 0;
            }

            const button = this.numberButtons[i];
            button.x = x;
            button.y = y;
            button.size = size;
            button.update(elapsed);
            count++;
            x += (size * 2) + this.gap;
        }
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

export { SelectNumbers };
