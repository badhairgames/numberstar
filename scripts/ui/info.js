import { Text } from "../utils/text.js";

class Info {
    get x() { return this.gap; }
    get y() { return this.size + this.gap; }
    get midX() { return this.game.width / 2; }

    constructor(parent) {
        this.parent = parent;
        this.game = this.parent.game;
        this.ctx = this.game.ctx;
        this.size = 15;
        this.gap = 15;
        this.Text = new Text(this.game);
        this.colour = '#BB0000';
        this.levelSizeMultiplier = 1;
        this.levelAnimationFrames = 10;
    }

    setup() {
        this.currentLevel = this.game.level;
        this.levelAnimation = this.levelAnimationFrames;
        this.levelAnimationDiff = -1;
        this.levelMultiplierDiff = 1;
    }

    draw() {
        const score = 'SCORE: ' + this.game.score;
        const level = 'LEVEL: ' + this.game.level;

        this.game.gfx.text.drawCenteredText(
            score,
            this.midX,
            this.y,
            this.size * 1.5,
            this.colour,
            'bold'
        );
        
        this.game.gfx.text.drawText(
            level,
            this.x,
            this.y + (this.size / 2),
            this.size * this.levelSizeMultiplier,
            this.colour,
            'bold'
        );

        if (this.currentLevel < this.game.level) {
            this.levelAnimation += this.levelAnimationDiff;
            this.levelSizeMultiplier += 0.1 * this.levelMultiplierDiff;

            if (this.levelAnimation <= 0) {
                this.levelAnimationDiff *= -1;
                this.levelMultiplierDiff *= -1;
            }

            if (this.levelAnimation >= this.levelAnimationFrames) {
                this.levelAnimation = this.levelAnimationFrames;
                this.currentLevel = this.game.level;
                this.levelAnimationDiff = -1;
                this.levelMultiplierDiff = 1;
            }
        }
    }
}

export { Info };