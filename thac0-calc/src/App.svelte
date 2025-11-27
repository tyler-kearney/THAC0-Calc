<script>
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import Counter from './lib/Counter.svelte'
  import InputForm from './lib/InputForm.svelte';
</script>

<main>
  <div>
    <a href="https://vite.dev" target="_blank" rel="noreferrer">
      <img src={viteLogo} class="logo" alt="Vite Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer">
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>
  <h1>Vite + Svelte</h1>

  <div class="card">
    
  </div>

  <p>
    Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer">SvelteKit</a>, the official Svelte app framework powered by Vite!
  </p>

  <p class="read-the-docs">
    Click on the Vite and Svelte logos to learn more
  </p>
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
