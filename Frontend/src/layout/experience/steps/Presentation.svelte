<script>
    import {getContext} from "svelte";

    const state = getContext('experience')
</script>

<div class="presentation-container">
    <p>Presentation</p>

    <p>{$state.experience.presentation.description}</p>
    <p>{$state.experience.presentation.instruction}</p>
    <p>{$state.experience.presentation.consent}</p>
    <p>{$state.experience.filter}</p>

</div>

<style>
    .presentation-container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .presentation-container p {
        font-family: "Varta", sans-serif;
        text-align: justify;
    }
</style>