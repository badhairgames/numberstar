import { PlayState } from "./playState.js";

class PlayStateInput extends PlayState {
    constructor(parent) {
        super(parent);
    }

    setup() {
        this.resetTimer();
    }

    update(elapsed) {
        this.timer -= elapsed;
        if (this.timer <= 0) {
            alert('Timeout');
            this.parent.changeState(this.parent.stateTimeout);
            return;
        }

        if (this.parent.buttons.correct) {
            alert('Correct');
            this.parent.changeState(this.parent.stateCorrect);
            return;
        }

        if (this.parent.buttons.answered && !this.parent.buttons.correct) {
            alert('Incorrect');
            this.parent.changeState(this.parent.stateIncorrect);
            return;
        }
    }

    draw() {
    }

    teardown() {
    }

    resetTimer() {
        this.timer = 3000;
    }
}

export { PlayStateInput };