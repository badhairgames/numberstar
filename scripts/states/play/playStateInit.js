import { PlayState } from "./playState.js";
import { Question } from "../../utils/question.js";
import { SelectChoices } from "../../ui/selectChoices.js";

class PlayStateInit extends PlayState {
    constructor(parent) {
        super(parent);
        this.x = this.game.width / 2;
        this.y = this.game.height / 4;
        this.questionSize = this.y;
    }

    setup() {
        this.parent.currentQuestion = new Question(this.game);
        this.parent.buttons = new SelectChoices(
            this.parent,
            this.parent.currentQuestion.choices,
            this.parent.currentQuestion.answer,
            this.x,
            this.y + this.questionSize * 0.75
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