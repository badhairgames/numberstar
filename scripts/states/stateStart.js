import { GameState } from "./gameState.js";
import { SelectNumbers } from "../ui/selectNumbers.js";

class StateStart extends GameState {
    constructor(game) {
        super(game);
    }

    setup() {
        this.clickEvent = (e) => {
        //    this.game.changeState(this.game.statePlay);
        };

        this.numbers = new SelectNumbers(this.game);
    }

    update(elapsed) {
        this.numbers.update(elapsed);
    }

    draw() {
        this.game.gfx.shapes.drawRect(0, 0, this.game.width, this.game.height, '#FF77BB');
        this.numbers.draw();
    }
    
    teardown() {
        document.body.removeEventListener('pointerdown', this.clickEvent);
        this.numbers.teardown();
    }
}

export { StateStart };
