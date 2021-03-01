<script>
    import { getContext } from 'svelte';

    const context = getContext('creation-form');
</script>

    <div>

        <select name="age" multiple bind:value={$context.formData.filter.age}>
            <option value="" disabled selected>Sélectionnez une ou plusieurs tranche(s) d'âge</option>
            <option value="type0">Tout</option>
            <option value="type1">18-25 ans</option>
            <option value="type2">25-35 ans</option>
        </select>

        <select name="spokenLanguage" multiple bind:value={$context.formData.filter.spokenLanguage}>
            <option value="" disabled selected>Sélectionnez une ou plusieurs langue(s)</option>
            <option value="all">Tout</option>
            <option value="allemand">Allemand</option>
            <option value="anglais">Anglais</option>
            <option value="chinois">Chinois</option>
            <option value="espagnol">Espagnol</option>
            <option value="français">Français</option>
        </select>

        <select name="motherTongue" multiple bind:value={$context.formData.filter.motherTongue}>
            <option value="" disabled selected>Sélectionner une ou plusieurs langue(s)</option>
            <option value="all">Tout</option>
            <option value="allemand">Allemand</option>
            <option value="anglais">Anglais</option>
            <option value="chinois">Chinois</option>
            <option value="espagnol">Espagnol</option>
            <option value="français">Français</option>
        </select>

        <select name="department" multiple bind:value={$context.formData.filter.department}>
            <option value="" disabled selected>Sélectionner un ou plusieurs département(s)</option>
            <option value="all">Tout</option>
            <option value="1">Ain</option>
            <option value="2">Aine</option>
            <option value="3">Allier</option>
            <option value="4">Ardèche</option>
        </select>

        <select name="schoolLevel" multiple bind:value={$context.formData.filter.schoolLevel}>
            <option value="" disabled selected>Sélectionner un ou plusieurs niveau(x) scolaire(s)</option>
            <option value="all">Tout</option>
            <option value="1">BAC</option>
            <option value="2">BAC +1</option>
            <option value="3">BAC +2</option>
            <option value="4">BAC +3</option>
        </select>

        <select name="trouble" multiple bind:value={$context.formData.filter.trouble}>
            <option value=""disabled selected>Sélectionner un trouble du language</option>
            <option value="all">Avec et sans trouble du language</option>
            <option value="true">Sans trouble du language</option>
            <option value="false">Avec trouble du language</option>
        </select>
    </div>

