import { Shapes } from "../utils/shapes.js";
import { Explosion } from "../utils/explosion.js";

class Lives {
    constructor(parent) {
        this.parent = parent;
        this.game = this.parent.game;
        this.ctx = this.game.ctx;
        this.size = 10;
        this.gap = this.size * 1.5;
        this.x = this.game.width - this.size - this.gap;
        this.y = this.size + this.gap;
        this.Shapes = new Shapes(this.game);
        this.colour = '#BB0000';
        this.reset();
    }

    draw() {
        if (this.explosion) {
            this.explosion.draw();
        }

        for (let i = 0; i < this.lives; i++) {
            const x = this.x - (i * (this.size + this.gap));
            this.Shapes.drawCircle(x, this.y, this.size, this.colour);
        }

        for (let i = this.lives; i < this.totalLives; i++) {
            const x = this.x - (i * (this.size + this.gap));
            this.Shapes.drawCircleOutline(x, this.y, this.size, this.colour);
        }
    }

    add(num) {
        if (num < 0) {
            this.explosion = new Explosion(this.ctx, this.lifeX(), this.y, 3, 400);
            this.explosion.explode(this.colour);
        }

        this.lives += num;
    }

    outOfLives() {
        return this.lives <= 0;
    }

    lifeX() {
        return this.x - ((this.lives - 1) * (this.size + this.gap));
    }

    reset() {
        this.totalLives = 3;
        this.lives = this.totalLives;
    }
}

export { Lives };