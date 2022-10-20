import { Shapes } from "./shapes.js";
import { Text } from "./text.js";

class UI {
    constructor(game) {
        this.canvas = game.canvas;
        this.ctx = game.ctx;
        this.width = game.width;
        this.height = game.height;
        this.Shapes = new Shapes(game);
        this.Text = new Text(game);
    }

    drawRoundButton(msg, x, y, size, callback) {
        const button = this.Shapes.drawCircle(x, y, size, '#BB0088');
        this.Text.drawCenteredText(msg, x, y, size, '#ffffff', 'bold');
        this.canvas.addEventListener('click', (e) => {
            if (this.ctx.isPointInPath(button, e.clientX, e.clientY)) {
                callback();
            }
        });
    }
}

export { UI };