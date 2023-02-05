<script lang="ts">
    import { createEventDispatcher } from "svelte";


    export let text;

    const dispatch = createEventDispatcher();
    function clickHandler() {
        dispatch('click', { text: text });
    }
</script>

<button on:click={clickHandler}>{text}</button>

<style lang="scss">
    button {
        width: 100%;
        text-transform: uppercase;
        border-radius: 1em;
    }
</style>
