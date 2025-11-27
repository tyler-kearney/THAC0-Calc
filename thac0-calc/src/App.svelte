<script>
  import InputForm from './lib/InputForm.svelte';
  import OutputDisplay from './lib/OutputDisplay.svelte';

  // Helper functions
  import { determineAbilityMod, determineBaseThac0 } from './lib/thac0helpers.js';

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
    let abilityMod = determineAbilityMod(attackAbilityScore);
    let baseThac0 = determineBaseThac0(selectedClass, level);
    // Validation
    if (!selectedClass || level < 1) {
      console.warn("Please select a valid class and level.");
      requiredRoll = NaN;
      thac0Score = NaN;
      return;
    }

    // Calculation
    requiredRoll = baseThac0 - targetAC - abilityMod - weaponAttackMod;
    thac0Score = baseThac0;
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
