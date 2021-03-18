<script>
    import auth from '../store/auth';
    import Navbar from '../layout/NavbarParticipant.svelte';
</script>



<Navbar selectedHome={"selected"}/>
<h1>{JSON.stringify($auth)}</h1>

<a href="#/profil-p">Vers profil</a>