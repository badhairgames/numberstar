import { PlayState } from "./playState.js";

class PlayStateCorrect extends PlayState {
    constructor(parent) {
        super(parent);
    }

    setup() {
        this.timer = 500;
    }

    update(elapsed) {
        this.timer -= elapsed;
        if (this.timer <= 0) {
            this.game.score++;
            this.parent.changeState(this.parent.stateInit);
        }
    }

    draw() {
        this.game.gfx.text.drawCenteredText(
            this.parent.currentQuestion.content,
            this.parent.x,
            this.parent.y,
            this.parent.questionSize,
            '#884400',
            'bold'
        );

        this.parent.buttons.draw();
    }

    teardown() {
    }
}

export { PlayStateCorrect };