<head>
	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@1,700&display=swap" rel="stylesheet">
	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@1,700&family=Varta:wght@300&display=swap" rel="stylesheet">
</head>

<script>
</script>

<body>
	<main>
		<!-- svelte-ignore a11y-img-redundant-alt -->
		<img id='logo' src="images/logo.png" alt="logo image" />
		<hr/>
	</main>
	<div style="width: 100%;">
		<div id="split-gauche" style="float:left; width: 50%">
			<h2 class="h2-split-gauche"> <i>Participez à des expériences en linguistique et faites avancer la recherche</i></h2>
			<p class="p-center">Vous avez déjà un compte ?</p>
		</div>


		<div id="split-droit" style="float:right;">
		</div>
	 </div>
	 <div style="clear:both"></div>
</body>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}
	.h2-split-gauche {
		margin:center;
		text-align: center;
		color : #313131;
		width:100%;
		font-family: 'Raleway', sans-serif;
		font-size: 36px;
	}
	p{
		font-family: 'Raleway', sans-serif;
		font-family: 'Varta', sans-serif;
		font-size: 26px;
	}

	.p-center{
		text-align: center;
	}

	hr {
		display: block;
		height: 1px;
		border: 0;
		border-top: 1px solid #313131;
		margin: auto;
		padding: 0;
		width:1230px;
		height:0.6px;
	}

	body {
		width : 100%;
		height:150%;
		background-image: linear-gradient(to right, rgba(246, 185,59,0), rgba(246, 185,59,0.2), rgba(246, 185,59,1));
	}
	#logo {
		width:15%;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

</style>