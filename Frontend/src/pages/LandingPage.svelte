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
        <p style="text-align:center; margin-top:10%"> Vous avez déjà un compte ? </p>
        <Modal>
            <ConnexionComponent />
        </Modal>
    </div>
</div>

<div class="split right" style="width:70%">
    <h2>John Doe</h2>
    <p>Some text here too.</p>
</div>
</body>



<style>

    body {
        width : 100vw;
        height:100vh;
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
        /* position:absolute; */
        margin-left: 10%;
        margin-right:10%;
        margin-top : 15%;
        /* width:85%; */
        /* margin:auto; */
        /* position:absolute; */
        /* top:20%; */
    }
    .accroche em{
        font-size: 28px;
        font-family: "Nothing You Could Do", cursive;
        font-weight: bold;
    }


    #logo {
        width:28%;
        margin:left;
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