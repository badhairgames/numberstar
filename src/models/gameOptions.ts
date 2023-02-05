import type { Difficulty } from "../enums/difficulty";
import type { GameMode } from "../enums/gameMode";

export class GameOptions {
    public mode: GameMode;
    public difficulty: Difficulty;
    public numbers: number[] = [];
    public operators: string[] = [];
    public level: number = 1;
}
