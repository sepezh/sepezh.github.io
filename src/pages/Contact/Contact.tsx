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
          description="Looking to partner or work together? Reach out through the form and
            I'll get back to you in the next 48 hours."
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
          </div>
        </IntroSection>
      </div>
    </main>
  );
}
