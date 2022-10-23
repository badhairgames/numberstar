import { Shapes } from "../utils/shapes.js";
import { Text } from "../utils/text.js";

class RoundButton {
    constructor(game, x, y) {
        this.game = game;
        this.ctx = game.ctx;
        this.x = x;
        this.y = y;
        this.size = 40;
        this.colour = '#BB0088';
        this.selectedColour = '#FF44CC';
        this.active = false;
        this.content = '';
        this.Shapes = new Shapes(game);
        this.Text = new Text(game);
    }

    setup() {
        this.hitbox = this.Shapes.drawCircle(this.x, this.y, this.size, 'rgba(0,0,0,0)');
        this.clickEvent = (e) => {
            if (this.ctx.isPointInPath(this.hitbox, e.clientX, e.clientY)) {
                this.active = !this.active;
            }
        };

        document.body.addEventListener('pointerdown', this.clickEvent);
    }

    update(elapsed) {}

    draw() {
        const colour = this.active ? this.selectedColour : this.colour;
        this.Shapes.drawCircle(this.x, this.y, this.size, colour);
        this.Text.drawCenteredText(this.content, this.x, this.y, this.size, '#ffffff', 'bold');
    }

    teardown() {
        document.body.removeEventListener('pointerdown', this.clickEvent);
    }
}

export { RoundButton };