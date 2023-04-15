<script lang="ts">
    import DifficultyButtons from './options/DifficultyButtons.svelte';
    import { createEventDispatcher } from 'svelte';
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
    // Default layout: Portrait device, mobile.
    .container {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 10% 50% 20% 20%;
        height: 100%;

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
            gap: 1vh;
            justify-items: center;
            align-items: center;

            :global(.numberButtons) {
                display: grid;
                width: 11.5vh;
                height: 11.5vh;
                font-size: 7vh;
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
            gap: 1vh;
            justify-items: center;
            align-items: center;

            :global(.operatorButtons) {
                display: grid;
                width: 10vh;
                height: 10vh;
                font-size: 6vh;
                font-weight: bold;
                justify-content: center;
                align-content: center;
            }
        }

        .button {
            display: grid;
            align-content: center;
        }
    }

    // Tall portrait devices
    @media only screen and (max-aspect-ratio: 300 / 600) {
        .container {
            .numbers {
                :global(.numberButtons) {
                    width: 25vw;
                    height: 25vw;
                    font-size: 18vw;
                }
            }

            .operators {
                :global(.operatorButtons) {
                    width: 18vw;
                    height: 18vw;
                    font-size: 12vw;
                }
            }
        }
    }

    // Landscape Devices
    @media only screen and (orientation: landscape) {
        .container {
            grid-template-columns: 1fr;
            grid-template-rows: 10vh 50vh 20vh 20vh;

            .numbers {
                grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
                grid-template-rows: 1fr 1fr;
                :global(.numberButtons) {
                    width: 22vh;
                    height: 22vh;
                    font-size: 16vh;
                }
            }
            
            .operators {
                :global(.operatorButtons) {
                    width: 18vh;
                    height: 18vh;
                    font-size: 12vh;
                }
            }
        }
    }

    // Landscape Devices
    // @media only screen and (max-aspect-ratio: 600 / 300) {
    //     .container {
    //         .numbers {
    //             :global(.numberButtons) {
    //                 width: 22vh;
    //                 height: 22vh;
    //                 font-size: 16vh;
    //             }
    //         }

    //         .operators {
    //             :global(.operatorButtons) {
    //                 width: 18vh;
    //                 height: 18vh;
    //                 font-size: 12vh;
    //             }
    //         }
    //     }
    // }
</style>
