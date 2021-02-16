<script>
    import { onMount } from 'svelte';

    onMount(() => {
        const switchButton = document.querySelector('.switch-button');
        const switchBtnRight = document.querySelector('.switch-button-case.right');
        const switchBtnLeft = document.querySelector('.switch-button-case.left');
        const activeSwitch = document.querySelector('.active');


        function switchLeft() {
            switchBtnRight.classList.remove('active-case');
            switchBtnLeft.classList.add('active-case');
            activeSwitch.style.left = '0%';
        }

        function switchRight() {
            switchBtnRight.classList.add('active-case');
            switchBtnLeft.classList.remove('active-case');
            activeSwitch.style.left = '50%';
        }

        switchBtnLeft.addEventListener('click', event => {
            event.preventDefault();
            switchLeft();
        }, false);

        switchBtnRight.addEventListener('click', event => {
            event.preventDefault();
            switchRight();
        }, false);
    });
</script>


<body>
<div>
    <h1>Connexion</h1>
</div>

<form>
    <div class="switch-button">
        <span class="active"/>
        <button class="switch-button-case left active-case">Chercheur</button>
        <button class="switch-button-case right">Participant</button>
    </div>

    <input type="email" placeholder="Adresse mail">
    <input type="password" placeholder="Mot de passe">
    <a href="#"> Mot de passe oublié ? </a>

    <button type="submit" class="primary-button">Connexion</button>
</form>
</body>


<style>

   form {
       width: 400px;
       margin: auto;
   }

    h1 {
        font-size: 2rem;
        text-align: left;
        color: #F6B93B;
        width: 400px;
        margin: 0px auto 13px;
    }

    .primary-button {
        font-weight: bolder;
        background-color: black;
        display: block;
        margin: 1.25rem auto;
        width: 115px;
        height: 47px;
    }

    .primary-button:hover {
        background-color: #313131;
    }

    a {
        color: red;
        display: block;
        margin: 0.5rem auto;
        text-align: left;
        font-size: 14px;
    }

    input {
        width: 100%;
        background-color: #eee;
        border: none;
        box-sizing: border-box;
        border-radius: 6px;
        padding: 12px 15px;
        margin: 8px auto;
    }

    .switch-button {
        margin: 0 auto 8px auto;
        height: 37px;
        text-align: center;
        will-change: transform;
        cursor: pointer;
        transition: .3s ease all;
        border: 1px solid #F6B93B;
        border-radius: 30px;
    }

    .switch-button-case {
        font-family: "Varta", sans-serif;
        background:none;
        width: 49%;
        height: 100%;
        color: black;
        position: relative;
        border: none;
        transition: .3s ease all;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-weight: bolder;
        cursor: pointer;
    }

    .switch-button:hover {
        color: grey;
        cursor: pointer;
    }

    .switch-button-case:focus{
        outline: none;
    }

    .active {
        color: #151515;
        background-color: #F6B93B;
        position: absolute;
        left: 0;
        top: 0;
        width: 50%;
        height: 100%;
        z-index: -1;
        transition: .3s ease-out all;
        border-radius: 30px;
    }

    .active-case {
        color: white;
    }


</style>





