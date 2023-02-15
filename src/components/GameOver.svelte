<script lang="ts">
    import type { Game } from "../models/game";
    import { History, history } from "../stores/history";
    import { HistoryFunctions } from "../stores/historyFunctions";

    export let game: Game;

    if (!$history) {
        $history = new History();
    }

    var stat = $history?.stats.find(s => s.mode === game.options.mode && s.difficulty === game.options.difficulty);
    var oldHighScore = stat?.highScore ?? 0;

    HistoryFunctions.update($history, game);
    $history.gamesPlayed = $history.gamesPlayed;
</script>

<h1>Game Over</h1>
<h2>Score: {game.score}</h2>
{#if game.score > oldHighScore}
<h3>New High Score!</h3>
{/if}