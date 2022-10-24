import { GameState } from "./gameState.js";
import { SelectNumbers } from "../ui/selectNumbers.js";
import { SelectOperations } from "../ui/selectOperations.js";
import { RectButton } from "../ui/rectButton.js";

class StateStart extends GameState {
    get isValid() { return this.numbers.isValid && this.operations.isValid; }

    constructor(game) {
        super(game);
        this.startX = 10;
        this.startY = 10;
        this.buttonRadius = 40;
        this.gap = 10;

        this.numbers = new SelectNumbers(this.game, this.startX + this.buttonRadius, this.startY + this.buttonRadius);
        this.operations = new SelectOperations(this.game, this.startX + this.buttonRadius, this.startY + this.buttonRadius + this.numbers.height + this.numbers.gap);
    }

    setup() {
        this.numbers.setup();
        this.operations.setup();

        this.button = new RectButton(
            this.game,
            this.startX + (this.numbers.width / 2),
            this.startY + this.numbers.height + this.gap + this.operations.height + this.gap + this.buttonRadius,
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

        this.numbers.update(elapsed);
        this.operations.update(elapsed);
        this.button.update(elapsed);
    }

    draw() {
        this.game.gfx.shapes.drawRect(0, 0, this.game.width, this.game.height, '#FF77BB');
        this.numbers.draw();
        this.operations.draw();
        this.button.draw();
    }
    
    teardown() {
        this.game.selectedNumbers.length = 0;
        this.game.selectedOperations.length = 0;
        this.game.selectedNumbers.push(...this.numbers.getSelectedNumbers());
        this.game.selectedOperations.push(...this.operations.getSelectedOperations());

        this.numbers.teardown();
        this.operations.teardown();
        this.button.teardown();
    }
}

export { StateStart };
