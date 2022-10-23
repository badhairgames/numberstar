import { OperationButton } from "./operationButton.js";

class SelectOperations {
    constructor(game) {
        this.game = game;
        this.operations = '+-×÷';
        this.operationButtons = [];
        this.columns = 4;

        const startX = 50;
        const startY = 350;

        let x = startX;
        let y = startY;
        let count = 0;

        for (let i = 0; i < this.operations.length; i++) {
            if (count >= this.columns) {
                x = startX;
                y += (startY * 2);
                count = 0;
            }

            const button = new OperationButton(this.game, x, y, this.operations[i]);
            button.setup();
            this.operationButtons.push(button);
            count++;
            x += (startX * 2);
        }

    }

    setup() {
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
}

export { SelectOperations };
