<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import CloseButton from "./buttons/CloseButton.svelte";

    const dispatch = createEventDispatcher();
</script>

<CloseButton on:close={() => dispatch('close')}></CloseButton>

<h1>How to play</h1>
<p>Pick from one of the three available game modes: Standard, Timed and Practice.</p>

<p>
    Each mode presents a series of random questions and four possible answers. Select the correct answer before the time
    runs out!
</p>

<p>
    Both Standard and Timed allow you to select a difficulty level. Practice mode lets you choose the numbers and
    operators you want to revise. This lets you practice your 7 times tables, for example.
</p>

<p>
    Standard mode keeps going until you run out of lives. In timed and practice mode, answer as many questions as you
    can within a minute.
</p>
