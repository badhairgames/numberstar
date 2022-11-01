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
        this.game.reset();
        this.resetTimer();
    }

    update(elapsed) {
        this.buttons.update(elapsed);
        this.currentTimer -= elapsed;

        if (this.currentTimer <= 0) {
            this.answered = true;
            this.buttons.answer = -1;
            this.buttons.answered = true;
            this.timeout = true;
            this.setNextQuestion();
        }
        else if (this.buttons.answered && !this.answered) {
            this.buttons.teardown();
            this.answered = true;
        }

        if (!this.timeout && this.answered) {
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

        if (!this.timeout) {
            this.game.gfx.shapes.drawPie(this.game.width / 2, this.game.height * 0.8, 40, this.timerAngle(), '#884400');
        }
    }

    teardown() {
    }

    setNextQuestion() {
        const correct = !this.timeout && this.buttons.correct;
        const time = correct ? 200 : 500;

        this.timer = setTimeout(() => {
            this.currentQuestion = new Question(this.game);
            this.buttons = new SelectChoices(this.game, this.currentQuestion.choices, this.currentQuestion.answer, this.x, this.y + (this.questionSize * 0.75));
            this.buttons.setup();
            this.resetTimer();
            clearTimeout(this.timer);
        }, time);

        this.lives = correct ? this.lives : this.lives - 1;
        this.game.addScore(correct ? 1 : 0);

        if (this.lives === 0) {
            this.game.changeState(this.game.stateGameOver);
            return;
        }
    }

    resetTimer() {
        this.timeout = false;
        this.timerStart = 3000;
        this.currentTimer = this.timerStart;
    }

    timerAngle() {
        return (this.currentTimer / this.timerStart) * 2 * Math.PI;
    }
}

export { StatePlay };
