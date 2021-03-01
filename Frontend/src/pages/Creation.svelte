<script>
    import {setContext} from "svelte";
    import Navbar from '../layout/Navbar.svelte';
    import Presentation from '../layout/CreationPresentation.svelte';
    import Filter from '../layout/CreationFilter.svelte';
    import Experience from '../layout/CreationExperience.svelte';
    import Preview from '../layout/CreationPreview.svelte';
    import Tabs from '../layout/CreationTab.svelte';
    import {writable} from "svelte/store";

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
          presentation: {
              title: '',
              description: '',
              instruction: '',
              consent: '',
              expTyp: '',
          },
          filter: {
              age: '',
              spokenLanguage: '',
              motherTongue: '',
              department: '',
              schoolLevel: '',
              trouble: '',
          }
            //...
        },
    });

    setContext('creation-form', state);

</script>

<body>
    <Navbar/>

    <h1>Créer une expérience</h1>

    <form>
        <Tabs />
        {JSON.stringify($state)}
        <div class="flex-container">
            <button id="save" class="primary-button">Enregistrer brouillon</button>
            <button on:click={e => {
            e.preventDefault();
            $state.activeItem += 1;
        }} class="primary-button">Suivant</button>
        </div>
    </form>

</body>

<style>
    h1 {
        text-align: center;
        font-family: "Varta", sans-serif;
    }

    #save {
        background-color: black;
        color: #f4f4f4;

    }

    #save:hover {
        background-color: #313131;
    }


    .flex-container {
        display: flex;
        flex-wrap: nowrap;
        align-content: center;
        margin: 10px auto;
        justify-content: space-around;
    }

</style>