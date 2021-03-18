<script>
	export let selectedHome;
	export let selectedCreation;
	export let selectedResults;
  </script>

<nav class="nav" role="navigation">
	 
        <ul class="menu">
					<div class="left-links">
						<a class="logo" href="/"><img class="logo" src="images/llama.png" alt="logo" /></a>
						<!-- <a class="links" href="/">LOGO</a> -->
					</div>
					<div class="menu">
						 <li><a class="links {selectedHome}"  href="/">Accueil</a></li>
            <li class="has-children"><a class="links {selectedCreation}"  href="/">Création</a>
                <!-- drop menu -->
                <ul class="drop">
                    <li><a class="drop-links" href="/">Jugement d'acceptabilité</a></li>
                    <li><a class="drop-links" href="/">Reconnaissance de mot</a></li>
                    <li><a class="drop-links" href="/">Prononciation</a></li>
                </ul>
                <!-- /drop menu-->
            </li>
            <li><a class="links {selectedResults}"  href="/">Résultats</a></li>
					</div>
           <div class="right-links menu">
						<a class="profile" href="/"><img class="profile" src="images/user.png" alt="profile" /></a>
						<a class="chat" href="/"><img class="chat" src="images/email.png" alt="chat" /></a>
						<!-- <a class="links" href="/">Profil</a>
						<a class="links" href="/">Messagerie</a> -->
					</div>
        </ul>
    </nav>


<style>
	/* .nav{
		display:flex;
		flex-direction:column;
		position: fixed;
		width: 100%;
	} */
	
	.nav ul {
		/* position: fixed; */
		width:100%;
   		margin: 0px;
		padding: 0px;
		background: white;
		list-style:none;
		box-shadow: 0px 15px 10px -15px #313131;
	}

	.links {
		padding: 1em;
		display: inline-block;
		text-align:center;
		text-decoration: none;
		color: #313131;
		font-family: "Varta", sans-serif;
		font-size: 18px;
	}
		
	.links:hover {
		border-bottom: 4px solid #f6b93b;
	}

	.selected {
		border-bottom: 4px solid #f6b93b;
		font-weight: bolder;
	}

	.logo {
		height: 50px;
		display: inline-block;
	}
	.chat,.profile {
		height: 20px;
		display: inline-block;
		padding-right: 14px;
	}
	
	.nav .menu {
		display: flex;
		justify-content: space-between;
		/* height: auto; */
		height:6em;
		align-items: center;
	}
		
	.has-children {
		position: relative;
	}

	.has-children:hover > .drop {
		display: flex;
	}

	.drop {
		display: none;
		flex-flow: column wrap;
		min-width: 100px;
		position: absolute;
    	/* position: fixed; */
  }
	
	.drop-links {
		padding: 1em;
		display: block;
		width: 300px;
		text-decoration: none;
		color: #313131;
    	text-align: left;
    	color:white;
		background-color: #f6b93b;
		font-family: "Varta", sans-serif;
    }
	.drop-links:hover {
		text-align: left;
		color:white;
		background-color: #F3B22B;
	}

</style>