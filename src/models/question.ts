import { Difficulty } from "../enums/difficulty";
import type { Game } from "./game";
import type { GameOptions } from "./gameOptions";

export class Question {
    game: Game;
    options: GameOptions;
    selectedNumbersCount: number;
    selectedOperatorsCount: number;
    number1: number;
    number2: number;
    operator: string;
    answer: number;
    choices: number[];
    content: string;

    constructor(game: Game, currentQuestion: Question) {
        this.game = game;
        this.options = game.options;
        this.selectedNumbersCount = this.options.numbers.length;
        this.selectedOperatorsCount = this.options.operators.length;

        // Ensure a question isn't repeated two consecutive turns.
        let requiresQuestion = true;
        while (requiresQuestion) {
            this.operator = this.getOperator();
            this.number1 = this.getNumber1();
            this.number2 = this.getNumber2(); 

            requiresQuestion = currentQuestion != undefined && this.equals(currentQuestion);
            if (this.operator === '-') {
                requiresQuestion = requiresQuestion || (this.number1 === this.number2);
            }
        }

        this.fixNumbers();
        this.answer = this.calculate(this.number1, this.number2, this.operator);
        this.choices = [];
        this.createChoices();
        this.content = `${this.number1} ${this.operator} ${this.number2}`;
    }

    getNumber1(): number {
        return this.options.numbers[this.getRandomInt(0, this.selectedNumbersCount)];
    }

    getNumber2(): number {
        const lrBound = Math.max(1, this.game.level - 3);
        const uprBound = (this.game.level + 2) * 2;
        const multiplier = this.getRangeMultiplier();
        return this.getRandomInt(lrBound, uprBound) * multiplier;
    }

    getOperator(): string {
        return this.options.operators[this.getRandomInt(0, this.selectedOperatorsCount)];
    }

    fixNumbers() {
        switch (this.operator) {
            case '-':
                if (this.number1 < this.number2) {
                    this.swapNumbers();
                }
                break;
            case '÷':
                this.swapNumbers();
                this.number1 = this.number1 * this.number2;
                break;
        }
    }

    swapNumbers() {
        const tmp = this.number1;
        this.number1 = this.number2;
        this.number2 = tmp;
    }

    calculate(number1, number2, operator) {
        switch (operator) {
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

    createChoices() {
        this.choices.length = 0;
        this.choices.push(this.answer);
        let remaining = 3;

        while (remaining > 0) {
            let number1 = this.getNumber1();
            let number2 = this.getNumber2();
            let operator = this.getOperator();
    
            if ('-÷'.includes(operator) && number1 < number2) {
                const tmp = number1;
                number1 = number2;
                number2 = tmp;
            }

            if (operator === '÷') {
                number1 = number1 * number2;
            }

            let answer = this.calculate(number1, number2, operator);
            if (!this.choices.includes(answer)) {
                this.choices.push(answer);
                remaining--;
            }
        }

        this.shuffleChoices();
    }

    shuffleChoices() {
        var answerPos = this.getRandomInt(0, this.choices.length);
        [this.choices[0], this.choices[answerPos]] = [this.choices[answerPos], this.choices[0]];
    }

    getRangeMultiplier() {
        switch(this.options.difficulty) {
            case Difficulty.easy:
                return 1;
            case Difficulty.medium:
                return 2;
            case Difficulty.hard:
                return 3;
            case Difficulty.insane:
                return 6;
            default:
                return 1;
        }    }

    equals(other: Question): boolean {
        if (!other) return false;
        return this.number1 === other.number1 && this.number2 === other.number2 && this.operator === other.operator;
    }
}