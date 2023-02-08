import { writable } from "svelte/store";
import type { HistoryGame } from "./historyGame";

export class History {
    gamesPlayed: number = 0;
    maxStreak: number = 0;
    currentStreak: number = 0;
    currentDate: Date;
    stats: HistoryGame[] = [];
}

export const history = writable<History>(JSON.parse(localStorage.getItem('numberStar_History')))
history.subscribe((value) => localStorage.numberStar_History = JSON.stringify(value));
