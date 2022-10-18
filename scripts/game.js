import { StateHome } from "./states/stateHome.js";
import { StatePlay } from "./states/statePlay.js";
import { StateGameOver } from "./states/stateGameOver.js";
import { Drawing } from "./utils/drawing.js";

class Game {
    get stateHome() { return 0; }
    get statePlay() { return 1; }
    get stateGameOver() { return 2; }

    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.width = canvas.clientWidth;
        this.height = canvas.clientHeight;
        this.currentTimestamp = 0;
        this.gfx = new Drawing(this);
        this.states = [new StateHome(this), new StatePlay(this), new StateGameOver(this)];
        this.state = this.states[this.stateHome];

        this.state.setup();
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
}

export { Game };