import profileImg from '../../../assets/Profile.png';
import IntroSection from '../../../components/shared/IntroSection/IntroSection';
import Button from '../../../components/ui/Button/Button';
import classes from './HomeIntroSection.module.css';

export default function HomeIntroSection() {
  return (
    <section>
      <IntroSection
        greeting="Hey, I'm Saeideh"
        emoji="👋🏻"
        title={
          <>
            <span className="purple">Front</span>end Developer
          </>
        }
        description="I'm a frontend developer based in Germany, I'll help you build
          beautiful websites your users will love."
        profileImg={profileImg}
      >
        <div className={classes.pBtns}>
          <Button href="mailto:sepide.eslamnezhad@gmail.com" variant="primary">
            Get In Touch
          </Button>
          <Button href="projectsPage.html" variant="secondary">
            Brows Projects
          </Button>
        </div>
      </IntroSection>
    </section>
  );
}
