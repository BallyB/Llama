<script>

</script>

<body>
<div>
    <h1>Inscription participant</h1>
</div>

<form>
    <input required type="text" placeholder="Prénom">
    <input required type="text" placeholder="Nom">

    <p class="sex">Êtes-vous</p>
    <div>
        <input required type = "radio" name = "sex" value = "male"> <label class = "sex" for = "male">Un homme</label>

        <input required type = "radio" name = "sex" value = "female"><label class = "sex" for = "female">Une femme</label>

        <input required type = "radio"  name = "sex" value = "other" ><label class = "sex" for = "other">Je ne souhaite pas l'indiquer</label>
    </div>

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

</style>