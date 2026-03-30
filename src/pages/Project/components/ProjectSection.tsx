import Button from '../../../components/ui/Button/Button';
import type { projectType } from '../../../data/projects';
import ProjectDetail from './ProjectDetail';
import ProjectImagesGrid from './ProjectImagesGrid';
import ProjectInfoCard from './ProjectInfoCard';

import classes from './projectSection.module.css';
import ProjectTech from './ProjectTech';

export default function ProjectSection({ project }: { project: projectType }) {
  return (
    <section>
      <div className={classes.detailWrapper}>
        <div className={classes.techInfoWrapper}>
          <ProjectTech project={project} />
          <ProjectInfoCard
            client={project.client}
            year={project.year}
            role={project.role}
          />
        </div>
        <ProjectDetail
          about={project.about}
          features={project.features ?? []}
          challenges={project.chanllenges}
          results={project.results}
        />
      </div>
      <ProjectImagesGrid
        images={[
          project.imagesMobile?.[0] ?? project.image,
          project.imagesMobile?.[1] ?? project.image,
          project.image,
        ]}
      />

      <Button variant="primary" to="..">
        All Projects
      </Button>
    </section>
  );
}
