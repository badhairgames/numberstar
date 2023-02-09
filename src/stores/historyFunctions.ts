import type { Game } from "../models/game";
import type { History } from "./history";
import { HistoryGame } from "./historyGame";

export class HistoryFunctions {
    static update(history: History, game: Game) {
        HistoryFunctions.setStreak(history);
        history.gamesPlayed++;
        const item = HistoryFunctions.getHistoryGame(history, game);
        if (item.last10Games.length == 10) {
            item.last10Games.shift();
        }
        item.last10Games.push(game.score);
        item.highScore = Math.max(item.highScore, game.score);
    }

    static getHistoryGame(history: History, game: Game): HistoryGame {
        let item = history.stats.find(s => s.difficulty === game.options.difficulty && s.mode === game.options.mode);
        if (!item) {
            item = new HistoryGame();
            item.difficulty = game.options.difficulty;
            item.mode = game.options.mode;
            history.stats.push(item);
        }

        return item;
    }

    static setStreak(history: History) {
        if (!history.currentDate) {
            HistoryFunctions.resetStreak(history);
        } else if (this.isYesterday(new Date(history.currentDate))) {
            history.currentDate = new Date();
            history.currentStreak++;
        } else if (!this.isToday(new Date(history.currentDate))) {
            HistoryFunctions.resetStreak(history);
        }

        HistoryFunctions.setMaxStreak(history);
    }

    static isToday(date: Date): boolean {
        const today = new Date();
        return this.doDatesMatch(date, today);
    }

    static isYesterday(date: Date): boolean {
        let yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        return this.doDatesMatch(date, yesterday);
    }

    static doDatesMatch(date1: Date, date2: Date): boolean {
        return (
            date1.getDate() === date2.getDate() &&
            date1.getMonth() === date2.getMonth() &&
            date1.getFullYear() === date2.getFullYear()
        );
    }

    static setMaxStreak(history: History) {
        if (history.currentStreak > history.maxStreak) {
            history.maxStreak = history.currentStreak;
        }
    }

    static resetStreak(history: History) {
        history.currentDate = new Date();
        history.currentStreak = 1;
    }
}