<div class="stats">
  <div class="stat">
    <div class="val">50%</div>
    <div>of leads are women</div>
  </div>
  <div class="stat">
    <div class="val">3 of 5</div>
    <div>directors are women</div>
  </div>
  <div class="stat tall">
    <div class="val">91%</div>
    <div>member retention rate at&nbsp;a</div>
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
  <div class="stat tall">
    <div class="val">52%</div>
    <div>Female</div>
    <div class="val">48%</div>
    <div>Male</div>
  </div>
</div>

<style>
  .stats {
    display: grid;
    grid-template-columns: 1fr 0.5fr 1fr 1fr 0.5fr;
    grid-template-rows: repeat(2, 1fr);
    gap: 10px;
    grid-auto-flow: column;
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

  .stat.tall {
    grid-row: 1 / 3;
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
      grid-auto-flow: row;
    }

    .stat.tall {
      grid-row: unset;
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
