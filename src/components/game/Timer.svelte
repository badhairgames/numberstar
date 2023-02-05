<script lang="ts">
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    export let time = 3000; // In milliseconds
    let currentTimestamp = 0;
    let timeout;
    let width = 100;

    export function reset() {
        width = 100;
        timeout = new timer(() => {
            outOfTime();
        }, time);
    }

    export function pause() {
        if (timeout) {
            timeout.pause();
        }
    }

    function outOfTime() {
        dispatch('timeout');
    }

    /**
     * https://stackoverflow.com/a/3969760
     */
    function timer(callback, delay) {
        var timerId,
            start,
            paused = false,
            remaining = delay;

        this.pause = function () {
            paused = true;
            window.clearTimeout(timerId);
            timerId = null;
            remaining -= Date.now() - start;
        };

        this.resume = function () {
            if (timerId) {
                return;
            }

            start = Date.now();
            timerId = window.setTimeout(callback, remaining);
            paused = false;
        };

        this.proportionRemaining = function () {
            var totalRemaining = paused ? delay - remaining : Date.now() - start;
            return totalRemaining / delay;
        }

        this.resume();
    }

    function animate(timeStamp) {
        var elapsed = timeStamp - currentTimestamp;
        currentTimestamp = timeStamp;
        updateGraphic();
        window.requestAnimationFrame(animate);
    }

    function updateGraphic() {
        if (!timeout) return;
        width = timeout.proportionRemaining() * 100;
    }

    reset();
    animate(0);
</script>

<div class="timer">
    <div class="remaining" style="width:{width}%; background-color: hsl({100-width}, 100%, 50%)"></div>
</div>

<style lang="scss">
    .timer {
        position: relative;
        width: 100%;
        height: 20px;
        background-color: #999;

        .remaining {
            height: 100%;
            background-color: greenyellow;
        }
    }
</style>
