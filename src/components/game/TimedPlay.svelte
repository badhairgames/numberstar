<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import type { Game } from '../../models/game';
    import { Question } from '../../models/question';
    import Timer from './Timer.svelte';
    import Info from './Info.svelte';
    import Options from './Options.svelte';

    export let game: Game;
    const dispatch = createEventDispatcher();

    let currentQuestion: Question = null;
    let optionsComponent;
    let timerComponent;
    let timeForGame = game.defaultGameTime;
    let showLives = false;

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

{#if currentQuestion}
    <div class="container">
        <Info bind:game bind:showLives />
        <div class="question">{currentQuestion.content}</div>
        <Options bind:currentQuestion on:answer={answered} bind:this={optionsComponent} />
        <Timer on:timeout={outOfTime} bind:time={timeForGame} bind:this={timerComponent} />
    </div>
{/if}

<style lang="scss">
    .container {
        .question {
            font-size: 3em;
            font-weight: bold;
        }
    }
</style>
