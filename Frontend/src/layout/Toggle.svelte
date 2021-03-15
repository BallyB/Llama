<script>
  onMount(() => {
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
	});
</script>

<div class="switch-button">
  <span class="active"></span>
  <button class="switch-button-case left active-case" on:click={setType('chercheur')}>Chercheur</button>
  <button class="switch-button-case right" on:click={setType('participant')}>Participant</button>
</div>


<style>
  .switch-button {
      text-align: center;
      height: 37px;
      will-change: transform;
      transition: .3s ease all;
      border: 1px solid #F6B93B;
      border-radius: 30px;
      margin: 0 auto 8px auto;
      cursor: pointer;
  }
  .switch-button-case {
      font-family: "Varta", sans-serif;
      font-weight: bolder;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: black;
      width: 49%;
      height: 100%;
      background:none;
      position: relative;
      border: none;
      transition: .3s ease all;
      cursor: pointer;
  }
  .switch-button:hover {
      color: grey;
      cursor: pointer;
  }
  .switch-button-case:focus{
      outline: none;
  }
  .active {
      color: #151515;
      background-color: #F6B93B;
      width: 50%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      z-index: -1;
      transition: .3s ease-out all;
      border-radius: 30px;
  }
  .active-case {
      color: white;
  }
</style>
