class Text {
    constructor(game) {
        this.ctx = game.ctx;
        this.width = game.width;
        this.height = game.height;
    }

    drawText(msg, x, y, size, colour) {
        this.ctx.font = `${size}pt sans-serif`;
        this.ctx.fillStyle = colour;
        this.ctx.fillText(msg, x, y);
    }

    drawBigMessage(msg, colour) {
        this.ctx.font = '60pt sans-serif';
        this.ctx.fillStyle = colour;
        let text = this.ctx.measureText(msg);
        let msgX = (this.width - text.width) / 2;
        let msgY = (this.height - 60) / 2;
        this.ctx.fillText(msg, msgX, msgY);
    }
}

export { Text };