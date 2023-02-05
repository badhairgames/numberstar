<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import type { Game } from "../../models/game";
    import { Question } from "../../models/question";
    import Timer from './Timer.svelte';
    import Info from "./Info.svelte";
    import Options from "./Options.svelte";

    export let game: Game;
    const dispatch = createEventDispatcher();

    let currentQuestion: Question = null;
    let optionsComponent;
    let timerComponent;
    let timePerQuestion = 3000;

    function resetQuestion() {
        if (timerComponent) {
            timerComponent.pause();
        }

        if (game.lives <= 0) {
            dispatch('gameover');
            return;
        }

        currentQuestion = new Question(game.options, currentQuestion);
        if (timerComponent) {
            timerComponent.reset();
        }
    }

    function answered(event) {
        var correct = event.detail.correct;
        timerComponent.pause();
        game.score += correct ? 1 : 0;
        game.lives -= correct ? 0 : 1;

        setTimeout(() => {
            resetQuestion();
            optionsComponent.reset();
        }, correct ? game.pauseCorrectAnswer : game.pauseIncorrectAnswer);
    }

    function outOfTime() {
        timerComponent.pause();
        game.lives -= 1;
        resetQuestion();
    }

    resetQuestion();
</script>

{#if currentQuestion}
<Info bind:game></Info>
<div class="question">{currentQuestion.content}</div>
<Options bind:currentQuestion on:answer={answered} bind:this={optionsComponent}></Options>
<Timer on:timeout={outOfTime} bind:time={timePerQuestion} bind:this={timerComponent}></Timer>
{/if}

<style lang="scss">
    .question {
        font-size: 3em;
        font-weight: bold;
    }
</style>