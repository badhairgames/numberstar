import { SelectChoices } from '../ui/selectChoices.js';
import { GameState } from './gameState.js';

class StatePlay extends GameState {
    get currentQuestion() {
        return `${this.number1} ${this.operation} ${this.number2}`;
    }

    constructor(game) {
        super(game);
        this.number1 = 0;
        this.number2 = 0;
        this.operation = '';
        this.answer = 0;
        this.choices = [];
    }

    setup() {
        this.clickEvent = (e) => {
            this.game.changeState(this.game.stateGameOver);
        };

        document.body.addEventListener('pointerdown', this.clickEvent);

        this.selectedNumbersCount = this.game.selectedNumbers.length;
        this.selectedOperationsCount = this.game.selectedOperations.length;
        this.createQuestion();
        this.createAnswer();
        this.createChoices();
        this.buttons = new SelectChoices(this.game, this.choices, this.answer, this.game.width / 2, this.game.height * 0.75);
        this.buttons.setup();
    }

    update(elapsed) {
        this.buttons.update(elapsed);
    }

    draw() {
        this.game.gfx.shapes.drawRect(0, 0, this.game.width, this.game.height, '#FFBB77');
        this.game.gfx.text.drawCenteredText(
            this.currentQuestion,
            this.game.width / 2,
            this.game.height / 4,
            this.game.height / 4,
            '#884400',
            'bold'
        );
        this.buttons.draw();
    }

    teardown() {
        document.body.removeEventListener('pointerdown', this.clickEvent);
    }

    createQuestion() {
        this.number1 = this.getNumber1();
        this.number2 = this.getNumber2();
        this.operation = this.getOperator();

        if ('-÷'.includes(this.operation) && this.number1 < this.number2) {
            const tmp = this.number1;
            this.number1 = this.number2;
            this.number2 = tmp;
        }
    }

    createAnswer() {
        this.answer = this.calculate(this.number1, this.number2, this.operation);
    }

    createChoices() {
        this.choices.length = 0;
        this.choices.push(this.answer);
        let remaining = 3;

        while (remaining > 0) {
            let number1 = this.getNumber1();
            let number2 = this.getNumber2();
            let operation = this.getOperator();
    
            if ('-÷'.includes(operation) && number1 < number2) {
                const tmp = number1;
                number1 = number2;
                number2 = tmp;
            }

            let answer = this.calculate(number1, number2, operation);
            if (!this.choices.includes(answer)) {
                this.choices.push(answer);
                remaining--;
            }
        }
    }

    getNumber1() {
        return this.game.selectedNumbers[this.getRandomInt(0, this.selectedNumbersCount)];
    }

    getNumber2() {
        return this.getRandomInt(1, 12);
    }

    getOperator() {
        return this.game.selectedOperations[this.getRandomInt(0, this.selectedOperationsCount)];
    }

    calculate(number1, number2, operation) {
        switch (operation) {
            case '+':
                return number1 + number2;
            case '-':
                return number1 - number2;
            case '×':
                return number1 * number2;
            case '÷':
                return number1 / number2;
        }

        return 0;
    }

    getRandomInt(start, end) {
        const diff = end - start;
        return Math.floor(Math.random() * diff) + start;
    }
}

export { StatePlay };
