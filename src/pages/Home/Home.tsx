import { lazy } from 'react';

import HomeIntroSection from './components/HomeIntroSection.tsx';
import HomeProjectsSection from './components/HomeProjectsSection.tsx';
import HomeSkillsSection from './components/HomeSkillsSection.tsx';
const HomeExperiencesSection = lazy(
  () => import('./components/HomeExperiencesSection.tsx')
);

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
