<script>
    export let step;
    export let stepNb;

    const stepsId = Array.from({ length: stepNb }).map((_, i) => i);
</script>



<div class="progress-bar">
    <div class="progression-container">
        <div class="progression-line" style={`width: ${step / (stepNb - 1) * 100}%`}/>
    </div>

    <ul class="bullet-list">
        {#each stepsId as stepId}
            <li
                    class="bullet"
                    class:bullet-active={step === stepId}
                    style={`left: calc(${stepId / (stepNb - 1) * 100}% - 20px)`}
            >
                {stepId + 1}
            </li>
        {/each}
    </ul>
</div>


<style>
    .progress-bar {
        font-family: "Varta", sans-serif;
        position: relative;
        height: 50px;
        width: 100%;
    }

    .progression-container {
        position: absolute;
        left: 0;
        right: 0;
        height: 14px;
        top: calc(50% - 7px);
    }

    .progression-line {
        height: 14px;
        background-color: #f6b93b;
        border-radius: 0 7px 7px 0;
        transition: all 0.34s;
    }

    .bullet-list {
        list-style-type: none;
        padding: 0;
    }

    .bullet {
        position: absolute;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        top: calc(50% - 20px);
        background-color: #e58e26;
        font-size: 15px;
        font-weight: 700;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .bullet-active {
        background-color: #b71540;
    }
</style>