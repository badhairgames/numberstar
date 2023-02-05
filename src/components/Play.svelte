<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import { GameMode } from "../enums/gameMode";
    import type { Game } from "../models/game";
    import PracticePlay from "./game/PracticePlay.svelte";
    import StandardPlay from "./game/StandardPlay.svelte";
    import TimedPlay from "./game/TimedPlay.svelte";

    export let game: Game;
    const dispatch = createEventDispatcher();

    function gameOver() {
        dispatch('gameover');
    }
</script>

{#if game.options.mode === GameMode.standard}
   <StandardPlay bind:game on:gameover={gameOver}></StandardPlay>
{:else if game.options.mode === GameMode.timed}
    <TimedPlay bind:game on:gameover={gameOver}></TimedPlay>
{:else}
    <PracticePlay bind:game on:gameover={gameOver}></PracticePlay>
{/if}