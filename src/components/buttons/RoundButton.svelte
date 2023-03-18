<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    export let selected = false;
    export let text = '';
    export let keyCode = '0';
    export let selectedColour = '#71C4F4';

    const dispatch = createEventDispatcher();

    function onKeyDown(e) {
        console.log('Key up');
        console.log(e.keyCode);
        if (e.keyCode == keyCode) {
            process();
        }
    }

    function process() {
        selected = !selected;
        dispatch('select', { text: text, selected: selected });
    }
</script>

<div
    on:click={process}
    on:keyup={onKeyDown}
    class={$$props.class}
    style="{selected ? 'background: ' + selectedColour + '; ' : ''}"
>
    <span>{text}</span>
</div>

<style lang="scss">
        div {
            position: relative;
            border-radius: 50%;
            background: #0d6fa7;
            color: #ffffff;
            cursor: pointer;
            user-select: none;
            -webkit-tap-highlight-color: transparent;
        }
</style>