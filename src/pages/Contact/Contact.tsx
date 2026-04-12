import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons/faGithubSquare';
import { faLinkedinIn, faSquareXing } from '@fortawesome/free-brands-svg-icons';

import profileImg from '../../assets/Profile.jpg';
import IntroSection from '../../components/shared/IntroSection/IntroSection';
import classes from './contact.module.css';

export default function Contact() {
  return (
    <main>
      <div className={classes.contact}>
        <IntroSection
          subtitle={
            <>
              Get In Touch
              <span className="purple">.</span>
            </>
          }
          description="If you’re interested in working together or have an opportunity to discuss, feel free to reach out. I’m always open to new projects and collaborations."
          profileImg={profileImg}
        >
          <div className={classes.contactItemWrapper}>
            <a href="mailto:sepide.eslamnezhad@gmail.com">
              <span className={classes.iconsBorder}>
                <span className="material-symbols-rounded">mail</span>
              </span>
              sepide.eslamnezhad@gmail.com
            </a>

            <a href="tel:+491734627724">
              <span className={classes.iconsBorder}>
                <span className="material-symbols-rounded">call</span>
              </span>
              +49 173 462 7724
            </a>
            <div className={classes['contact-icons']}>
              <a
                href="https://www.github.com/sepezh"
                target="_blank"
                className={classes.link}
              >
                <FontAwesomeIcon icon={faGithubSquare}></FontAwesomeIcon>
                <span className={classes.tooltip}>GitHub</span>
              </a>
              <a
                href="https://www.xing.com/profile/Saeideh_Nezhad"
                target="_blank"
                className={classes.link}
              >
                <FontAwesomeIcon icon={faSquareXing} />
                <span className={classes.tooltip}>Xing</span>
              </a>
              <a
                href="https://www.linkedin.com/in/saeideh-nezhad/"
                target="_blank"
                className={classes.link}
              >
                <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
                <span className={classes.tooltip}>LinkedIn</span>
              </a>
            </div>
          </div>
        </IntroSection>
      </div>
    </main>
  );
}
