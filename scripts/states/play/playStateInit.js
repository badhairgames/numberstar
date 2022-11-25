import { PlayState } from "./playState.js";
import { Question } from "../../utils/question.js";
import { SelectChoices } from "../../ui/selectChoices.js";

class PlayStateInit extends PlayState {
    get x() { return this.game.width / 2; }
    get y() { return this.game.height / 4; }

    constructor(parent) {
        super(parent);
        this.questionSize = this.y;
    }

    setup() {
        this.parent.currentQuestion = new Question(this.game, this.parent.currentQuestion);
        this.parent.buttons = new SelectChoices(
            this.parent,
            this.parent.currentQuestion.choices,
            this.parent.currentQuestion.answer
        );
        this.parent.buttons.setup();

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