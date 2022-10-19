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
        this.game.ctx.beginPath();
        this.game.ctx.fillStyle = fill;
        this.game.ctx.arc(x, y, r, 0, 2 * Math.PI);
        this.game.ctx.fill();
    }
}

export { Shapes };