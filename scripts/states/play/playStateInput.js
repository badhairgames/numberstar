import { Timer } from "../../utils/timer.js";
import { PlayState } from "./playState.js";

class PlayStateInput extends PlayState {
    constructor(parent) {
        super(parent);
        this.game = parent.game;
        this.timer = new Timer(this.game);
    }

    setup() {
        this.timer.reset();
    }

    update(elapsed) {
        this.timer.update(elapsed);
        if (this.timer.remaining <= 0) {
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
        this.timer.draw();
    }

    teardown() {
    }
}

export { PlayStateInput };