<script context="module" lang="ts">
  import Section from "../../components/Section.svelte";
  import Value from "../../components/Value.svelte";
  import { setImageHeight } from "../../utils/schema";
  import type { Image, Info } from "../../utils/schema";

  export async function preload() {
    const res = await this.fetch("info.json");
    const info: Info = await res.json();

    return { team: info.chapterPicture };
  }
</script>

<script lang="ts">
  export let team: Image;
</script>

<svelte:head>
  <title>About Us | Hack4Impact UIUC</title>
</svelte:head>

<Section padding="60px">
  <div class="about-intro">
    <div id="about-intro-left">
      <h1>About Us</h1>

      <h2>We Believe In Using Tech For Good</h2>
      <p>
        Hack4Impact believes in technology’s huge potential to empower activists
        and humanitarians to create lasting and impactful social change. We work
        to foster the wider adoption of software as a tool for social good.
      </p>

      <h2>Our Mission</h2>
      <p>
        Hack4Impact exists for both nonprofits and students. We connect student
        software developers with nonprofits and other socially responsible
        businesses to develop powerful new tools for social change. This enables
        nonprofits to further their mission and better engage their clients. We
        are committed to increasing awareness of technology's potential for
        good.
      </p>
    </div>
    <div id="about-intro-right">
      <img id="team-photo" src={setImageHeight(team.src, 900)} alt={team.alt} />
    </div>
  </div>
</Section>
<Section color="var(--gray-lighter" padding="40px">
  <h2>Our Values</h2>
  <div id="values">
    <Value>
      <span slot="name">Intentionality</span>
      <span slot="description"
        >We evaluate the trade offs of our decisions, choose a direction to
        head, and crush our goals. Whether it be personal or professional
        growth, we avoid mindless movement and instead purposefully act. We work
        with intention. We understand that at the end of the day, Hack4Impact
        exists to build solutions that are right for our clients and their
        users. We carefully assess the concerns of our users, stakeholders, and
        clients, to develop a custom solution that fits our precise constraints.</span
      >
    </Value>
    <Value>
      <span slot="name">Curiosity</span>
      <span slot="description"
        >We are eager to learn about technology, ourselves, and the world around
        us. We dive deep into our fields of study and work, and seek feedback
        from our teammates, students, and teachers. We are hungry, yet humble;
        we are able to set aside our egos and view each moment and interaction
        as an opportunity to learn. We are incredibly curious about our clients.
        We know we might not know everything, so we must ask the right questions
        to even begin to grasp the complexity of our clients’ situations.
        Curiosity also enables us to look beyond our immediate vicinity and
        deliver the best solution to our clients, even if the solution isn’t
        built by Hack4Impact.</span
      >
    </Value>
    <Value>
      <span slot="name">Empathy</span>
      <span slot="description"
        >We look to understand perspectives, situations, and needs, and
        therefore are not afraid of asking or being asked clarifying questions.
        We make intentional, well-informed decisions by understanding the
        environments we are surrounded by and deeply listening to our teammates.
        We are then able to best mentor our own teammates growth because we can
        see where they are coming from. Empathy drives every decision we make on
        behalf of our clients. Our empathetic approach provides a North Star to
        our development process. We’re able to settle difficult debates by
        agreeing and executing on what’s best for our client.</span
      >
    </Value>
  </div>
</Section>

<a href="about/work" rel="prefetch">How We Work</a>
<a href="about/team" rel="prefetch">Meet the Team</a>

<style>
  h1 {
    font-size: 56px;
  }

  h2 {
    font-size: 32px;
  }

  p {
    font-size: 20px;
    opacity: 80%;
  }

  .about-intro {
    display: flex;
    flex-direction: row;
  }

  #about-intro-left {
    width: 50%;
    padding-right: 30px;
  }

  #about-intro-right {
    width: 50%;
    padding-left: 30px;
  }

  #team-photo {
    width: 100%;
    border-radius: 4px;
  }

  #values {
    padding: 20px 0;
  }
</style>
