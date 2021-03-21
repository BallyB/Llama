<script>
    import Navbar from '../layout/NavbarParticipant.svelte';
    import {onMount} from "svelte";
    import auth from '../store/auth';
    import axios from "axios";
    import formatExperience from "../utils/format-experiment";

    let experiments = [];

    onMount(async () => {
        const res = await axios.get('http://localhost:3000/api/experiment/experiment', { headers: { authorization: `Bearer ${$auth.token}`}})

        experiments = res.data.data.map(formatExperience);
    });
</script>

<Navbar selectedHome={"selected"}/>
<div class="experimentList">
    {#each experiments as experiment}
        <div class="experiment-card">
            <div class="experiment-card1">
                <h1>{experiment.title}</h1>
                <a href={`#/participation/${experiment._id}`}>Gogogo</a>
            </div>
        </div>
    {/each}
</div>

<style>
    h1 {
        font-family: "Varta", sans-serif;
        color: #FFFFFF;
        text-align: center;
        margin: 0;
    }

    .experimentList {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin: 30px auto;
        flex-wrap: wrap;
    }

    .experiment-card {
        width: 338px;
        height: 244px;
        background: #FFFFFF;
        box-sizing: border-box;
        box-shadow: 0 7px 30px -10px rgba(150,170,180);
        border-radius: 10px;
        overflow: hidden;
        margin: 15px;
    }

    .experiment-card1 {
        width: 338px;
        height: 120px;
        background: linear-gradient(89.82deg, #F6B93B 0.11%, rgba(229, 80, 57, 0.74) 99.8%);
        box-shadow: 0 7px 15px -10px rgba(150,170,180);
    }
</style>
