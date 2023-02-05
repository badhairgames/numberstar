<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import CloseButton from "./buttons/CloseButton.svelte";

    const dispatch = createEventDispatcher();
</script>

<CloseButton on:close={() => dispatch('close')}></CloseButton>

<h1>Stats</h1>
