import { GameState } from "./gameState.js";
import { RectButton } from "../ui/rectButton.js";

class StateTimedMenu extends GameState {
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
        this.buttonEasy = this.buttonSetup('EASY', 0);
        this.buttonMedium = this.buttonSetup('NORMAL', 1);
        this.buttonHard = this.buttonSetup('HARD', 2);
        this.buttonInsane = this.buttonSetup('INSANE', 3);
    }

    buttonSetup(content, index) {
        const btn = new RectButton(
            this.game,
            this.buttonX,
            this.buttonY + ((this.gap + this.buttonHeight) * index),
            this.buttonWidth,
            this.buttonHeight,
            () => {
                this.game.difficulty = content.toLowerCase();
                this.game.changeState(this.game.statePlay);
            });
        btn.content = content;
        btn.setup();
        return btn;
    }

    update(elapsed) {
    }

    draw() {
        this.game.gfx.shapes.drawRect(0, 0, this.game.width, this.game.height, this.game.colour3);
        this.buttonEasy.draw();
        this.buttonMedium.draw();
        this.buttonHard.draw();
        this.buttonInsane.draw();
    }
    
    teardown() {
        switch(this.game.difficulty) {
            case 'easy':
                this.game.selectedNumbers.push(1, 2, 3);
                this.game.selectedOperators.push('+');
                break;
            case 'normal':
                this.game.selectedNumbers.push(1, 2, 3, 4, 5, 6);
                this.game.selectedOperators.push('+', '-');
                break;
            case 'hard':
                this.game.selectedNumbers.push(1, 2, 3, 4, 5, 6, 7, 8, 9);
                this.game.selectedOperators.push('+', '-', '×');
                break;
            case 'insane':
                this.game.selectedNumbers.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12);
                this.game.selectedOperators.push('+', '-', '×', '÷');
                break;
            default:
                this.game.selectedNumbers.push(1, 2, 3);
                this.game.selectedOperators.push('+');
                break;
        }

        this.buttonEasy.teardown();
        this.buttonMedium.teardown();
        this.buttonHard.teardown();
        this.buttonInsane.teardown();
    }
}

export { StateTimedMenu };
