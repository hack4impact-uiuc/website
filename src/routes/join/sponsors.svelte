<script lang="ts" context="module">
  import Section from "../../components/Section.svelte";
  import Info from "../../components/Info.svelte";
  import Testimonial from "../../components/Testimonial.svelte";
  import Accordion from "../../components/Accordion.svelte";

  import type { FAQ } from "../../utils/schema";
</script>

<script lang="ts">
  interface Statistic {
    value: string;
    name: string;
  }

  let stats: Statistic[] = [1, 2, 3, 4, 5, 6, 7, 8].map(
    (n) => ({ value: n + "%", name: "stat-" + n } as Statistic)
  );

  interface SponsorTier {
    name: string;
    price: number;
    perks: string[];
  }

  let tiers: SponsorTier[] = [
    {
      name: "Standard",
      price: 1000,
      perks: ["Digital Branding", "Resume Book", "Standard Session"],
    },
    {
      name: "Premier",
      price: 2000,
      perks: [
        "Digital Branding",
        "Resume Book",
        "Premium Session",
        "Coffee Chats",
      ],
    },
  ];

  let allPerks: string[] = [
    ...new Set(
      tiers
        .map((tier) => tier.perks)
        .reduce((totalPerks: string[], perks: string[]) =>
          totalPerks.concat(perks)
        )
    ),
  ];

  let faqs: FAQ[] = [];
</script>

<svelte:head>
  <title>Sponsors | Hack4Impact UIUC</title>
</svelte:head>

<Section padding="60px">
  <h1>Sponsors</h1>
  <div class="sponsor-intro">
    <div id="sponsor-intro-left">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore fugit
        laboriosam saepe, minima explicabo, animi eligendi quam non natus
        excepturi rem. Dolores molestiae sint qui enim a quaerat totam quas!
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
  <Info
    title="Check Out Our Work"
    content="We’re Looking for ... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    to="/projects"
    linkText="Learn More"
  />
</Section>

<Section color="var(--gray-lighter)">
  <Testimonial
    quote="“Hack4Impact believes in technology’s huge potential to empower activists and humanitarians to create lasting and impactful social change. We work to foster the wider adoption of software as a tool for social good.”"
    name="Point of Contact Name"
    desc="Position, Nonprofit"
    imageSrc="https://picsum.photos/400"
  />
</Section>

<Section color="var(--blue)" padding="60px">
  <span class="light-text wrap">
    <h2>Sponsorship Tiers</h2>
    <div class="sponsor-perks">
      {#each tiers as tier}
        <div class="tier">
          <h3>{tier.name} Sponsor</h3>
          <h4>{tier.price}$/semester</h4>
          <ul>
            {#each allPerks as perk}
              <li class={tier.perks.includes(perk) ? "" : "disabled"}>
                <span class="status">
                  {#if tier.perks.includes(perk)}
                    &checkmark;
                  {:else}
                    &times;
                  {/if}
                </span>
                {perk}
              </li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>
  </span>
</Section>

<Section padding="60px">
  <h2>Where We Work</h2>
</Section>

<Section padding="40px" id="faq" color="var(--gray-lighter)">
  <h2>Frequently Asked Questions</h2>
  {#each faqs as faq}
    <Accordion>
      <span slot="title">{faq.question}</span>
      <p slot="contents">{faq.answer}</p>
    </Accordion>
  {/each}
</Section>

<style>
  p {
    opacity: 80%;
  }

  .sponsor-intro {
    display: flex;
    flex-direction: row;
  }

  .light-text {
    color: #fff;
  }

  .wrap {
    width: 100%;
    display: block;
    margin: 0 auto;
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
    font-size: 2.4rem;
    line-height: 1;
  }

  .sponsor-perks {
    margin: 70px auto;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .sponsor-perks .tier {
    display: block;
    margin: 0 100px;
  }

  .sponsor-perks h3 {
    font-size: 1.6rem;
    margin-bottom: 0;
  }

  .sponsor-perks h4 {
    font-size: 1.2rem;
  }

  .sponsor-perks ul {
    padding-left: 0;
    list-style: none;
    font-size: 1rem;
    line-height: 2;
  }

  .sponsor-perks ul > li.disabled {
    opacity: 0.6;
    user-select: none;
    cursor: disabled;
  }

  .sponsor-perks ul > li > .status {
    user-select: none;
    display: inline-block;
    margin-right: 0.75em;
  }
</style>
