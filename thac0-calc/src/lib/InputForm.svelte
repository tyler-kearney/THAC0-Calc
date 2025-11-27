<script>
    // Props
    export let onCalculate;
    export let onClear;

    // Local state variables
    export let selectedClass;
    export let level;
    export let attackAbilityScore;
    export let weaponAttackMod;
    export let targetAC;
    export let weaponType; // 'melee' or 'ranged'

    const classes = [
        'Fighter',
        'Cleric',
        'Magic-User',
        'Thief',
        'Elf',
        'Dwarf',
        'Halfling'
    ];

    const weaponTypes = [ 'melee', 'ranged' ];
</script>

<form on:submit|preventDefault>
    <div class="input-row">
        <label for="class">Class:</label>
        <select id="class" bind:value={selectedClass}>
            <option value="" disabled>Select a class</option>
            {#each classes as c}
                <option value={c}>{c}</option>
            {/each}
        </select>

        <label for="level">Level:</label>
        <input type="number" id="level" min="1" max="36" step="1" bind:value={level} />

        <label for="attackAbilityScore">Attack Ability Score:</label>
        <input type="number" id="attackAbilityScore" min="3" max="100" step="1" bind:value={attackAbilityScore} />

        <label for="weaponAttackMod">Weapon Attack Modifier:</label>
        <input type="number" id="weaponAttackMod" min="-10" max="100" step="1" bind:value={weaponAttackMod} />

        <label for="targetAC">Target AC:</label>
        <input type="number" id="targetAC" min="-10" max="20" step="1" bind:value={targetAC} />

        <label for="weaponType">Weapon Type:</label>
        <select id="weaponType" bind:value={weaponType}>
            <option value="" disabled>Select weapon type</option>
            {#each weaponTypes as wt}
                <option value={wt}>{wt}</option>
            {/each}
        </select>
    </div>

    <div class="button-row">
        <button type="button" on:click={onCalculate}>Calculate THAC0</button>
        <button type="button" on:click={onClear}>Clear</button>
    </div>
</form>

<style>
    /* Basic retro style styling */
    form {
        display: flex;
        flex-direction: column;
        gap: 15px;
        padding: 20px;
        border: 2px outset #c0c0c0;
        background-color: #808080; /* Gray window background */
        box-shadow: 4px 4px #000;
        font-size: 14px;
        width: clamp(300px, 90%, 800px);
    }

    .input-row {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 10px 30px;
        padding: 10px;
        border: 2px inset #c0c0c0;
        background-color: #c0c0c0;
        color: #000000;
    }

    label {
        font-weight: bold;
        white-space: nowrap;
        color: #000000;
        display: block;
        margin-bottom: 5px;
    }

    input[type="number"], select {
        padding: 5px;
        border: 2px inset #808080;
        background-color: #ffffff;
        color: #000000;
        font-family: 'Press Start 2P', cursive;
        font-size: 12px;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
    }

    select {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' fill='%23000' viewBox='0 0 8 8'%3E%3Cpath d='M4 5L0 1h8z'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: right 8px center;
        padding-right: 25px;
    }

    .button-row {
        display: flex;
        justify-content: flex-start;
        gap: 15px;
        margin-top: 20px;
    }

    button {
        padding: 8px 15px;
        border: 2px outset #c0c0c0;
        background-color: #808080;
        color: #000000;
        font-family: 'Press Start 2P', cursive;
        font-size: 12px;
        cursor: pointer;
        box-shadow: 2px 2px #000;
    }

    button:hover {
        background-color: #b0b0b0;
    }

    button:active {
        border: 2px inset #c0c0c0;
        box-shadow: 1px 1px #000;
        transform: translate(1px, 1px);
    }
</style>