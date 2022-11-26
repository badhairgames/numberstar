import { OperationButton } from "./operationButton.js";

class SelectOperations {
    get width() { return this.game.isPortrait ? this.game.width : this.game.width / 2; }
    get height() { return (this.rows * this.radius * 2) + (this.gap * (this.rows - 1)); }

    get widthUsed() { return this.width - this.gap - this.gap; }
    get rows() { return this.operations.length / this.columns; }
    get isValid() { return this.operationButtons.some(b => b.active); }

    get startX() { return this.gap + this.radius + (this.game.isPortrait ? 0 : this.numbers.width); }
    get startY() { return this.gap + this.radius + this.gap + (this.game.isPortrait ? this.numbers.height : this.height); }

    get midX() { return this.startX - this.radius + (this.widthUsed / 2); }

    get gap() { return 10; }
    get radius() { return (this.widthUsed - ((this.columns - 1) * this.gap)) / (2 * this.columns); }

    constructor(game, numbers) {
        this.game = game;
        this.numbers = numbers;
        this.operations = '+-×÷';
        this.operationButtons = [];
        this.columns = 4;

        let x = this.startX;
        let y = this.startY;

        for (let i = 0; i < this.operations.length; i++) {
            x = this.startX;
            y = this.startY;
            const button = new OperationButton(this.game, x, y, this.operations[i]);
            this.operationButtons.push(button);
        }

        if (!this.isValid) {
            this.operationButtons[2].active = true;
        }
    }

    setup() {
        for (let i = 0; i < this.operationButtons.length; i++) {
            this.operationButtons[i].setup();
        }
    }

    update(elapsed) {
        let x = this.startX;
        let y = this.startY;
        let count = 0;
        let size = this.radius;

        for (let i = 0; i < this.operations.length; i++) {
            if (count >= this.columns) {
                x = this.startX;
                y += (size * 2) + this.gap;
                count = 0;
            }

            const button = this.operationButtons[i];
            button.x = x;
            button.y = y;
            button.size = size;
            count++;
            x += (size * 2) + this.gap;
        }    }

    draw() {
        for (let i = 0; i < this.operations.length; i++) {
            this.operationButtons[i].draw();
        }
    }
    
    teardown() {
        for (let i = 0; i < this.operations.length; i++) {
            this.operationButtons[i].teardown();
        }
    }

    getSelectedOperations() {
        const result = [];
        for (let i = 0; i < this.operations.length; i++) {
            if (this.operationButtons[i].active) result.push(this.operations[i]);
        }
        return result;
    }
}

export { SelectOperations };
