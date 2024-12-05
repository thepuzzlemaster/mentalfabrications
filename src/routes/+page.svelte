<script lang="ts">
  import iLanPhoto from '$lib/assets/images/me-seattle-2.webp';
  import frogImage from '$lib/assets/images/projects-frog.png';
  import radiousImage from '$lib/assets/images/projects-radious.webp';
  import scheduliciousImage from '$lib/assets/images/projects-schedulicious.webp';
  import tableauImage from '$lib/assets/images/projects-tableau.webp';
  import ShadowText from '$lib/components/shadowText.svelte';
  import StarBackground from '$lib/components/starBackground/starBackground.svelte';
  import { STAR_BLOCKER } from '$lib/styleClasses/starBlocker';
  import { cn } from '$lib/utils';
  import ProjectCard from './projectCard.svelte';

  const getYearsSince = (year: number): string => {
    const today = new Date();
    return (today.getFullYear() - year).toString();
  };
</script>

<StarBackground />
<div class="flex flex-col">
  <section id="home">
    <div class="flex flex-wrap content-center items-center gap-4">
      <img
        alt="iLan standing in front of water at night, with a city skyline behind him in the distance."
        class="mt-12 w-full max-w-96 rounded-full"
        src={iLanPhoto}
      />
      <div class={cn(STAR_BLOCKER, 'flex-col', 'p-4', 'md:p-8')}>
        <div class="items-last-baseline flex">
          <ShadowText
            class="mb-2 shrink text-6xl font-bold"
            shadowClassName="text-emerald-600 -left-1 top-1"
            tag="h1"
          >
            iLan Epstein
            {#snippet noShadowChildren()}
              <span class="ml-3 text-lg font-normal text-gray-300">(he/him)</span>
            {/snippet}
          </ShadowText>
        </div>
        <div class="text-xl">UX-focused engineer</div>
        <div class="text-lg">Disprover of impossibilities</div>
        <div class="text-lg">Pre-emptive problem finder</div>
        <div class="text-lg">Creative problem solver</div>
      </div>
    </div>

    <div class={cn(STAR_BLOCKER, 'sm:mt-48', 'mt-24')} id="about-me">
      <ShadowText class="mb-4 text-4xl font-light sm:text-5xl" tag="h2">
        I build interfaces. You Click Them. Magic Happens.
      </ShadowText>
      <div class="max-w-3xl text-lg">
        Greetings! I’m iLan, a front-end developer with a penchant for UX wizardry and just enough
        eccentricity to keep things interesting. I specialize in crafting digital spaces where users
        feel at home—whether they’re browsing, clicking, or just marveling at the smoothness of a
        well-designed hover state.
      </div>
    </div>
  </section>

  <section
    class={cn(
      STAR_BLOCKER,
      'sm:mt-48',
      'mt-24',
      'text-right',
      'flex',
      'flex-col',
      'items-end',
      'self-end',
    )}
    id="about-me"
  >
    <ShadowText
      class="mb-4 text-4xl font-light sm:text-5xl"
      shadowClassName="left-auto right-0.5"
      tag="h2"
    >
      Turning Ideas Into Interfaces
    </ShadowText>
    <div class="max-w-3xl text-lg">
      I believe in the power of design to surprise, delight, and occasionally make you giggle.
      Whether it’s a snazzy animation or a button that just feels right, I’m here to make the web a
      little more fun. I make sure to think through not just the happy path, but through every
      available path - kicking up every rock and stone along the way.
    </div>
  </section>

  <section class={cn(STAR_BLOCKER, 'sm:mt-48', 'mt-24', 'self-start')} id="skills">
    <ShadowText class="mb-4 text-4xl font-light sm:text-5xl" tag="h2">My Repertoire</ShadowText>
    <div class="max-w-3xl text-lg">
      Every project is its own unique adventure, but these are the skills I’ve leaned on
      most—whether recently or consistently throughout my nearly two decades of experience. That
      said, I'm always eager to learn new tricks, tools, and technologies to keep things fresh.
      Learning new things is one of my absolute favorite things to do.
      <ul class="mt-4">
        <li>
          Typescript/Javascript
          <span class="ml-1 text-sm text-emerald-200">- {getYearsSince(2010)} years</span>
        </li>
        <li>
          HTML
          <span class="ml-1 text-sm text-emerald-200">- {getYearsSince(2010)} years</span>
        </li>
        <li>
          CSS
          <span class="ml-1 text-sm text-emerald-200">- {getYearsSince(2010)} years</span>
        </li>
        <li>
          NodeJS
          <span class="ml-1 text-sm text-emerald-200">- {getYearsSince(2014)} years</span>
        </li>
        <li>
          a11y
          <span class="ml-1 text-sm text-emerald-200">- {getYearsSince(2017)} years</span>
        </li>
        <li>
          React & Next
          <span class="ml-1 text-sm text-emerald-200">- {getYearsSince(2017)} years</span>
        </li>
        <li>
          git
          <span class="ml-1 text-sm text-emerald-200">- {getYearsSince(2017)} years</span>
        </li>
        <li>
          Design Language Systems
          <span class="ml-1 text-sm text-emerald-200">- {getYearsSince(2017)} years</span>
        </li>
        <li>
          Internal tooling
          <span class="ml-1 text-sm text-emerald-200">- {getYearsSince(2018)} years</span>
        </li>
        <li>
          Python
          <span class="ml-1 text-sm text-emerald-200">- {getYearsSince(2020)} years</span>
        </li>
        <li>
          Svelte
          <span class="ml-1 text-sm text-emerald-200">- {getYearsSince(2022)} years</span>
        </li>
      </ul>
    </div>
  </section>

  <section id="projects" class="mt-24 flex flex-col items-end self-center sm:mt-48">
    <ShadowText class={cn(STAR_BLOCKER, 'mb-16 text-4xl font-light sm:text-5xl')} tag="h2">
      Projects: A Digital Curio Cabinet
    </ShadowText>

    <ProjectCard
      class={cn(STAR_BLOCKER, 'mb-36')}
      imageAlt="Screenshot of Radious.pro showing search results for workspaces on the left, and POI's on a map on the right."
      imageUrl={radiousImage}
      linkUrl="https://www.radious.pro"
      technologies={[
        'React',
        'NextJS',
        'Typescript',
        'SCSS',
        'Customized Bootstrap DLS',
        'Google Cloud APIs',
        "Add'l 3rd party integrations",
        'Zustand',
        'Jest w/ React Testing Library',
        'git',
      ]}
      title="Radious"
    >
      {#snippet content()}
        <p class="mb-2">
          The Radious.pro website, built with Next.js, exemplifies a comprehensive approach to
          creating a seamless and intuitive platform for users seeking flexible, on-demand
          workspaces. It is fully responsive and supports key features such as location-based
          workspace searches, user accounts for both hosts and renters, real-time booking
          capabilities, and integrated payment processing.
        </p>
        <p>
          The project also leverages third-party integrations, including mapping APIs for
          visualizing workspace locations, calendar APIs for event tracking, and analytics tools to
          monitor usage trends and inform future improvements. This cohesive design not only aligned
          with Radious' vision of a distributed workspace network but also established a strong
          foundation for scalability and ongoing innovation.
        </p>
      {/snippet}
    </ProjectCard>

    <ProjectCard
      class={cn(STAR_BLOCKER, 'mb-36')}
      imageUrl={scheduliciousImage}
      imageAlt=""
      linkUrl="https://signup.radious.pro/events/techworks-ai-in-marketing-rad-workday-4388661"
      technologies={[
        'Svelte/Sveltekit',
        'Tailwind',
        'Typescript',
        'Vitest w/ Testing Library',
        'Zod',
        'git',
      ]}
      title="Schedulicious"
    >
      {#snippet content()}
        <p class="mb-2">
          This project went from concept to fully deployed in under a month, meeting a unique
          business need for Radious: enabling event attendees to register for specific timeslots
          based on availability, for both mobile and desktop users. Alongside displaying detailed
          event information to set clear expectations for attendees, it seamlessly handles the
          complexities of scheduling.
        </p>
        <p>
          The platform lets users see who else is attending their chosen timeslot—perfect for
          coordinating with friends or colleagues—while carefully safeguarding sensitive
          information. It also supports modifying or canceling existing reservations and includes a
          robust waitlist feature, allowing users to sign up for full timeslots and automatically
          secure a spot if one opens up. This combination of efficiency and user-centric design
          ensures a smooth experience for both organizers and participants.
        </p>
      {/snippet}
    </ProjectCard>

    <ProjectCard
      class={cn(STAR_BLOCKER, 'mb-36')}
      imageAlt="Documentation for a Badges UI component. It showcases different styles for regular badges, as well as numeric badges."
      imageUrl={tableauImage}
      linkUrl="https://tableau.github.io/tableau-ui/"
      title="Tableau Shared Widgets"
      technologies={[
        'React',
        'Typescript',
        'Typestyle',
        'Robust documentation',
        'Slack integrations',
        'Enzyme',
        'Jest w/ React Testing Library',
        'git',
      ]}
    >
      {#snippet content()}
        <p class="mb-2">
          The Tableau Shared Widgets team focuses on creating and maintaining a unified component
          library. Working closely with the Tableau Design Team, they ensure high-level design
          fidelity as they develop shared UI components that work consistently in diverse
          environments which are utilized by more than 100 internal development teams across Tableau
          (Shared Widgets) as well as by public consumers (Tableau-UI).
        </p>
        <p>
          These widgets are designed to enhance functionality and user experience by supporting
          features like dashboard extensions, which allow custom JavaScript integrations with
          Tableau visualizations, context menus that interact with Tableau Workbooks, and all other
          UI that users use to interact with Tableau. The team's efforts help reduce the maintenance
          burden of multiple codebases, ensure feature consistency, accessibility compliance, and
          significantly accelerate development cycles across Tableau’s ecosystem.
        </p>
      {/snippet}
    </ProjectCard>

    <ProjectCard
      class={cn(STAR_BLOCKER, 'mb-36')}
      imageAlt=""
      imageUrl={frogImage}
      noLinkText="Not publicly sharable"
      title="frog design"
      technologies={[
        'Many different tech stacks',
        'NodeJS',
        'React',
        'SCSS',
        'Web Components',
        'git',
      ]}
    >
      {#snippet content()}
        <p class="mb-2">
          Being a design technologist at frog design meant living at the intersection of design and
          technology during a particularly transformative period for both industries. I contributed
          to cutting-edge projects spanning various industries, such as healthcare, automotive,
          gaming, consumer electronics, and finance, addressing complex challenges with creativity
          and technical acumen. My role involved prototyping and building interactive experiences to
          bring innovative concepts to life, often serving as the bridge between visionary design
          teams and practical engineering requirements.
        </p>
        <div>
          Key elements of these projects included:
          <ul>
            <li class="ml-4 list-disc">
              <div class="font-semibold">Prototyping and Experimentation:</div>
              Rapidly developing proof-of-concept prototypes for web, mobile, or dedicated hardware to
              test ideas with stakeholders or end users.
            </li>
            <li class="ml-4 list-disc">
              <div class="font-semibold">Collaboration Across Disciplines:</div>
              Partnering closely with UX designers, researchers, and strategists to translate user insights
              into tangible digital experiences.
            </li>
            <li class="ml-4 list-disc">
              <div class="font-semibold">Adaptability in Tech Stacks:</div>
              Leveraging a range of tools and technologies, from front-end development frameworks to
              back-end systems, to adapt to diverse client needs.
            </li>
            <li class="ml-4 list-disc">
              <div class="font-semibold">Storytelling through Technology:</div>
              Helping clients and teams envision future possibilities by building dynamic prototypes
              that could both showcase potential solutions and highlight technical feasibility.
            </li>
          </ul>
        </div>
      {/snippet}
    </ProjectCard>
  </section>
</div>
