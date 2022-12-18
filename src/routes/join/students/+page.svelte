<script lang="ts">
  import Head from "$lib/components/Head.svelte";

  export let faqs: FAQ[];
  export let visibleRoles: Role[];
  export let applicationSteps: ApplicationStep[];
  export let applicationBlurb: string;
  export let projectsImage: Image;

  const iconMap: Record<string, IconType> = {
    Calendar: "calendar",
    Form: "edit",
    Interview: "conversation",
  };
</script>

<Head
  title=" | Hack4Impact UIUC"
  description="Uniting students to build well-engineered and impactful products for social change."
  url="https://uiuc.hack4impact.org/join/students"
  image={projectsImage.src}
/>

<Section padding="60px">
  <h1>Students</h1>
  <h2>We Believe In Using Tech For Good</h2>
  <p>
    Students are a core part of what makes Hack4Impact. Joining Hack4Impact is
    the perfect way to give back while developing new skills and making
    long-lasting friendships.
  </p>
</Section>

{#if visibleRoles.length > 0}
  <Section id="positions" color="var(--blue)" padding="60px">
    <span class="light-text wrap">
      <h2>Open Positions</h2>
      {#each visibleRoles as role}
        <RoleInfo {role} />
      {/each}
    </span>
  </Section>
{/if}

<Section color="var(--gray-lighter)" padding="40px">
  <h2 id="process">Application Process</h2>
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
        <p slot="contents">{@html faq.answer}</p>
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
        <Button type="primary-white" href="/about/team">Meet The Team</Button>
        <Button type="secondary-white" href="/about/work">How We Work</Button>
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
