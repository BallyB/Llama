<script>
    import Select from "svelte-select";
    import axios from "axios";
    import {push} from "svelte-spa-router";
    import auth from "../store/auth";
    let error_boolean = false;
    let lab =[
        {value: 'labo1', label: 'Laboratoire 1'},
        {value: 'labo2', label: 'Laboratoire 2'}
    ];

    let userType = 'researcher';
    let firstname;
    let surname;
    let sex;
    let email;
    let password;

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

	
	// function validation(){
	// 	confirmPassword.setCustomValidity("")
	// 	if (password.value !== confirmPassword.value){
	// 		  confirmPassword.setCustomValidity("Les mots de passe saisis ne correspondent pas");
    // 		confirmPassword.reportValidity()
	// 			return
	// 	}         
	// 	if (formSignup.checkValidity()){
	// 			alert('Votre inscription a bien été prise en compte !')
	// 	}
	// }

    function handleSubmit(event) {
        console.log(event);
        console.log(event.target);
        console.log(event.target.email.value);
        console.log(event.target.password.value);
    }

    async function signup(e) {
        e.preventDefault();

        try {
            const res = await axios.post('http://localhost:3000/api/auth/signupResearcher', {
                firstname: firstname,
                name: surname,
                email: email,
                password: password,
                sex: sex,
                laboratory: lab,
            });
            /*console.log(res)
            const { token, participantId } = res.data;

            auth.setAuth({ userType, participantId, token });
            await push('/home');*/
        } catch (error) {
            console.log(error)
        }
    }

    


    

</script>
  
    <h1> Inscription Chercheur </h1>
    <form id= "formSignup">

        <input id ="firstname" required type="text" bind:value={firstname} placeholder="Prénom">
        <br/>

        <input id ="surname" required type="text" bind:value={surname} placeholder="Nom">
        <br/>

        <p class="sex" >Êtes-vous</p>
            <div>
                <input required type="radio" name="sex" bind:group={sex}><label>Un homme</label>

                <input required type="radio" name="sex" bind:group={sex}><label>Une femme</label>

                <input required type="radio" name="sex" bind:group={sex}><label>Je ne souhaite pas l'indiquer</label>
            </div>
        <br/>

        <div class="container">
                <div class='select-item'><Select items={lab} bind:value={lab} isMulti={false} placeholder="Sélectionnez votre laboratoire de rattachement"/></div>
        </div>
        



        <!-- <select required id="lab" name="lab">
            <option value="" disabled selected>Sélectionnez votre laboratoire de rattachement</option>
            <option value="Labo1">Laboratoire 1</option>
        </select>   -->
        <br/>

        <label for="email" id="profEmail">Votre adresse email professionnelle nous permet de limiter l'accès aux chercheurs.</label>
        <input required type = "email" name = "email" id = "email" placeholder = "Adresse email professionnelle valide" /> 
        <br/>

        <input required type = "password" id = "password" placeholder = "Mot de passe (entre 8 et 50 caractères)" />
        <br/>
        <!-- <input required type = "password" id = "confirmPassword" placeholder = "Confirmation du mot de passe" /> -->
        <!-- <br/> -->

        <input required type="checkbox" name = "accept" id="accept"> <label id = "terms" for = "accept"> En poursuivant je reconnais avoir pris connaissance des termes et conditions d'utilisation.</label>
        <br/>
        <a href="#">Comment sont utilisées mes données ?</a>
        <br/>

        <button type="submit" class="primary-button-black" style="margin-top: 25px">inscription chercheur</button>

        <br/>
    </form>

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
        margin: 0 auto 13px;
    }
    .primary-button-black {
        display: block;
        margin: 1.25rem auto;
        width: 193px;
        height: 46px;
        left: 394px;
        top: 509px;
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
    #firstname, #surname, #password, #email {
        background-color: #eee;
        width: 100%;
        box-sizing: border-box;
        border: none;
        border-radius: 6px;
        padding: 12px 15px;
        margin: 8px auto;
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