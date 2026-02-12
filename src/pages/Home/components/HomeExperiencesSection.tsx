import { useState } from 'react';

import { experiences, type experienceType } from '../../../data/experiences';
import { componies, type componyType } from '../../../data/componies';
import classes from './HomeExperiencesSection.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function HomeExperiencesSection() {
  const [selectedComponyId, setSelectedComponyId] =
    useState<string>('auctores');
  const [experienceNo, setExperienceNo] = useState<number>(0);
  const [fade, setFade] = useState<boolean>(false);

  const selectedExperience: experienceType | undefined = experiences.find(
    item => item.compony_id === selectedComponyId
  );

  const nextBtnHandler = () => {
    setFade(true);
    if (experienceNo < experiences.length - 1) {
      setTimeout(() => {
        setExperienceNo(prev => prev + 1);
        setSelectedComponyId(experiences[experienceNo + 1].compony_id);
        setFade(false);
      }, 200);
    }
  };

  const prevBtnHandler = () => {
    setFade(true);
    if (experienceNo > 0) {
      setTimeout(() => {
        setExperienceNo(prev => prev - 1);
        setSelectedComponyId(experiences[experienceNo - 1].compony_id);
        setFade(false);
      }, 200);
    }
  };

  return (
    <section className={classes.experienceSection}>
      <h2>
        Experience<span className="purple">.</span>
      </h2>
      <div className={classes.compsListBorder}>
        <ul className={classes.compsList}>
          {componies.map((comp: componyType) => (
            <li
              key={comp.id}
              className={`${classes.listItem} ${
                selectedComponyId === comp.id ? classes.active : undefined
              }`}
              onClick={() => setSelectedComponyId(comp.id)}
            >
              <div className={classes.border} />
              <div>{comp.name}</div>
            </li>
          ))}
        </ul>

        {selectedExperience && (
          <div
            className={`${classes.content} ${fade ? classes.fadeOut : classes.fadeIn}`}
            key={selectedExperience.compony_id}
          >
            <div>
              <h4 className={classes.role}>
                {selectedExperience.role}{' '}
                <span className="purple">
                  @ {selectedExperience.compony_name}
                </span>
              </h4>
              <p className={classes.date}>{selectedExperience.date}</p>
            </div>
            <ul className={classes.taskList}>
              {selectedExperience.tasks.map(task => (
                <li key={task.id}>{task.text}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className={classes.paginationBtns}>
        <button onClick={prevBtnHandler} disabled={experienceNo === 0}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <button
          onClick={nextBtnHandler}
          disabled={experienceNo === experiences.length - 1}
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </section>
  );
}
