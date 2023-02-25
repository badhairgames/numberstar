<script lang="ts">
    import { createEventDispatcher } from 'svelte';
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
    let timeForGame = game.defaultGameTime;
    let showLives = false;
    let questionWidth;
    let questionHeight;

    function resetQuestion() {
        currentQuestion = new Question(game, currentQuestion);
    }

    function answered(event) {
        var correct = event.detail.correct;
        game.score += correct ? 1 : 0;
        game.lives -= correct ? 0 : 1;

        setTimeout(
            () => {
                resetQuestion();
                optionsComponent.reset();
            },
            correct ? game.pauseCorrectAnswer : game.pauseIncorrectAnswer
        );
    }

    function outOfTime() {
        dispatch('gameover');
        return;
    }

    resetQuestion();
</script>

<!--{#if currentQuestion}
<div class="container">
    <Info bind:game bind:showLives={showLives}></Info>
    <div class="question">{currentQuestion.content}</div>
    <Options bind:currentQuestion on:answer={answered} bind:this={optionsComponent}></Options>
    <Timer on:timeout={outOfTime} bind:time={timeForGame} bind:this={timerComponent}></Timer>
</div>
{/if} -->
{#if currentQuestion}
    <div class="container">
        <div class="info">
            <Info bind:game bind:showLives />
        </div>
        <div
            class="question"
            bind:this={questionComponent}
            bind:clientWidth={questionWidth}
            bind:clientHeight={questionHeight}
        >
            <QuestionDisplay
                bind:question={currentQuestion.content}
                bind:containerWidth={questionWidth}
                bind:containerHeight={questionHeight}
            />
        </div>
        <div class="options">
            <Options bind:currentQuestion on:answer={answered} bind:this={optionsComponent} />
        </div>
        <div class="timer">
            <Timer on:timeout={outOfTime} bind:time={timeForGame} bind:this={timerComponent} />
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
            display: flex;
            justify-content: center;
            align-items: center;
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
