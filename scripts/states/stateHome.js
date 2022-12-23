import { GameState } from "./gameState.js";
import { RectButton } from "../ui/rectButton.js";

class StateHome extends GameState {
    get buttonX() { return this.game.width / 2; }
    get buttonY() { return this.buttonHeight; }
    get buttonWidth() { return this.game.width * 0.9; }
    get buttonHeight() { return this.buttonRadius * 2; }

    constructor(game) {
        super(game);

        this.buttonRadius = 40;
        this.gap = 10;
    }

    setup() {
        this.buttonStandardGame = this.buttonSetup('PLAY', this.game.statePlayMenu, 0);
        this.buttonTimedGame = this.buttonSetup('TIMED', this.game.stateTimedMenu, 1);
        this.buttonPracticeGame = this.buttonSetup('PRACTICE', this.game.statePracticeMenu, 2);
    }

    buttonSetup(content, nextState, index) {
        const btn = new RectButton(
            this.game,
            this.buttonX,
            this.buttonY + ((this.gap + this.buttonHeight) * index),
            this.buttonWidth,
            this.buttonHeight,
            () => {
                this.game.mode = content.toLowerCase();
                this.game.changeState(nextState);
            });
        btn.content = content;
        btn.setup();
        return btn;
    }

    update(elapsed) {
    }

    draw() {
        this.game.gfx.shapes.drawRect(0, 0, this.game.width, this.game.height, this.game.colour2);
        // this.game.gfx.text.drawBigMessage('Home', this.game.colour5);
        this.buttonStandardGame.draw();
        this.buttonTimedGame.draw();
        this.buttonPracticeGame.draw();
    }
    
    teardown() {
        this.buttonStandardGame.teardown();
        this.buttonTimedGame.teardown();
        this.buttonPracticeGame.teardown();
    }
}

export { StateHome };
