<script lang="ts" context="module">
  throw new Error(
    "@migration task: Check code was safely removed (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292722)"
  );

  // import Accordion from "$components/Accordion.svelte";
  // import Button from "$components/Button.svelte";
  // import Head from "$components/Head.svelte";
  // import Icon from "$components/Icon.svelte";
  // import Row from "$components/Row.svelte";
  // import Section from "$components/Section.svelte";
  // import Step from "$components/Step.svelte";
  // import Testimonial from "$components/Testimonial.svelte";

  // import type {
  //   FAQ,
  //   Image,
  //   Info,
  //   NonprofitStep,
  //   NonprofitTestimonialProject,
  // } from "$lib/utils/schema";
  // import type { Load } from "@sveltejs/kit";

  // export const load: Load = async ({ fetch }) => {
  //   const [applicationSteps, faqs, testimonialNonprofit, info] =
  //     (await Promise.all([
  //       fetch("/server/nonprofit-steps.json").then((res: Response) =>
  //         res.json()
  //       ),
  //       fetch("/server/work-faq.json").then((res: Response) => res.json()),
  //       fetch("/server/nonprofit-testimonial.json").then((res: Response) =>
  //         res.json()
  //       ),
  //       fetch("/server/info.json").then((res: Response) => res.json()),
  //     ])) as [NonprofitStep[], FAQ[], NonprofitTestimonialProject, Info];

  //   return {
  //     props: {
  //       faqs,
  //       applicationSteps,
  //       testimonialNonprofit,
  //       projectsImage: info.homepagePartnerships,
  //     },
  //   };
  // };
</script>

<script lang="ts">
  throw new Error(
    "@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)"
  );

  export let applicationSteps: NonprofitStep[];
  export let faqs: FAQ[];
  export let projectsImage: Image;
  export let testimonialNonprofit: NonprofitTestimonialProject;
</script>

<Head
  title="Nonprofits | Hack4Impact UIUC"
  description="Uniting students to build well-engineered and impactful products for social change."
  url="https://uiuc.hack4impact.org/join/nonprofits"
  image={projectsImage.src}
/>

<Section padding="60px">
  <h1>Nonprofits</h1>
  <h2>Our Services</h2>
  <Row gap={58} topAligned>
    <div class="service">
      <Icon icon="devices" />
      <h3>Web & Mobile Applications</h3>
      <p>
        We provide our nonprofit partners with software solutions for their
        needs typically in the web and mobile space. Projects can take one or
        multiple semesters.
      </p>
    </div>
    <div class="service">
      <Icon icon="vector" />
      <h3>Designs</h3>
      <p>
        Our designers create product designs tailored specifically to a
        nonprofit's needs and branding with an emphasis on user experience.
      </p>
    </div>
    <div class="service">
      <Icon icon="conversation" />
      <h3>Iterative Feedback</h3>
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
        At Hack4Impact, we develop software for nonprofits to make their work
        more efficient, effective, and far-reaching. Generally, we set up a call
        with potential nonprofit partners to learn more about their initiatives
        and goals. If our goals align, we delve deeper into project
        specifications, pain points, and user research before confirming the
        project and matching a development team. We aim to build sustainable
        products with long-lasting impact for nonprofits and those they are
        trying to help.
      </p>
      <Button type="primary" href="/about/work">Learn More</Button>
    </div>
    <figure>
      <img src={projectsImage.src} alt={projectsImage.alt} />
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
        <Button type="primary-white" href="mailto:uiuc@hack4impact.org"
          >Contact Us</Button
        >
        <Button type="secondary-white" href="/about/work">How We Work</Button>
      </div>
    </Row>
  </div>
</Section>

<style>
  :global(.service svg) {
    max-width: 50px;
    margin: 1.5rem 0 1rem;
    fill: var(--blue);
  }
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
