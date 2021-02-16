<script>
    import Modal from "../layout/Modal.svelte";
    import ConnexionComponent from "../layout/connexionComponent.svelte";
    import SignupParticipants from "../layout/SignupParticipantsComponent.svelte";
    import SignupResearchers from "../layout/SignupResearchersComponent.svelte";
    import SignupParticipantsComponent from "../layout/SignupParticipantsComponent.svelte";
</script>

<head>
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
        href="https://fonts.googleapis.com/css2?family=Nothing+You+Could+Do&family=Raleway:wght@400;500;600;700&display=swap"
        rel="stylesheet"
    />
</head>

<body>
    <div class="container">
        <div class="col-left" style="width:30%">
            <div style="text-align: left">
                <img id="logo" src="images/logo.png" alt="Logo" />
            </div>
            <div id="left-part">
                <p class="accroche">
                    Participez à des expériences en <em>linguistique </em> et
                    faites avancer la <em>recherche</em>
                </p>
                <p>Vous avez déjà un compte ?</p>
                <Modal class="test">
                    <ConnexionComponent class="test" />
                </Modal>
                <p class="quote">
                    "LE meilleur (seul) site pour participer à des expériences
                    en linguistique !" Béatrice.
                </p>
            </div>
        </div>
        <div class="col-right" style="width:70%">
            <h2>
                Rejoignez-nous <br />
                <hr />
                dès maintenant
            </h2>
            <div class="row">
                <div class="column">
                    <ul class="no_bullet">
                        <li class="creation">
                            <h3>Créez vos expériences</h3>
                        </li>
                        <li class="participants">
                            <h3>Trouvez des participants</h3>
                        </li>
                        <li class="followup">
                            <h3>Réalisez le suivi</h3>
                        </li>
                    </ul>
                    <Modal>
                        <SignupResearchers />
                    </Modal>
                </div>
                <div class="column">
                    <div>
                        <ul class="no_bullet">
                            <li class="participation">
                                <h3>Participez aux expériences</h3>
                            </li>
                            <li class="results">
                                <h3>Accédez aux résultats</h3>
                            </li>
                            <li class="reward">
                                <h3>Soyez récompensés</h3>
                            </li>
                        </ul>
                        <Modal class="test">
                            <SignupParticipants />
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

<style>
    .container {
        z-index: 0;
        clear: both;
    }

    li.creation {
        background: url("../images/creation.png") no-repeat left top;
        background-size: 15%;
        height: 85px;
        padding-top: 1px;
    }

    li.participants {
        background: url("../images/participants.png") no-repeat left top;
        background-size: 15%;
        height: 85px;
        padding-top: 1px;
    }

    li.followup {
        background: url("../images/followup.png") no-repeat left top;
        background-size: 15%;
        height: 85px;
        padding-top: 1px;
    }
    li.participation {
        background: url("../images/participation.png") no-repeat left top;
        background-size: 15%;
        height: 85px;
        padding-top: 1px;
    }

    li.results {
        background: url("../images/results.png") no-repeat left top;
        background-size: 15%;
        height: 85px;
        padding-top: 1px;
    }

    li.reward {
        background: url("../images/reward.png") no-repeat left top;
        background-size: 15%;
        height: 85px;
        padding-top: 1px;
    }
    ul.no_bullet {
        list-style-type: none;
        margin-left: 5%;
    }

    hr {
        display: block;
        height: 1px;
        width: 70px;
        border: 0;
        border-top: 1px solid #fff;
        padding: 0;
    }

    h3 {
        font-weight: 600;
        color: #313131;
    }

    .row {
        height: 68vh;
    }

    /* Clear floats after the columns */
    .row:after {
        content: "";
        display: table;
        clear: both;
    }

    /* Control the left side */
    .col-left {
        float: left;
        width: 30%;
        text-align: center;
        font-size: 20px;
        font-family: "Varta", sans-serif;
    }

    /* Control the right side */
    .col-right {
        float: left;
        right: 0;
        width: 70%;
        background-color: #f6b93b;
        text-align: center;
        font-family: "Varta", sans-serif;
    }

    .column {
        float: left;
        width: 50%;
        margin-top: 5%;
    }

    p {
        text-align: "center";
        margin-top: 10%;
    }

    h2 {
        color: #fff;
        font-size: 36px;
    }

    h3 {
        font-size: 20px;
    }

    .quote {
        margin-top: 25%;
        margin-left: 10%;
        margin-right: 10%;
        font-size: 22px;
        font-family: "Nothing you could do";
    }

    .accroche {
        font-size: 26px;
        margin-left: 10%;
        margin-right: 10%;
        margin-top: 15%;
    }

    .accroche em {
        font-size: 26px;
        font-family: "Nothing You Could Do", cursive;
        font-weight: bold;
    }

    #logo {
        width: 28%;
        margin: left;
    }
</style>
