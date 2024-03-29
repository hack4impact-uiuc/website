<script lang="ts">
  import Accordion from "$lib/components/Accordion.svelte";
  import Button from "$lib/components/Button.svelte";
  import RoleCard from "$lib/components/RoleCard.svelte";
  import Row from "$lib/components/Row.svelte";
  import Section from "$lib/components/Section.svelte";
  import Step from "$lib/components/Step.svelte";

  export let data;
</script>

<Section id="intro" padding="40px">
  <Row gap={84} reverseOnMobile
    ><div>
      <h1>How We Work</h1>
      <p>
        Each semester, we partner with four or five organizations to fulfill
        their technical challenges. As a partner, you will have a dedicated
        development team working towards delivering a finished product. Your
        primary points of contact will be a product research member, product
        manager, and technical lead. Our solutions are carefully planned
        beginning with our product research phase wherein we identify project
        fit. Moving forward, a product manager further refines the scope while a
        technical lead works out implementation details. During development, you
        will be kept in the loop to provide feedback culminating in a project
        handoff.
      </p>
    </div>
    <figure>
      <img
        src={data.info.homepagePartnerships.src}
        alt={data.info.homepagePartnerships.alt}
      />
    </figure>
  </Row>
</Section>

<Section color="var(--gray-lighter)" id="timeline" padding="40px">
  <h2>Project Timeline</h2>
  <div id="timeline-steps">
    <Step icon="search">
      <span slot="name">Product Research (3-4 Months)</span>
      <span slot="description">
        Product Research aims to deepen our impact in the communities that our
        work serves by pushing the boundaries of our products’ quality and
        fostering a community for intentional product thinking and exploration.
        Our team sources and scopes compelling and impactful projects for the
        following semester in a timely manner, while also gaining insight into
        the product experience without needing to be a full-time PM.</span
      >
    </Step>
    <Step icon="code">
      <span slot="name">Development</span>
      <span slot="description">
        Development starts in the first few weeks of the semester, with
        developers/designers either creating a new product from scratch or
        working off an existing codebase in order to add features or further
        refine it to meet our nonprofit partners' goals and feedback.
      </span>
    </Step>
    <Step icon="conversation">
      <span slot="name">MVP & Feedback</span>
      <span slot="description">
        Teams present their mid-semester Minimum Viable Products (MVPs)
        internally to the rest of the chapter, where they are able to receive
        feedback from their peers on the problem the team is tackling as well as
        the way in which they aim to solve it.
      </span>
    </Step>
    <Step icon="slideshow">
      <span slot="name">Product Showcase</span>
      <span slot="description">
        Development continues after MVP with more challenging or lower-priority
        features, as well as iterating on feedback from MVP itself. At the end
        of the semester, teams present at Product Showcase, where their finished
        deliverables are shown to the rest of the organization as well as to a
        public audience.
      </span>
    </Step>
    <Step icon="transfer">
      <span slot="name">Hand-Off</span>
      <span slot="description">
        Soon after Product Showcase, teams will hand off their work to their
        nonprofit partner. For some projects, work will resume in a future
        semester, in which case this initial handoff may focus on generating
        feedback from our partners as well as potentially serving as an initial
        pilot.
      </span>
    </Step>
  </div>
</Section>

<Section id="teams" padding="40px">
  <h2>Our Project Teams</h2>
  <div id="roles">
    <RoleCard>
      <span slot="role">Software Developers</span>
      <span slot="description">
        Software developers constitute the majority of a Hack4Impact team and
        code together to make the product come to life. We commonly utilize the
        MERN stack (MongoDB, Express, React, Node), though we have also created
        some mobile and data science applications in past projects. Software
        developers don't only program though; they also participate in many user
        experience and product decisions.
      </span>
      <span slot="number">3-5</span>
    </RoleCard>
    <RoleCard>
      <span slot="role">Product Designers</span>
      <span slot="description">
        Designers collaborate in cross functional teams to design the product
        from ideation to creating wireframes, mock ups, and user interface
        designs with a core emphasis on user experience for the final product.
        They are responsible from the holistic design of the product down to the
        granular details of the UI, and work closely with Product Managers and
        Software Developers to bridge ideation and execution.
      </span>
      <span slot="number">1</span>
    </RoleCard>
    <RoleCard>
      <span slot="role">Tech Lead</span>
      <span slot="description">
        Tech Leads take technical ownership of the product, and are responsible
        for architecting the software each team develops to meet their
        nonprofit's needs as well as setting technical standards, delegating
        work, setting guidelines, and mentoring developers in the tech stack
        used by their project. Tech Leads work most closely with Software
        Developers, and along with Product Managers are responsible for leading
        our project teams.
      </span>
      <span slot="number">1</span>
    </RoleCard>
    <RoleCard>
      <span slot="role">Product Manager</span>
      <span slot="description">
        Product Managers act as the bridge between our project teams and our
        nonprofit partners, helping distill the needs of our partners into
        actionable solutions that the other members can execute on. Product
        Managers oftentimes find themselves handling a variety of
        responsibilities, as it is ultimately their role as a co-lead to ensure
        that an impactful product is delivered in a timely manner.
      </span>
      <span slot="number">1</span>
    </RoleCard>
  </div>
</Section>

{#if data.faqs.length > 0}
  <Section padding="40px" id="faq" color="var(--gray-lighter)">
    <h2>Frequently Asked Questions</h2>
    {#each data.faqs as faq}
      <Accordion>
        <span slot="title">{faq.question}</span>
        <p slot="contents">{@html faq.answer}</p>
      </Accordion>
    {/each}
  </Section>
{/if}

<Section padding="40px" id="join" color="var(--blue)">
  <div class="cta-wrapper">
    <Row>
      <div class="cta">
        <h2>Join Us</h2>
        <p>Apply to Hack4Impact.</p>
      </div>
      <div class="button-wrapper">
        <Button type="primary-white" href="/join/students">Apply</Button>
        <Button type="secondary-white" href="/about/team">Meet the Team</Button>
      </div>
    </Row>
  </div>
</Section>

<style>
  #timeline-steps {
    padding: 20px 0;
  }

  #roles {
    --columns: 2;
    display: grid;
    grid-template-columns: repeat(var(--columns), minmax(0, 1fr));
    margin-top: 40px;
    column-gap: 40px;
    row-gap: 40px;
  }

  @media only screen and (max-width: 690px) {
    #roles {
      --columns: 1;
      row-gap: 20px;
    }
  }

  figure > img {
    width: 100%;
    border-radius: 4px;
  }
</style>
