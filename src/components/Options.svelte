<script lang="ts">
    import DifficultyButtons from './options/DifficultyButtons.svelte';
    import { createEventDispatcher } from 'svelte';
    import type { GameOptions } from '../models/gameOptions';
    import { GameMode } from '../enums/gameMode';
    import NumberChooser from './options/NumberChooser.svelte';
    import OperatorChooser from './options/OperatorChooser.svelte';
    import StandardButton from './buttons/StandardButton.svelte';
    import BackButton from './buttons/BackButton.svelte';
    import { Difficulty } from '../enums/difficulty';
    import type { Game } from '../models/game';

    export let game: Game;

    let numbers;
    let operators;

    const dispatch = createEventDispatcher();

    function chooseDifficulty() {
        dispatch('play');
    }

    function practiceClick() {
        game.options.numbers = numbers;
        game.options.operators = operators;
        game.options.difficulty = Difficulty.medium;
        dispatch('play');
    }

    function numberSelected() {
        numbers = numbers;
    }

    function operatorSelected() {
        operators = operators;
    }

    $: validchoice = numbers?.length > 0 && operators?.length > 0;
</script>

<div class="container">
    <div class="controls">
        <BackButton on:back={() => dispatch('back')} />
    </div>

    {#if game.options.mode !== GameMode.practice}
        <div class="difficultyButtons">
            <DifficultyButtons bind:game on:difficulty={chooseDifficulty} />
        </div>
    {:else}
        <div class="numbers"><NumberChooser bind:numbers on:select={numberSelected} class="numberButtons" /></div>
        <div class="operators"><OperatorChooser bind:operators on:select={operatorSelected} class="operatorButtons" /></div>
        <div class="button">
            <StandardButton text="Practice" on:click={practiceClick} disabled={!validchoice} />
        </div>
    {/if}
</div>

<style lang="scss">
    .container {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 4fr 1fr 1fr;
        height: 100vh;

        .controls {
            display: grid;
            justify-content: center;
            align-content: center;
        }

        .difficultyButtons {
            grid-row: 1 / span 3;
        }

        .numbers {
            display: grid;
            grid-template-rows: 1fr 1fr 1fr 1fr;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 2vmin;
            justify-items: center;
            align-items: center;

            :global(.numberButtons) {
                display: grid;
                width: 29vmin;
                height: 29vmin;
                font-size: 15vmin;
                font-weight: bold;
                letter-spacing: -1vmin;
                text-indent: -1vmin;
                justify-content: center;
                align-content: center;
            }
        }

        .operators {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            gap: 2vmin;
            justify-items: center;
            align-items: center;

            :global(.operatorButtons) {
                display: grid;
                width: 21vmin;
                height: 21vmin;
                font-size: 12vmin;
                font-weight: bold;
                justify-content: center;
                align-content: center;
            }
        }

        .button {
            display: grid;
            justify-content: center;
            align-content: center;
        }
    }

    @media only screen and (orientation: landscape) and (max-width: 801px) {
        .container {
            // grid-template-rows: [row1] 65% [row2] 35%;
            // grid-template-columns: 60% 40%;

            .numbers {
                grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
                grid-template-rows: 1fr 1fr;
            }

            .operators {
            }

            .button {
            }
        }
    }
</style>
