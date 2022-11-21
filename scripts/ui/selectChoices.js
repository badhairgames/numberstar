import { Explosion } from "../utils/explosion.js";
import { NumberButton } from "./numberButton.js";

class SelectChoices {
    get width() { return (this.columns * this.numberButtons[0].size * 2) + (this.gap * (this.columns - 1)); }
    get height() { return (this.rows * this.numberButtons[0].size * 2) + (this.gap * (this.rows - 1)); }
    get rows() { return this.numberCount / this.columns; }
    get isValid() { return this.numberButtons.some(b => b.active); }

    constructor(parent, numbers, answer, startX, startY) {
        this.parent = parent;
        this.game = parent.game;
        this.ctx = this.game.ctx;
        this.numberCount = numbers.length;
        this.numbers = numbers;
        this.numberButtons = [];
        this.columns = 4;
        this.answer = answer;
        this.startX = startX;
        this.startY = startY;
        this.gap = 10;
        this.answered = false;
        this.correct = false;

        let x = startX;
        let y = startY;

        for (let i = 0; i < this.numberCount; i++) {
            x = this.startX;
            y = this.startY;
            const button = new NumberButton(this.game, x, y, numbers[i]);
            button.colour = '#BB7733';
            button.selectedColour = button.colour;
            button.callback = () => {
                this.answered = true;

                if (button.content === this.answer) {
                    button.colour = '#00BB00';
                    button.selectedColour = button.colour;
                    this.correct = true;
                }
                else {
                    button.colour = '#BB0000';
                    button.selectedColour = button.colour;
                    for (let b = 0; b < this.numberCount; b++) {
                        if (this.numberButtons[b].content === this.answer) {
                            this.numberButtons[b].colour = '#006600';
                            this.numberButtons[b].selectedColour = this.numberButtons[b].colour;
                            break;
                        }
                    }
                    this.correct = false;
                }

                button.explode();
            };

            this.numberButtons.push(button);
        }
    }

    setup() {
        const size = this.numberButtons[0].size;
        const startX = this.startX - (this.width / 2) + size;
        const startY = this.startY - (this.height / 2) + size;
        
        let x = startX;
        let y = startY;
        let count = 0;

        for (let i = 0; i < this.numberCount; i++) {
            if (count >= this.columns) {
                x = startX;
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

        this.enable();
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

    enable() {
        for (let i = 0; i < this.numberCount; i++) {
            this.numberButtons[i].enabled = true;
        }
    }

    disable() {
        for (let i = 0; i < this.numberCount; i++) {
            this.numberButtons[i].enabled = false;
        }
    }
}

export { SelectChoices };
