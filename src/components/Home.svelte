<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import { GameMode } from '../enums/gameMode';
    import StandardButton from './buttons/StandardButton.svelte';

    const dispatch = createEventDispatcher();
</script>

<div class="utility">
    <button on:click={() => dispatch('help')}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="svg-icon"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/></svg></button>
    <button on:click={() => dispatch('stats')}><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" class="svg-icon"><g><rect fill="none" height="24" width="24"/></g><g><g><rect height="11" width="4" x="4" y="9"/><rect height="7" width="4" x="16" y="13"/><rect height="16" width="4" x="10" y="4"/></g></g></svg></button>
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

    .utility {
        display: flex;
        justify-content: space-between;

        button {
            background: transparent;

            .svg-icon {
                fill: #777;
                height: 2em;
                width: 2em;

                &:hover {
                    fill: #0D6FA7;
                    cursor: pointer;
                }
            }
        }
    }
</style>
