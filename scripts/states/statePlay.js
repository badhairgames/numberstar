import { SelectChoices } from '../ui/selectChoices.js';
import { Question } from '../utils/question.js';
import { GameState } from './gameState.js';

class StatePlay extends GameState {
    constructor(game) {
        super(game);
        this.answered = false;
 
        this.x = this.game.width / 2;
        this.y = this.game.height / 4;
        this.questionSize = this.y;
    }

    setup() {
        this.lives = 3;
        this.currentQuestion = new Question(this.game);
        this.buttons = new SelectChoices(this.game, this.currentQuestion.choices, this.currentQuestion.answer, this.x, this.y + (this.questionSize * 0.75));
        this.buttons.setup();
    }

    update(elapsed) {
        this.buttons.update(elapsed);

        if (this.buttons.answered && !this.answered) {
            this.buttons.teardown();
            this.answered = true;
        }

        if (this.answered) {
            this.buttons.answered = false;
            this.answered = false;
            this.setNextQuestion();
        }
    }

    draw() {
        this.game.gfx.shapes.drawRect(0, 0, this.game.width, this.game.height, '#FFBB77');

        this.game.gfx.text.drawCenteredText(
            this.currentQuestion.content,
            this.x,
            this.y,
            this.questionSize,
            '#884400',
            'bold'
        );

        this.buttons.draw();
    }

    teardown() {
    }

    setNextQuestion() {
        const correct = this.buttons.correct;
        const time = correct ? 200 : 500;
        this.lives = correct ? this.lives : this.lives - 1;
        this.game.score += correct ? 1 : 0;

        if (this.lives === 0) {
            this.game.changeState(this.game.stateGameOver);
            return;
        }

        this.timer = setTimeout(() => {
            this.currentQuestion = new Question(this.game);
            this.buttons = new SelectChoices(this.game, this.currentQuestion.choices, this.currentQuestion.answer, this.x, this.y + (this.questionSize * 0.75));
            this.buttons.setup();
            clearTimeout(this.timer);
        }, time);
    }
}

export { StatePlay };
