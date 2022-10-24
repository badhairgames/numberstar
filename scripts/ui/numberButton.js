import { RoundButton } from "./roundButton.js";

class NumberButton extends RoundButton {
    constructor(game, x, y, number) {
        super(game, x, y);
        this.content = number;
        this.colour = '#BB0088';
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

export { NumberButton };
