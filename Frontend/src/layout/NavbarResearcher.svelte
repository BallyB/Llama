<script>
  export let selectedHome;
  export let selectedCreation;
  export let selectedResults;
</script>

<!-- <nav>
  <div class="nav-container shadow">
    <ul class="nav">
      <li><a href="/">Home</a></li>
      <li><a href="/Creation">Création</a></li>
      <li><a href="/Results">Résultats</a></li>
      <li><a href="/Profile">Profil</a></li>
      <li><a href="/Chat">Messagerie</a></li>
    </ul>
  </div>
</nav> -->


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

<style>
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
  /* .nav {
    overflow: hidden;
    list-style: none;
    margin: 0;
    padding: 0;
    justify-content: center;
    text-align: center;
  }
  .nav li {
    display: inline;
  }
  .nav a {
    display: inline-block;
    padding: 20px;
    color: #313131;
    text-decoration: none;
    font-size: 16px;
    font-family: "Varta", sans-serif;
  } */
</style>