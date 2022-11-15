class Timer {
    constructor(game) {
        this.game = game;
    }

    update(elapsed) {
        this.remaining -= elapsed;
        this.remaining = Math.max(0, this.remaining);
    }

    draw() {
        if (this.remaining >= 0) {
            this.game.gfx.shapes.drawPie(this.game.width / 2, this.game.height * 0.8, 40, this.timerAngle(), '#884400');
        }
    }

    reset() {
        this.timerStart = 3000;
        this.remaining = this.timerStart;
    }

    timerAngle() {
        return (this.remaining / this.timerStart) * 2 * Math.PI;
    }
}

export { Timer };