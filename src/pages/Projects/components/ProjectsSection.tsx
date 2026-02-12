import { projects } from '../../../data/projects';
import classes from './ProjectsSection.module.css';

export default function ProjectsSection() {
  return (
    <section className={classes.projectsSection}>
      {projects.map(project => (
        <a
          key={project.id}
          href={`/${project.name}`}
          className={classes.projectLink}
        >
          <div className={classes.imageWrapper}>
            <div className={classes.imageContainer}>
              <img
                className={classes.image}
                src={project.image}
                alt={project.name}
              />
            </div>
          </div>
          <div className={classes.textWrapper}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
          </div>
        </a>
      ))}
    </section>
  );
}
