import { motion, useScroll, useTransform } from 'framer-motion';
import { useLayoutEffect, useRef, useState } from 'react';

import { experiences, type experienceType } from '../../../data/experiences';
import classes from './AboutExperiencesSection.module.css';

export default function AboutExperiencesSection() {
  return (
    <section>
      <h2>
        My Experience<span className="purple">.</span>
      </h2>
      {experiences.map((exp: experienceType) => (
        <ExperienceItem key={exp.compony_id} exp={exp} />
      ))}
    </section>
  );
}

function ExperienceItem({ exp }: { exp: experienceType }) {
  const ref = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const [contentHeight, setContentHeight] = useState<number>(0);

  useLayoutEffect(() => {
    if (contentRef.current) {
      const hgh = contentRef.current.getBoundingClientRect().height;
      setContentHeight(hgh);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end', 'center'],
  });

  const height = useTransform(scrollYProgress, [0, 1], [0, contentHeight]);

  return (
    <div ref={ref} className={classes.experience}>
      <div className={classes['progressbar-wrapper']}>
        <div className={classes.experienceId}>{exp.id}</div>

        <div
          className={classes['progressbar-track']}
          style={{ height: contentHeight }}
        >
          <motion.div
            className={classes.indicator}
            style={{ height }}
            transition={{
              height: {
                duration: 0.3,
              },
            }}
          />
        </div>
      </div>

      <div ref={contentRef} className={classes['experience-content']}>
        <p className="purple">{exp.role}</p>
        <h3>{exp.compony_name}</h3>
        <p>{exp.location}</p>
        <ul>
          {exp.tasks.map(task => (
            <li key={task.id}>{task.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
