<script>
	export let selectedHome;
	export let selectedParticipation;
	export let selectedResults;
	import {link} from 'svelte-spa-router'
  </script>

<nav class="nav" role="navigation">
	 
        <ul class="menu">
					<div class="left-links">
						<a class="logo" href="/home-p" use:link><img class="logo" src="images/llama.png" alt="logo" /></a>
					</div>
					<div class="menu">
						 <li><a class="links {selectedHome}"  href="/home-p" use:link>Accueil</a></li>
            			 <li><a class="links {selectedParticipation}" href="/participation" use:link>Participation</a></li>
            			 <li><a class="links {selectedResults}"  href="/resultats-p" use:link>Résultats</a></li>
					</div>
           <div class="right-links menu">
						<a class="profile" href="/profil-p" use:link><img class="profile" src="images/user.png" alt="profile" /></a>
						<a class="chat" href="/messagerie-p" use:link><img class="chat" src="images/email.png" alt="chat" /></a>
					</div>
        </ul>
    </nav>


<style>	
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
		/* padding-top: 2em;
		padding-right: 2em;
		padding-left: 2em;
		padding-bottom: 1.7em; */
		padding:1em;
		display: inline-block;
		text-align:center;
		text-decoration: none;
		color: #313131;
		font-family: "Varta", sans-serif;
		font-size: 18px;
		border-bottom: 4px solid white;

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
</style>