import { GameOptions } from "./gameOptions";

export class Game {
    constructor() {
        this.reset();
    }
    
    public options: GameOptions;
    public lives: number;
    public level: number;
    public score: number;
    public pauseCorrectAnswer: number;      // The length of time to pause after a correct answer in milliseconds.
    public pauseIncorrectAnswer: number;    // The length of time to pause after an incorrect answer in milliseconds.
    public defaultGameTime: number;         // For timed/practice mode, the overall length of game play in milliseconds.
    public timePerQuestion: number;         // For standard mode, the length of time to answer each question in milliseconds.
    public levelCounter: number;            // The number of questions per level.
    public levelTimeDelta: number;          // For standard mode, the amount to multiply the timePerQuestion value on each new level.
                                            // This is usually below 1 to make the game go faster as it's played.

    reset() {
        this.options = new GameOptions();
        this.lives = 3;
        this.level = 1;
        this.score = 0;
        this.pauseCorrectAnswer = 200;
        this.pauseIncorrectAnswer = 500;
        this.defaultGameTime = 30000;
        this.timePerQuestion = 3000;
        this.levelCounter = 10;
        this.levelTimeDelta = 0.95;
    }
}
