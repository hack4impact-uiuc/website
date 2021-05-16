<script lang="ts" context="module">
  import Accordion from "../../components/Accordion.svelte";
  import Button from "../../components/Button.svelte";
  import RoleCard from "../../components/RoleCard.svelte";
  import Section from "../../components/Section.svelte";
  import Value from "../../components/Value.svelte";
  import type { FAQ } from "../../utils/schema";

  export async function preload() {
    const res = await this.fetch(`server/work-faq.json`);
    const faqs: FAQ[] = await res.json();

    return { faqs };
  }
</script>

<script lang="ts">
  export let faqs: FAQ[];
</script>

<svelte:head>
  <title>How We Work | Hack4Impact UIUC</title>
</svelte:head>

<Section id="intro" padding="60px">
  <h1>How We Work</h1>
  <p>
    Hack4Impact believes in technology’s huge potential to empower activists and
    humanitarians to create lasting and impactful social change. We work to
    foster wider adoption.
  </p>
</Section>
<Section color="var(--gray-lighter)" id="timeline" padding="40px">
  <h2>Project Timeline</h2>
  <div id="timeline-steps">
    <Value>
      <span slot="name">Product Research (3-4 Months)</span>
      <span slot="description"
        >Product Research aims to deepen our impact in the communities that our
        work serves by pushing the boundaries of our products’ quality and
        fostering a community for intentional product thinking and exploration.
        Our team sources and scopes compelling and impactful projects for the
        following semester in a timely manner, while also gaining insight into
        the product experience without needing to be a full-time PM.</span
      >
    </Value>
    <Value>
      <span slot="name">Development</span>
      <span slot="description"
        >Development starts in the first few weeks of the semester, with
        developers/designers either creating a new product from scratch or
        working off an existing codebase in order to add features or further
        refine it to meet our nonprofit partners' goals and feedback.</span
      >
    </Value>
    <Value>
      <span slot="name">MVP & Feedback</span>
      <span slot="description"
        >Teams present their mid-semester Minimum Viable Products (MVPs)
        internally to the rest of the chapter, where they are able to receive
        feedback from their peers on the problem the team is tackling as well as
        the way in which they aim to solve it.</span
      >
    </Value>
    <Value>
      <span slot="name">Product Showcase</span>
      <span slot="description"
        >Development continues after MVP with more challenging or lower-priority
        features, as well as iterating on feedback from MVP itself. At the end
        of the semester, teams present at Product Showcase, where their finished
        deliverables are shown to the rest of the organization as well as to a
        public audience.</span
      >
    </Value>
    <Value>
      <span slot="name">Hand-Off</span>
      <span slot="description"
        >Soon after Product Showcase, teams will hand off their work to their
        nonprofit partner. For some projects, work will resume in a future
        semester, in which case this initial handoff may focus on generating
        feedback from our partners as well as potentially serving as an initial
        pilot.
      </span>
    </Value>
  </div>
</Section>
<Section id="teams" padding="40px">
  <h2>Our Project Teams</h2>
  <div id="roles">
    <RoleCard>
      <span slot="role">Software Developers</span>
      <span slot="description"
        >Software developers constitute the majority of a Hack4Impact team and
        code together to make the product come to life. We commonly utilize the
        MERN stack (MongoDB, Express, React, Node), though we have also created
        some mobile and data science applications in past projects. Software
        developers don't only program though; they also participate in many user
        experience and product decisions.
      </span>
      <span slot="number">4-5</span>
    </RoleCard>
    <RoleCard>
      <span slot="role">Product Designers</span>
      <span slot="description"
        >Designers collaborate in cross functional teams to design the product
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
      <span slot="description"
        >Tech Leads take technical ownership of the product, and are responsible
        for architecting the software each team develops to meet their
        nonprofit's needs as well as setting technical standards, delegating
        work, setting guidelines, and mentoring developers in the tech stack
        used by their project. Tech Leads work most closely with Software
        Developers, and along with Product Managers are responsible for leading
        our project teams.</span
      >
      <span slot="number">1</span>
    </RoleCard>
    <RoleCard>
      <span slot="role">Product Manager</span>
      <span slot="description"
        >Product Managers act as the bridge between our project teams and our
        nonprofit partners, helping distill the needs of our partners into
        actionable solutions that the other members can execute on. Product
        Managers oftentimes find themselves handling a variety of
        responsibilities, as it is ultimately their role as a co-lead to ensure
        that an impactful product is delivered in a timely manner.</span
      >
      <span slot="number">1</span>
    </RoleCard>
  </div>
</Section>
<Section padding="40px" id="academy">
  <h2>Academy</h2>
  <p>
    Academy is our program for training less technically-experienced members
    (typically freshmen) to become full-fledged Software Developers the
    following semester.
  </p>
  <p>
    In the first half of the semester, Academy Members go through a rigorous web
    development bootcamp consisting of lessons and take-home assignments that
    will familiarize them with the tech stack we commonly use for our nonprofit
    projects. After that, the Academy team dedicates the second half of the
    semester to building a full-stack web application of the team's choosing
    using the lessons learned earlier in the semester.
  </p>
  <div id="divider" />
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
<Section padding="40px" id="join" color="var(--blue)" longForm>
  <div id="join-container">
    <div>
      <h2>Join Us</h2>
      <p>Lorem Ipsum.</p>
    </div>
    <div class="row-center">
      <a href="join/students" sapper:prefetch>
        <Button type="primary-white">Apply</Button>
      </a>
      <a href="about/team" sapper:prefetch>
        <Button type="secondary-white">Meet the Team</Button>
      </a>
    </div>
  </div>
</Section>

<style>
  #timeline-steps {
    padding: 20px 0;
  }

  #roles {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 40px;
    row-gap: 40px;
  }

  #divider {
    width: 100%;
    height: 60px;
    background-color: var(--gray-light);
  }

  #join-container {
    color: #fff;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  #join-container p {
    opacity: 80%;
    margin: 0;
  }

  #join-container a {
    margin: 0 10px;
  }
</style>
