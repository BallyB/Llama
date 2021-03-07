<script xmlns="http://www.w3.org/1999/html">
    import {getContext} from "svelte";
    import Toggle from "../../Toggle.svelte";



    const state = getContext('experience')


    function setValue(attribute, value) {
        return function(e) {
            e.preventDefault();
            $state.thanks[attribute] = value;
        }
    }

    const setType = value => () => $state.thanks[value] = value;

</script>

<div  class="text">
    <h1>Merci pour votre participation !</h1>
    <h3>Cette expérience est désormais terminée.</h3>


    <p >Souhaitez-vous être recontacter par le chercheur ?</p>
    <button on:click={setValue('toContact', true)}>Oui</button>
    <button on:click={setValue('toContact', false)}>Non</button>


    <p>Souhaitez vous être informé lors de la publication des résultats de cette expérience ?</p>
    <button on:click={setValue('toInform', true)}>Oui</button>
    <button on:click={setValue('toInform', false)}>Non</button>

</div>

<style>
    .text {
        font-family: "Varta", sans-serif;
        text-align: center;
        margin-top: 90px;
        margin-bottom: 90px;
    }
</style>