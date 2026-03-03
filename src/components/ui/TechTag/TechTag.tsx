import type { FC } from 'react';

import classes from './TechTag.module.css';

type TechTagProps = {
  tags: string[];
};

const TechTag: FC<TechTagProps> = ({ tags }) => {
  return (
    <div className={classes.tagsWrapper}>
      {tags.map((tag, index) => (
        <span className={classes.tag} key={index}>
          {tag}
        </span>
      ))}
    </div>
  );
};

export default TechTag;
