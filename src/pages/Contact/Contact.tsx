import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

import profileImg from '../../assets/Profile.png';
import IntroSection from '../../components/shared/IntroSection/IntroSection';
import classes from './contact.module.css';

export default function ContactMe() {
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
          description="Looking to partner or work together? Reach out through the form and
            I'll get back to you in the next 48 hours."
          profileImg={profileImg}
        >
          <div className={classes.contactItemWrapper}>
            <a href="mailto:sepide.eslamnezhad@gmail.com">
              <span>
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              sepide.eslamnezhad@gmail.com
            </a>
            <a href="tel:+491734627724">
              <span>
                <FontAwesomeIcon icon={faPhone} />
              </span>
              +49 173 462 7724
            </a>
          </div>
        </IntroSection>
      </div>
    </main>
  );
}
