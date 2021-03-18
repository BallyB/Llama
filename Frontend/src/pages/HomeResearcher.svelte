<script>
    import auth from '../store/auth';
    import Navbar from '../layout/NavbarResearcher.svelte';
</script>



<Navbar selectedHome={"selected"}/>


<h1>{JSON.stringify($auth)}</h1>

<a href="#/profil-r">Vers profil</a>