<script>
    import {setContext} from "svelte";
    import Navbar from '../layout/NavbarResearcher.svelte';
    import Presentation from '../layout/CreationPresentation.svelte';
    import Filter from '../layout/CreationFilter.svelte';
    import Experience from '../layout/CreationExperience.svelte';
    import Preview from '../layout/CreationPreview.svelte';
    import Tabs from '../layout/CreationTab.svelte';
    import {writable} from "svelte/store";
    import axios from "axios";
    import {replace} from "svelte-spa-router";
    import auth from "../store/auth";

    let items = [
        {
            label: "Présentation",
            value: 1,
            component: Presentation
        },
        {
            label: "Filtres",
            value: 2,
            component: Filter
        },
        {
            label: "Expérience",
            value: 3,
            component: Experience
        },
        {
            label: "Preview",
            value: 4,
            component: Preview
        }
    ];
    const state = writable({
        items,
        activeItem: items[0].value,
        formData: {
            title: '',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque posuere metus in nisl malesuada vestibulum. Sed dignissim enim vitae neque laoreet suscipit eget non ligula. In at placerat mauris. Phasellus erat ipsum, gravida a efficitur id, rhoncus at dolor.',
          instruction: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque posuere metus in nisl malesuada vestibulum. Sed dignissim enim vitae neque laoreet suscipit eget non ligula. In at placerat mauris. Phasellus erat ipsum, gravida a efficitur id, rhoncus at dolor. Nunc in pharetra lectus, at interdum lectus. Vestibulum at facilisis elit, eu malesuada velit. Nulla velit felis, tincidunt eget mauris non, ullamcorper imperdiet risus. Sed hendrerit, metus eget viverra facilisis, neque eros pretium urna, non faucibus urna risus vitae erat. Cras imperdiet suscipit ipsum et eleifend. Cras sit amet enim orci. Nullam hendrerit a ex quis semper. Morbi sagittis mattis blandit. Nullam augue ante, hendrerit vel iaculis ut, aliquam eu metus. Duis id quam a neque facilisis consequat. Proin lorem magna, facilisis sit amet magna ut, blandit aliquam tortor. Quisque scelerisque dignissim maximus.',
          consent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque posuere metus in nisl malesuada vestibulum. Sed dignissim enim vitae neque laoreet suscipit eget non ligula. In at placerat mauris. Phasellus erat ipsum, gravida a efficitur id, rhoncus at dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque posuere metus in nisl malesuada vestibulum. Sed dignissim enim vitae neque laoreet suscipit eget non ligula. In at placerat mauris. Phasellus erat ipsum, gravida a efficitur id, rhoncus at dolor.',
          age: [] ,
          spokenLanguage: [],
          motherTongue: [],
          department: [],
          schoolLevel: [],
          trouble: false,
        content: {
            question: '',
            slider: '',
            sentences: [],
        }

            //...
        },
    });
    setContext('creation-form', state);


    async function creation(e) {
        e.preventDefault();

        try {
            const res = await axios.post('http://localhost:3000/api/experiment/createExperiment', {
                title : $state.formData.title,
                description : $state.formData.description,
                guideline : $state.formData.instruction,
                consentForm : $state.formData.consent,
                content : JSON.stringify($state.formData.content),
                experimentType : 1,
                ageFilter : JSON.stringify($state.formData.age),
                spokenLanguage : JSON.stringify($state.formData.spokenLanguage),
                nativeLanguage : JSON.stringify($state.formData.motherTongue),
                region : JSON.stringify($state.formData.department),
                schoolLevel : JSON.stringify($state.formData.schoolLevel),
                trouble : $state.formData.trouble,
                result : '',
                researcherId : $auth.userId,

            }, {
                headers: {
                    authorization: `Bearer ${$auth.token}`,
                }
            });
            console.log(res);
            alert('Votre experience a bien été enregistrée');

            await replace('#/home-r');
        } catch (error) {
            console.log(error);
        }
    }


</script>

<body>
    <Navbar selectedCreation={"selected"}/>

    <h1>Jugement d'acceptabilité</h1>

    <form>
        <Tabs/>
        <div class="flex-container">
            {#if $state.activeItem > 1 }
                <button on:click={e => {
                    e.preventDefault();
                    $state.activeItem -= 1;
                }} class="primary-button-black">Retour</button>
            {/if}
            {#if $state.activeItem < 4 }
                <button on:click={e => {
            e.preventDefault();
            $state.activeItem += 1;
        }} class="primary-button-black">Suivant</button>
            {:else }
            <button class="primary-button" type="submit" on:click={creation}>Valider l'expérience</button>
            {/if}
        </div>
    </form>

</body>

<style>
    h1 {
        /* margin-top:20vh; */
        text-align: center;
        font-family: "Varta", sans-serif;
        color: #F3B22B;
    }
    .flex-container {
        display: flex;
        flex-wrap: nowrap;
        align-content: center;
        margin: 10px auto;
        justify-content: space-around;
    }
</style>