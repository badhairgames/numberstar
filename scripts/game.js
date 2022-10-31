import { StateHome } from "./states/stateHome.js";
import { StateStart } from "./states/stateStart.js";
import { StatePlay } from "./states/statePlay.js";
import { StateGameOver } from "./states/stateGameOver.js";
import { Drawing } from "./utils/drawing.js";

class Game {
    get stateHome() { return 0; }
    get stateStart() { return 1; }
    get statePlay() { return 2; }
    get stateGameOver() { return 3; }
    get canAdd() { return this.selectedOperators.includes('+'); }
    get canSubtract() { return this.selectedOperators.includes('-'); }
    get canMultiply() { return this.selectedOperators.includes('×'); }
    get canDivide() { return this.selectedOperators.includes('÷'); }

    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.width = canvas.clientWidth;
        this.height = canvas.clientHeight;
        this.currentTimestamp = 0;
        this.gfx = new Drawing(this);

        this.states = [new StateHome(this), new StateStart(this), new StatePlay(this), new StateGameOver(this)];
        this.state = this.states[this.stateHome];
        this.state.setup();

        this.selectedNumbers = [];
        this.selectedOperators = [];
        this.score = 0;
        this.level = 1;
        this.levelCounter = 10;
    }

    changeState(state) {
        this.state.teardown();
        this.state = this.states[state];
        this.state.setup();
    }

    update(elapsed) {
        this.state.update(elapsed);
    }

    draw() {
        this.state.draw();
    }

    addScore(score) {
        this.score += score;
        if (score > 0) {
            this.levelCounter--;
        }

        if (this.levelCounter <= 0) {
            this.level++;
            this.levelCounter = 10;
        }
    }

    reset() {
        this.score = 0;
        this.level = 1;
        this.levelCounter = 10;
    }
}

export { Game };