import { OperationButton } from "./operationButton.js";

class SelectOperations {
    get width() { return (this.columns * this.operationButtons[0].size * 2) + (this.gap * (this.columns - 1)); }
    get height() { return (this.rows * this.operationButtons[0].size * 2) + (this.gap * (this.rows - 1)); }
    get rows() { return this.operations.length / this.columns; }
    get isValid() { return this.operationButtons.some(b => b.active); }

    constructor(game, startX, startY) {
        this.game = game;
        this.operations = '+-×÷';
        this.operationButtons = [];
        this.columns = 4;
        this.startX = startX;
        this.startY = startY;
        this.gap = 10;

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
        let x = this.startX;
        let y = this.startY;
        let count = 0;
        let size = this.operationButtons[0].size;

        for (let i = 0; i < this.operations.length; i++) {
            if (count >= this.columns) {
                x = this.startX;
                y += (size * 2) + this.gap;
                count = 0;
            }

            const button = this.operationButtons[i];
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
