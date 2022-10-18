import { GameState } from "./gameState.js";

class StateGameOver extends GameState {
    constructor(game) {
        super(game);
    }

    setup() {
        this.clickEvent = (e) => {
            this.game.changeState(this.game.stateHome);
        };
        
        document.body.addEventListener('pointerdown', this.clickEvent);
    }

    update(elapsed) {
    }

    draw() {
        this.game.gfx.shapes.drawRect(0, 0, this.game.width, this.game.height, '#77BBFF');
        this.game.gfx.text.drawBigMessage('Game Over', '#004488');
    }
    
    teardown() {
        document.body.removeEventListener('pointerdown', this.clickEvent);
    }
}

export { StateGameOver };
