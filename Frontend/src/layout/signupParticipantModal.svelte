<script>
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

</script>

<body>
<div>
    <h1>Inscription participant</h1>
</div>

<form onsubmit=" return validation()">
    <label>
        <input id = "userName" required type="text" placeholder="Nom d'utilisateur">
    </label>

    <p class="sex">Êtes-vous</p>
    <div>
        <input required type = "radio" name = "sex" value = "male"> <label class = "sex" for = "male">Un homme</label>

        <input required type = "radio" name = "sex" value = "female"><label class = "sex" for = "female">Une femme</label>

        <input required type = "radio"  name = "sex" value = "other" ><label class = "sex" for = "other">Je ne souhaite pas l'indiquer</label>
    </div>

    <input required type = "date" id = "start" min = "1950-01-01" max = "2020-12-31">

    <select required id = "dept" name = "dept">
        <option value="" disabled selected>Sélectionnez votre département de résidence</option>
        <option value="ain">Ain</option>
        <option value="aisne">Aisne</option>
        <option value="allier">Allier</option>
        <option value="hautesalpes">Hautes-Alpes</option>
        <option value="bassesalpes">Basses-Alpes</option>
        <option value="ardeche">Ardèche</option>
    </select>

    <p class="trouble">Souffrez-vous d un trouble du language ? (écrit ou parlé)</p>
    <div>
        <input required type="radio" name = "trouble" value = "Oui"><label class = "trouble" for = "Oui">Oui</label>
        <input required type="radio" name = "trouble" value = "Non"><label class = "trouble" for = "Non">Non</label>
    </div>

    <select required id = "motherTongue" name = "langue" multiple>
        <option value = "" disabled selected>Sélectionnez votre ou vos langue(s) maternelle(s)</option>
        <option value = "allemand">Allemand</option>
        <option value = "anglais">Anglais</option>
        <option value = "espagnol">Espagnol</option>
        <option value = "français">Français</option>
    </select>

    <select id = "langue" name = "langue" multiple>
        <option value = "" disabled selected>Sélectionnez la ou les autre(s) langue(s) que vous parlez</option>
        <option value = "allemand">Allemand</option>
        <option value = "anglais">Anglais</option>
        <option value = "espagnol">Espagnol</option>
        <option value = "français">Français</option>
    </select>

    <select required id = "scho" name = "scho" >
        <option value = "" disabled selected>Sélectionnez votre niveau scolaire</option>
        <option value = "BAC">BAC</option>
        <option value = "BAC +1">BAC+1</option>
        <option value = "BAC +2">BAC+2</option>
        <option value = "BAC +3">BAC+3</option>
        <option value = "BAC +4">BAC+4</option>
        <option value = "BAC +5">BAC+5</option>
    </select>

    <input id = "email"  type = "email" name = "email" placeholder = "Adresse mail">
    <input id = "password" type = "password" name = "password" placeholder = "Mot de passe">
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

    #userName, #dept, #motherTongue, #langue, #password, #email {
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