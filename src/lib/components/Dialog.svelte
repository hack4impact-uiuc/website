<script lang="ts">
  let dialog: HTMLDialogElement;

  export function close() {
    dialog.close();
  }

  export function open() {
    dialog.showModal();
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<dialog bind:this={dialog} on:click={close}>
  <div class="content" on:click|stopPropagation>
    <button class="close" on:click={close}>✕</button>
    <slot />
  </div>
</dialog>

<style>
  dialog {
    width: 70ch;
    max-width: 95vw;
    max-height: 85vh;
    font-size: 1rem;
    border: 1px solid black;
    border-radius: 10px;
    padding: 0;
    opacity: 0;
    transform: translateY(10%);
    overscroll-behavior: contain;
    box-sizing: border-box;
  }

  dialog[open] {
    animation: fade-in 0.4s both;
  }

  @media (prefers-reduced-motion: no-preference) {
    dialog[open] {
      animation: slide-in 0.4s both, fade-in 0.4s both;
    }
  }

  @keyframes slide-in {
    to {
      transform: translateY(0);
    }
  }

  dialog::backdrop {
    background-color: rgba(0, 0, 0, 0.75);
    opacity: 0;
    animation: fade-in 0.4s both;
  }

  @keyframes fade-in {
    to {
      opacity: 1;
    }
  }

  .content > .close {
    position: absolute;
    top: 0.5em;
    right: 0.5em;
    font-size: 1.5em;
    width: 2em;
    appearance: none;
    cursor: pointer;
    background-color: white;
    border-radius: 50%;
    border: none;
    aspect-ratio: 1;
  }

  .content > .close:hover {
    background-color: var(--gray-lighter);
  }

  .content {
    padding: 2em;
    padding-top: 4em;
  }
</style>
