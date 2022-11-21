import { PlayState } from "./playState.js";

class PlayStateGameOver extends PlayState {
    constructor(parent) {
        super(parent);
        this.game = parent.game;
    }

    setup() {
        console.log('State game over...');
        this.timer = 1000;
        this.parent.buttons.disable();
    }

    update(elapsed) {
        this.timer -= elapsed;
        if (this.timer <= 0) {
            this.game.changeState(this.game.stateGameOver);
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

export { PlayStateGameOver };