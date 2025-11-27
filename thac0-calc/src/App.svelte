<script>
  import InputForm from './lib/InputForm.svelte';
  import OutputDisplay from './lib/OutputDisplay.svelte';
  import viteLogo from '/vite.svg';
  import svelteLogo from './assets/svelte-logo.svg';

  // State Variables
  let selectedClass = '';
  let level = 1;
  let attackAbilityScore = 3;
  let weaponAttackMod = 0;
  let targetAC = 0;
  let weaponType = '';

  // Output Variables
  let thac0Score = 0;
  let requiredRoll = 0;

  // Logic Functions
  function onCalculate() {
    // Placeholder logic for THAC0 calculation
    // Replace with actual game logic as needed
    thac0Score = 20 - level + weaponAttackMod - Math.floor((attackAbilityScore - 10) / 2);
    requiredRoll = thac0Score - targetAC;
    if (requiredRoll < 1) requiredRoll = 1;
    if (requiredRoll > 20) requiredRoll = 20;
  }

  function onClear() {
    selectedClass = '';
    level = 1;
    attackAbilityScore = 3;
    weaponAttackMod = 0;
    targetAC = 0;
    weaponType = '';
    thac0Score = 0;
    requiredRoll = 0;
  }
</script>

<main>
  <h1>THAC0 Calculator</h1>
  <InputForm
    bind:selectedClass
    bind:level
    bind:attackAbilityScore
    bind:weaponAttackMod
    bind:targetAC
    bind:weaponType
    {onCalculate}
    {onClear}
  />
  <OutputDisplay {thac0Score} {requiredRoll} />
</main>

<style>
  :global body {
    font-family: 'press start 2p', cursive;
    background-color: #000080; /* Retro DOS Style Blue */
    color: #c0c0c0; /* Light Gray Text */
    margin: 0;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: flex-start; /* For better visibility */
    min-height: 100vh;
    box-sizing: border-box;
  }
</style>
