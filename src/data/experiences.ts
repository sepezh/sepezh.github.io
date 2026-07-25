import { componies, type componyType } from './componies';

export type taskType = {
  id: number;
  text: string;
};

export type experienceType = {
  id: string;
  role: string;
  date: string;
  location: string;
  tasks: taskType[];
  company: componyType;
  techTags: string[];
};

export const experiences: experienceType[] = [
  {
    id: '01',
    role: 'Software Developer',
    date: 'April 2025 - Jun 2025',
    location: 'Neumarkt, Germany',
    tasks: [
      {
        id: 1,
        text: 'Delivered end‑to‑end React/TypeScript features with responsive, accessible UI',
      },
      {
        id: 2,
        text: 'Built Next.js prototypes with CMS + REST API integration',
      },
      {
        id: 3,
        text: 'Reduced UI bugs by 20% through Vitest/Storybook testing and refactoring',
      },
      {
        id: 4,
        text: 'Collaborated with design, backend, and product teams in Scrum; supported CI/CD workflows',
      },
    ],
    company: {
      compony_id: componies[0].compony_id,
      compony_name: componies[0].compony_name,
      about: componies[0].about,
    },
    techTags: [
      'React',
      'TypeScript',
      'Next.js',
      'Vitest',
      'CMS',
      'Storybook',
      'Scrum',
    ],
  },
  {
    id: '02',
    role: 'Frontend Engineer',
    date: 'December 2019 - April 2023',
    location: 'Tehran, Iran',
    tasks: [
      {
        id: 1,
        text: 'Delivered 100+ React/TypeScript dashboards for ~700K users, replacing manual reporting with real-time logistics monitoring',
      },
      {
        id: 2,
        text: 'Migrated legacy JavaScript/React codebase to TypeScript, improving maintainability and velocity',
      },
      {
        id: 3,
        text: 'Co-built a shared component library as one of three developers, enabling reusable components across dashboards',
      },
      {
        id: 4,
        text: 'Improved dashboard performance by 25% through refactoring and optimized data flows',
      },
      {
        id: 5,
        text: 'Ensured reliability with WCAG-compliant UI and Jest/Cypress testing in an agile Scrum environment',
      },
    ],
    company: {
      compony_id: componies[1].compony_id,
      compony_name: componies[1].compony_name,
      about: componies[1].about,
    },
    techTags: [
      'React',
      'TypeScript',
      'JavaScript',
      'Redux',
      'Context API',
      'React Router',
      'Rest API',
      'Scrum',
    ],
  },
  {
    id: '03',
    role: 'Software Engineer (Intern)',
    date: 'July 2019 - September 2019',
    location: 'Tehran, Iran',
    tasks: [
      {
        id: 1,
        text: 'Built React Native components and backend functionality in Java, contributing to full-stack product development',
      },
      {
        id: 2,
        text: 'Implemented UI designs and resolved usability issues with a focus on clean, maintainable frontend architecture',
      },
      {
        id: 3,
        text: 'Used Git for collaborative development and version control',
      },
      {
        id: 4,
        text: 'Participated in Scrum processes and contributed to a well-structured, maintainable codebase',
      },
    ],
    company: {
      compony_id: componies[2].compony_id,
      compony_name: componies[2].compony_name,
      about: componies[2].about,
    },
    techTags: ['React Native', 'Java', 'Rest Api', 'Git', 'Agile'],
  },
];
