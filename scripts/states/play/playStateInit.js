import { PlayState } from "./playState.js";
import { Question } from "../../utils/question.js";

class PlayStateInit extends PlayState {
    constructor(parent) {
        super(parent);
    }

    setup() {
        this.parent.currentQuestion = new Question(this.game);
        this.parent.changeState(this.parent.stateInput);
    }

    update(elapsed) {
    }

    draw() {
    }

    teardown() {
    }
}

export { PlayStateInit };