import { PlayState } from "./playState.js";

class PlayStateInput extends PlayState {
    constructor(parent) {
        super(parent);
        this.game = parent.game;
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
        this.game.gfx.text.drawCenteredText(
            this.parent.currentQuestion.content,
            this.parent.x,
            this.parent.y,
            this.parent.questionSize,
            '#884400',
            'bold'
        );

        this.parent.buttons.draw();

        if (this.timer >= 0) {
            this.game.gfx.shapes.drawPie(this.game.width / 2, this.game.height * 0.8, 40, this.timerAngle(), '#884400');
        }
    }

    teardown() {
    }

    resetTimer() {
        this.timerStart = 3000;
        this.timer = this.timerStart;
    }

    timerAngle() {
        return (this.timer / this.timerStart) * 2 * Math.PI;
    }
}

export { PlayStateInput };