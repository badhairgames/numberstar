import { RoundButton } from "./roundButton.js";

class OperationButton extends RoundButton {
    constructor(game, x, y, symbol) {
        super(game, x, y);
        this.content = symbol;
        this.colour = '#00BB88';
        this.selectedColour = '#008844';
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