import { GameState } from './gameState.js';

class StatePlay extends GameState {
    get currentQuestion() { return `${this.number1} ${this.operation} ${this.number2}`; }

    constructor(game) {
        super(game);
        this.number1 = 0;
        this.number2 = 0;
        this.operation = '';
    }

    setup() {
        this.clickEvent = (e) => {
            this.game.changeState(this.game.stateGameOver);
        };
      
        document.body.addEventListener('pointerdown', this.clickEvent);

        this.selectedNumbersCount = this.game.selectedNumbers.length;
        this.selectedOperationsCount = this.game.selectedOperations.length;
        this.createQuestion();
    }

    update(elapsed) {
    }

    draw() {
        this.game.gfx.shapes.drawRect(0, 0, this.game.width, this.game.height, '#FFBB77');
        this.game.gfx.text.drawCenteredText(this.currentQuestion, this.game.width / 2, this.game.height / 4, this.game.height / 4, '#884400', 'bold');
    }
    
    teardown() {
        document.body.removeEventListener('pointerdown', this.clickEvent);
    }

    createQuestion() {
        this.number1 = this.game.selectedNumbers[this.getRandomInt(0, this.selectedNumbersCount)];
        this.number2 = this.getRandomInt(1, 12);
        this.operation = this.game.selectedOperations[this.getRandomInt(0, this.selectedOperationsCount)];
    }

    getRandomInt(start, end) {
        const diff = end - start;
        return Math.floor(Math.random() * diff) + start;
    }   
}

export { StatePlay };
