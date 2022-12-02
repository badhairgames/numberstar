class Particle {
    constructor(ctx, x, y, colour = '#44ff00', size = 5, speed = 200) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.r = Math.random() * size;
        this.colour = colour;
        this.speedMultiplier = speed / 1000;
        this.xDiff = (Math.random() * size - size / 2) / this.speedMultiplier;
        this.yDiff = (Math.random() * size - size / 2) / this.speedMultiplier;
    }

    draw() {
        // this.ctx.beginPath();
        // this.ctx.fillStyle = this.colour;
        // this.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        // this.ctx.fill();
        this.drawStar(5);
        this.x += this.xDiff;
        this.y += this.yDiff;
        if (this.r >= this.speedMultiplier) {
            this.r -= this.speedMultiplier;
        }
    }

    drawStar(spikes) {
        var rot = (Math.PI / 2) * 3;
        var x = this.x;
        var y = this.y;
        var step = Math.PI / spikes;
        var outerRadius = this.r;
        var innerRadius = this.r * 0.5;

        this.ctx.beginPath();
        this.ctx.moveTo(this.x, this.y - outerRadius);
        for (var i = 0; i < spikes; i++) {
            x = this.x + Math.cos(rot) * outerRadius;
            y = this.y + Math.sin(rot) * outerRadius;
            this.ctx.lineTo(x, y);
            rot += step;

            x = this.x + Math.cos(rot) * innerRadius;
            y = this.y + Math.sin(rot) * innerRadius;
            this.ctx.lineTo(x, y);
            rot += step;
        }
        this.ctx.lineTo(this.x, this.y - outerRadius);
        this.ctx.closePath();
        this.ctx.fillStyle = this.colour;
        this.ctx.fill();
    }
}

export { Particle };
