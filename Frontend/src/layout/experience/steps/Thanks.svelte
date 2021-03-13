<script xmlns="http://www.w3.org/1999/html">
    // import { onMount } from 'svelte';
    import {getContext} from "svelte";
    import Toggle from "../../Toggle.svelte";

    // onMount(() => { Toggle })

    const state = getContext('experience')


    function setValue(attribute, value) {
        return function(e) {
            e.preventDefault();
            $state.thanks[attribute] = value;
        }
    }

    const setType = value => () => $state.thanks[value] = value;


</script>

<div class="text">
    <h1>Merci pour votre participation !</h1>
    <h3>Cette expérience est désormais terminée.</h3>

    <p>Souhaitez-vous être recontacté par le chercheur ?</p>
 
 
    <!-- <button on:click={setValue('toContact', true)}>Oui</button>
    <button on:click={setValue('toContact', false)}>Non</button> -->
    



    <Toggle answer1={"Oui"} answer2={"Non"}/>




    <!-- <div class="switch-button">
        <span class="active" />
        <button
            class="switch-button-case left active-case"
            on:click={setValue("toContact", true)}>
            Oui
        </button>

        <button
            class="switch-button-case right"
            on:click={setValue("toContact", false)}>
            Non
        </button>
    </div> -->



    <p>Souhaitez vous être informé lors de la publication des résultats de cette expérience ? </p>
    
    
    <!-- <button on:click={setValue('toInform', true)}>Oui</button>
    <button on:click={setValue('toInform', false)}>Non</button> -->
    
    
    <Toggle answer1={"Oui"} answer2={"Non"}/>

    


    <!-- <div class="switch-button">
        <span class="active" />
        <button
            class="switch-button-case left active-case"
            on:click={setValue("toInform", true)}>
            Oui
        </button>
        <button
            class="switch-button-case right"
            on:click={setValue("toInform", false)}>
            Non
        </button>
    </div> -->
</div>

<style>
    .text {
        font-family: "Varta", sans-serif;
        text-align: center;
        margin-top: 90px;
        margin-bottom: 90px;
    }
</style>
