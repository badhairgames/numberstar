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

<BackButton on:back={() => dispatch('back')}></BackButton>

{#if game.options.mode !== GameMode.practice}
    <DifficultyButtons bind:game on:difficulty={chooseDifficulty} />
{:else}
    <div class="container">
        <div class="numbers"><NumberChooser bind:numbers on:select={numberSelected} /></div>
        <div class="operators"><OperatorChooser bind:operators on:select={operatorSelected} /></div>
        <div class="button"><StandardButton text="Practice" on:click={practiceClick} disabled={!validchoice}></StandardButton></div>
    </div>
{/if}

<style lang="scss">
    .container {
        display: grid;
        grid-template-rows: 3fr 2fr 2fr;
        grid-template-columns: 100%;
        justify-content: center;
        align-content: center;
        gap: 0.5em;
        padding: 1em 0;
        height: 90%;

        .numbers {
            height: 100%;
        }

        .operators {
            display: grid;
        }

        .button {
            display: grid;
            padding: 10% 0;
        }
    }

    @media only screen
        and (orientation: landscape)
        and (max-width: 801px)
    {
        .container {
            grid-template-rows: [row1] 65%  [row2] 35%;
            grid-template-columns: 60% 40%;

            .numbers {
                grid-row: row1;
                grid-column: 1 / span 2;
            }

            .operators {
                grid-row: row2;
            }

            .button {
                grid-row: row2;
            }
        }
    }
</style>
