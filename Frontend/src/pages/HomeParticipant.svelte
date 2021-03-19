<script>
    import Navbar from '../layout/NavbarParticipant.svelte';
    // import Signout from "../layout/Signout.svelte";
</script>

<Navbar selectedHome={"selected"}/>

<!-- <Signout/> -->

<a href="#/participation" class="primary-button">Aller à l'expérience</a>

<style>
    a.primary-button {
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    display: flex;
    text-decoration: none;
    align-items: center;
    color: #FFF;
    font-weight: bolder;
    font-family: 'Varta', sans-serif;
}
</style>
