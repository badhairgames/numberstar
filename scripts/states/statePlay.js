import { GameState } from './gameState.js';

class StatePlay extends GameState {
    constructor(game) {
        super(game);
    }

    setup() {
        this.clickEvent = (e) => {
            this.game.changeState(this.game.stateGameOver);
        };
        
        document.body.addEventListener('pointerdown', this.clickEvent);
    }

    update(elapsed) {
    }

    draw() {
        this.game.gfx.shapes.drawRect(0, 0, this.game.width, this.game.height, '#FFBB77');
        this.game.gfx.text.drawBigMessage('Play', '#884400');
    }
    
    teardown() {
        document.body.removeEventListener('pointerdown', this.clickEvent);
    }
}

export { StatePlay };
