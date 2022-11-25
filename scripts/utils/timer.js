import { Explosion } from "./explosion.js";
class Timer {
    get x() { return this.game.width / 2; }
    get y() { return this.game.height * 0.8; }

    constructor(game) {
        this.game = game;
        this.selectedColour = '#BB0000';
    }

    update(elapsed) {
        this.remaining -= elapsed;
        this.remaining = Math.max(0, this.remaining);
    }

    draw() {
        if (this.explosion) {
            this.explosion.draw();
        }

        if (this.remaining >= 0) {
            this.game.gfx.shapes.drawPie(this.x, this.y, 40, this.timerAngle(), '#884400');
        }
    }

    explode() {
        this.explosion = new Explosion(this.game.ctx, this.x, this.y, 5);
        this.explosion.explode(this.selectedColour);
    }

    reset() {
        this.timerStart = 3000;
        this.remaining = this.timerStart;
    }

    timerAngle() {
        return (this.remaining / this.timerStart) * 2 * Math.PI;
    }
}

export { Timer };