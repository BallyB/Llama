<script>
    import { getContext } from "svelte";

    const state = getContext("experience");
</script>

<div class="presentation-container">
    <p>{$state.experience.presentation.description}</p>
    <p>{$state.experience.presentation.instruction}</p>
    <p>{$state.experience.presentation.consent}</p>
    <p>Cette expérience est destinée à :</p>
    <div class="filter-container">
        <div class="filter-item">
            <div>Age : {$state.experience.filter.age}</div>
        </div>
        <div class="filter-item">
            <div>
                Langue maternelle : {$state.experience.filter.motherTongue}
            </div>
        </div>
        <div class="filter-item">
            <div>Langue parlée : {$state.experience.filter.spokenLanguage}</div>
        </div>
        <div class="filter-item">
            <div>Département : {$state.experience.filter.department}</div>
        </div>
        <div class="filter-item">
            <div>Niveau scolaire : {$state.experience.filter.schoolLevel}</div>
        </div>
        <div class="filter-item">
            <div>Trouble du langage ? {$state.experience.filter.trouble}</div>
        </div>
    </div>
</div>

<style>
    /* .filter-container{
        border-radius: 25px;
        border: 2px solid #f6b93b;
        padding: 4px;
        text-align: center;
        justify-content: space-around;
        font-family: "Varta", sans-serif;
    } */



    .filter-container {
        display: flex;
        flex-flow: row wrap;
        align-content: space-between;
        justify-content: center;
    }
    .filter-item {
        display: contents;
    }
    .filter-item > div {
        border-radius: 25px;
        border: 2px solid #f6b93b;
        padding: 4px;
        text-align: center;
        justify-content: center;
        justify-content: space-around;
        font-family: "Varta", sans-serif;
        margin: 10px;
        line-height: 20px;
    }
    .filter-item:nth-child(3n)::after {
        content: "";
        width: 100%;
    }

    .presentation-container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .presentation-container p {
        font-family: "Varta", sans-serif;
        text-align: justify;
    }
</style>
