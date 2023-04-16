<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import type { Question } from "../../models/question";
    import RoundButton from "../buttons/RoundButton.svelte";

    const dispatch = createEventDispatcher();

    export let currentQuestion: Question;

    let correctColour = '#009933';
    let incorrectColour = '#993300';
    let defaultColour = '#0d6fa7';

    let buttonSelection = [false, false, false, false];
    let buttonColours = [defaultColour, defaultColour, defaultColour, defaultColour];


    function selectAnswer(event) {
        const selectedAnswer = Number(event.detail.text);
        const correct = selectedAnswer === currentQuestion.answer;

        for (let i = 0; i < currentQuestion.choices.length; i++) {
            var choice = currentQuestion.choices[i];
            if (choice === selectedAnswer) {
                buttonSelection[i] = true;
                buttonColours[i] = correct ? correctColour : incorrectColour;
            }
            else if (choice === currentQuestion.answer) {
                buttonSelection[i] = true;
                buttonColours[i] = correctColour;
            }
            else {
                buttonSelection[i] = false;
                buttonColours[i] = defaultColour;
            }
        }

        updateArrays();
        dispatch('answer', { correct: correct });
    }

    export function reset() {
        for (let i = 0; i < buttonSelection.length; i++) {
            buttonSelection[i] = false;
            buttonColours[i] = defaultColour;
        }

        updateArrays();
    }

    function updateArrays() {
        buttonSelection = buttonSelection;
        buttonColours = buttonColours;
    }
</script>

<div class="choices">
    {#each currentQuestion.choices as choice, i}
        <RoundButton
            text={choice.toString()}
            keyCode="{(49 + i).toString()}"
            class="btn"
            selected={buttonSelection[i]}
            selectedColour={buttonColours[i]}
            on:select={selectAnswer}
            >
        </RoundButton>
    {/each}
</div>

<style lang="scss">
    .choices {
        margin-top: 1em;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-content: space-around;

        :global(.btn) {
            cursor: pointer;
            font-size: 1em;
            height: 3em;
            line-height: 3em;
            text-align: center;
            width: 3em;
        }
    }
</style>