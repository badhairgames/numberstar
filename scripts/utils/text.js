class Text {
    constructor(game) {
        this.ctx = game.ctx;
        this.width = game.width;
        this.height = game.height;
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