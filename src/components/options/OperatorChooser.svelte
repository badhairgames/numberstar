<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import RoundButton from "../buttons/RoundButton.svelte";
    export let operators: string[] = [];
    const dispatch = createEventDispatcher();

    function updateValues(event) {
        const selected = event.detail.selected;
        const value = event.detail.text;
        const included = operators.includes(value);
        if (selected && !included) {
            operators.push(value);
        } else if (included) {
            const index = operators.indexOf(value, 0);
            if (index > -1) {
                operators.splice(index, 1);
            }
        }

        dispatch('select', { operator: value });
    }
</script>

<RoundButton text="+" keyCode="49" class={$$props.class} on:select={updateValues}></RoundButton>
<RoundButton text="-" keyCode="50" class={$$props.class} on:select={updateValues}></RoundButton>
<RoundButton text="×" keyCode="51" class={$$props.class} on:select={updateValues}></RoundButton>
<RoundButton text="÷" keyCode="52" class={$$props.class} on:select={updateValues}></RoundButton>

<style lang="scss">
</style>
