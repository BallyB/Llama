<script>
    import ProgressBar from "./ProgressBar.svelte";
    import PresentationStep from "./steps/Presentation.svelte";
    import MainStep from "./steps/Main.svelte";
    import ThanksStep from "./steps/Thanks.svelte";
    import {writable} from "svelte/store";
    import {setContext} from "svelte";


    export let experience;
    export let isPreview = false;

    const state = writable({
        experience,
        isPreview,
        results: {},
        steps: [PresentationStep, MainStep, ThanksStep],
        currentStep: 0
    });

    setContext('experience', state);

    function onBackClick(e) {
        e.preventDefault()
        if ($state.currentStep > 0) {
            $state.currentStep -= 1
        }
    }

    function onNextClick(e) {
        e.preventDefault()
        if ($state.currentStep < $state.steps.length - 1) {
            $state.currentStep += 1
        }
    }

</script>

<div class="exp-container">
    <h1 class="exp-title">{experience.presentation.title}</h1>
    <ProgressBar step={$state.currentStep} stepNb={$state.steps.length}/>

    <svelte:component this={$state.steps[$state.currentStep]} />

    <button class="primary-button" on:click={onBackClick}>back</button>
    <button class="primary-button" on:click={onNextClick}>next</button>

</div>


<style>
    .exp-container {
        max-width: 75%;
        margin: 0 auto;
    }

    .exp-title {
        font-family: "Varta", sans-serif;
        text-transform: uppercase;
    }

</style>