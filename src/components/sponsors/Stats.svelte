<div class="stats">
  <div class="stat">
    <div class="val">91%</div>
    <div>member retention rate</div>
  </div>
  <div class="stat">
    <div class="val">3 of 5</div>
    <div>directors are women</div>
  </div>
  <div class="stat">
    <div class="val">4</div>
    <div>round interview process at a</div>
    <div class="val">top 5</div>
    <div>CS/ECE school</div>
  </div>
  <div class="stat">
    <div class="val">4000+</div>
    <div>hours per semester</div>
  </div>
  <div class="stat">
    <div class="val">40-45</div>
    <div>dedicated members</div>
  </div>
  <div class="stat">
    <div>our work is typically</div>
    <div class="val">open source</div>
  </div>
  <div class="stat">
    <div class="val">$22,040</div>
    <div>
      product valuation by the 501(c)(3) nonprofit Love Without Boundaries
    </div>
  </div>
  <div class="stat">
    <div class="val">15%</div>
    <div>members of underepresented backgrounds</div>
  </div>
</div>

<style>
  .stats {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(8, 20px);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    margin: 2rem 0 2rem;
  }

  .stat {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    background-color: var(--blue-light);
    color: white;
    text-align: center;
    padding: 5px;
    box-sizing: border-box;
  }

  .val {
    font-size: 1.6rem;
    font-weight: bold;
    line-height: 1;
    margin: 5px 0;
  }
  div:last-child.val {
    margin-top: 0;
  }

  .stat:nth-child(1) {
    grid-area: 1 / 1 / 5 / 3;
  }
  .stat:nth-child(2) {
    grid-area: 5 / 1 / 9 / 3;
    background-color: var(--blue-darker);
  }
  .stat:nth-child(3) {
    grid-area: 1 / 3 / 9 / 4;
    background-color: var(--blue);
  }
  .stat:nth-child(4) {
    grid-area: 1 / 4 / 5 / 6;
  }
  .stat:nth-child(5) {
    grid-area: 5 / 4 / 9 / 6;
    background-color: var(--blue-darker);
  }
  .stat:nth-child(6) {
    grid-area: 1 / 6 / 4 / 8;
  }
  .stat:nth-child(7) {
    grid-area: 4 / 6 / 9 / 8;
    background-color: var(--blue-darker);
  }
  .stat:nth-child(8) {
    grid-area: 1 / 8 / 9 / 9;
    background-color: var(--blue);
  }

  @media only screen and (max-width: 792px) {
    .stats {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: max-content;
    }

    .stat:nth-child(1n) {
      grid-area: auto;
      padding: 15px 5px;
    }
  }

  @media only screen and (max-width: 550px) {
    .stats {
      grid-template-columns: repeat(1, 1fr);
    }
  }
</style>
