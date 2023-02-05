import { GameOptions } from "./gameOptions";

export class Game {
    constructor() {
        this.reset();
    }
    
    public options: GameOptions;
    public lives: number;
    public level: number;
    public score: number;
    public pauseCorrectAnswer: number;
    public pauseIncorrectAnswer: number;
    public defaultGameTime: number;

    reset() {
        this.options = new GameOptions();
        this.lives = 3;
        this.level = 1;
        this.score = 0;
        this.pauseCorrectAnswer = 200;
        this.pauseIncorrectAnswer = 500;
        this.defaultGameTime = 10000;
    }
}
