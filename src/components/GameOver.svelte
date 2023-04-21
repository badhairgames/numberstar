<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import type { Game } from '../models/game';
    import { History, history } from '../stores/history';
    import { HistoryFunctions } from '../stores/historyFunctions';

    export let game: Game;
    const dispatch = createEventDispatcher();

    if (!$history) {
        $history = new History();
    }

    var stat = $history?.stats.find((s) => s.mode === game.options.mode && s.difficulty === game.options.difficulty);
    var oldHighScore = stat?.highScore ?? 0;

    HistoryFunctions.update($history, game);
    $history.gamesPlayed = $history.gamesPlayed;

    function clickHome(event) {
        dispatch('home');
    }
</script>

<div class="container">
    <h1>Game Over</h1>
    <h2>Score: {game.score}</h2>
    {#if game.score > oldHighScore}
        <h3>New High Score!</h3>
    {/if}
    <button on:click={clickHome}>Home</button>
</div>

<style lang="scss">
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        text-align: center;
        grid-template-columns: 1;
        grid-template-rows: 25% 25% 25% 25%;

        h1, h2, h3 {
            margin: 0;
        }
    }
</style>
