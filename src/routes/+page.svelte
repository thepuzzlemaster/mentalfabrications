<script lang="ts">
  import iLanPhoto from '$lib/assets/images/me-seattle-2.webp';
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
  <section id="home self-start">
    <div class="flex content-center items-center">
      <img
        alt="iLan standing in front of water at night, with a city skyline behind him in the distance."
        class="max-w-96 rounded-full"
        src={iLanPhoto}
      />
      <div class={cn(STAR_BLOCKER, 'ml-4', 'flex-col', 'p-8')}>
        <div class="flex items-baseline">
          <ShadowText
            className="text-6xl font-bold mb-2"
            shadowClassName="text-emerald-600 -left-1 top-1"
            tag="h1"
          >
            iLan Epstein
          </ShadowText>
          <span class="ml-3 text-lg">(he/him)</span>
        </div>
        <div class="text-xl">UX-focused engineer</div>
        <div class="text-lg">Disprover of impossibilities</div>
        <div class="text-lg">Finder of problems</div>
        <div class="text-lg">Creative problem solver</div>
      </div>
    </div>

    <div class={cn(STAR_BLOCKER, 'mt-48')} id="about-me">
      <ShadowText className="text-5xl mb-4 font-light" tag="h2">
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
    class={cn(STAR_BLOCKER, 'mt-48', 'text-right', 'flex', 'flex-col', 'items-end', 'self-end')}
    id="about-me"
  >
    <ShadowText className="text-5xl mb-4 font-light" shadowClassName="left-auto right-0.5" tag="h2">
      Turning Ideas Into Interfaces
    </ShadowText>
    <div class="max-w-3xl text-lg">
      I believe in the power of design to surprise, delight, and occasionally make you giggle.
      Whether it’s a snazzy animation or a button that just feels right, I’m here to make the web a
      little more fun. I make sure to think through not just the happy path, but through every
      available path - kicking up every rock and stone along the way.
    </div>
  </section>

  <section class={cn(STAR_BLOCKER, 'mt-48', 'self-start')} id="skills">
    <ShadowText className="text-5xl mb-4 font-light" tag="h2">My Repertoire</ShadowText>
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

  <section class={cn(STAR_BLOCKER, 'mt-48', 'self-center', 'flex', 'flex-col', 'items-end')}>
    <ShadowText className="text-5xl mb-16 font-light" tag="h2">
      Projects: A Digital Curio Cabinet
    </ShadowText>

    <ProjectCard className="mb-36" title="Radious">
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

    <ProjectCard className="mb-36" title="Schedulicious">
      {#snippet content()}
        <p class="mb-2">
          This project went from concept to fully deployed functionality in under a month, meeting a
          unique business need for Radious: enabling event attendees to register for specific
          timeslots based on availability. Alongside displaying detailed event information to set
          clear expectations for attendees, it seamlessly handles the complexities of scheduling.
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
  </section>
</div>
