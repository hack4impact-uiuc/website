<script lang="ts" context="module">
  import Section from '../../components/Section.svelte';
  import Value from "../../components/Value.svelte";
  import Accordion from '../../components/Accordion.svelte';

  import type { FAQ } from "../../utils/schema";
</script>

<script lang="ts">
  interface ApplicationStep {
    date: Date;
    content: string;
    name?: string;
  }

  let applicationSteps: ApplicationStep[] = Array(6)
    .fill(Object())
    .map(() => ({date: new Date(), content: "lorem ipsum"} as ApplicationStep));

  interface Position {
    name: string;
    description: string;
    link: string;
  }

  let positions: Position[] = [{
    name: "Software Developer",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam cum adipisci cumque quo consequatur minus deleniti atque voluptate eligendi fuga repudiandae, eum consequuntur quisquam quidem iste ipsam. In, corporis qui.",
    link: "#"
  },
  {
    name: "Product Designer",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam cum adipisci cumque quo consequatur minus deleniti atque voluptate eligendi fuga repudiandae, eum consequuntur quisquam quidem iste ipsam. In, corporis qui.",
    link: "#"
  },
  {
    name: "Tech Director",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam cum adipisci cumque quo consequatur minus deleniti atque voluptate eligendi fuga repudiandae, eum consequuntur quisquam quidem iste ipsam. In, corporis qui.",
    link: "#"
  }]

  let faqs: FAQ[] = Array(6).fill({question: "Question", answer: "Lorem"});
</script>

<svelte:head>
  <title>Students | Hack4Impact UIUC</title>
</svelte:head>

<Section padding="60px">
  <h1>Students</h1>
  <h2>We Believe In Using Tech For Good</h2>
  <p>
    Students are a core part of what makes Hack4Impact. Joining Hack4Impact is the perfect way to give back while developing new skills and making long-lasting friendships.
  </p>
</Section>

<Section color="var(--blue)" padding="60px" >
  <span class="light-text wrap">
    <h2>Open Positions</h2>
    {#each positions as position}
    <Accordion theme="light">
      <span slot="title">{position.name}</span>
      <span slot="contents">{position.description}</span>
    </Accordion>
    {/each}
  </span>
</Section>

<Section id="process" color="var(--gray-lighter)" padding="40px">
  <h2>Application Process</h2>
  <div id="process-steps">
    {#each applicationSteps as step, idx}
    <Value>
      <span slot="name">{step.name ?? `Step ${idx + 1}`}</span>
      <span slot="description"
        >We evaluate the trade offs of our decisions, choose a direction to
        head, and crush our goals. Whether it be personal or professional
        growth, we avoid mindless movement and instead purposefully act. We work
        with intention.
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
      <span slot="contents">{faq.answer}</span>
    </Accordion>
  {/each}
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
</style>