<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import { Difficulty } from '../enums/difficulty';
    import { GameMode } from '../enums/gameMode';
    import { history } from '../stores/history';
    import { HistoryFunctions } from '../stores/historyFunctions';
    import type { HistoryGame } from '../stores/historyGame';
    import CloseButton from './buttons/CloseButton.svelte';

    const dispatch = createEventDispatcher();

    let selectedMode = GameMode.standard;
    let selectedDifficulty = Difficulty.medium;
    let showSecondDropdown = true;
    let selectedHistory: HistoryGame;
    let graphUnitHeight: number;
    let maxScoreFromLast10: number;

    function getCurrentStreak(): number {
        if (!$history) return 0;
        HistoryFunctions.setStreak($history);
        return $history.currentStreak;
    }

    function getModes() {
        return Object.keys(GameMode).filter((key) => !isNaN(Number(GameMode[key])));
    }

    function getDifficulties() {
        return Object.keys(Difficulty).filter((key) => !isNaN(Number(Difficulty[key])));
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
            (s) =>
                s.mode === selectedMode && (selectedMode === GameMode.practice || s.difficulty === selectedDifficulty)
        );

        maxScoreFromLast10 = getMaxScoreFromPrevious10();
        graphUnitHeight = 1 / maxScoreFromLast10;
    }

    function getMaxScoreFromPrevious10(): number {
        if (!selectedHistory) return 0;
        return Math.max(...selectedHistory.last10Games);
    }

    function getBarClass(score: number): string {
        return score === maxScoreFromLast10 ? 'bar selected' : 'bar';
    }

    function getBarLabel(score: number): string {
        return score === maxScoreFromLast10 ? score.toString() : '';
    }

    selectMode();
</script>

<CloseButton on:close={() => dispatch('close')} />

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
        <div class="value">{getCurrentStreak($history)}</div>
        <div class="text">Current Streak</div>
    </div>
</div>

<div class="chooser">
    <select bind:value={selectedMode} on:change={selectMode}>
        {#each getModes() as mode, i}
            <option value={i}>{mode}</option>
        {/each}
    </select>
    {#if showSecondDropdown}
        <select bind:value={selectedDifficulty} on:change={getSelectedHistory}>
            {#each getDifficulties() as mode, i}
                <option value={i}>{mode}</option>
            {/each}
        </select>
    {/if}
</div>

<div class="highscore">
    {#if selectedHistory}
        <span class="score">{selectedHistory.highScore}</span>
        <span class="text">Highest Score</span>
    {:else}
        <span class="text">No statistics for this game type.</span>
    {/if}
</div>

<div class="last10games">
    {#if selectedHistory}
        <h2>Last 10 Games</h2>
        <div class="graph">
        {#each selectedHistory.last10Games as game}
            <div class="{getBarClass(game)}" style="height: {100 * game * graphUnitHeight}%"></div>
        {/each}
        </div>
        <div class="legend">
            {#each selectedHistory.last10Games as game}
            <div class="label">{getBarLabel(game)}</div>
            {/each}
        </div>
    {/if}
</div>

<style lang="scss">
    .mainStats {
        margin-top: 2em;
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
        display: flex;
        justify-content: space-between;
        padding: 1em 0;

        select {
            width: 48%;
            box-sizing: border-box;
            padding: 0.5em;
            text-transform: uppercase;
            border: 1px solid #aaaaaa;
            border-radius: 0.5em;
            font-size: 0.8em;
        }
    }

    .highscore {
        display: flex;
        align-items: center;
        justify-content: center;

        .score {
            color: #0d6fa7;
            font-size: 2em;
            padding-right: 10px;
        }

        .text {
            font-size: 0.8em;
            text-transform: uppercase;
            color: #000;
        }
    }

    .last10games {
        h2 {
            font-size: 0.8em;
            text-transform: uppercase;
            text-align: left;
        }

        .graph {
            display: flex;
            justify-content: space-evenly;
            align-items: flex-end;
            height: 200px;
            .bar {
                background: #777;
                width: 9%;

                &.selected {
                    background: #0d6fa7;
                }
            }

            .legend {
                text-align: center;
                font-size: 0.8em;
            }
        }

        .legend {
            display: flex;
            justify-content: space-evenly;
            align-items: flex-end;
            height: 1em;

            .label {
                text-align: center;
                font-size: 0.8em;
                width: 9%;
            }
        }
    }
</style>
