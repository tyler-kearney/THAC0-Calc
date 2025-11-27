<script>
    // Props received from parent component App.svelte
    export let thac0Score;
    export let requiredRoll;
</script>

<div class="output-container">
    <div class="output-field">
        <label for="thac0Score">THAC0 Score:</label>
        <div class="result-box" id="thac0Score">{thac0Score}</div>
    </div>

    <div class="output-field">
        <label for="requiredRoll">Required Roll:</label>
        <div class="result-box" id="requiredRoll">{requiredRoll}</div>
    </div>
</div>

<style>
    /* Retro styling to match the InputForm theme */
    .output-container {
        display: flex;
        gap: 20px;
        padding: 20px;
        border: 2px outset #c0c0c0;
        background-color: #808080;
        box-shadow: 4px 4px #000;
        margin-top: 20px;
        font-family: 'Press Start 2P', cursive;
        color: #000000;
    }

    .output-field {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    label {
        font-weight: bold;
        color: #000000;
        font-size: 14px;
    }

    .result-box {
        /* Styled to look like a retro style non-editable text box */
        border: 2px inset #808080;
        padding: 8px;
        background-color: #ffffff;
        min-width: 120px;
        text-align: center;
        font-weight: bold;
        font-size: 16px;
    }
</style>