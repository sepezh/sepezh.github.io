import type { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import classes from './ProjectCard.module.css';

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
          <div className={classes.image}>
            <div className={classes.imgContainer}>
              <img src={image} alt={name} className={classes.projectImg} />
            </div>
          </div>

          <div className={classes.content}>
            <a href={link} className={classes.projectLink}>
              {name}
              <FontAwesomeIcon icon={faPaperPlane} />
            </a>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
