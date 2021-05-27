<script lang="ts" context="module">
  import Section from "../../components/Section.svelte";
  import Step from "../../components/Step.svelte";
  import Testimonial from "../../components/Testimonial.svelte";
  import Accordion from "../../components/Accordion.svelte";
  import Row from "../../components/Row.svelte";
  import Button from "../../components/Button.svelte";

  import type { FAQ } from "../../utils/schema";

  export async function preload() {
    const res = await this.fetch(`server/work-faq.json`);
    const faqs: FAQ[] = await res.json();

    return { faqs };
  }
</script>

<script lang="ts">
  interface ApplicationStep {
    date: Date;
    content: string;
    name?: string;
  }

  let applicationSteps: ApplicationStep[] = Array(6)
    .fill(Object())
    .map(
      () => ({ date: new Date(), content: "lorem ipsum" } as ApplicationStep)
    );

  export let faqs: FAQ[];
</script>

<svelte:head>
  <title>Nonprofits | Hack4Impact UIUC</title>
</svelte:head>

<Section padding="60px">
  <h1>Nonprofits</h1>
  <h2>Our Services</h2>
  <Row gap={58}>
    <div>
      <h3>Web & Mobile Applications</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
    <div>
      <h3>Web & Mobile Applications</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
    <div>
      <h3>Web & Mobile Applications</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  </Row>
</Section>

<Section color="var(--gray-lighter)">
  <Testimonial
    quote="“Hack4Impact believes in technology’s huge potential to empower activists and humanitarians to create lasting and impactful social change. We work to foster the wider adoption of software as a tool for social good.”"
    name="Point of Contact Name"
    desc="Position, Nonprofit"
    imageSrc="https://picsum.photos/400"
  />
</Section>

<Section padding="83px">
  <Row gap={84} reverseOnMobile>
    <div>
      <h2>How We Work</h2>
      <p>
        Hack4Impact believes in technology’s huge potential to empower activists
        and humanitarians to create lasting and impactful social change. We work
        to foster the wider adoption of software as a tool for social good.
      </p>
      <Button type="primary">Learn More</Button>
    </div>
    <figure>
      <img src="https://picsum.photos/630/320" alt="" />
    </figure>
  </Row>
</Section>

<Section id="process" color="var(--gray-lighter)" padding="40px">
  <h2>Application Process</h2>
  <div id="process-steps">
    {#each applicationSteps as step, idx}
      <Step>
        <span slot="name"
          >{step.name !== undefined ? step.name : `Step ${idx + 1}`}</span
        >
        <span slot="description"
          >We evaluate the trade offs of our decisions, choose a direction to
          head, and crush our goals. Whether it be personal or professional
          growth, we avoid mindless movement and instead purposefully act. We
          work with intention.
        </span>
      </Step>
    {/each}
  </div>
</Section>

<Section padding="40px" id="faq">
  <h2>Frequently Asked Questions</h2>
  {#each faqs as faq}
    <Accordion>
      <span slot="title">{faq.question}</span>
      <p slot="contents">{faq.answer}</p>
    </Accordion>
  {/each}
</Section>

<Section padding="60px" color="var(--blue)">
  <div class="cta-wrapper">
    <Row>
      <div class="cta">
        <h2>Get Involved</h2>
        <p>Join Hack4Impact.</p>
      </div>
      <div class="button-wrapper">
        <a href="join/students" sapper:prefetch>
          <Button type="primary-white">Apply</Button>
        </a>
        <a href="about/work" sapper:prefetch>
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
