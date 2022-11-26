import { GameState } from "./gameState.js";

class StateHome extends GameState {
    constructor(game) {
        super(game);
    }

    setup() {
        this.clickEvent = (e) => {
            this.game.changeState(this.game.stateStart);
        };
        
        document.body.addEventListener('pointerdown', this.clickEvent);
    }

    update(elapsed) {
    }

    draw() {
        this.game.gfx.shapes.drawRect(0, 0, this.game.width, this.game.height, this.game.colour2);
        this.game.gfx.text.drawBigMessage('Home', this.game.colour5);
    }
    
    teardown() {
        document.body.removeEventListener('pointerdown', this.clickEvent);
    }
}

export { StateHome };
