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
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    margin: 2rem 0 2rem;
  }

  .stat {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    color: var(--blue-lighter);
    text-align: center;
    padding: 5px;
    box-sizing: border-box;
    border: 2px solid var(--blue-light);
    border-radius: 4px;
  }

  .val {
    font-size: 1.6rem;
    font-weight: bold;
    line-height: 1;
    margin: 5px 0;

    color: white;
  }
  div:last-child.val {
    margin-top: 0;
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
