<script lang="ts" context="module">
  import Section from "../../components/Section.svelte";
  import Value from "../../components/Value.svelte";
  import Accordion from "../../components/Accordion.svelte";
  import Button from "../../components/Button.svelte";
  import Row from "../../components/Row.svelte";

  import type { FAQ, Role } from "../../utils/schema";

  export async function preload() {
    const [faqs, openRoles] = await Promise.all([
      this.fetch("server/apply-faq.json").then((res) => res.json()) as Promise<
        FAQ[]
      >,
      this.fetch("server/open-roles.json").then((res) => res.json()) as Promise<
        Role[]
      >,
    ]);

    return { faqs, openRoles };
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
  export let openRoles: Role[];
</script>

<svelte:head>
  <title>Students | Hack4Impact UIUC</title>
</svelte:head>

<Section padding="60px">
  <h1>Students</h1>
  <h2>We Believe In Using Tech For Good</h2>
  <p>
    Students are a core part of what makes Hack4Impact. Joining Hack4Impact is
    the perfect way to give back while developing new skills and making
    long-lasting friendships.
  </p>
</Section>

<Section id="open-positions" color="var(--blue)" padding="60px">
  <span class="light-text wrap">
    <h2>Open Positions</h2>
    {#each openRoles as openRole}
      <Accordion theme="light">
        <span slot="title">{openRole.name}</span>
        <span slot="contents">{@html openRole.description}</span>
      </Accordion>
    {/each}
  </span>
</Section>

<Section id="process" color="var(--gray-lighter)" padding="40px">
  <h2>Application Process</h2>
  <div id="process-steps">
    {#each applicationSteps as step, idx}
      <Value>
        <span slot="name"
          >{step.name !== undefined ? step.name : `Step ${idx + 1}`}</span
        >
        <span slot="description"
          >We evaluate the trade offs of our decisions, choose a direction to
          head, and crush our goals. Whether it be personal or professional
          growth, we avoid mindless movement and instead purposefully act. We
          work with intention.
        </span>
      </Value>
    {/each}
  </div>
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

<Section padding="60px" color="var(--blue)">
  <div class="cta-wrapper">
    <Row>
      <div class="light-text cta">
        <h2>Get Involved</h2>
        <p>Join Hack4Impact.</p>
      </div>
      <div class="button-wrapper">
        <Button type="primary-white">Apply</Button>
        <Button type="secondary-white">How We Work</Button>
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

  #process-steps {
    margin-top: 41px;
  }

  :global(#open-positions p) {
    font-size: 0.8rem;
  }

  .light-text {
    color: #fff;
  }

  .cta-wrapper {
    padding: 0 85px;
  }

  .cta {
    display: flex;
    justify-content: center;
  }

  .cta > h2 {
    margin: 0;
  }

  .cta > p {
    margin-bottom: 0;
  }

  .button-wrapper {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-end;
  }

  .button-wrapper :global(*) {
    width: 12em;
  }

  .button-wrapper :global(*) + :global(*) {
    margin-left: 18px;
  }
</style>
