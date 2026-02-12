import firstProjectImg from '../assets/firstProjectImg.avif';
import secondProjectImg from '../assets/secondProjectImg.avif';

export type projectType = {
  id: number;
  name: string;
  image: string;
  description: string;
  variant: 'span2' | 'span3';
};

export const projects: projectType[] = [
  {
    id: 1,
    name: 'Booki',
    image: firstProjectImg,
    description:
      'Web app for borrowing and reviewing books, including reservation and management features for librarians',
    variant: 'span2',
  },
  {
    id: 2,
    name: 'Taskflow',
    image: secondProjectImg,
    description:
      'Task management system with drag-and-drop, real-time collaboration, and responsive layout.',
    variant: 'span3',
  },
  {
    id: 3,
    name: 'Booki',
    image: firstProjectImg,
    description:
      'Web app for borrowing and reviewing books, including reservation and management features for librarians',
    variant: 'span2',
  },
  {
    id: 4,
    name: 'Taskflow',
    image: secondProjectImg,
    description:
      'Task management system with drag-and-drop, real-time collaboration, and responsive layout.',
    variant: 'span3',
  },
];
