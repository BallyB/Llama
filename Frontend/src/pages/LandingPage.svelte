<script>
    import Modal from "../layout/Modal.svelte";
    import ConnexionComponent from '../layout/connexionComponent.svelte';
</script>
<head>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Nothing+You+Could+Do&family=Raleway:wght@400;500;600;700&display=swap" rel="stylesheet">
</head>

<body>
<main>

</main>
<div class="split left" style="width:30%">
    <div style="text-align: left"><img id='logo' src="images/logo.png" alt="Logo"></div>
    <div id="left-part">
        <p class="accroche">Participez à des expériences en <em>linguistique </em> et faites avancer la <em>recherche</em></p>
        <p> Vous avez déjà un compte ? </p>
        <Modal>
            <ConnexionComponent />
        </Modal>
        <p class="quote">"LE meilleur (seul) site pour participer à des expériences en linguistique !" Béatrice.</p>
    </div>
</div>

<div class="split right" style="width:70%">
    <h2>Rejoignez-nous <br/> <hr/> dès maintenant</h2>
    <p>Some text here too.</p>

</div>
</body>

<style>
    hr {
    display: block;
    height: 1px;
    width: 70px;
    border: 0;
    border-top: 1px solid #FFF;
    padding: 0;
    }

    body {
        width : 100vw;
        height:100vh;
    }

    p{
        text-align:'center';
        margin-top:10%;
    }

    h2{
        color: #FFF;
        font-size:36px;
    }

    .quote{
        margin-top:30%;
        font-size: 30px;
        font-family: 'Nothing you could do';
    }
    
    /* Split the screen in half */
    .split {
        height: 100vh;
        position: fixed;
        z-index: 1;
        top: 0;
        /* overflow-x: hidden; */
        /* padding-top: 20px; */
    }

    /* Control the left side */
    .left {
        left: 0;
        background-color: #FFFFFF;
        text-align: center;
        font-size: 20px;
        font-family: 'Varta', sans-serif;
    }
    .accroche{
        font-size:26px;
        margin-left: 10%;
        margin-right:10%;
        margin-top : 15%;
    }

    .accroche em{
        font-size: 28px;
        font-family: "Nothing You Could Do", cursive;
        font-weight: bold;
    }

    #logo {
        width: 28%;
        margin: left;
    }

    /* Control the right side */
    .right {
        right: 0;
        background-color: #F6B93B;
        text-align: center;
        font-family: 'Varta', sans-serif;
        z-index: 0;
    }
</style>