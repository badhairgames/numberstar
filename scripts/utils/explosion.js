import { Particle } from "./particle.js";

class Explosion {
    constructor(ctx, x, y, colour = '#44ff00', size = 5) {
        this.particles = [];
        for (var i = 0; i < 100; i++) {
            var particle = new Particle(ctx, x, y, colour, size);
            this.particles.push(particle);
        }
    }

    draw() {
        if (this.particles && this.particles.length > 0) {
            for (var i = 0; i < this.particles.length; i++) {
                this.particles[i].draw();
            }
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

export { Explosion }