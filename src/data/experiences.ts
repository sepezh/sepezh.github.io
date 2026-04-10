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
    role: 'Frontend Developer',
    date: 'April 2025 - Jun 2025',
    location: 'Neumarkt, Germany',
    tasks: [
      {
        id: 1,
        text: 'Developed reusable <b>React</b> components using <b>TypeScript</b> to improve maintainability and scalability',
      },
      {
        id: 2,
        text: 'Built prototypes using <b>Next.js</b> and an internal <b>CMS</b> to validate new product ideas',
      },
      {
        id: 3,
        text: 'Documented and tested UI components with <b>Storybook</b> and <b>Vitest</b>',
      },
      {
        id: 4,
        text: 'Collaborated closely with UI/UX designers, backend developers and project managers in Scrum teams',
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
      'Storybook',
      'Vitest',
      'Scrum',
    ],
  },
  {
    id: '02',
    role: 'Frontend Developer',
    date: 'December 2019 - March 2023',
    location: 'Tehran, Iran',
    tasks: [
      {
        id: 1,
        text: 'Developed and maintained <b>B2B dashboards</b> using <b>React</b>, <b>TypeScript</b> and <b>Redux</b>',
      },
      {
        id: 2,
        text: 'Implemented new features and integrated <b>REST APIs</b> for dynamic data handling',
      },
      {
        id: 3,
        text: 'Improved user interfaces to enhance usability and responsiveness',
      },
      {
        id: 4,
        text: 'Worked closely with designers, developers and product managers in an <b>agile Scrum team</b>',
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
      'Redux',
      'Context API',
      'React Router',
      'Rest API',
      'Scrum',
    ],
  },
  {
    id: '03',
    role: 'Frontend Developer',
    date: 'July 2019 - September 2019',
    location: 'Tehran, Iran',
    tasks: [
      {
        id: 1,
        text: 'Built frontend components for mobile applications using <b>React Native</b>',
      },
      {
        id: 2,
        text: 'Integrated <b>REST APIs</b> to display and manage dynamic data',
      },
      {
        id: 3,
        text: 'Collaborated with teammates using <b>Git</b> in project-based development',
      },
      {
        id: 4,
        text: 'Contributed to UI improvements and bug fixes in an <b>agile</b> learning environment',
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
