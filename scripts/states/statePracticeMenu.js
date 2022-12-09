import { GameState } from "./gameState.js";
import { SelectNumbers } from "../ui/selectNumbers.js";
import { SelectOperations } from "../ui/selectOperations.js";
import { RectButton } from "../ui/rectButton.js";

class StatePracticeMenu extends GameState {
    get isValid() { return this.numbers.isValid && this.operators.isValid; }
    get buttonX() { return this.operators.midX; }
    get buttonY() { return this.operators.startY + this.operators.height + this.operators.gap; }
    get buttonWidth() { return this.numbers.widthUsed; }
    get buttonHeight() { return this.operators.height; }

    constructor(game) {
        super(game);
        this.startX = 10;
        this.startY = 10;
        this.buttonRadius = 40;
        this.gap = 10;

        this.numbers = new SelectNumbers(this.game);
        this.operators = new SelectOperations(this.game, this.numbers);
    }

    setup() {
        this.numbers.setup();
        this.operators.setup();

        this.button = new RectButton(
            this.game,
            this.startX + (this.numbers.widthUsed / 2),
            this.startY + this.numbers.height + this.gap + this.operators.height + this.gap + this.buttonRadius,
            this.numbers.width,
            this.buttonRadius * 2,
            () => {
                if (this.isValid) {
                    this.game.changeState(this.game.statePlay);
                }
            });
        this.button.content = 'START';
        this.button.setup();
    }

    update(elapsed) {
        this.button.active = this.isValid;
        this.button.cx = this.buttonX;
        this.button.cy = this.buttonY;
        this.button.width = this.buttonWidth;
        this.button.height = this.buttonHeight;

        this.numbers.update(elapsed);
        this.operators.update(elapsed);
        this.button.update(elapsed);
    }

    draw() {
        this.game.gfx.shapes.drawRect(0, 0, this.game.width, this.game.height, this.game.colour2);
        this.numbers.draw();
        this.operators.draw();
        this.button.draw();
    }
    
    teardown() {
        this.game.selectedNumbers.push(...this.numbers.getSelectedNumbers());
        this.game.selectedOperators.push(...this.operators.getSelectedOperations());

        this.numbers.teardown();
        this.operators.teardown();
        this.button.teardown();
    }
}

export { StatePracticeMenu };
