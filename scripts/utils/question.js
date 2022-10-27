class Question {
    constructor(game) {
        this.game = game;
        this.selectedNumbersCount = this.game.selectedNumbers.length;
        this.selectedOperatorsCount = this.game.selectedOperators.length;

        this.operator = this.getOperator();
        this.number1 = this.getNumber1();
        this.number2 = this.getNumber2();
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
        return this.getRandomInt(1, 12);
    }

    getOperator() {
        return this.game.selectedOperators[this.getRandomInt(0, this.selectedOperatorsCount)];
    }

    fixNumbers() {
        if ('-÷'.includes(this.operator) && this.number1 < this.number2) {
            const tmp = this.number1;
            this.number1 = this.number2;
            this.number2 = tmp;
        }
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
}

export { Question };