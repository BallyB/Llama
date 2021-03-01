<script>
    import { getContext } from 'svelte';

    const context = getContext('creation-form');
</script>

    <div class="input-container">
        <input type="text" name="title" bind:value={$context.formData.presentation.title} placeholder="Titre de l'expérience">
        <input type="text" name="description" bind:value={$context.formData.presentation.description} placeholder="Description de l'expérience">
        <input type="text" name="instruction" bind:value={$context.formData.presentation.instruction} placeholder="Consigne de l'expérience">
        <input type="text" name="consent" bind:value={$context.formData.presentation.consent} placeholder="Formulaire de consentement">

        <select  name="expType" bind:value={$context.formData.presentation.expTyp}>
            <option value="" disabled selected>Sélectionnez un type d'expérience</option>
            <option value="type1">Jugement d'acceptabilité</option>
            <option value="type2">Reconnaissance de mot</option>
        </select>
    </div>




<style>
    .input-container {
        margin: auto;
        width: 50%;
    }
    input:focus {
        outline: 0;
    }
    select:focus {
        outline: 0;
    }
    select:invalid {
        color: gray;
    }
    input, select {
        background-color: #eee;
        width: 100%;
        box-sizing: border-box;
        border: none;
        border-radius: 6px;
        padding: 12px 15px;
        margin: 8px auto;
    }

    #save {
        background-color: black;

    }

    #save:hover {
        background-color: #313131;
    }


    .flex-container {
        display: flex;
        flex-wrap: nowrap;
        align-content: center;
        margin: 10px auto;
        justify-content: space-around;
    }
</style>