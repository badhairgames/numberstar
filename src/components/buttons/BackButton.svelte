<script lang="ts">
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();
</script>

<button on:click={() => dispatch('back')}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="svg-icon"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg></button>

<style lang="scss">
    button {
        position: absolute;
        background: transparent;
        left: 0;
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