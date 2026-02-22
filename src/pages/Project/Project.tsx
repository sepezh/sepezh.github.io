import { useLoaderData, type LoaderFunctionArgs } from 'react-router-dom';
import { projects } from '../../data/projects';
import { capitalize } from '../../utils/capitalizeProjectName';
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

export async function projectLoader({ params }: LoaderFunctionArgs) {
  const name = capitalize(params.projectName ?? '');

  const project = projects.find(project => project.name === name);

  if (!project) {
    throw new Response('Not Found', { status: 404 });
  }

  return { project, title: `${name} | Sepezh` };
}
