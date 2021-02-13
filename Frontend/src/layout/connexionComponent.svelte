<script>
    import { getContext } from 'svelte';

    import popup from './connexionModal.svelte';


    const { open } = getContext('simple-modal');

    let opening = false;
    let opened = false;
    let closing = false;
    let closed = false;

    const showPopup = () => {
        open(popup, { message: "It's a popup!" });
    };

</script>

<section>
    <button on:click={showPopup}><b>Connexion !</b></button>
    <br/>


    <div id="state">
        {#if opening}
            <p>opening modal...</p>
        {:else if opened}
            <p>opened modal!</p>
        {:else if closing}
            <p>closing modal...</p>
        {:else if closed}
            <p>closed modal!</p>
        {/if}
    </div>
</section>

<style>
    section {
        padding-top: 0.5em;
    }

    button {
        font-size: 16px;
        cursor: pointer;
        color:#FFFFFF;
        background: #F6B93B;
        border: none;
        border-radius: 26px;
        box-shadow: 0px 10px 13px -7px #313131;
        width: 133px;
        height: 56px;
        left: 394px;
        top: 509px;
        transition: all 0.34s;
    }

    button:hover {
        background-color: #e58e26;
    }

    button:focus {
        outline: 0;
    }

    #state {
        position: absolute;
        top: 0;
        right: 0;
        opacity: 0.33;
        font-size: 0.8em;
    }



</style>