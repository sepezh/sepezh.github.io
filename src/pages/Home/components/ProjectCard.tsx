import type { FC } from 'react';

import classes from './ProjectCard.module.css';
import BaseImageWrapper from '../../../components/shared/BaseImageWrapper/BaseImageWrapper';
import { Link } from 'react-router-dom';

type ProjectCardProps = {
  image: string;
  name: string;
  description: string;
  variant: string;
};

const ProjectCard: FC<ProjectCardProps> = ({
  image,
  name,
  description,
  variant,
}) => {
  const projectLink = name.toLowerCase();
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
            <Link
              to={`projects/${projectLink}`}
              className={classes.projectLink}
            >
              {name}
              <span className={classes.iconsBorder}>
                <span className="material-symbols-rounded">arrow_outward</span>
              </span>
            </Link>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
