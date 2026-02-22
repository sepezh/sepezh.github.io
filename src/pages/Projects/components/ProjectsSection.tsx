import { Link } from 'react-router-dom';
import { projects } from '../../../data/projects';
import classes from './ProjectsSection.module.css';
import BaseImageWrapper from '../../../components/shared/BaseImageWrapper/BaseImageWrapper';

export default function ProjectsSection() {
  return (
    <section className={classes.projectsSection}>
      {projects.map(project => {
        const projectLink = project.name.toLowerCase();
        return (
          <Link
            key={project.id}
            to={projectLink}
            className={classes.projectLink}
          >
            <BaseImageWrapper
              wrapperClass={classes.imageWrapper}
              containerClass={classes.imageContainer}
              imgClass={classes.image}
              src={project.image}
              alt={project.name}
            />
            <div className={classes.textWrapper}>
              <h2>{project.name}</h2>
              <p>{project.description}</p>
            </div>
          </Link>
        );
      })}
    </section>
  );
}
