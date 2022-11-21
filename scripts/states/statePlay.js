import { GameState } from './gameState.js';
import { PlayStateInit } from './play/playStateInit.js';
import { PlayStateInput } from './play/playStateInput.js';
import { PlayStateCorrect } from './play/playStateCorrect.js';
import { PlayStateIncorrect } from './play/playStateIncorrect.js';
import { PlayStateTimeout } from './play/playStateTimeout.js';
import { PlayStateUpdate } from './play/playStateUpdate.js';
import { PlayStateGameOver } from './play/playStateGameOver.js';
import { Timer } from "../utils/timer.js";
import { Lives } from "../ui/lives.js";
import { Info } from '../ui/info.js';

class StatePlay extends GameState {
    get stateInit() { return 0; }
    get stateInput() { return 1; }
    get stateCorrect() { return 2; }
    get stateIncorrect() { return 3; }
    get stateTimeout() { return 4; }
    get stateUpdate() { return 5; }
    get stateGameOver() { return 6; }

    constructor(game) {
        super(game);

        this.states = [
            new PlayStateInit(this),
            new PlayStateInput(this),
            new PlayStateCorrect(this),
            new PlayStateIncorrect(this),
            new PlayStateTimeout(this),
            new PlayStateUpdate(this),
            new PlayStateGameOver(this),
        ];

        this.x = this.game.width / 2;
        this.y = this.game.height / 4;
        this.questionSize = this.y;
        this.timer = new Timer(this.game);
        this.lives = new Lives(this);
        this.info = new Info(this);
    }

    setup() {
        this.lives.reset();
        this.state = this.states[this.stateInit];
        this.game.reset();
        this.state.setup();
        this.info.setup();
        this.gameOver = false;
    }

    update(elapsed) {
        this.state.update(elapsed);
        if (this.lives.outOfLives() && !this.gameOver) {
            this.gameOver = true;
            this.changeState(this.stateGameOver);
        }
    }

    draw() {
        this.game.gfx.shapes.drawRect(0, 0, this.game.width, this.game.height, '#FFBB77');
        this.game.gfx.shapes.drawRect(0, 0, this.game.width, 60, '#FFCC88');
        this.state.draw();
        this.lives.draw();
        this.info.draw();
    }

    teardown() {}

    changeState(state) {
        this.state.teardown();
        this.state = this.states[state];
        this.state.setup();
    }
}

export { StatePlay };
