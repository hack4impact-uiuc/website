<script lang="ts" context="module">
  import Accordion from "$lib/components/Accordion.svelte";
  import Info from "$lib/components/sponsors/Info.svelte";
  import Row from "$lib/components/Row.svelte";
  import Button from "$lib/components/Button.svelte";
  import Section from "$lib/components/Section.svelte";
  import Stats from "$lib/components/sponsors/Stats.svelte";
  import Testimonial from "$lib/components/Testimonial.svelte";
  import type {
    FAQ,
    Image,
    Info as SiteInfo,
    Project,
  } from "$lib/utils/schema";

  export async function load({ fetch }) {
    const [info, faqs, testimonialNonprofit] = (await Promise.all([
      fetch("/server/info.json").then((res: Response) => res.json()),
      fetch("/server/sponsor-faq.json").then((res: Response) => res.json()),
      fetch("/server/nonprofit-testimonial.json").then((res: Response) =>
        res.json()
      ),
    ])) as [SiteInfo, FAQ[], Project];

    const { whereWeWork } = info;

    return { props: { whereWeWork, faqs, testimonialNonprofit } };
  }
</script>

<script lang="ts">
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

  export let faqs: FAQ[];
  export let whereWeWork: Image;
  export let testimonialNonprofit: Project;
</script>

<svelte:head>
  <title>Sponsors | Hack4Impact UIUC</title>
  <meta
    name="description"
    content="Uniting students to build well-engineered and impactful products for social change."
  />
  <meta
    property="og:url"
    content="https://uiuc.hack4impact.org/join/sponsors"
  />
  <meta property="og:title" content="Sponsors | Hack4Impact UIUC" />
  <meta
    property="og:description"
    content="Uniting students to build well-engineered and impactful products for social change."
  />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:url" value="https://uiuc.hack4impact.org/join/sponsors" />
  <meta name="twitter:title" value="Sponsors | Hack4Impact UIUC" />
  <meta
    name="twitter:description"
    value="Uniting students to build well-engineered and impactful products for social change."
  />
</svelte:head>

<Section padding="60px">
  <h1>Sponsors</h1>
  <Row gap={30}>
    <div id="sponsor-intro-left">
      <p>
        We are a team of UIUC students who create robust software for social
        good. We believe that our engineering skillsets empower us to build a
        better society together. Get to know a bit about us and how to get
        involved below.
      </p>
    </div>
  </Row>

  <Stats />

  <Info
    title="Check Out Our Work"
    content="We’re Looking for ... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    to="/projects"
    linkText="Learn More"
  />
</Section>

<Section color="var(--gray-lighter)">
  <Testimonial
    quote={testimonialNonprofit.testimonial}
    name={testimonialNonprofit.testimonialSourceName}
    desc={testimonialNonprofit.testimonialSourceDescription}
    imageSrc={testimonialNonprofit.testimonialSourceImage?.src}
  />
</Section>

<Section padding="60px">
  <span class="wrap impact-teams">
    <Row>
      <div class="tier our-projects">
        <h3>Our Projects</h3>
        <ul>
          <li>
            Past deployed products consist of web, mobile, data science and data
            visualization applications.
          </li>
          <li>
            Timeline includes a Minimum Viable Product mid-semester, a handoff
            at the end of the semester, and a 6 month guarantee for bug fixes.
          </li>
        </ul>
      </div>
      <div class="tier areas-of-impact">
        <h3>Areas of Impact</h3>
        <ul>
          <li>Sustainability</li>
          <li>Education</li>
          <li>Healthcare</li>
          <li>Human Trafficking</li>
          <li>Immigration</li>
          <li>Hate Groups</li>
          <li>Journalism</li>
        </ul>
      </div>
      <div class="tier our-teams">
        <h3>Our Teams</h3>
        <div>
          <div>
            <h4>Product Manager</h4>
            1 per team
          </div>
          <div>
            <h4>Technical Lead</h4>
            1 per team
          </div>
          <div>
            <h4>Product Designer</h4>
            1 per team
          </div>
          <div>
            <h4>Software Developer</h4>
            4-5 per team
          </div>
        </div>
      </div>
    </Row>
  </span>
</Section>

<Section color="var(--blue)" padding="60px">
  <span class="light-text wrap sponsor-perks">
    <h2>Sponsorship Tiers</h2>
    <Row>
      {#each tiers as tier}
        <div class="tier">
          <h3>{tier.name} Sponsor</h3>
          <h4>${tier.price}/semester</h4>
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
    </Row>
  </span>
</Section>

<Section padding="60px">
  <h2>Where We Work</h2>
  <img id="where-we-work" src={whereWeWork.src} alt={whereWeWork.alt} />
</Section>

{#if faqs.length > 0}
  <Section padding="40px" id="faq" color="var(--gray-lighter)">
    <h2>Frequently Asked Questions</h2>
    {#each faqs as faq}
      <Accordion>
        <span slot="title">{faq.question}</span>
        <p slot="contents">{faq.answer}</p>
      </Accordion>
    {/each}
  </Section>
{/if}

<Section padding="60px" color="var(--blue)">
  <div class="cta-wrapper">
    <Row>
      <div class="cta">
        <h2>Interested?</h2>
        <p>Work with us.</p>
      </div>
      <div class="button-wrapper">
        <a href="mailto:uiuc@hack4impact.org">
          <Button type="primary-white">Contact Us</Button>
        </a>
        <a href="/about/work" sveltekit:prefetch>
          <Button type="secondary-white">How We Work</Button>
        </a>
      </div>
    </Row>
  </div>
</Section>

<style>
  p {
    opacity: 80%;
  }
  .light-text {
    color: #fff;
  }

  .wrap {
    width: 100%;
    display: block;
    margin: 0 auto;
  }

  .sponsor-perks h2 {
    text-align: center;
  }
  .sponsor-perks .tier,
  .impact-teams .tier {
    align-items: center;
  }

  .sponsor-perks h3,
  .impact-teams h3 {
    margin-top: 1rem;
    font-size: 1.6rem;
    margin-bottom: 0;
  }

  .sponsor-perks h4 {
    font-size: 1.2rem;
  }

  .sponsor-perks ul,
  .impact-teams ul {
    padding-left: 0;
    list-style: none;
    font-size: 1rem;
    line-height: 2;
    width: auto;
    text-align: left;
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

  .impact-teams {
    color: var(--blue);
  }

  .impact-teams .tier {
    justify-content: flex-start;
    align-items: flex-start;
  }

  .impact-teams .tier:not(:last-child) {
    margin-right: 2rem;
  }

  .our-projects {
    flex: 2;
  }

  .impact-teams ul {
    list-style: initial;
    padding-left: 1.5rem;
  }

  .our-teams h4 {
    margin-bottom: 0;
  }

  .our-teams > div {
    flex: 1;
    margin: 1rem 0;
    display: flex;
    flex-direction: column;
    font-size: 1rem;
  }

  .our-teams > div > div:not(:last-child) {
    margin-bottom: 1rem;
  }
</style>
