import type { Difficulty } from "../enums/difficulty";
import type { GameMode } from "../enums/gameMode";

export class HistoryGame {
    mode: GameMode;
    difficulty: Difficulty;
    highScore: number = 0;
    last10Games: number[] = [];
}