import { GameState } from "./gameState.js";
import { NumberButton } from "../ui/numberbutton.js";

class StateStart extends GameState {
    constructor(game) {
        super(game);
    }

    setup() {
        this.clickEvent = (e) => {
            this.game.changeState(this.game.statePlay);
        };

        this.numberCount = 12;
        this.numberButtons = [];
        const startX = 50;
        const startY = 50;

        for (let i = 0; i < this.numberCount; i++) {
            this.numberButtons.push(new NumberButton(this.game, startX + (i * startX * 2), startY, i+1));
        }
        
        document.body.addEventListener('pointerdown', this.clickEvent);
    }

    update(elapsed) {
    }

    draw() {
        this.game.gfx.shapes.drawRect(0, 0, this.game.width, this.game.height, '#FF77BB');
        this.game.gfx.text.drawBigMessage('Settings', '#880044');

        for (let i = 0; i < this.numberCount; i++) {
            this.numberButtons[i].draw();
        }
    }
    
    teardown() {
        document.body.removeEventListener('pointerdown', this.clickEvent);
    }
}

export { StateStart };
