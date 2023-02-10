<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import { GameMode } from "../enums/gameMode";
    import { history } from "../stores/history";
    import CloseButton from "./buttons/CloseButton.svelte";

    const dispatch = createEventDispatcher();

    function getModes() {
        return Object.keys(GameMode).filter(key => !isNaN(Number(GameMode[key])));
    }

    function getDifficulties() {

    }
</script>

<CloseButton on:close={() => dispatch('close')}></CloseButton>

<h1>Stats</h1>

<div class="mainStats">
    <div class="stat">
        <div class="value">{$history?.gamesPlayed ?? 0}</div>
        <div class="text">Played</div>
    </div>
    <div class="stat">
        <div class="value">{$history?.maxStreak ?? 0}</div>
        <div class="text">Max Streak</div>
    </div>
    <div class="stat">
        <div class="value">{$history?.currentStreak ?? 0}</div>
        <div class="text">Current Streak</div>
    </div>
</div>

<div class="chooser">
    <select>
        {#each getModes() as mode, i}
        <option value="{i}">{mode}</option>
        {/each}
    </select>
</div>


<style lang="scss">
    .mainStats {
        display: flex;
        flex-wrap: nowrap;
        flex-direction: row;
        justify-content: space-around;
        align-content: space-around;

        .stat {
            width: 30%;
            text-align: center;

            .value {
                color: #0d6fa7;
                font-size: 2em;
            }

            .text {
                color: #000;
                font-size: 0.8em;
                text-transform: uppercase;
            }
        }
    }
</style>