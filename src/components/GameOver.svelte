<script lang="ts">
    import type { Game } from "../models/game";
    import { History, history } from "../stores/history";
    import { HistoryFunctions } from "../stores/historyFunctions";

    export let game: Game;

    if (!$history) {
        $history = new History();
    }

    HistoryFunctions.update($history, game);
    $history.gamesPlayed = $history.gamesPlayed;
</script>

<h1>Game Over</h1>
<h2>Score: {game.score}</h2>
