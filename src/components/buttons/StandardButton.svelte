<script lang="ts">
    import { createEventDispatcher } from "svelte";

    export let text;
    export let disabled = false;

    const dispatch = createEventDispatcher();
    function clickHandler() {
        dispatch('click', { text: text });
    }
</script>

<button on:click={clickHandler} disabled='{disabled}' class={$$props.class}>{text}</button>

<style lang="scss">
    button {
        width: 100%;
        text-transform: uppercase;
        border-radius: 0.5em;

        &:disabled {
            opacity: 0.5;
        }
    }
</style>
