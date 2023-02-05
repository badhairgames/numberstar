<script lang="ts">
    import RoundButton from "../buttons/RoundButton.svelte";
    export let operators: string[] = [];

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
    }
</script>

<div class="container">
    <RoundButton text="+" keyCode="49" width="22%" on:select={updateValues}></RoundButton>
    <RoundButton text="-" keyCode="50" width="22%" on:select={updateValues}></RoundButton>
    <RoundButton text="×" keyCode="51" width="22%" on:select={updateValues}></RoundButton>
    <RoundButton text="÷" keyCode="52" width="22%" on:select={updateValues}></RoundButton>
</div>

<style lang="scss">
    .container {
        margin-top: 1em;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-content: space-around;
    }
</style>
