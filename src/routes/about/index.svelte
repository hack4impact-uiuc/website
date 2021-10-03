<script context="module" lang="ts">
  import Button from "$lib/components/Button.svelte";
  import Row from "$lib/components/Row.svelte";
  import Section from "$lib/components/Section.svelte";
  import Step from "$lib/components/Step.svelte";
  import Testimonial from "$lib/components/Testimonial.svelte";
  import { setImageHeight } from "$lib/utils/schema";
  import type { Image, Info, Member } from "$lib/utils/schema";

  export async function load({ fetch }) {
    const [info, testimonialMember, projectImage] = await Promise.all([
      fetch("/server/info.json").then((res: Response) => res.json()),
      fetch("/server/member-testimonial.json").then((res: Response) =>
        res.json()
      ),
      fetch("/server/project-image.json").then((res: Response) => res.json()),
    ] as [Info, Member, Image]);

    return {
      props: {
        team: info.chapterPicture,
        testimonialMember,
        projectImage,
      },
    };
  }
</script>

<script lang="ts">
  export let team: Image;
  export let testimonialMember: Member;
  export let projectImage: Image;
</script>

<svelte:head>
  <title>About Us | Hack4Impact UIUC</title>
  <meta
    name="description"
    content="Uniting students to build well-engineered and impactful products for social change."
  />
  <meta property="og:url" content="https://uiuc.hack4impact.org/about" />
  <meta property="og:title" content="About Us | Hack4Impact UIUC" />
  <meta
    property="og:description"
    content="Uniting students to build well-engineered and impactful products for social change."
  />
  <meta name="og:image" content="{team.src}" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" value="https://uiuc.hack4impact.org/about" />
  <meta name="twitter:title" value="About Us | Hack4Impact UIUC" />
  <meta
    name="twitter:description"
    value="Uniting students to build well-engineered and impactful products for social change."
  />
  <meta name="twitter:image" content="{team.src}" />
</svelte:head>

<Section id="intro" padding="60px">
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
      <img
        id="team-photo"
        src="{setImageHeight(team.src, 900)}"
        alt="{team.alt}"
      />
    </div>
  </div>
</Section>

<Section id="values" color="var(--gray-lighter)" padding="40px">
  <h2>Our Values</h2>
  <div id="values">
    <Step icon="/icons/lightbulb.svg" iconAlt="Lightbulb icon">
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
    </Step>
    <Step icon="/icons/question-mark.svg" iconAlt="Question mark icon">
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
    </Step>
    <Step icon="/icons/heart.svg" iconAlt="Heart icon">
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
    </Step>
  </div>
</Section>

<Section id="work" color="var(--blue)" padding="40px">
  <Row gap="{84}" reverseOnMobile
    ><div id="work-content">
      <h2>How We Work</h2>
      <div class="row-center"></div>
      <p>
        We partner with nonprofits and other socially minded organizations to
        build impactful products. Each product is spearheaded by a dedicated
        development team on a one or two semester timeline.
      </p>
      <a class="button-link" href="/about/work" sveltekit:prefetch
        ><Button type="primary-white">Learn More</Button></a
      >
    </div>
    <figure>
      <img src="{projectImage.src}" alt="{projectImage.alt}" />
    </figure></Row
  >
</Section>

<Section id="team" padding="40px">
  <h2>Meet The Team</h2>
  <p>
    We are a team of UIUC students who collectively believe in and support each
    other towards <span id="meet-the-team-bold"
      >our goal of using technology as a medium for advancing the public
      interest</span
    >. Our members come from a variety of background and identities, and we use
    our differences to further our culture and create a thriving community of
    students. Many of us consider their fellow members as close friends,
    pursuing activities beyond the scope of the organization and their time at
    UIUC.
  </p>
  <p>
    Interested in being a part of the team? — check for open roles at the start
    of every semester, and fill out our interest form!
  </p>
  <Testimonial
    quote="{testimonialMember.testimonial}"
    name="{testimonialMember.name}"
    desc="{`${
      testimonialMember.active || testimonialMember.role === 'Co-Founder'
        ? ''
        : 'Former '
    }${testimonialMember.role}`}"
    imageSrc="{testimonialMember.picture.src}"
    meetTheTeam
  />
</Section>

<style>
  p {
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

  @media only screen and (max-width: 1045px) {
    .about-intro {
      flex-direction: column;
    }
    #about-intro-left {
      width: 100%;
      padding-right: 0;
    }

    #about-intro-right {
      width: 100%;
      padding-left: 0;
    }
  }

  #team-photo {
    width: 100%;
    border-radius: 4px;
  }

  #values {
    padding: 20px 0;
  }

  #work-content {
    color: #fff;
  }

  #meet-the-team-bold {
    font-weight: bold;
  }

  figure > img {
    width: 100%;
    border-radius: 4px;
  }
</style>
