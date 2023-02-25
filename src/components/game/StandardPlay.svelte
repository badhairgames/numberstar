<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import { textfit } from 'svelte-textfit';
    import type { Game } from '../../models/game';
    import { Question } from '../../models/question';
    import Timer from './Timer.svelte';
    import Info from './Info.svelte';
    import Options from './Options.svelte';
    import QuestionDisplay from './QuestionDisplay.svelte';

    export let game: Game;
    const dispatch = createEventDispatcher();

    let currentQuestion: Question = null;
    let questionComponent;
    let optionsComponent;
    let timerComponent;
    let timePerQuestion: number = game.timePerQuestion;
    let levelCounter: number = game.levelCounter;
    $: questionWidth = questionComponent?.getBoundingClientRect().width ?? 1;

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

        setTimeout(
            () => {
                resetQuestion();
                optionsComponent.reset();
            },
            correct ? game.pauseCorrectAnswer : game.pauseIncorrectAnswer
        );
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

        // Remove easier questions, add higher numbers.
        game.options.numbers.shift();
        const maxNumber = Math.max(...game.options.numbers);
        game.options.numbers.push(maxNumber + 1);

        // Add another operator every second level.
        if (game.options.operators.length < 4 && game.level % 2 === 0) {
            const operators = ['+', '-', '×', '÷'];
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
    <div class="container">
        <div class="info">
            <Info bind:game />
        </div>
        <div class="question" bind:this={questionComponent}>
            <QuestionDisplay bind:question={currentQuestion.content} bind:questionWidth={questionWidth}></QuestionDisplay>
            <!--<span bind:this={questionText} style="transform:scale({scale})">{currentQuestion.content}</span>-->
        </div>
        <div class="options">
            <Options bind:currentQuestion on:answer={answered} bind:this={optionsComponent} />
        </div>
        <div class="timer">
            <Timer on:timeout={outOfTime} bind:time={timePerQuestion} bind:this={timerComponent} />
        </div>
    </div>
{/if}

<style lang="scss">
    .container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100vh;

        .info {
            flex: 1;
        }

        .question {
            position: relative;
            font-weight: bold;
            flex: 3;
        }

        .options {
            flex: 3;
        }

        .timer {
            flex: 2;
            padding-bottom: 1em;
        }
    }
</style>
