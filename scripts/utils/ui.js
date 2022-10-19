import { Shapes } from "./shapes.js";
import { Text } from "./text.js";

class UI {
    constructor(game) {
        this.ctx = game.ctx;
        this.width = game.width;
        this.height = game.height;
        this.Shapes = new Shapes(game);
        this.Text = new Text(game);
    }

    drawRoundButton(msg, x, y, size) {
        this.Shapes.drawCircle(20, 20, 10, '#BB0088');
        this.Text.drawText(msg, x, y, size, '#220011');
    }
}

export { UI };