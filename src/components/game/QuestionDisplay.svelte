<script lang="ts">
    export let question;
    export let containerWidth;
    export let containerHeight;

    let questionText;
    let questionTextWidth;
    let questionTextHeight;

    $: scale = Math.min(containerWidth / questionTextWidth, containerHeight / questionTextHeight);
</script>

{#if question}
<span
    bind:this={questionText}
    bind:clientWidth={questionTextWidth}
    bind:clientHeight={questionTextHeight}
    style="transform:scale({scale})">{question}</span>
{/if}

<style lang="scss">
    span {
        display: inline-block;
        transition: transform 0.2s;
    }
</style>
