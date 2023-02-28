<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import RoundButton from "../buttons/RoundButton.svelte";
    export let numbers: number[] = [];
    const dispatch = createEventDispatcher();

    function updateValues(event) {
        const selected = event.detail.selected;
        const value = Number(event.detail.text);
        const included = numbers.includes(value);
        if (selected && !included) {
            numbers.push(value);
        } else if (included) {
            const index = numbers.indexOf(value, 0);
            if (index > -1) {
                numbers.splice(index, 1);
            }
        }

        dispatch('select', { number: value });
    }
</script>

<div class="container">
    <RoundButton text="1" keyCode="49" on:select={updateValues} class="btn"></RoundButton>
    <RoundButton text="2" keyCode="50" on:select={updateValues} class="btn"></RoundButton>
    <RoundButton text="3" keyCode="51" on:select={updateValues} class="btn"></RoundButton>
    <RoundButton text="4" keyCode="52" on:select={updateValues} class="btn"></RoundButton>
    <RoundButton text="5" keyCode="53" on:select={updateValues} class="btn"></RoundButton>
    <RoundButton text="6" keyCode="54" on:select={updateValues} class="btn"></RoundButton>
    <RoundButton text="7" keyCode="55" on:select={updateValues} class="btn"></RoundButton>
    <RoundButton text="8" keyCode="56" on:select={updateValues} class="btn"></RoundButton>
    <RoundButton text="9" keyCode="57" on:select={updateValues} class="btn"></RoundButton>
    <RoundButton text="10" keyCode="65" on:select={updateValues} class="btn"></RoundButton>
    <RoundButton text="11" keyCode="66" on:select={updateValues} class="btn"></RoundButton>
    <RoundButton text="12" keyCode="67" on:select={updateValues} class="btn"></RoundButton>
</div>

<style lang="scss">
    .container {
        width: 80%;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-content: space-around;

        :global(.btn) {
            width: 15%;
        }
    }
</style>
