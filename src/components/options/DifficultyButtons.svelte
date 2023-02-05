<script lang="ts">
    import StandardButton from '../buttons/StandardButton.svelte';
    import { createEventDispatcher } from 'svelte';
    import { Difficulty } from '../../enums/difficulty';
    import type { Game } from '../../models/game';

    const dispatch = createEventDispatcher();
    export let game: Game;

    function chooseDifficulty(event) {
        switch (event.detail.text) {
            case 'Easy':
                game.options.difficulty = Difficulty.easy;
                game.options.numbers = [1,2,3];
                game.options.operators = ["+"];
                break;
            case 'Medium':
                game.options.difficulty = Difficulty.medium;
                game.options.numbers = [1,2,3,4,5,6,7];
                game.options.operators = ["+", "-"];
                break;
            case 'Hard':
                game.options.difficulty = Difficulty.hard;
                game.options.numbers = [1,2,3,4,5,6,7,8,9,10,11,12];
                game.options.operators = ["+", "-", "×"];
                break;
            case 'Insane':
                game.options.difficulty = Difficulty.insane;
                game.options.numbers = [3,4,5,6,7,8,9,11,12,13,14,15];
                game.options.operators = ["+", "-", "×", "÷"];
                break;
            default:
                game.options.difficulty = Difficulty.medium;
        }

        dispatch('difficulty');
    }
</script>

<h1>Select Difficulty</h1>

<ul>
    <li><StandardButton text="Easy" on:click={chooseDifficulty} /></li>
    <li><StandardButton text="Medium" on:click={chooseDifficulty} /></li>
    <li><StandardButton text="Hard" on:click={chooseDifficulty} /></li>
    <li><StandardButton text="Insane" on:click={chooseDifficulty} /></li>
</ul>

<style lang="scss">
    h1 {
        text-align: center;
        text-transform: uppercase;
    }

    ul {
        li {
            padding-bottom: 1em;
        }
    }
</style>
