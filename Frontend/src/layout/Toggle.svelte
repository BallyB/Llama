<script>
    const switchButton = document.querySelector('.switch-button');
    const switchBtnRight = document.querySelector('.switch-button-case.right');
    const switchBtnLeft = document.querySelector('.switch-button-case.left');
    const activeSwitch = document.querySelector('.active');


    function switchLeft() {
        switchBtnRight.classList.remove('active-case');
        switchBtnLeft.classList.add('active-case');
        activeSwitch.style.left = '0%';
    }

    function switchRight() {
        switchBtnRight.classList.add('active-case');
        switchBtnLeft.classList.remove('active-case');
        activeSwitch.style.left = '50%';
    }

    switchBtnLeft.addEventListener('click', event => {
        event.preventDefault();
        switchLeft();
    }, false);

    switchBtnRight.addEventListener('click', event => {
        event.preventDefault();
        switchRight();
    }, false);

</script>

<!--<div class="switch-button">
    <span class="active"></span>
    <button class="switch-button-case left active-case" on:click={setType('chercheur')}>Chercheur</button>
    <button class="switch-button-case right" on:click={setType('participant')}>Participant</button>
</div> -->
