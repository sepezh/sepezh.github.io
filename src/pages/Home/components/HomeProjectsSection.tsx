import { projects } from '../../../data/projects';
import classes from './HomeProjectsSection.module.css';
import ProjectCard from './ProjectCard';

export default function HomeProjectsSection() {
  console.log(projects);
  return (
    <section className={classes.projectsSection}>
      <h2>
        Projects<span className="purple">.</span>
      </h2>

      <div className={classes['main-home-project']}>
        {projects.map(proj => (
          <ProjectCard
            key={proj.id}
            image={proj.image}
            name={proj.name}
            description={proj.description}
            variant={proj.variant}
          />
        ))}
      </div>
    </section>
  );
}
