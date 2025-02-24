<script lang="ts">
  import iLanPhoto from '$lib/assets/images/me-bk-wedding-sq.webp';
  import frogImage from '$lib/assets/images/projects-frog.png';
  import radiousImage from '$lib/assets/images/projects-radious.webp';
  import scheduliciousImage from '$lib/assets/images/projects-schedulicious.webp';
  import tableauImage from '$lib/assets/images/projects-tableau.webp';
  import Link from '$lib/components/link.svelte';
  import StarBackground from '$lib/components/starBackground/starBackground.svelte';
  import { Button } from '$lib/components/ui/button';
  import { Input } from '$lib/components/ui/input';
  import { Label } from '$lib/components/ui/label';
  import { Textarea } from '$lib/components/ui/textarea';
  import { STAR_BLOCKER } from '$lib/styleClasses/starBlocker';
  import { BODY_LARGE, H1, H2, H3, H4 } from '$lib/styleClasses/typography';
  import { cn } from '$lib/utils';
  import ProjectCard from './projectCard.svelte';
  import Testimonial from './testimonial.svelte';
</script>

<StarBackground />
<div class="flex flex-col items-center">
  <div class="max-w-7xl">
    <section id="about-me">
      <div class="mt-24 flex flex-col content-center items-center gap-x-4 lg:flex-row">
        <img
          alt="Close-up view of iLan Epstein's face. He has a 5 o'clock shadow on his face, he's making a slight smirk with his mouth, and he's wearing a newsie cap."
          class="w-full rounded-full object-cover ~sm:~max-w-56/96"
          src={iLanPhoto}
        />
        <div class={cn(STAR_BLOCKER, 'flex-col', 'p-4', 'md:p-8')}>
          <h1 class={H1}>iLan Epstein</h1>
          <h3 class={H3}>UX Engineer // Front-end Developer</h3>
          <p class={cn(BODY_LARGE, 'mb-4')}>
            I specialize in crafting digital spaces where users feel at home—whether they’re
            browsing, clicking, or just marveling at the smoothness of a well-designed hover state.
          </p>
          <h4 class={H4}>Accessibility + Design Systems + Internal tooling</h4>
          <p>
            Typescript/Javascript, HTML, CSS, NodeJS, React, NextJS, git, Angular, svelte, python
          </p>
        </div>
      </div>
    </section>

    <section id="projects" class="mt-24 flex flex-col items-center self-center sm:mt-48">
      <ProjectCard
        class={cn(STAR_BLOCKER, 'mb-16')}
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
            visualizing workspace locations, calendar APIs for event tracking, and analytics tools
            to monitor usage trends and inform future improvements. This cohesive design not only
            aligned with Radious' vision of a distributed workspace network but also established a
            strong foundation for scalability and ongoing innovation.
          </p>
        {/snippet}
        {#snippet role()}
          <p>
            At Radious, I architected and bulit the entirety of the front-end. Additionally, I
            stepped in to establish coding guidelines and best practices for both the front-end and
            the back-end codebases. As a founder, my role very often extended far beyond the
            technical side, including work in defining company strategy and direction, conducting
            user interviews, UX design, and managing our employees.
          </p>
        {/snippet}
      </ProjectCard>

      <Testimonial
        class="mb-16"
        quote="iLan's a rockstar engineer! If you can dream it, he can build it."
        name="Harmony Jorden"
        role="Senior Product Designer"
        company="Salesforce"
      />

      <ProjectCard
        class={cn(STAR_BLOCKER, 'mb-16')}
        imageUrl={scheduliciousImage}
        imageAlt=""
        linkUrl="https://signup.radious.pro/events/techworks-ai-in-marketing-rad-workday-4388661"
        technologies={[
          'Svelte/Sveltekit',
          'Tailwind',
          'Typescript',
          'Vitest w/ Testing Library',
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
            information. It also supports modifying or canceling existing reservations and includes
            a robust waitlist feature, allowing users to sign up for full timeslots and
            automatically secure a spot if one opens up. This combination of efficiency and
            user-centric design ensures a smooth experience for both organizers and participants.
          </p>
        {/snippet}

        {#snippet role()}
          <p>
            I designed and built the front-end of the application and worked with another developer
            on designing the back-end API.
          </p>
        {/snippet}
      </ProjectCard>

      <ProjectCard
        class={cn(STAR_BLOCKER, 'mb-16')}
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
            My work on the "Shared Widgets" team at Tableau involved creating and maintaining our
            internal DLS web UI component library. Each component is WCAG 2.0 compliant, and our
            library is consumed by over 150 modules internally.
          </p>

          <p class="mb-2">
            My team acted as the bridge between design and dev by striving to ensure a consistent
            high-quality user experience through the thoughtful usage of motion, examining
            edge-cases, and following best practices for UX on the web.
          </p>

          <p>
            We also maintain a living DLS documentation website, which captures both the principles
            behind widgets usage, explanations for when to use which components, and live code
            samples for our devs to consume. We manage both the code we write and the infrastructure
            which supports its build/publishing/documentation workflows
          </p>
        {/snippet}
        {#snippet role()}
          <p>
            As one of only 2 developers on the team, my role focused on both creating and maintaning
            new and existing widgets, implementing motion (where applicable), and
            improving/maintaining our CI/CD pipeline, testing framework, and infrastructure around
            our internal documentation site.
          </p>
        {/snippet}
      </ProjectCard>

      <ProjectCard
        class={cn(STAR_BLOCKER, 'mb-16')}
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
            Being a design technologist at frog design meant living at the intersection of design
            and technology during a particularly transformative period for both industries. I
            contributed to cutting-edge projects spanning various industries, such as healthcare,
            automotive, gaming, consumer electronics, and finance, addressing complex challenges
            with creativity and technical acumen. My role involved prototyping and building
            interactive experiences to bring innovative concepts to life, often serving as the
            bridge between visionary design teams and practical engineering requirements.
          </p>
          <div>
            Key elements of these projects included:
            <ul>
              <li class="mt-3">
                <div class="font-semibold">Prototyping and Experimentation:</div>
                Rapidly developing proof-of-concept prototypes for web, mobile, or dedicated hardware
                to test ideas with stakeholders or end users.
              </li>
              <li class="mt-3">
                <div class="font-semibold">Collaboration Across Disciplines:</div>
                Partnering closely with UX designers, researchers, and strategists to translate user
                insights into tangible digital experiences.
              </li>
              <li class="mt-3">
                <div class="font-semibold">Adaptability in Tech Stacks:</div>
                Leveraging a range of tools and technologies, from front-end development frameworks to
                back-end systems, to adapt to diverse client needs.
              </li>
              <li class="mt-3">
                <div class="font-semibold">Storytelling through Technology:</div>
                Helping clients and teams envision future possibilities by building dynamic prototypes
                that could both showcase potential solutions and highlight technical feasibility.
              </li>
            </ul>
          </div>
        {/snippet}
        {#snippet role()}
          <p>
            I was primarily responsible for choosing an appropriate tech-stack given the needs of a
            specific project. Additionally, I was often responsible for bootstrapping the projects,
            ensuring quality and consistency across the team, requirements gathering, UX research,
            and client presentations.
          </p>
        {/snippet}
      </ProjectCard>
    </section>
    <section
      class={cn(STAR_BLOCKER, 'sm:mt-48', 'mt-24', 'self-start', 'w-full', 'max-w-2xl')}
      id="contact"
    >
      <h2 class={H2}>Get in touch!</h2>
      <div class="my-4">
        Find me on <Link href="https://www.linkedin.com/in/ilan-epstein/" target="_blank">
          LinkedIn
        </Link>
      </div>
      <form
        class="mt-8 flex w-full max-w-3xl flex-col"
        action="https://api.web3forms.com/submit"
        method="POST"
      >
        <input type="hidden" name="access_key" value="f5900e51-ba59-4841-bc47-4f5b5ccf8ac0" />

        <div class="flex flex-grow flex-wrap justify-stretch gap-x-4">
          <div class="my-2 min-w-56 flex-grow">
            <Label for="name">Your name</Label>
            <Input id="name" name="name" required />
          </div>
          <div class="my-2 min-w-56 flex-grow">
            <Label for="email">Your email</Label>
            <Input id="email" name="email" required />
          </div>
        </div>

        <div class="max-w-160 my-2 flex-grow">
          <Label for="message">What's on your mind?</Label>
          <Textarea id="message" name="message" rows={4} required />
        </div>

        <input type="checkbox" name="botcheck" class="hidden" />

        <div class="my-4">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </section>
  </div>
</div>
