<script lang="ts">
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();
</script>

<button on:click={() => dispatch('close')}>×</button>


<style lang="scss">
    button {
        position: absolute;
        background: transparent;
        color: #777;
        width: auto;
        right: 0;
        top: 0;
        font-size: 2em;
        padding: 0;
        margin: 0;

        &:hover {
            background: transparent;
            color: #333;
        }
    }
</style>