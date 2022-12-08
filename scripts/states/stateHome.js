import { RoundButton } from "../ui/roundButton.js";
import { GameState } from "./gameState.js";

class StateHome extends GameState {
    constructor(game) {
        super(game);
    }

    setup() {
        this.buttonStandardGame = new RoundButton(this.game, 100, 100, () => {
            this.game.mode = 'standard';
        });

        this.buttonPracticeGame = new RoundButton(this.game, 400, 100, () => {
            this.game.mode = 'practice';
            this.game.changeState(this.game.stateStart);
        });

        this.buttonStandardGame.content = 'play';
        this.buttonPracticeGame.content = 'practice';

        this.buttonStandardGame.size = 60;
        this.buttonPracticeGame.size = 60;

        this.buttonStandardGame.setup();
        this.buttonPracticeGame.setup();

        this.clickEvent = (e) => {
            // this.game.changeState(this.game.stateStart);
        };
        
        document.body.addEventListener('pointerdown', this.clickEvent);
    }

    update(elapsed) {
    }

    draw() {
        this.game.gfx.shapes.drawRect(0, 0, this.game.width, this.game.height, this.game.colour2);
        this.game.gfx.text.drawBigMessage('Home', this.game.colour5);
        this.buttonStandardGame.draw();
        this.buttonPracticeGame.draw();
    }
    
    teardown() {
        document.body.removeEventListener('pointerdown', this.clickEvent);
    }
}

export { StateHome };
