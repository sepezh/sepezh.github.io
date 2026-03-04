import { lazy } from 'react';

import AboutIntroSection from './components/AboutIntroSection';
const AboutSkillsSection = lazy(() => import('./components/AboutSkillsSection'));
const AboutExperiencesSection = lazy(
  () => import('./components/AboutExperiencesSection')
);
import AboutStorySection from './components/AboutStorySection';

export default function About() {
  return (
    <main>
      <AboutIntroSection />
      <AboutSkillsSection />
      <AboutStorySection />
      <AboutExperiencesSection />
    </main>
  );
}
