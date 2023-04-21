<script lang="ts">
    import Home from './components/Home.svelte'
    import Help from './components/Help.svelte'
    import Stats from './components/Stats.svelte'
    import Options from './components/Options.svelte'
    import Play from './components/Play.svelte'
    import GameOver from './components/GameOver.svelte'

    import { State } from './enums/state';
    import { Game } from './models/game';

    let state: State = State.home;
    let game: Game = new Game();

    function changeState(newState: State) {
        state = newState;
    }

    function setGameType(event) {
        game.reset();
        game.options.mode = event.detail.gameType;
        changeState(State.options);
    }

    function gameOver() {
        changeState(State.gameover);
    }
</script>

<main>
    {#if state === State.home }
        <Home on:help={() => changeState(State.help)} on:stats={() => changeState(State.stats)} on:options={setGameType} />
    {:else if state === State.help }
        <Help on:close={() => changeState(State.home)} />
    {:else if state === State.stats }
        <Stats on:close={() => changeState(State.home)} />
    {:else if state === State.options }
        <Options bind:game on:back={() => changeState(State.home)} on:play={() => changeState(State.play)} /> 
    {:else if state === State.play }
        <Play bind:game on:gameover={gameOver} />
    {:else if state === State.gameover }
        <GameOver bind:game on:home={() => changeState(State.home)} />
    {/if}
</main>

<style lang="scss">
	main {
        position: relative;
		text-align: center;
        height: 100%;
		padding: 0 1em;
		margin: 0 auto;
        overflow: hidden;
	}

	@media (min-width: 640px) {
		main {
			max-width: 640px;
		}
	}
</style>