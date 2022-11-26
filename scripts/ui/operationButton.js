import { RoundButton } from "./roundButton.js";

class OperationButton extends RoundButton {
    constructor(game, x, y, symbol) {
        super(game, x, y);
        this.content = symbol;
        this.colour = this.game.colour1;
        this.selectedColour = this.game.colour3;
    }

    setup() {
        super.setup();
    }

    update(elapsed) {
        super.update(elapsed);
    }

    draw() {
        super.draw();
    }

    teardown() {
        super.teardown();
    }
}

export { OperationButton };