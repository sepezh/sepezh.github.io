import type { projectType } from '../../../data/projects';

import classes from './ProjectTech.module.css';

export default function ProjectTech({ project }: { project: projectType }) {
  return (
    <div>
      <h2>Technologies Used</h2>
      <ul className={classes.techList}>
        {project.techStack?.map(tech => <li key={tech}>{tech}</li>) ?? (
          <li>No technologies listed.</li>
        )}
      </ul>
    </div>
  );
}
