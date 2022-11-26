import { Shapes } from "../utils/shapes.js";
import { Text } from "../utils/text.js";

class RectButton {
    get x() { return this.cx - (this.width / 2); }
    get y() { return this.cy - (this.height / 2); }

    constructor(game, x, y, w, h, callback) {
        this.game = game;
        this.ctx = game.ctx;
        this.width = w;
        this.height = h;
        this.cx = x;
        this.cy = y;
        this.colour = 'rgba(0,0,0,0.2)';
        this.selectedColour = '#BB0088';
        this.active = false;
        this.content = '';
        this.Shapes = new Shapes(game);
        this.Text = new Text(game);
        this.callback = callback;
    }

    setup() {
        this.x = this.cx - (this.width / 2);
        this.y = this.cy - (this.height / 2);
        this.hitbox = this.Shapes.drawRect(this.x, this.y, this.width, this.height, 'rgba(0,0,0,0)');
        this.clickEvent = (e) => {
            if (this.ctx.isPointInPath(this.hitbox, e.clientX, e.clientY)) {
                this.callback();
            }
        };

        document.body.addEventListener('pointerdown', this.clickEvent);
    }

    update(elapsed) {}

    draw() {
        const colour = this.active ? this.selectedColour : this.colour;
        this.Shapes.drawRect(this.x, this.y, this.width, this.height, colour);
        this.Text.drawCenteredText(this.content, this.cx, this.cy, this.height / 2, '#ffffff', 'bold');
    }

    teardown() {
        document.body.removeEventListener('pointerdown', this.clickEvent);
    }
}

export { RectButton };