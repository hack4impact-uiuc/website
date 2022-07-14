<script lang="ts" context="module">
  import Accordion from "$components/Accordion.svelte";
  import Button from "$components/Button.svelte";
  import Head from "$components/Head.svelte";
  import Icon from "$components/Icon.svelte";
  import Row from "$components/Row.svelte";
  import Section from "$components/Section.svelte";
  import Info from "$components/sponsors/Info.svelte";
  import Stats from "$components/sponsors/Stats.svelte";
  import Testimonial from "$components/Testimonial.svelte";
  import type {
    FAQ,
    Image,
    Info as SiteInfo,
    NonprofitTestimonialProject,
  } from "$utils/schema";
  import type { Load } from "@sveltejs/kit";

  export const load: Load = async ({ fetch }) => {
    const [info, faqs, testimonialNonprofit] = (await Promise.all([
      fetch("/server/info.json").then((res: Response) => res.json()),
      fetch("/server/sponsor-faq.json").then((res: Response) => res.json()),
      fetch("/server/nonprofit-testimonial.json").then((res: Response) =>
        res.json()
      ),
    ])) as [SiteInfo, FAQ[], NonprofitTestimonialProject];

    const { whereWeWork } = info;

    return {
      props: {
        whereWeWork,
        faqs,
        testimonialNonprofit,
        projectsImage: info.homepagePartnerships,
      },
    };
  };
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
      price: 1500,
      perks: ["Digital Branding", "Resume Book", "Coffee Chats"],
    },
    {
      name: "Plus",
      price: 2000,
      perks: [
        "Digital Branding",
        "Resume Book",
        "Standard Session",
        "Coffee Chats",
      ],
    },
    {
      name: "Premier",
      price: 2500,
      perks: [
        "Digital Branding",
        "Resume Book",
        "Premium Session",
        "Coffee Chats",
        "Fellowship Funding",
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
  export let testimonialNonprofit: NonprofitTestimonialProject;
  export let projectsImage: Image;
</script>

<svelte:head>
  <Head
    title="Sponsors | Hack4Impact UIUC"
    description="Uniting students to build well-engineered and impactful products for social change."
    url="https://uiuc.hack4impact.org/join/sponsors"
    image={projectsImage.src}
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

  <Info
    title="Check Out Our Work"
    content="Read more about any of over 20 past products built as technical solutions spanning over 7 areas of impact and the domains of web engineering, mobile applications, and data science."
    to="/projects"
    linkText="Learn More"
  />
</Section>

<Section color="var(--blue)" padding="60px">
  <span class="wrap" id="by-the-numbers">
    <h2>By the Numbers</h2>
    <Stats />
  </span>
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
  <span class="wrap" id="areas-of-impact">
    <h2>Areas of Impact</h2>
    <div>
      <div><Icon icon="tree" /> Sustainability</div>
      <div><Icon icon="education" /> Education</div>
      <div><Icon icon="health" /> Healthcare</div>
      <div><Icon icon="unlink" /> Human Trafficking</div>
      <div><Icon icon="plane" /> Immigration</div>
      <div><Icon icon="hate" /> Hate Groups</div>
      <div><Icon icon="news" /> Journalism</div>
      <div><Icon icon="conversation" /> Community</div>
      <div><Icon icon="dollar" /> Financial Literacy</div>
      <div><Icon icon="donate" /> Philanthropy</div>
      <div><Icon icon="shield" /> Safety</div>
    </div>
  </span>
  <span class="wrap">
    <h2>Our Teams</h2>
    <div class="our-teams">
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
    </div></span
  >
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
        <p slot="contents">{@html faq.answer}</p>
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

  .sponsor-perks .tier {
    align-items: center;
  }

  .sponsor-perks h3 {
    margin-top: 1rem;
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

  .our-teams h4 {
    margin-bottom: 0;
  }

  .our-teams > div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    flex: 1;
    margin: 1rem 0;
    font-size: 1rem;
  }

  .our-teams > div > div:not(:last-child) {
    margin-bottom: 1rem;
  }

  #areas-of-impact {
    margin-bottom: 60px;
  }

  #areas-of-impact div {
    padding: 0;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;
    margin-top: 0.5rem;
  }

  #areas-of-impact div > div {
    display: flex;
    align-items: center;
    font-size: 1rem;
    background: var(--blue);
    border-radius: 2rem;
    padding: 0.5rem 0.5rem;
    grid-gap: 0rem;
    color: #fff;
  }

  #by-the-numbers {
    color: white;
  }

  :global(#areas-of-impact div > div > svg) {
    width: 1rem;
    height: 1rem;
    margin: 0 0.5rem 0 0.25rem;
  }

  @media screen and (max-width: 990px) {
    #areas-of-impact div {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (max-width: 475px) {
    #areas-of-impact div {
      grid-template-columns: 1fr;
    }
  }
</style>
