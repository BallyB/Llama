<script>
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
  <div>
    <a class="links" href="/">LOGO</a>
    <!-- <a class="logo" href="/"><img class="logo" src="images/llama.png" alt="logo" /></a> -->
  </div>
  <div class="left-links">
    <a class="links selected" href="/">Home</a>
    <a class="links" href="/"> Création</a>
    <a class="links" href="/"> Résultats</a>
  </div>
  <div class="right-links">
    <!-- <a class="profile" href="/"><img class="profile" src="images/user.png" alt="profile" /></a>
    <a class="chat" href="/"><img class="chat" src="images/email.png" alt="chat" /></a> -->
    <a class="links" href="/"> Profil </a>
    <a class="links" href="/">Messagerie</a>
  </div>
</nav>

<style>
  nav {
    display: flex;
    position: fixed;
    top: 0;
    width: 95%;
    overflow: auto;
    height: auto;
    justify-content: space-between;
  }
  .logo {
    height: 8vh;
  }
  .chat,.profile {
    padding-top: 25%;
    height: 3vh;
    padding-right: 0.5vw;
  }
  .right-links {
    justify-content: space-between;
  }
  .links {
    display: inline-block;
    text-align: center;
    padding: 12px;
    color: #313131;
    text-decoration: none;
    font-size: 17px;
    font-family: "Varta", sans-serif;
  }
  .links:hover {
    /* color:#f6b93b; */
    border-bottom: 3px solid #f6b93b;
  }
  .selected {
    border-bottom: 3px solid #f6b93b;
    font-weight: bold;
  }

  .shadow {
    background-color: #fff;
    padding: 14px;
    box-shadow: 0px 15px 10px -15px #313131;
    z-index: 1000;
  }

  /* .shadow {
    margin: 0;
    background-color: #FFF;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 15px 10px -15px #313131;
  }

  .nav {
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
