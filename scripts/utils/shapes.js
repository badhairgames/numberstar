class Shapes {
    constructor(game) {
        this.game = game;
    }

    drawRect(x, y, w, h, fill) {
        this.game.ctx.beginPath();
        this.game.ctx.fillStyle = fill;
        this.game.ctx.fillRect(x, y, w, h);
        this.game.ctx.fill();
    }

    drawCircle(x, y, r, fill) {
        const circle = new Path2D();
        circle.arc(x, y, r, 0, 2 * Math.PI);
        this.game.ctx.fillStyle = fill;
        this.game.ctx.fill(circle);
        return circle;
    }
}

export { Shapes };