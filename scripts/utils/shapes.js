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
}

export { Shapes };