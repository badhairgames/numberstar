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
</script>

<BackButton on:back={() => dispatch('back')}></BackButton>

{#if game.options.mode !== GameMode.practice}
    <DifficultyButtons bind:game on:difficulty={chooseDifficulty} />
{:else}
    <NumberChooser bind:numbers />
    <OperatorChooser bind:operators />
    <StandardButton text="Practice" on:click={practiceClick}></StandardButton>
{/if}

<style lang="scss">
</style>
