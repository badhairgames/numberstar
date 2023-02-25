<script lang="ts">
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();
</script>

<button on:click={() => dispatch('close')}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="svg-icon"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>
</button>


<style lang="scss">
    button {
        position: absolute;
        background: transparent;
        right: 0;
        top: 0;

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
</style>