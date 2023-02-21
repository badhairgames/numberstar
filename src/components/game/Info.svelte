<script lang="ts">
    import type { Game } from "../../models/game";
    export let game: Game;
    export let showLives = true;
</script>

<div class="info">
    <span>Level: {game.level}</span>
    <span class="score">Score: {game.score}</span>
    {#if showLives}
    <span>Lives: {game.lives}</span>
    {/if}
</div>

<style lang="scss">
    .info {
        display: flex;
        flex-wrap: wrap;
        justify-content:space-between;
        align-content: center;
        background: rgba(0,0,0,0.3);

        .score {
            font-size: 1.2em;
            font-weight: bold;
        }
    }
</style>