import { useLoaderData } from 'react-router-dom';
import { projects } from '../../data/projects';
import ProjectSection from './components/ProjectSection';

export default function ProjectPage() {
  const { project } = useLoaderData() as {
    project: (typeof projects)[number];
    title: string;
  };

  return (
    <main>
      <section>
        <h1>
          {project.name}
          <span className="purple">.</span>
        </h1>
        <p>{project.description}</p>
      </section>
      <ProjectSection project={project} />
    </main>
  );
}
