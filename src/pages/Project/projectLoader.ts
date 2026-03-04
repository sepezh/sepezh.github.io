import { capitalize } from '../../utils/capitalizeProjectName';
import { type LoaderFunctionArgs } from 'react-router-dom';
import { projects } from '../../data/projects';

export async function projectLoader({ params }: LoaderFunctionArgs) {
  const name = capitalize(params.projectName ?? '');

  const project = projects.find(project => project.name === name);

  if (!project) {
    throw new Response('Not Found', { status: 404 });
  }

  return { project, title: `${name} | Sepezh` };
}
