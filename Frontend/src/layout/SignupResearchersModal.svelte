<script type="text/javascript" src="city_state.js">
    import Component from './SignupResearchersComponent.svelte';
    // import Select from './svelte-select';
    let error_boolean = false;
    const items = ['Ain', 'Aisne', 'Alpes'];


    async function handleSubmit(event) {
        console.log(event);
        console.log(event.target);
        console.log(event.target.email.value);
        console.log(event.target.password.value);
    }

    function validateMessageEmail(event) {
        let textbox = event.target;
        error_boolean = false;
        if (textbox.value === '') {
            textbox.setCustomValidity("Veuillez renseigner ce champ");
        } else if (textbox.validity.typeMismatch){
            error_boolean = true;
            textbox.setCustomValidity('Adresse email non valide');
        } else {
            textbox.setCustomValidity('');
        }
        return true;
    }
</script>
  
    <h1> Inscription Chercheur </h1>
    <form
        on:submit|preventDefault = "{handleSubmit}"
        on:invalid = {validateMessageEmail}
        on:changed = {validateMessageEmail}
        on:input = {validateMessageEmail}
    >
        <input required type = "firstname" id = "firstname" placeholder = "Prénom" />
        <br/>

        <input required type = "surname" id = "surname" placeholder = "Nom" />
        <br/>

        <p class="sex">Êtes-vous</p>
            <div>
                <input required type = "radio" id = "choice1" name = "sex" value = "male"> <label class = "sex" for = "male">Un homme</label>

                <input required type = "radio" id = "choice2" name = "sex" value = "female"><label class = "sex" for = "female">Une femme</label>

                <input required type = "radio" id = "choice3" name = "sex" value = "other" ><label class = "sex" for = "other">Je ne souhaite pas l'indiquer</label>
            </div>
        <br/>
     
        <!-- <Select {items}></Select> -->
        <select required id="dept" name="dept">
            <option value="" disabled selected>Sélectionnez votre département professionnel</option>
            <option value="ain">Ain</option>
            <option value="aisne">Aisne</option>
            <option value="allier">Allier</option>
            <option value="hautesalpes">Hautes-Alpes</option>
            <option value="bassesalpes">Basses-Alpes</option>
            <option value="ardeche">Ardèche</option>
        </select>        
        <!-- <SelectBoxDept/> -->
        <br/>

        <select required id="lab" name="lab">
            <option value="" disabled selected>Sélectionnez votre laboratoire de rattachement</option>
        </select>  
        <br/>


        <label for="email" id="profEmail">Votre adresse email professionnelle nous permet de limiter l'accès aux chercheurs uniquement.</label>
        <input required type = "email" name = "email" id = "email" placeholder = "Adresse email professionnelle valide" /> 
        <br/>
        <input required type = "password" id = "password" placeholder = "Mot de passe (entre 8 et 50 caractères)" />
        <br/>
        <input required type = "password" id = "password" placeholder = "Confirmation du mot de passe" />
<!-- Penser à ajouter si confirmation différent de mdp = FALSE -->
        <br/>
        <p id="terms">En poursuivant je reconnais avoir pris connaissance des termes et conditions d'utilisation. <br/>
        <a href="#">Comment sont utilisées mes données ?</a></p>

        <Component type = "submit" id = "signupResearcher" />
        <br/>
    </form>

<style>
    h1{
        margin-top: 2em;
        text-align : left;
        color : #F6B93B;
        font-size : 26px;
    }
    #terms{
        font-size : 12px;
        color : #313131;
    }
    a {
        color : #eb2f06;
        text-decoration : underline;
        font-size : 12px;
    }
    a:hover{
        color : #b71540;
        font-weight: bold;
    }
    input[type=password],input[type=email],input[type=surname],input[type=firstname], select[id=dept], select[id=lab] {
        width : 70%;
        font-size : 14px;
        margin-bottom : 20px;
        padding : 12px 20px;
        background-color: #31313120;
        border : 0.3px solid #31313140;
        box-sizing : border-box;
        border-radius : 6px;
    }
    input:focus {
        outline: 0;
    }
    select:focus {
        outline: 0;
    }
    select:invalid { 
        color: gray; 
    }
    .sex{
        font-size : 14px;
        color:#313131;
    }
    #profEmail{
        color:#eb2f06;
        font-size:11px;
    }
</style>