import profileImg from '../../../assets/Profile.jpg';
import IntroSection from '../../../components/shared/IntroSection/IntroSection';
import Button from '../../../components/ui/Button/Button';

export default function HomeIntroSection() {
  return (
    <section>
      <IntroSection
        greeting="Hey, I'm Sepide"
        emoji="👋🏻"
        title={
          <>
            <span className="purple">Front</span>end Developer
          </>
        }
        description="I build fast, scalable and user‑focused web applications with clean architecture, creating interactive, responsive and data‑driven interfaces focused on performance and seamless user experience."
        profileImg={profileImg}
      >
        <div className="BtnsWrapper">
          <Button href="public/Sepide_Nezhad_Lebenslauf.pdf" download variant="primary">
            Download CV
          </Button>
          <Button href="mailto:sepide.nezhad92@gmail.com" variant="primary">
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
