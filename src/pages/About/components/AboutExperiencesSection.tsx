import { motion, useScroll, useTransform } from 'framer-motion';
import { useLayoutEffect, useRef, useState } from 'react';

import { experiences, type experienceType } from '../../../data/experiences';
import classes from './AboutExperiencesSection.module.css';
import TechTag from '../../../components/ui/TechTag/TechTag';
import DurationDate from '../../../components/shared/DurationDate/DurationDate';

export default function AboutExperiencesSection() {
  return (
    <section>
      <h2>
        My Experience<span className="purple">.</span>
      </h2>
      {experiences.map((exp: experienceType) => (
        <ExperienceItem key={exp.company.compony_id} exp={exp} />
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
          style={{ height: `${contentHeight}px` }}
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
        <h3>{exp.company.compony_name}</h3>
        <div className={classes.subtextsWrapper}>
          <p>
            {exp.date} (
            <DurationDate
              start={exp.date.split(' - ')[0]}
              end={exp.date.split(' - ')[1]}
            />
            )
          </p>
          <p>{exp.location}</p>
          <p>{exp.company.about}</p>
        </div>
        <TechTag tags={exp.techTags} />
        <ul className={classes.taskList}>
          {exp.tasks.map(task => (
            <li dangerouslySetInnerHTML={{ __html: task.text }} key={task.id} />
          ))}
        </ul>
      </div>
    </div>
  );
}
