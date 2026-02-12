import HomeExperiencesSection from "./components/HomeExperiencesSection.tsx";
import HomeIntroSection from "./components/HomeIntroSection.tsx";
import HomeProjectsSection from "./components/HomeProjectsSection.tsx";
import HomeSkillsSection from "./components/HomeSkillsSection.tsx";

export default function Home() {
  return (
    <main>
      <HomeIntroSection />
      <HomeProjectsSection />
      <HomeExperiencesSection />
      <HomeSkillsSection />
    </main>
  );
}
