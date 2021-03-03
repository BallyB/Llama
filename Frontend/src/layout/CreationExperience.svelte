<script>
    import Sentence from './CreationSentences.svelte'
    import { getContext } from 'svelte';
import { empty } from 'svelte/internal';
    const context = getContext('creation-form');
    
    let sentences = [];

    let newSentence = ''

    function addSentence () {
        sentences = [...sentences, {
            name: newSentence,
            id: Date.now()
        }]
        newSentence = ''
    }    
    function deleteSentence (sentence) {
        sentences = sentences.filter(s => s !== sentence)
    }
    
</script>

<div class="input-container">
    <input type="text" name="question" bind:value={$context.formData.experience.question} placeholder="Question / énoncé">

    <select  name="slider" bind:value={$context.formData.presentation.slider}>
        <option value="" disabled selected>Sélectionnez un type de curseur</option>
        <option value="discrete">Discret (e.g.)</option>
        <option value="continuous">Continu (e.g.)</option>
    </select>

    <p> Ajouter une phrase </p>
    <ul>
        {#each sentences as sentence (sentence.id)}
            <!-- name="sentenceID" bind:value={$context.formData.experience.sentenceID} -->
            <Sentence 
                sentence={sentence}
                on:delete={() => deleteSentence(sentence)}
            />
        {/each}
    </ul>
    <input type="text" bind:value={newSentence}>
    <button on:click|preventDefault={addSentence}>Ajouter</button>
</div>

{JSON.stringify(sentences)}

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
    select{
        cursor: pointer;
    }
    button{
        cursor:pointer;
    }
</style>