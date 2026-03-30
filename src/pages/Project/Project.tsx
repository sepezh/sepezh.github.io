import { useLoaderData } from 'react-router-dom';
import { projects } from '../../data/projects';
import ProjectSection from './components/ProjectSection';
import Button from '../../components/ui/Button/Button';

export default function ProjectPage() {
  const { project } = useLoaderData() as {
    project: (typeof projects)[number];
    title: string;
  };


  // 4. TODO add a technical Challenge
  // (example: Managing complex UI state across multiple dashboard components while keeping the code maintainable.
  //Solution
  //I implemented reusable React components and centralized state management to avoid prop drilling and improve scalability.)

  return (
    <main>
      <section>
        <h1>
          {project.name}
          <span className="purple">.</span>
        </h1>
        <p>{project.description}</p>
        <div className="BtnsWrapper">
          <Button href={project.url} target="_blank" variant="primary">
            Live Demo
          </Button>
          <Button href={project.githubUrl} target="_blank" variant="secondary">
            GitHub Repository
          </Button>
        </div>
      </section>
      <ProjectSection project={project} />
    </main>
  );
}
