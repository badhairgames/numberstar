class Text {
    constructor(game) {
        this.ctx = game.ctx;
        this.width = game.width;
        this.height = game.height;
    }

    drawCenteredText(msg, x, y, size, colour, style) {
        this.ctx.font = `${style} ${size}px sans-serif`;
        this.ctx.fillStyle = colour;
        size = this.adjustToMaxWidth(size, style, msg);

        let text = this.ctx.measureText(msg);
        let x1 = x - (text.width / 2);
        let y1 = y + (size / 3);
        this.ctx.fillText(msg, x1, y1);
    }

    drawText(msg, x, y, size, colour) {
        this.ctx.font = `${size}px sans-serif`;
        this.ctx.fillStyle = colour;
        this.ctx.fillText(msg, x, y);
    }

    drawBigMessage(msg, colour) {
        this.ctx.font = '60px sans-serif';
        this.ctx.fillStyle = colour;
        this.adjustToMaxWidth(60, '', msg);

        let text = this.ctx.measureText(msg);
        let msgX = (this.width - text.width) / 2;
        let msgY = (this.height - 60) / 2;
        this.ctx.fillText(msg, msgX, msgY);
    }

    drawSmallMessage(msg, colour) {
        this.ctx.font = '30px sans-serif';
        this.ctx.fillStyle = colour;
        this.adjustToMaxWidth(60, '', msg);

        let text = this.ctx.measureText(msg);
        let msgX = (this.width - text.width) / 2;
        let msgY = (this.height + 30) / 2;
        this.ctx.fillText(msg, msgX, msgY);
    }

    adjustToMaxWidth(size, style, msg) {
        const width = this.ctx.measureText(msg).width;
        if (width > this.width) {
            size = size * this.width / width;
            this.ctx.font = `${style} ${size}px sans-serif`;
        }

        return size;
    }
}

export { Text };