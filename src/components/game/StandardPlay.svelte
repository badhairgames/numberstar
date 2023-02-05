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
    let timePerQuestion: number = game.timePerQuestion;
    let levelCounter: number = game.levelCounter;

    function resetQuestion() {
        if (timerComponent) {
            timerComponent.pause();
        }

        if (game.lives <= 0) {
            dispatch('gameover');
            return;
        }

        currentQuestion = new Question(game, currentQuestion);
        if (timerComponent) {
            timerComponent.reset();
        }
    }

    function answered(event) {
        var correct = event.detail.correct;
        timerComponent.pause();
        game.score += correct ? 1 : 0;
        game.lives -= correct ? 0 : 1;
        levelCounter += correct ? -1 : 0;
        if (levelCounter <= 0) {
            levelUp();
        }

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

    function levelUp() {
        game.level++;
        levelCounter = game.levelCounter;
        timePerQuestion *= game.levelTimeDelta;

        for (let i = 1; i < game.options.numbers.length + 10; i++) {
            if (game.options.numbers.indexOf(i) < 0) {
                game.options.numbers.push(i);
                break;
            }
        }

        if (game.options.operators.length < 4 && (game.level % 2) === 0) {
            const operators = ["+", "-", "×", "÷"];
            for (let i = 0; i < operators.length; i++) {
                if (game.options.operators.indexOf(operators[i]) < 0) {
                    game.options.operators.push(operators[i]);
                    break;
                }
            }
        }
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