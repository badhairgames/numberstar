<script lang="ts">
    export let question;
    export let questionWidth;

    let questionText;
    let oldQuestion = 'x';
    let questionTextWidth = questionText?.getBoundingClientRect().width ?? 1;
    let scale = 1;
    let update = false;

    $: if (question !== oldQuestion && questionWidth > 1) {
        oldQuestion = question;
        update = true;
    }

    $: if (update) {
        update = false;
        questionTextWidth = questionText?.getBoundingClientRect().width ?? 1;
        console.log(`Original Question Width: ${questionTextWidth} (${scale})`);
        questionTextWidth /= scale;
        scale = questionWidth / questionTextWidth;

        console.log('=====================================================');
        console.log(`New Question:   ${question}`);
        console.log(`Question Width: ${questionTextWidth}`);
        console.log(`Scale:          ${scale}`);
    }
</script>

{#if question}
<span bind:this={questionText} style="transform:scale({scale})">{question}</span><br>
{/if}

<style lang="scss">
    span {
        display: inline-block;
        border: 1px solid red;
    }
</style>
