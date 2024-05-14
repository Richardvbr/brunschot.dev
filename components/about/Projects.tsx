import Section from '@/components/shared/Section';

const Projects = () => {
  return (
    <Section key="projects" heading="Projects">
      <div>
        <a
          href="https://jobstrackr.app"
          target="_blank"
          className="mb-0.5 font-medium text-primary"
        >
          Jobstrackr.app (work in progress)
        </a>
        <p className="text-sm text-secondary">Personal project</p>
        <ul className="mt-3 flex list-disc flex-col gap-y-2 pl-5 text-secondary md:pl-4">
          <li>
            Web application where users can track and manage their (active) job
            applications
          </li>
          <li>
            Features: add and manage job applications, upload documents, leave
            feedback
          </li>
          <li>Authentication, Postgres DB, light/dark mode, form validation</li>
          <li>React, TypeScript, Supabase, SCSS modules, Zustand</li>
        </ul>
      </div>
    </Section>
  );
};

export default Projects;
