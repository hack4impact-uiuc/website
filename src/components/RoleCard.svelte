<div>
  <h4><slot name="role" /></h4>
  <p><slot name="description" /></p>
  <b><slot name="number" /> per team</b>
</div>

<style>
  div {
    background-color: var(--gray-lighter);
    padding: 20px;
    border-radius: 4px;
  }

  h4,
  b {
    color: var(--blue-darker);
  }

  p,
  b {
    font-size: 0.8rem;
  }
</style>
