import { Particle } from "./particle.js";

class Explosion {
    constructor(ctx, x, y, size = 5, speed = 200) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.size = size;
        this.speed = speed;
        this.particles = [];
    }

    draw() {
        if (this.particles && this.particles.length > 0) {
            for (var i = 0; i < this.particles.length; i++) {
                this.particles[i].draw();
            }
        }
    }

    explode(colour) {
        this.particles = [];
        for (var i = 0; i < 100; i++) {
            var particle = new Particle(this.ctx, this.x, this.y, colour, this.size, this.speed);
            this.particles.push(particle);
        }
    }

    isComplete() {
        if (this.particles && this.particles.length > 0) {
            for (let i = 0; i < this.particles.length; i++) {
                if (this.particles[i].r > 0.1) {
                    return false;
                }
            }
        }
        this.particles = [];
        return true;
    }
}

export { Explosion };