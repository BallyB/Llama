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
              title: 'lorem',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque posuere metus in nisl malesuada vestibulum. Sed dignissim enim vitae neque laoreet suscipit eget non ligula. In at placerat mauris. Phasellus erat ipsum, gravida a efficitur id, rhoncus at dolor.',
              instruction: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque posuere metus in nisl malesuada vestibulum. Sed dignissim enim vitae neque laoreet suscipit eget non ligula. In at placerat mauris. Phasellus erat ipsum, gravida a efficitur id, rhoncus at dolor. Nunc in pharetra lectus, at interdum lectus. Vestibulum at facilisis elit, eu malesuada velit. Nulla velit felis, tincidunt eget mauris non, ullamcorper imperdiet risus. Sed hendrerit, metus eget viverra facilisis, neque eros pretium urna, non faucibus urna risus vitae erat. Cras imperdiet suscipit ipsum et eleifend. Cras sit amet enim orci. Nullam hendrerit a ex quis semper. Morbi sagittis mattis blandit. Nullam augue ante, hendrerit vel iaculis ut, aliquam eu metus. Duis id quam a neque facilisis consequat. Proin lorem magna, facilisis sit amet magna ut, blandit aliquam tortor. Quisque scelerisque dignissim maximus.',
              consent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque posuere metus in nisl malesuada vestibulum. Sed dignissim enim vitae neque laoreet suscipit eget non ligula. In at placerat mauris. Phasellus erat ipsum, gravida a efficitur id, rhoncus at dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque posuere metus in nisl malesuada vestibulum. Sed dignissim enim vitae neque laoreet suscipit eget non ligula. In at placerat mauris. Phasellus erat ipsum, gravida a efficitur id, rhoncus at dolor.',
              expType: '',
          },
          filter: {
              age: '',
              spokenLanguage: '',
              motherTongue: '',
              department: '',
              schoolLevel: '',
              trouble: '',
          },
          experience: {
              question: '',
              slider: '',
              sentences: [],
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
            {#if $state.activeItem < 4 }
                <button on:click={e => {
            e.preventDefault();
            $state.activeItem += 1;
        }} class="primary-button">Suivant</button>
            {:else }
            <button class="primary-button" type="submit">Valider l'expérience</button>
            {/if}
        </div>
    </form>

</body>

<style>
    h1 {
        /* margin-top:20vh; */
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