import { GameState } from "./gameState.js";
import { SelectNumbers } from "../ui/selectNumbers.js";
import { SelectOperations } from "../ui/selectOperations.js";

class StateStart extends GameState {
    constructor(game) {
        super(game);
    }

    setup() {
        this.clickEvent = (e) => {
        //    this.game.changeState(this.game.statePlay);
        };

        this.numbers = new SelectNumbers(this.game);
        this.operations = new SelectOperations(this.game);
    }

    update(elapsed) {
        this.numbers.update(elapsed);
        this.operations.update(elapsed);
    }

    draw() {
        this.game.gfx.shapes.drawRect(0, 0, this.game.width, this.game.height, '#FF77BB');
        this.numbers.draw();
        this.operations.draw();
    }
    
    teardown() {
        document.body.removeEventListener('pointerdown', this.clickEvent);
        this.numbers.teardown();
        this.operations.teardown();
    }
}

export { StateStart };
