<script lang="ts" context="module">
  import Accordion from "$lib/components/Accordion.svelte";
  import Button from "$lib/components/Button.svelte";
  import type { IconType } from "$lib/components/Icon.svelte";
  import Row from "$lib/components/Row.svelte";
  import Section from "$lib/components/Section.svelte";
  import Step from "$lib/components/Step.svelte";

  import type { ApplicationStep, FAQ, Info, Role } from "$lib/utils/schema";

  export async function load({ fetch }) {
    const [
      faqs,
      openRoles,
      applicationSteps,
      { applicationBlurb },
    ] = (await Promise.all([
      fetch("/server/apply-faq.json").then((res: Response) => res.json()),
      fetch("/server/open-roles.json").then((res: Response) => res.json()),
      fetch("/server/application-steps.json").then((res: Response) =>
        res.json()
      ),
      fetch("/server/info.json").then((res: Response) => res.json()),
    ])) as [FAQ[], Role[], ApplicationStep, Info];

    return { props: { faqs, openRoles, applicationSteps, applicationBlurb } };
  }
</script>

<script lang="ts">
  export let faqs: FAQ[];
  export let openRoles: Role[];
  export let applicationSteps: ApplicationStep[];
  export let applicationBlurb: string;

  const iconMap: Record<string, IconType> = {
    Calendar: "calendar",
    Form: "edit",
    Interview: "conversation",
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

{#if openRoles.length > 0}
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
{/if}

<Section id="process" color="var(--gray-lighter)" padding="40px">
  <h2>Application Process</h2>
  <p>{@html applicationBlurb}</p>
  <div id="process-steps">
    {#each applicationSteps as step}
      <Step icon={iconMap[step.icon]}>
        <span slot="name">{step.name}</span>
        <span slot="date">{step.date ?? ""}</span>
        <span slot="description">{@html step.description}</span>
      </Step>
    {/each}
  </div>
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
        <h2>Get Involved</h2>
        <p>Join Hack4Impact.</p>
      </div>
      <div class="button-wrapper">
        <a href="/about/team" sveltekit:prefetch>
          <Button type="primary-white">Meet The Team</Button>
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
