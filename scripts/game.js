import { StateHome } from "./states/stateHome.js";
import { StatePracticeMenu } from "./states/statePracticeMenu.js";
import { StatePlay } from "./states/statePlay.js";
import { StateGameOver } from "./states/stateGameOver.js";
import { Drawing } from "./utils/drawing.js";
import { StatePlayMenu } from "./states/statePlayMenu.js";
import { StateTimedMenu } from "./states/stateTimedMenu.js";

class Game {
    get stateHome() { return 0; }
    get statePracticeMenu() { return this.stateHome + 1; }
    get stateTimedMenu() { return this.statePracticeMenu + 1; }
    get statePlayMenu() { return this.stateTimedMenu + 1; }
    get statePlay() { return this.statePlayMenu + 1; }
    get stateGameOver() { return this.statePlay + 1; }

    get canAdd() { return this.selectedOperators.includes('+'); }
    get canSubtract() { return this.selectedOperators.includes('-'); }
    get canMultiply() { return this.selectedOperators.includes('×'); }
    get canDivide() { return this.selectedOperators.includes('÷'); }

    get width() { return this.canvas.clientWidth; }
    get height() { return this.canvas.clientHeight; }
    get isPortrait() { return this.height > this.width; }

    get colour1() { return '#012030'; }
    get colour2() { return '#13678A'; }
    get colour3() { return '#45C4B0'; }
    get colour4() { return '#9AEBA3'; }
    get colour5() { return '#DAFDBA'; }

    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.currentTimestamp = 0;
        this.gfx = new Drawing(this);

        this.states = [
            new StateHome(this),
            new StatePracticeMenu(this),
            new StateTimedMenu(this),
            new StatePlayMenu(this),
            new StatePlay(this),
            new StateGameOver(this)
        ];
        this.state = this.states[this.stateHome];
        this.state.setup();

        this.selectedNumbers = [];
        this.selectedOperators = [];
        this.score = 0;
        this.level = 1;
        this.mode = 'standard';
        this.difficulty = 'normal';

        this.resetLevelCounter();
    }

    changeState(state) {
        console.log('Game changeState: ' + state);
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
            this.resetLevelCounter();
        }
    }

    reset() {
        this.score = 0;
        this.level = 1;
        this.resetLevelCounter();
    }

    resetLevelCounter() {
        this.levelCounter = 10;
    }
}

export { Game };