<script lang="ts" context="module">
  import Section from "$lib/components/Section.svelte";
  import Step from "$lib/components/Step.svelte";
  import Accordion from "$lib/components/Accordion.svelte";
  import Button from "$lib/components/Button.svelte";
  import Row from "$lib/components/Row.svelte";

  import type { ApplicationStep, FAQ, Role } from "$lib/utils/schema";

  export async function load({ fetch }) {
    const [faqs, openRoles, applicationSteps] = await Promise.all([
      fetch("/server/apply-faq.json").then((res: Response) =>
        res.json()
      ) as Promise<FAQ[]>,
      fetch("/server/open-roles.json").then((res: Response) =>
        res.json()
      ) as Promise<Role[]>,
      fetch("/server/application-steps.json").then((res: Response) =>
        res.json()
      ) as Promise<ApplicationStep>,
    ]);

    return { props: { faqs, openRoles, applicationSteps } };
  }
</script>

<script lang="ts">
  export let faqs: FAQ[];
  export let openRoles: Role[];
  export let applicationSteps: ApplicationStep[];

  const iconMap = {
    Calendar: "/icons/calendar.svg",
    Form: "/icons/contract.svg",
    Interview: "/icons/interview.svg",
  };
</script>

<svelte:head>
  <title>Students | Hack4Impact UIUC</title>
  <meta
    name="description"
    content="Uniting students to build well-engineered and impactful products for social change."
  />
  <meta
    property="og:url"
    content="https://uiuc.hack4impact.org/join/students"
  />
  <meta property="og:title" content="Students | Hack4Impact UIUC" />
  <meta
    property="og:description"
    content="Uniting students to build well-engineered and impactful products for social change."
  />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:url" value="https://uiuc.hack4impact.org/join/students" />
  <meta name="twitter:title" value="Students | Hack4Impact UIUC" />
  <meta
    name="twitter:description"
    value="Uniting students to build well-engineered and impactful products for social change."
  />
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
    {#each applicationSteps as step}
      <Step icon="{iconMap[step.icon]}" iconAlt="{step.name}">
        <span slot="name">{step.name}</span>
        <span slot="date">{step.date}</span>
        <span slot="description">{step.description}</span>
      </Step>
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
      <div class="cta">
        <h2>Get Involved</h2>
        <p>Join Hack4Impact.</p>
      </div>
      <div class="button-wrapper">
        <a href="/join/students" sveltekit:prefetch>
          <Button type="primary-white">Apply</Button>
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

  .wrap {
    width: 100%;
    display: block;
    margin: 0 auto;
  }

  #process-steps {
    margin-top: 40px;
  }

  .light-text {
    color: #fff;
  }
</style>
