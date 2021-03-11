<script>
    import { getContext } from 'svelte';
    import Select from "svelte-select";

    const context = getContext('creation-form');

    const age =[
        {value: '18-25 ans', label: '18-25 ans'},
        {value: '25-35 ans', label: '25-35 ans'}
    ];

    const spokenLanguage = [
        {value: 'allemand', label:'Allemand'},
        {value: 'anglais', label: 'Anglais'},
        {value: 'chinois', label:'Chinois'},
        {value: 'espagnol', label:'Espagnol'},
        {value: 'français', label: 'Français'}
    ];

    const motherTongue = [
        {value: 'allemand', label:'Allemand'},
        {value: 'anglais', label: 'Anglais'},
        {value: 'chinois', label:'Chinois'},
        {value: 'espagnol', label:'Espagnol'},
        {value: 'français', label: 'Français'}
    ];

    const department= [
        {value: 'ain', label: 'Ain'},
        {value: 'aine', label: 'Aine'},
        {value: 'allier', label: 'Allier'},
        {value: 'ardèche', label: 'Ardèche'}
    ];

    const schoolLevel = [
        {value: 'BAC', label: 'BAC'},
        {value: 'BAC +1', label: 'BAC +1'},
        {value: 'BAC +2', label: 'BAC +2'},
        {value: 'BAC +3', label: 'BAC +3'}
    ];

    const trouble = [
        {value: 'oui', label: 'Oui'},
        {value: 'non', label: 'Non'}
    ]
</script>

<div class="container">
    <div class='multiSelectItem'>

        <Select items={age} isMulti={true} name="age" bind:value={$context.formData.filter.age} placeholder="Âge"/>

        <Select items={spokenLanguage} isMulti={true} name="spokenLanguage" bind:value={$context.formData.filter.spokenLanguage} placeholder="Langue"/>

        <Select items={motherTongue} isMulti={true} name="motherTongue" bind:value={$context.formData.filter.motherTongue} placeholder="Langue maternelle"/>

        <Select items={department} isMulti={true} name="department" bind:value={$context.formData.filter.department} placeholder="Département"/>

        <Select items={schoolLevel} isMulti={true} name="schoolLevel" bind:value={$context.formData.filter.schoolLevel} placeholder="Niveau scolaire"/>

        <Select items={trouble} isMulti={true} name="trouble" bind:value={$context.formData.filter.trouble} placeholder="Trouble du langage"/>

    </div>
</div>

<style>
    .container {
        margin: auto;
        width: 50%;
    }

    .multiSelectItem {
        --borderColor: #313131;
        --background: #eee;
        --itemColor: #313131;
        --multiItemBG: #f6b93b;
        --multiItemActiveBG: #e58e26 ;
    }


</style>

