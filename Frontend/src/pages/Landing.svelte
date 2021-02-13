<script>
	import Popup from './popup_inscription.svelte'
</script>

<body>
	<main>
		<!-- svelte-ignore a11y-img-redundant-alt -->
	</main>
	<div class="split left" style="width:30%">
		<div style="text-align: left"><img id='logo' src="images/logo.png" alt="Logo"></div>
		  	<div id="left-part">
				<p id="accroche">Participez à des expériences en <b>linguistique</b> et faites avancer la <b>recherche</b></p>
                <div id="connexion">
                    <p> Vous avez déjà un compte ? </p>
                    <a href='/' class="button"><b>Connexion</b></a>
                </div> 
			</div>
	  	</div>
	  
	  <div class="split right" style="width:70%">
		  <h2>John Doe</h2>
		  <p>Some text here too.</p>
	  </div>
</body>

<style>

	body {
		width : 100%;
		height:100%;
	}

	p{
		font-family: 'Varta', sans-serif;
		font-size: 16px;
	}
	
/* Split the screen in half */
	.split {
		height: 100%;
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
		position: absolute;
		text-align: center;
		font-family: 'Varta', sans-serif;
	}

	#accroche{
		font-size:26px;
        position:absolute;
        margin: auto;
        top : 25%;
		/* width:85%; */
		/* margin:auto; */
		/* position:absolute; */
		/* top:20%; */
	}

    #connexion {
        position:absolute;
        margin : auto;
        top:40%;
        /* text-align:center; */
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