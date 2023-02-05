import { Timer } from "../../utils/timer.js";
import { PlayState } from "./playState.js";

class PlayStateInput extends PlayState {
    constructor(parent) {
        super(parent);
        this.game = parent.game;
    }

    setup() {
        if (this.game.mode === 'play') {
            this.parent.timer.reset();
        }
    }

    update(elapsed) {
        this.parent.timer.update(elapsed);
        if (this.parent.timer.remaining <= 0) {
            this.parent.changeState(this.parent.stateTimeout);
            return;
        }

        if (this.parent.buttons.correct) {
            this.parent.changeState(this.parent.stateCorrect);
            return;
        }

        if (this.parent.buttons.answered && !this.parent.buttons.correct) {
            this.parent.changeState(this.parent.stateIncorrect);
            return;
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
        this.parent.timer.draw();
    }

    teardown() {
    }
}

export { PlayStateInput };