<script>
    // import '../node_modules/materialize-css/dist/css/materialize.min.css';
    // import '../node_modules/materialize-css/dist/js/materialize.min.js';

    // import { Router, Route } from "svelte-routing";

    // import Navbar from './layout/Navbar.svelte';
    // import Home from './pages/Home.svelte';
    // import Creation from './pages/Creation.svelte';
    // import Profil from './pages/Profil.svelte';
    // import Messagerie from './pages/Messagerie.svelte';
    // import Resultats from './pages/Resultats.svelte';
</script>



<!-- <Router>
	<Navbar/>
		<div class="container">
			<Route path="/" component={Home} />
			<Route path="/Creation" component={Creation} />
			<Route path="/Resultats" component={Resultats} />
			<Route path="/Profil" component={Profil} />
			<Route path="/Messagerie" component={Messagerie} />
		</div>
</Router> -->

<head>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@1,700&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@1,700&family=Varta:wght@300&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Varta&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Varta:wght@400;700&display=swap" rel="stylesheet">
</head>

<body>
<main>
    <!-- svelte-ignore a11y-img-redundant-alt -->
</main>
<div class="split left" style="width:30%">
    <div style="text-align: left"><img id='logo' src="images/logo.png" alt="Logo"></div>
    <div id="left-part">
        <p id="accroche">Participez à des expériences en <b>linguistique</b> et faites avancer la <b>recherche</b></p>
        <p style="position:absolute; top:40%"> Vous avez déjà un compte ? <a href='/' class="button"><b>Connexion</b></a></p>
    </div>
</div>

<div class="split right" style="width:70%">
    <h2>John Doe</h2>
    <p>Some text here too.</p>
</div>
</body>

<style>

    body {
        height: 100vh;
        width: 100vm;
    }

    p{
        font-family: 'Varta', sans-serif;
        font-size: 16px;
    }

    /* Split the screen in half */
    .split {
        height: 100%;
        width: 50%;
        position: fixed;
        z-index: 1;
        top: 0;
        overflow-x: hidden;
        padding-top: 20px;
    }

    /* Control the left side */
    .left {
        left: 0;
        background-color: #FFFFFF;
        position: absolute;
        text-align: center;
        font-family: 'Varta', sans-serif;
    }

    #accroche{
        font-size:26px;
        width:85%;
        margin:auto;
        position:absolute;
        top:20%;
    }

    #logo {
        width:28%;
        margin:left;
    }

    .button {
        padding: 15px 32px;
        font-size: 16px;
        cursor: pointer;
        color:#FFFFFF;
        background: #F6B93B;
        border-radius: 26px;
        width: 133px;
        height: 56px;
        left: 394px;
        top: 509px;
    }

    /* Control the right side */
    .right {
        right: 0;
        background-color: #F6B93B;
        position: absolute;
        text-align: center;
        font-family: 'Varta', sans-serif;
    }
</style>