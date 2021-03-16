<script>
    import Modal from "../layout/Modal.svelte";
    import ConnexionComponent from "../layout/connexionComponent.svelte";
    import SignupResearchers from "../layout/SignupResearchersComponent.svelte";
</script>
        <div class="container">

            <div class="col-left">
                <div class="logo">
                    <img id="logo" class="logo" src="images/logo.png" alt="Logo" />
                </div>
                <div>
                    <p class="accroche">
                        Participez à des expériences en <em>linguistique </em> et
                        faites avancer la <em>recherche</em>
                    </p>
                </div>
                <div>
                    <p>Vous avez déjà un compte ?</p>
                    <Modal>
                        <ConnexionComponent />
                    </Modal>
                </div>
                <div>
                    <p class="quote">
                        "LE meilleur (seul) site pour participer à des expériences
                        en linguistique !" Béatrice.
                    </p>
                </div>
            </div>
            <div class="col-right">
                <div class="header-part">
                    <h2>
                        Rejoignez-nous <br />
                        <hr />
                        dès maintenant
                    </h2>
                </div>
                <div class="mid-part">
                    <div class="left-part">
                        <div class="creation">
                            <img id="creation" src="images/creation.png" alt="creation"/>
                            <p>Créez vos expériences</p></div>
                        <div class="participants">
                            <img id="participants" src="images/participants.png" alt="participants"/>
                            <p>Trouvez des participants</p>
                        </div>
                        <div class="followup">
                            <img id="followup" src="images/followup.png" alt="followup"/>
                            <p>Réalisez le suivi</p>
                        </div>
                    </div>
                    <div class="right-part">
                            <div class="participation">
                                <img id="participation" src="images/participation.png" alt="participation"/>
                                <p>Participez aux expériences</p></div>
                            <div class="results">
                                <img id="results" src="images/results.png" alt="results"/>
                                <p>Accédez aux résultats</p>
                            </div>
                            <div class="reward">
                                <img id="reward" src="images/reward.png" alt="reward"/>
                                <p>Soyez récompensés</p>
                            </div>
                        <!-- <div class="bottom-part">
                            
                        </div> -->     
                    </div>
                    
                </div>
                <div class="bottom-part">
                    <div class="signup-researchers">
                        <Modal>
                            <SignupResearchers />
                        </Modal>
                    </div>
                    <div class="signup-participants">
                        <Modal>
                            <SignupResearchers />
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    

    
    <style>
        .container {
            display:flex;
            z-index: 0;
            height:100vh;
            width:100%;
            margin:0;
        }

        
        /* Clear floats after the columns */
        /* .row:after {
            content: "";
            display: table;
            clear: both;
        }

        /* Control the left side */
        .col-left {
            width: 30%;
            text-align: center;
            font-size: 20px;
            font-family: "Varta", sans-serif;
            margin:0;
            display: flex;
            justify-content: flex-start;
            flex-direction: column;
        }
        .logo{
            text-align: left;
        }

        #logo{
            width: 28%;
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


        /* Control the right side */
        .col-right {
            width: 70%;
            background-color: #f6b93b;
            text-align: center;
            font-family: "Varta", sans-serif;
            margin: 0;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
        }
        .header-part{
            /* justify-content: center; */
        }
        .mid-part {
            width:100%;
            display: flex;
            justify-content: space-evenly;
        }

        .left-part{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }
        #creation{
            width: 30%;
            /* width: 3em; */
        }
        .creation{
            font-size: 1.5em;
            display: inline-flex;
            flex-direction: row;
            align-items: center;
            font-weight: 600;
            color: #313131;
            margin-bottom: 46px;
        }
        #participants{
            width: 26%;
            /* width: 3em; */
        }
        .participants{
            font-size: 1.5em;
            display: inline-flex;
            flex-direction: row;
            align-items: center;
            font-weight: 600;
            color: #313131;
            margin-bottom: 40px;
        }
        #followup{
            width: 34%;
            /* width: 3em; */
        }
        .followup{
            font-size: 1.5em;
            display: inline-flex;
            flex-direction: row;
            align-items: center;
            font-weight: 600;
            color: #313131;
            margin-bottom: 40px;
        }
        .right-part{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }
        #participation{
            width: 26%;
            /* width: 3em; */
        }
        .participation{
            font-size: 1.5em;
            display: inline-flex;
            flex-direction: row;
            align-items: center;
            font-weight: 600;
            color: #313131;
            margin-bottom: 40px;
        }
        #results{
            width: 30%;
            /* width: 3em; */
        }
        .results{
            font-size: 1.5em;
            display: inline-flex;
            flex-direction: row;
            align-items: center;
            font-weight: 600;
            color: #313131;
            margin-bottom: 40px;
        }
        #reward{
            width: 30%;
            /* width: 3em; */
        }
        .reward{
            font-size: 1.5em;
            display: inline-flex;
            flex-direction: row;
            align-items: center;
            font-weight: 600;
            color: #313131;
            margin-bottom: 40px;
        }

        .bottom-part{
            width:100%;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
        }
     
       


        p {
            text-align: "center";
            /* margin-top: 10%; */
        }
        h2 {
            color: #fff;
            font-size: 36px;
            margin:0;
        }
        hr {
            display: block;
            height: 1px;
            width: 70px;
            border: 0;
            border-top: 1px solid #fff;
            padding: 0;
        }
        
    </style>