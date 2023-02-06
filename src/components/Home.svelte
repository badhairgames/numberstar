<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import { GameMode } from '../enums/gameMode';
    import StandardButton from './buttons/StandardButton.svelte';

    const dispatch = createEventDispatcher();
</script>

<div class="utility">
    <button on:click={() => dispatch('help')}>🛈</button>
    <button on:click={() => dispatch('stats')}>📈</button>
</div>

<h1>numberSTAR</h1>

<ul>
    <li><StandardButton text="Play" on:click={() => dispatch('options', { gameType: GameMode.standard })}></StandardButton></li>
    <li><StandardButton text="Timed" on:click={() => dispatch('options', { gameType: GameMode.timed })}></StandardButton></li>
    <li><StandardButton text="Practice" on:click={() => dispatch('options', { gameType: GameMode.practice })}></StandardButton></li>
</ul>

<style lang="scss">
    ul {
        li {
            padding-bottom: 1em;
        }
    }
</style>
