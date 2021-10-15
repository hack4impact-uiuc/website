<script lang="ts" context="module">
  import Accordion from "$lib/components/Accordion.svelte";
  import Button from "$lib/components/Button.svelte";
  import Row from "$lib/components/Row.svelte";
  import Section from "$lib/components/Section.svelte";
  import Step from "$lib/components/Step.svelte";
  import Testimonial from "$lib/components/Testimonial.svelte";

  import type { FAQ, NonprofitStep, Project } from "$lib/utils/schema";

  export async function load({ fetch }) {
    const [applicationSteps, faqs, testimonialNonprofit] = (await Promise.all([
      fetch("/server/nonprofit-steps.json").then((res: Response) => res.json()),
      fetch("/server/work-faq.json").then((res: Response) => res.json()),
      fetch("/server/nonprofit-testimonial.json").then((res: Response) =>
        res.json()
      ),
    ])) as [NonprofitStep[], FAQ[], Project];

    return {
      props: { faqs, applicationSteps, testimonialNonprofit },
    };
  }
</script>

<script lang="ts">
  export let applicationSteps: NonprofitStep[];
  export let faqs: FAQ[];
  export let testimonialNonprofit: Project;
</script>

<svelte:head>
  <title>Nonprofits | Hack4Impact UIUC</title>
  <meta
    name="description"
    content="Uniting students to build well-engineered and impactful products for social change."
  />
  <meta
    property="og:url"
    content="https://uiuc.hack4impact.org/join/nonprofits"
  />
  <meta property="og:title" content="Nonprofits | Hack4Impact UIUC" />
  <meta
    property="og:description"
    content="Uniting students to build well-engineered and impactful products for social change."
  />
  <meta name="twitter:card" content="summary" />
  <meta
    name="twitter:url"
    value="https://uiuc.hack4impact.org/join/nonprofits"
  />
  <meta name="twitter:title" value="Nonprofits | Hack4Impact UIUC" />
  <meta
    name="twitter:description"
    value="Uniting students to build well-engineered and impactful products for social change."
  />
</svelte:head>

<Section padding="60px">
  <h1>Nonprofits</h1>
  <h2>Our Services</h2>
  <Row gap={58} topAligned>
    <div>
      <h3>Web & Mobile Applications</h3>
      <p>
        Hack4Impact provides our nonprofit partners with software solutions for
        their needs typically in the web and mobile space. Ranging from one
        semester to multiple semesters, teams will work on the product to the
        specifications agreed upon by both the leads and partner.
      </p>
    </div>
    <div>
      <h3>Designs</h3>
      <p>
        Our designers create product designs tailored specifically to the
        nonprofit's needs and branding.
      </p>
    </div>
    <div>
      <h3>Iterative feedback and communication</h3>
      <p>
        Our project leads stay are consistently in touch with your nonprofit's
        point of contact to navigate decisions, clarify goals, and respond to
        feedback.
      </p>
    </div>
  </Row>
</Section>

<Section color="var(--gray-lighter)">
  <Testimonial
    quote={testimonialNonprofit.testimonial}
    name={testimonialNonprofit.testimonialSourceName}
    desc={testimonialNonprofit.testimonialSourceDescription}
    imageSrc={testimonialNonprofit.testimonialSourceImage?.src}
  />
</Section>

<Section padding="83px">
  <Row gap={84} reverseOnMobile>
    <div>
      <h2>How We Work</h2>
      <p>
        At Hack4Impact, we develop software for non-profits to make their work
        more efficient, effective, and far-reaching. Generally, we set up a call
        with potential clients to learn more about their initiatives and goals.
        If our goals align, we delve deeper into project specifications, pain
        points, and user research before confirming the project and matching a
        development team. We aim to build sustainable products with long-lasting
        impact for non-profits and those they are trying to help.
      </p>
      <a class="button-link" href="/about/work" sveltekit:prefetch
        ><Button type="primary">Learn More</Button>
      </a>
    </div>
    <figure>
      <img src={"/howwework.png"} alt={"Past Hack4Impact UIUC Projects"} />
    </figure>
  </Row>
</Section>

<Section id="process" color="var(--gray-lighter)" padding="40px">
  <h2>Application Process</h2>
  <div id="process-steps">
    {#each applicationSteps as step, index}
      <Step index={index + 1}>
        <span slot="name">
          {step.name}
        </span>
        <span slot="description">
          {@html step.description}
        </span>
      </Step>
    {/each}
  </div>
</Section>

{#if faqs.length > 0}
  <Section padding="40px" id="faq">
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
  #process-steps {
    margin-top: 41px;
  }

  figure {
    text-align: center;
  }

  figure > img {
    width: 100%;
    border-radius: 4px;
  }
</style>
