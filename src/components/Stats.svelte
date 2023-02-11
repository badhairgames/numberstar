<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import { Difficulty } from "../enums/difficulty";
    import { GameMode } from "../enums/gameMode";
    import { history } from "../stores/history";
    import type { HistoryGame } from "../stores/historyGame";
    import CloseButton from "./buttons/CloseButton.svelte";

    const dispatch = createEventDispatcher();

    let selectedMode = GameMode.standard;
    let selectedDifficulty = Difficulty.medium;
    let showSecondDropdown = true;
    let selectedHistory: HistoryGame;

    function getModes() {
        return Object.keys(GameMode).filter(key => !isNaN(Number(GameMode[key])));
    }

    function getDifficulties() {
        return Object.keys(Difficulty).filter(key => !isNaN(Number(Difficulty[key])));
    }

    function selectMode() {
        switch (selectedMode as GameMode) {
            case GameMode.timed:
                showSecondDropdown = true;
                break;
            case GameMode.practice:
                showSecondDropdown = false;
                break;
            default:
                showSecondDropdown = true;
        }

        getSelectedHistory();
    }

    function getSelectedHistory() {
        selectedHistory = $history?.stats.find(
            s => s.mode === selectedMode
                && (selectedMode === GameMode.practice || s.difficulty === selectedDifficulty));
    }

    selectMode();
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
    <select bind:value={selectedMode} on:change={selectMode}>
        {#each getModes() as mode, i}
        <option value="{i}">{mode}</option>
        {/each}
    </select>
    {#if showSecondDropdown}
    <select bind:value={selectedDifficulty} on:change={getSelectedHistory}>
        {#each getDifficulties() as mode, i}
        <option value="{i}">{mode}</option>
        {/each}
    </select>
    {/if}
</div>

{#if selectedHistory}
    High Score: {selectedHistory.highScore}
{:else}
    <p>No statistics for this game type.</p>
{/if}

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

    .chooser {
        select {
            width: 45%;
            box-sizing: border-box;
            padding: 0.5em;
            text-transform: uppercase;
            border:1px solid #AAAAAA;
            border-radius: 1em;
        }
    }
</style>