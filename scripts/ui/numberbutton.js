import { Shapes } from "../utils/shapes.js";
import { Text } from "../utils/text.js";

class NumberButton {
    constructor(game, x, y, number) {
        this.game = game;
        this.ctx = game.ctx;
        this.x = x;
        this.y = y;
        this.number = number;
        this.size = 40;
        this.colour = '#BB0088';
        this.active = false;
        this.Shapes = new Shapes(game);
        this.Text = new Text(game);
    }

    setup() {}

    update(elapsed) {}

    draw() {
        const button = this.Shapes.drawCircle(this.x, this.y, this.size, '#BB0088');
        this.Text.drawCenteredText(this.number, this.x, this.y, this.size, '#ffffff', 'bold');
    }
}

export { NumberButton };