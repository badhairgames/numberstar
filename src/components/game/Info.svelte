<script lang="ts">
    import type { Game } from "../../models/game";
    export let game: Game;
    export let showLives = true;

    const maxLives = 3;
</script>

<div class="info">
    <span>Level: {game.level}</span>
    <span class="score">Score: {game.score}</span>
    {#if showLives}
    <span>
        {#each Array(maxLives) as _, i}
            <span class="life-circle {i < game.lives ? 'active' : ''}"></span>
        {/each}
    </span>
    {/if}
</div>

<style lang="scss">
    .info {
        display: flex;
        flex-wrap: wrap;
        justify-content:space-between;
        align-content: center;

        .score {
            font-size: 1.2em;
            font-weight: bold;
        }

        .life-circle {
                background-color: transparent;
                border: 1px solid #0D6FA7;
                border-radius: 50%;
                display: inline-block;
                height: 1em;
                margin-right: 0.5em;
                margin-top: 0.25em;
                width: 1em;

                &.active {
                    background-color: #0D6FA7;
                }
            }
    }
</style>