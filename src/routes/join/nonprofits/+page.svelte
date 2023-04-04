<script lang="ts">
  import Accordion from "$lib/components/Accordion.svelte";
  import Button from "$lib/components/Button.svelte";
  import Icon from "$lib/components/Icon.svelte";
  import Row from "$lib/components/Row.svelte";
  import Section from "$lib/components/Section.svelte";
  import Step from "$lib/components/Step.svelte";
  import Testimonial from "$lib/components/Testimonial.svelte";

  export let data;
</script>

<Section padding="60px">
  <h1>Nonprofits</h1>
  <h2>Our Services</h2>
  <Row gap={58} topAligned>
    <div class="service">
      <Icon icon="devices" color="var(--blue)" />
      <h3>Web & Mobile Applications</h3>
      <p>
        We provide our nonprofit partners with software solutions for their
        needs typically in the web and mobile space. Projects can take one or
        multiple semesters.
      </p>
    </div>
    <div class="service">
      <Icon icon="vector" color="var(--blue)" />
      <h3>Designs</h3>
      <p>
        Our designers create product designs tailored specifically to a
        nonprofit's needs and branding with an emphasis on user experience.
      </p>
    </div>
    <div class="service">
      <Icon icon="conversation" color="var(--blue)" />
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
    quote={data.testimonial.content}
    name={data.testimonial.sourceName}
    desc={data.testimonial.sourceDescription}
    imageSrc={data.testimonial.sourceImage?.src}
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
      <img
        src={data.info.homepagePartnerships.src}
        alt={data.info.homepagePartnerships.alt}
      />
    </figure>
  </Row>
</Section>

<Section id="process" color="var(--gray-lighter)" padding="40px">
  <h2>Application Process</h2>
  <div id="process-steps">
    {#each data.applicationSteps as step, index}
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

{#if data.faqs.length > 0}
  <Section padding="40px" id="faq">
    <h2>Frequently Asked Questions</h2>
    {#each data.faqs as faq}
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
