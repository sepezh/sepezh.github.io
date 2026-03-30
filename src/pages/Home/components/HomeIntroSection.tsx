import profileImg from '../../../assets/Profile.jpg';
import IntroSection from '../../../components/shared/IntroSection/IntroSection';
import Button from '../../../components/ui/Button/Button';

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
        <div className='BtnsWrapper'>
          <Button href="mailto:sepide.eslamnezhad@gmail.com" variant="primary">
            Get In Touch
          </Button>
          <Button to="/projects" variant="secondary">
            Brows Projects
          </Button>
        </div>
      </IntroSection>
    </section>
  );
}
