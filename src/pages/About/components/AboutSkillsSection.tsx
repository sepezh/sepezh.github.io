import type { FC } from 'react';
import { motion } from 'framer-motion';

import { skillsCategories, type skillCategoryType } from '../../../data/skills';
import { repeatUntilMinLength } from '../../../utils/normalizeSkills';
import classes from './AboutSkillsSection.module.css';

export default function AboutSkillsSection() {
  return (
    <section>
      <h2>
        My Stack<span className="purple">.</span>
      </h2>
      <div className={classes['skills-wrapper']}>
        {skillsCategories.map((category, index) => (
          <AboutSkillItems
            key={category.id}
            category={category}
            direction={index % 2 === 0 ? 'left' : 'right'}
            speed={40 + index * 2}
          />
        ))}
      </div>
    </section>
  );
}

interface Props {
  category: skillCategoryType;
  direction?: 'left' | 'right';
  speed?: number;
}

const AboutSkillItems: FC<Props> = ({
  category,
  direction = 'left',
  speed = 33,
}) => {
  const maxLength = 30;
  const normalizedSkills = repeatUntilMinLength(category.skills, maxLength);

  const repeated = [...normalizedSkills, ...normalizedSkills];

  return (
    <div className={classes.wrapper}>
      <motion.div
        className={classes.track}
        animate={{
          x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'],
        }}
        transition={{
          duration: speed,
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        <ul className={classes.list}>
          {repeated.map((skill, index) => (
            <li key={index} className={classes.item}>
              {skill.name}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};
