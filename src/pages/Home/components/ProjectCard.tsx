import type { FC } from 'react';

import classes from './ProjectCard.module.css';
import BaseImageWrapper from '../../../components/shared/BaseImageWrapper/BaseImageWrapper';

type ProjectCardProps = {
  image: string;
  name: string;
  description: string;
  link?: string;
  variant: string;
};

const ProjectCard: FC<ProjectCardProps> = ({
  image,
  name,
  description,
  link,
  variant,
}) => {
  const className = `${classes.proj} ${classes[variant]}`;
  return (
    <div className={className}>
      <div className={classes.container}>
        <div className={classes.inner}>
          <BaseImageWrapper
            wrapperClass={classes.imageWrapper}
            containerClass={classes.imageContainer}
            imgClass={classes.image}
            src={image}
            alt={name}
          />

          <div className={classes.content}>
            <a href={link} className={classes.projectLink}>
              {name}
              <span className={classes.iconsBorder}>
                <span className="material-symbols-rounded">arrow_outward</span>
              </span>
            </a>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
