import { GameState } from "./gameState.js";

class StateStart extends GameState {
    constructor(game) {
        super(game);
    }

    setup() {
        this.clickEvent = (e) => {
            this.game.changeState(this.game.statePlay);
        };
        
        document.body.addEventListener('pointerdown', this.clickEvent);
    }

    update(elapsed) {
    }

    draw() {
        this.game.gfx.shapes.drawRect(0, 0, this.game.width, this.game.height, '#FF77BB');
        this.game.gfx.text.drawBigMessage('Settings', '#880044');

        const size = 40;
        const startX = size + 10;
        const startY = size + 10;

        for (let i = 0; i < 12; i++) {
            const x = startX + (i * startX * 2);
            const y = startY;

            this.game.gfx.ui.drawRoundButton(i + 1, x, y, size, () => {
                console.log('You pressed ' + (i + 1));
            });
        }
    }
    
    teardown() {
        document.body.removeEventListener('pointerdown', this.clickEvent);
    }
}

export { StateStart };
