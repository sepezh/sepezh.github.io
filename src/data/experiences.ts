export type taskType = {
  id: number;
  text: string;
};

export type experienceType = {
  id: string;
  compony_id: string;
  compony_name: string;
  role: string;
  date: string;
  location: string;
  tasks: taskType[];
};

export const experiences: experienceType[] = [
  {
    id: '01',
    compony_id: 'auctores',
    compony_name: 'Auctores GmbH',
    role: 'Frontend Developer',
    date: 'April - Jun 2025',
    location: 'Neumarkt, Germany',
    tasks: [
      {
        id: 1,
        text: 'Prototyping mit firmeneigenem CMS, Next.js, React (TS) & Schnittstellendefinition',
      },
      {
        id: 2,
        text: 'Wiederverwendbare Komponenten (Entwicklung, Pflege, Refactoring)',
      },
      {
        id: 3,
        text: 'Storybook & Vitest (Dokumentation, Tests)',
      },
      {
        id: 4,
        text: 'Projektverantwortung & Zusammenarbeit mit UI/UX, Backend-Team und Projektleiter',
      },
    ],
  },
  {
    id: '02',
    compony_id: 'pp',
    compony_name: 'Parvan Pajooh',
    role: 'Frontend Developer',
    date: 'December 2019 - March 2023',
    location: 'Tehran, Iran',
    tasks: [
      {
        id: 1,
        text: 'Entwicklung und Pflege von Dashboards für B2B-Produkte',
      },
      {
        id: 2,
        text: 'Technische Konzeption neuer Features sowie Definition von REST-APIs',
      },
      {
        id: 3,
        text: 'Feature-Implementierung mit React, TypeScript, Redux u. a.',
      },
      {
        id: 4,
        text: 'Zusammenarbeit im agilen Scrum-Team mit Design, Dev und Produktmanagement',
      },
    ],
  },
  {
    id: '03',
    compony_id: 'rc',
    compony_name: 'Rahnema College',
    role: 'Frontend Developer',
    date: 'July - September 2019',
    location: 'Tehran, Iran',
    tasks: [
      {
        id: 1,
        text: 'CSS, Html5, React Native & Java + Redux & REST-APIs in agiler Umgebung',
      },
      {
        id: 2,
        text: 'Git in Teamprojekten',
      },
      {
        id: 3,
        text: 'Frontend-Komponenten mit Fokus auf Problemlösung & Design',
      },
      {
        id: 4,
        text: 'Zusammenarbeit im Scrum-Team',
      },
    ],
  },
];
