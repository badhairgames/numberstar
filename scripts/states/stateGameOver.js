import { GameState } from "./gameState.js";

class StateGameOver extends GameState {
    constructor(game) {
        super(game);
    }

    setup() {
        this.clickEvent = (e) => {
            this.game.changeState(this.game.stateHome);
        };

        this.timer = setTimeout(() => {
            document.body.addEventListener('pointerdown', this.clickEvent);
        }, 1000);
    }

    update(elapsed) {
    }

    draw() {
        this.game.gfx.shapes.drawRect(0, 0, this.game.width, this.game.height, '#77BBFF');
        this.game.gfx.text.drawBigMessage('Game Over', '#004488');
        this.game.gfx.text.drawSmallMessage('Score: ' + this.game.score, '#004488');
    }
    
    teardown() {
        document.body.removeEventListener('pointerdown', this.clickEvent);
        this.game.score = 0;
    }
}

export { StateGameOver };
