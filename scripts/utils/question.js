class Question {
    constructor(game, currentQuestion) {
        this.game = game;
        this.selectedNumbersCount = this.game.selectedNumbers.length;
        this.selectedOperatorsCount = this.game.selectedOperators.length;

        // Ensure a question isn't repeated two consecutive turns.
        let requiresQuestion = true;
        while (requiresQuestion) {
            this.operator = this.getOperator();
            this.number1 = this.getNumber1();
            this.number2 = this.getNumber2(); 

            requiresQuestion = currentQuestion != undefined && this.equals(currentQuestion);
        }

        this.fixNumbers();
        this.answer = this.calculate(this.number1, this.number2, this.operator);
        this.choices = [];
        this.createChoices();
        this.content = `${this.number1} ${this.operator} ${this.number2}`;
    }

    getNumber1() {
        return this.game.selectedNumbers[this.getRandomInt(0, this.selectedNumbersCount)];
    }

    getNumber2() {
        const lrBound = Math.max(1, this.game.level - 3);
        const uprBound = (this.game.level + 2) * 2;
        return this.getRandomInt(lrBound, uprBound);
    }

    getOperator() {
        return this.game.selectedOperators[this.getRandomInt(0, this.selectedOperatorsCount)];
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

    equals(other) {
        return this.number1 === other.number1 && this.number2 === other.number2 && this.operator === other.operator;
    }
}

export { Question };