<script>
    import { getContext } from "svelte";
    import popup from "./SignupParticipantsModal.svelte";
    const { open } = getContext("simple-modal");
    let opening = false;
    let opened = false;
    let closing = false;
    let closed = false;
    const showPopup = () => {
        open(popup, { message: "It's a popup!" });
    };
</script>

<section>
    <button class="primary-button" on:click={showPopup}
        ><b>Inscription participant</b></button
    >
    <br />

    <div id>
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
    .primary-button {
        font-weight: bolder;
        background-color: black;
        width: 115px;
        height: 47px;
        display: block;
        margin: auto;
        width: 193px;
        height: 46px;
        left: 394px;
        top: 509px;
        font-size: 14px;
    }

    .primary-button:hover {
        background-color: #313131;
    }
    /* button {
        font-size: 14px;
        cursor: pointer;
        color:#FFFFFF;
        background: #313131;
        border: none;
        border-radius: 26px;
        box-shadow: 0px 10px 13px -7px #313131;
        width: 193px;
        height: 46px;
        left: 394px;
        top: 509px;
        transition: all 0.34s;
    }
    button:hover {
        background-color: #202020;
    }
    button:focus {
        outline: 0;
    } */
    #state {
        position: absolute;
        top: 0;
        right: 0;
        opacity: 0.33;
        font-size: 0.8em;
    }
</style>
