<script>
	export let selectedHome;
	export let selectedCreation;
	export let selectedResults;
  </script>

<div class="container">
  <nav class="shadow">
	<div class="left-links">
	  <a class="logo" href="/"><img class="logo" src="images/llama.png" alt="logo" /></a>
	</div>
	<div class="centered-links">
	  <a class="links {selectedHome}" href="/">Accueil</a>
	  <a class="links {selectedCreation}" href="/"> Création</a>
	  <a class="links {selectedResults}" href="/"> Résultats</a>
	</div>
	<div class="right-links">
	  <a class="profile" href="/"><img class="profile" src="images/user.png" alt="profile" /></a>
	  <a class="chat" href="/"><img class="chat" src="images/email.png" alt="chat" /></a>
	</div>
  </nav>
</div>
  
  <style>
	.container{
		margin-bottom: 5em;
	}
	nav {
	  display: flex;
	  position: fixed;
	  top: 0;
	  width: 95vw;
	  overflow: auto;
	  height: auto;
	  justify-content: space-between;
	}
	.logo {
	  height: 50px;
	  display: inline-block;
	}
	.chat,.profile {
	  height: 20px;
	  display: inline-block;
	}
	.profile{
	  padding-right: 14px;
	}
	.left-links {
	  display: flex;
	  align-items: center;
	  justify-content: space-around;
	}
	.centered-links {
	  /* display: flex; */
	  align-items: center;
	  justify-content: space-around;
	}
	.right-links {
	  display: flex;
	  align-items: center;
	  justify-content: space-around;
	}
	.links {
	  display: inline-block;
	  text-align: center;
	  padding: 12px 24px;
	  color: #313131;
	  text-decoration: none;
	  font-size: 18px;
	  font-family: "Varta", sans-serif;
	}
	.links:hover {
	  border-bottom: 4px solid #f6b93b;
	}
	.selected {
	  border-bottom: 4px solid #f6b93b;
	  font-weight: bolder;
	}
	.shadow {
	  background-color: #fff;
	  padding: 10px;
	  box-shadow: 0px 15px 10px -15px #313131;
	  z-index: 1000;
	}
  </style>