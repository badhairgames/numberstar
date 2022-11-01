class Shapes {
    constructor(game) {
        this.game = game;
    }

    drawRect(x, y, w, h, fill) {
        const rect = new Path2D();
        rect.rect(x, y, w, h);
        this.game.ctx.fillStyle = fill;
        this.game.ctx.fill(rect);
        return rect;
    }

    drawCircle(x, y, r, fill) {
        const circle = new Path2D();
        circle.arc(x, y, r, 0, 2 * Math.PI);
        this.game.ctx.fillStyle = fill;
        this.game.ctx.fill(circle);
        return circle;
    }

    drawPie(x, y, r, angle, fill) {
        const circle = new Path2D();
        circle.arc(x, y, r, 0, angle);
        circle.lineTo(x, y);
        this.game.ctx.fillStyle = fill;
        this.game.ctx.fill(circle);
        return circle;
    }
}

export { Shapes };