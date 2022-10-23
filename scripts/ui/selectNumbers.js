import { NumberButton } from "./numberButton.js";

class SelectNumbers {
    constructor(game) {
        this.game = game;
        this.numberCount = 12;
        this.numberButtons = [];
        this.columns = 4;

        const startX = 50;
        const startY = 50;

        let x = startX;
        let y = startY;
        let count = 0;

        for (let i = 0; i < this.numberCount; i++) {
            if (count >= this.columns) {
                x = startX;
                y += (startY * 2);
                count = 0;
            }

            const button = new NumberButton(this.game, x, y, i+1);
            button.setup();
            this.numberButtons.push(button);
            count++;
            x += (startX * 2);
        }

    }

    setup() {
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
}

export { SelectNumbers };
