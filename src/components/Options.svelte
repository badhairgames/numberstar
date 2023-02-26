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
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100vh;

        .numbers {
            flex: 4;
            padding: 1em;
        }

        .operators {
            flex: 1;
            padding: 1em;
        }

        .button {
            flex: 1;
            padding: 1em;
        }
    }
</style>
