import type { FC } from 'react';

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
