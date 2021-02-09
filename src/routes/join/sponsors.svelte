<script lang="ts">
  import Section from '../../components/Section.svelte';
</script>

<script lang="ts" context="module">
  interface Statistic {
    value: string;
    name: string;
  }
  let stats: Statistic[] = [1,2,3,4,5,6,7,8].map((n) => ({value: n+"%", name: "stat-" + n} as Statistic));
</script>

<svelte:head>
  <title>Sponsors | Hack4Impact UIUC</title>
</svelte:head>

<Section padding="60px">
  <h1>Sponsors</h1>
  <div class="sponsor-intro">
    <div id="sponsor-intro-left">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Labore fugit laboriosam saepe, minima explicabo, animi eligendi quam non natus excepturi rem. 
        Dolores molestiae sint qui enim a quaerat totam quas!
      </p>
    </div>
    <div id="sponsor-intro-right">
      {#each stats as stat}
        <div class="stat">
          <div>
          <div class="val">
            {stat.value}
          </div>
          <div>{stat.name}</div>
        </div>
        </div>
      {/each}
    </div>
  </div>
</Section>

<style>
  p {
    opacity: 80%;
  }

  .sponsor-intro {
    display: flex;
    flex-direction: row;
  }

  #sponsor-intro-left {
    width: 50%;
    padding-right: 30px;
  }

  #sponsor-intro-right {
    width: 50%;
    padding-left: 30px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 1fr;
    grid-gap: 15px;
  }

  #sponsor-intro-right > .stat::before {
    content: "";
    display: block;
    width: 1px;
    height: 0;
    padding-bottom: 100%;
    grid-area: 1 / 1 / 2 / 2;
  }

  .stat {
    display: grid;
  }
  
  .stat > div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    grid-area: 1 / 1 / 2 / 2;
    background-color: var(--blue);
    color: white;
    text-align: center;
    border-radius: 50%;
  }

  .stat > div > .val {
    font-size: 48px;
    line-height: 1;
  }
</style>