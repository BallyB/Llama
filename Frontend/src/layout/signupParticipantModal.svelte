<script>
    import auth from "../store/auth";
    import axios from "axios";
    import {push} from "svelte-spa-router";

    /*function validation(){
        const password = document.getElementById("password").value;
        const confirm_password = document.getElementById("confirm password").value;

        if (confirm_password != password){
            document.getElementById('error-msg').innerHTML="Passwords are not matching";
            return false;
        }
    }*/


    /*function validatePassword(){
        if(password.value != confirm_password.value){
            confirm_password.setCustomValidity("Les deux mots de passe sont différents");
        } else {
            confirm_password.setCustomValidity("");
        }
    }*/


    /*password.onchange = validatePassword;
    confirm_password.onkeyup = validatePassword; */


    let userType = 'participant';
    let userName;
    let sex;
    let birthdayDate;
    let departements = [
        {
            label: 'Ain',
            value: 0,
        },
        {
            label: 'Aine',
            value: 1,
        },
        {
            label: 'Allier',
            value: 2,
        },
        {
            label: 'Hautes-Alpes',
            value: 3,
        },
        {
            label: 'Basses-Alpes',
            value: 4,
        },
        {
            label: 'Ardeche',
            value: 5,
        },
    ];
    let dept = [];
    let disorder;
    let possibleLanguages = [
        {
            label: 'Allemand',
            value: 0,
        },
        {
            label: 'Anglais',
            value: 1,
        },
        {
            label: 'Espagnol',
            value: 2,
        },
        {
            label: 'Français',
            value: 3,
        },
    ];
    let motherTongues = [];
    let languages = [];
    let schoolLevels = [
        {
            label: 'BAC',
            value: 0,
        },
        {
            label: 'BAC +1',
            value: 1,
        },
        {
            label: 'BAC +2',
            value: 2,
        },
        {
            label: 'BAC +3',
            value: 3,
        },
        {
            label: 'BAC +4',
            value: 4,
        },
        {
            label: 'BAC +5',
            value: 5,
        },
    ];
    let school = [];
    let email;
    let password;

    async function signup(e) {
        e.preventDefault();

        try {
            const res = await axios.post('http://localhost:3000/api/auth/signupParticipant', {
                nickname: userName,
                email: email,
                password: password,
                birthDate: birthdayDate,
                sex: sex,
                disorder: disorder,
                schoolDegreeID: school,
                MaternalLanguageID: motherTongues,
                SpokenLanguageID: languages,
                cityID: dept,
            });
            /*console.log(res)
            const { token, participantId } = res.data;

            auth.setAuth({ userType, participantId, token });*/
            await push('/home');
        } catch (error) {
            console.log(error)
        }
    }


</script>

<body>
<div>
    <h1>Inscription participant</h1>
</div>

<form on:submit={signup}>
    <label>
        <input id = "userName" required type = "text" bind:value={userName} placeholder="Nom d'utilisateur">
    </label>


    <p class="sex" >Êtes-vous</p>
    <div required>
        <input type = "radio" name = "sex" bind:group={sex}> <label class = "sex" for = "male">Un homme</label>

        <input type = "radio" name = "sex" bind:group={sex}><label class = "sex" for = "female">Une femme</label>

        <input type = "radio" name = "sex" bind:group={sex}><label class = "sex" for = "other">Je ne souhaite pas l'indiquer</label>
    </div>

    <input required type = "date" id = "start" bind:value={birthdayDate} min = "1950-01-01" max = "2020-12-31">

    <select required id = "dept" name = "dept" bind:value={dept}>
        <option value = "" disabled selected>Sélectionnez votre département de résidence</option>
        {#each departements as level}
            <option value={level.value}>{level.label}</option>
        {/each}
    </select>

    <p class="trouble" required>Souffrez-vous d un trouble du language ? (écrit ou parlé)</p>
    <div>
        <input type="radio" name = "trouble" bind:group={disorder}><label class = "trouble" for = "Oui">Oui</label>
        <input type="radio" name = "trouble" bind:group={disorder}><label class = "trouble" for = "Non">Non</label>
    </div>

    <select required id = "motherTongue" name = "langue" multiple bind:value={motherTongues}>
        <option value = "" disabled selected>Sélectionnez votre ou vos langue(s) maternelle(s)</option>
        {#each possibleLanguages as level}
            <option value ={level.value}>{level.label}</option>
        {/each}
    </select>

    <select id = "langue" name = "langue" multiple bind:value={languages}>
        <option value = "" disabled selected>Sélectionnez la ou les autre(s) langue(s) que vous parlez</option>
        {#each possibleLanguages as level}
            <option value={level.value}>{level.label}</option>
        {/each}
    </select>

    <select required id = "scho" name = "scho" bind:value={school}>
        <option value = "" disabled selected>Sélectionnez votre niveau scolaire</option>
        {#each schoolLevels as level}
            <option value={level.value}>{level.label}</option>
        {/each}
    </select>

    <input id = "email"  type = "email"  name = "email" bind:value={email} placeholder = "Adresse mail">
    <input id = "password" type = "password"  name = "password" bind:value={password} placeholder = "Mot de passe">
    <!--<input type = "password" id = "confirm password " placeholder = "Confirmation du mot de passe">-->

    <button onclick="validation" type="submit" name = "submit" value = "submit" class="primary-button">inscription participant</button>

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
        margin: 0 auto 13px;
    }

    .sex{
        font-size : 14px;
        color:#313131;
    }

    #userName, #dept, #motherTongue, #langue, #password, #email, #scho {
        background-color: #eee;
        width: 100%;
        box-sizing: border-box;
        border: none;
        border-radius: 6px;
        padding: 12px 15px;
        margin: 8px auto;
    }

    error-msg {
        color: #b71540;
    }

</style>