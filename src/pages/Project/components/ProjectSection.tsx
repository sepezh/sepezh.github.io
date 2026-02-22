import Button from '../../../components/ui/Button/Button';
import type { projectType } from '../../../data/projects';
import ProjectDetail from './ProjectDetail';
import ProjectImage from './ProjectImage';
import ProjectImagesGrid from './ProjectImagesGrid';
import ProjectInfoCard from './ProjectInfoCard';

import classes from './projectSection.module.css';

export default function ProjectSection({ project }: { project: projectType }) {
  return (
    <section>
      <ProjectImage image={project.image} name={project.name} />

      <div className={classes.detailWrapper}>
        <ProjectInfoCard
          client={project.client}
          year={project.year}
          role={project.role}
        />
        <ProjectDetail
          about={project.about}
          challenges={project.chanllenges}
          results={project.results}
        />
      </div>
      <ProjectImagesGrid
        images={[project.image, project.image, project.image]}
      />

      <Button variant="primary" to="..">
        Back
      </Button>
    </section>
  );
}
