  
<script>
    import Navbar from '../layout/NavbarParticipant.svelte';
    import Experience from "../layout/experience/Experience.svelte";
    import {onMount} from "svelte";
    import axios from "axios";
    import {replace} from "svelte-spa-router";

    export let params = {};

    let experience;

    onMount(async () => {
        /*const { id } = params;

        try {
            const res = await axios.get(`http://localhost:3000/api/experiment/experiment/${id}`);
            console.log(res);
            experience = res.body;
        } catch (e) {
            console.error(e);
            await replace('#/home-p');
        }*/
    });

    experience= {
        id: '2', // experience.id
        presentation: {
            title: 'Ces phrases sont-elles grammaticales ?',
            description: 'Vous allez lire des phrases plus ou moins acceptables grammaticalement.\n' + 'Nous vous demandons de juger l’acceptabilité des phrases.',
            instruction: 'Veuillez noter l’acceptabilité entre 1 (si pour vous la phrase est difficile à comprendre ou inacceptable) et 10 (si pour vous la phrase est acceptable et facile à comprendre).\n' +
                'Vous avez la possibilité de moduler votre réponse. Attention il n\'est pas demandé de juger la crédibilité mais l\'acceptabilité. Merci de participer à cette expérience qui prendra à peu près 15 min.',
            consent: 'Pour cette expérience , nous devons collecter quelques  informations personnelles. Ces informations resteront strictement confidentielles, et ne seront en aucun cas transmises à un tiers.\n' +
                'En poursuivant, je reconnais être en accord avec les termes et conditions.',
            //   expType: '',
        },
        filter: {
            age: 'tout' ,
            spokenLanguage: 'tout',
            motherTongue: 'tout',
            department: 'tout',
            schoolLevel: 'tout',
            trouble: 'avec et sans trouble du langage',
        },
        experience: {
            question: 'Cette phrase est-elle grammaticale selon vous ?',
            slider: '',
            sentences: ["Le chat à la mère Michèle", "Les rugueux athéismes liquides appuieront sur le mur"],
        }
    }

</script>

<Navbar selectedParticipation={"selected"}/>

{#if (experience)}
    <Experience isPreview={false} experience={experience}/>
{/if}
