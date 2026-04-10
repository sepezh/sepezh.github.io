import { useState } from 'react';

import { experiences, type experienceType } from '../../../data/experiences';
import { componies, type componyType } from '../../../data/componies';
import classes from './HomeExperiencesSection.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import TechTag from '../../../components/ui/TechTag/TechTag';
import DurationDate from '../../../components/shared/DurationDate/DurationDate';

export default function HomeExperiencesSection() {
  const [selectedComponyId, setSelectedComponyId] =
    useState<string>('auctores');
  const [experienceNo, setExperienceNo] = useState<number>(0);
  const [fade, setFade] = useState<boolean>(false);

  const selectedExperience: experienceType | undefined = experiences.find(
    item => item.company.compony_id === selectedComponyId
  );

  const now = new Date();
  console.log(now.getUTCMonth(), 'NOW');

  const nextBtnHandler = () => {
    setFade(true);
    if (experienceNo < experiences.length - 1) {
      setTimeout(() => {
        setExperienceNo(prev => prev + 1);
        setSelectedComponyId(experiences[experienceNo + 1].company.compony_id);
        setFade(false);
      }, 200);
    }
  };

  const prevBtnHandler = () => {
    setFade(true);
    if (experienceNo > 0) {
      setTimeout(() => {
        setExperienceNo(prev => prev - 1);
        setSelectedComponyId(experiences[experienceNo - 1].company.compony_id);
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
              key={comp.compony_id}
              className={`${classes.listItem} ${
                selectedComponyId === comp.compony_id
                  ? classes.active
                  : undefined
              }`}
            >
              <div className={classes.border} />
              <span onClick={() => setSelectedComponyId(comp.compony_id)}>
                {comp.compony_name}
              </span>
            </li>
          ))}
        </ul>

        {selectedExperience && (
          <div
            className={`${classes.content} ${fade ? classes.fadeOut : classes.fadeIn}`}
            key={selectedExperience.company.compony_id}
          >
            <div>
              <h4 className={classes.role}>
                {selectedExperience.role}
                <span className="purple">
                  @ {selectedExperience.company.compony_name}
                </span>
              </h4>
              <div className={classes.subtextsWrapper}>
                <p>
                  {selectedExperience.date} (
                  <DurationDate
                    start={selectedExperience.date.split(' - ')[0]}
                    end={selectedExperience.date.split(' - ')[1]}
                  />
                  )
                </p>

                <p>{selectedExperience.company.about}</p>
              </div>
              <TechTag tags={selectedExperience.techTags} />
            </div>
            <ul className={classes.taskList}>
              {selectedExperience.tasks.map(task => (
                <li dangerouslySetInnerHTML={{ __html: task.text }} key={task.id} />
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
