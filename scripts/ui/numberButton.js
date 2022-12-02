import { Explosion } from "../utils/explosion.js";
import { RoundButton } from "./roundButton.js";

class NumberButton extends RoundButton {
    constructor(game, x, y, number) {
        super(game, x, y);
        this.content = number;
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
        if (this.explosion) {
            this.explosion.draw();
        }
        
        super.draw();
    }

    explode() {
        this.explosion = new Explosion(this.game.ctx, this.x, this.y, 20, 500);
        this.explosion.explode(this.selectedColour);
    }

    teardown() {
        super.teardown();
    }
}

export { NumberButton };
