class Particle {
    constructor(ctx, x, y, colour = '#44ff00', size = 5, speed = 200) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.r = Math.random() * 10;
        this.colour = colour;
        this.speedMultiplier = speed / 1000;
        this.xDiff = ((Math.random() * size) - (size / 2)) / this.speedMultiplier;
        this.yDiff = ((Math.random() * size) - (size / 2)) / this.speedMultiplier;
   }

   draw() {
        this.ctx.beginPath();
        this.ctx.fillStyle = this.colour;
        this.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        this.ctx.fill();
        this.x += this.xDiff;
        this.y += this.yDiff;
        if (this.r >= this.speedMultiplier) {
            this.r -= this.speedMultiplier;
        }
   }
}

export { Particle };