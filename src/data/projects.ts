import secondProjectImg from '../assets/secondProjectImg.avif';
import nutriFitFullImg from '../assets/nutrifitFull.png';
import nutriFitMobileImg1 from '../assets/nutrifitMob1.png';
import nutriFitMobileImg2 from '../assets/nutrifitMob2.png';
import bookiFullImg from '../assets/bookiFull.png';
import bookiMobileImg1 from '../assets/bookiMob1.png';
import bookiMobileImg2 from '../assets/bookiMob2.png';
import brandhubFullImg from '../assets/brandhubFull.png';
import brandhubMobileImg1 from '../assets/brandhubMob1.png';
import brandhubMobileImg2 from '../assets/brandhubMob2.png';

export type featureType = {
  id: number;
  key: string;
  value: string;
};

export type projectType = {
  id: number;
  name: string;
  url?: string;
  githubUrl?: string;
  image: string;
  imagesMobile?: string[];
  description: string;
  techStack?: string[];
  about: string;
  features?: featureType[];
  chanllenges: string[];
  results: string[];
  client: string;
  year: number;
  role: string;
  variant: 'span2' | 'span3';
};

export const projects: projectType[] = [
  {
    id: 1,
    name: 'Booki',
    url: 'https://booki-t772.onrender.com',
    githubUrl: 'https://github.com/sepezh/booki',
    image: bookiFullImg,
    imagesMobile: [bookiMobileImg1, bookiMobileImg2],
    description:
      'Web app for borrowing and reviewing books, including reservation and management features for librarians',
    about:
      'Booki is a web application designed to connect library users with nearby collections, allowing them to reserve books, write reviews and rate their reading experience. It addresses the hassle of finding and borrowing books from local libraries by centralizing search, reservations and user feedback in one easy‑to‑use platform. The main goal is to simplify the library‑borrowing process and foster engagement between readers and their communities.',
    features: [
      {
        id: 1,
        key: 'Book Search',
        value: 'Browse and filter books by title, author, category or tag',
      },
      {
        id: 2,
        key: 'Reservations',
        value: 'Reserve copies from nearby libraries and view pickup status',
      },
      {
        id: 3,
        key: 'User Reviews',
        value: 'Submit reviews and star‑ratings for read books',
      },
      {
        id: 4,
        key: 'Library Management',
        value: 'Librarians can approve, decline or manage reservation requests',
      },
      {
        id: 5,
        key: 'Location‑Based Search',
        value:
          'Search for libraries within a specific distance from your address',
      },
    ],
    chanllenges: [
      'Geolocation accuracy – matching user‑entered addresses to nearby libraries required dealing with inconsistent OpenStreetMap results. A validation step was added to the address form and fallback logic retries the API to ensure a usable latitude/longitude before allowing a reservation.',
      'Role‑based access control – keeping librarians and regular users separated in views and admin panels led to duplicated checks. Custom decorators and group‑aware querysets were created so permission logic is centralized and reused across the application.',
    ],
    results: [
      'Delivered a fully functional library reservation system with user reviews and location‑based search',
      'Enabled librarians to manage requests and streamline pick‑ups, reducing manual tracking',
      'Integrated external geolocation API to accurately connect users with nearby branches',
      'Demonstrated proficiency in role‑based permissions, API handling, and clean, modular Django design',
    ],
    techStack: [
      'Django (Python web framework)',
      'Bootstrap (responsive UI)',
      'SQLite (lightweight database)',
      'OpenStreetMap API (geolocation service)',
      'Pylint / autopep8 (code quality tools)',
      'Git (version control)',
    ],
    client: 'Personal Project',
    year: 2024,
    role: 'Software Developer',
    variant: 'span2',
  },
  {
    id: 2,
    name: 'Taskflow',
    image: secondProjectImg,
    description:
      'Task management system with drag-and-drop, real-time collaboration, and responsive layout.',
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // features:
    //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    chanllenges: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    ],
    results: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    ],
    client: 'Personal Project',
    year: 2020,
    role: 'Software Developer',
    variant: 'span3',
  },
  {
    id: 3,
    name: 'Brandhub',
    url: 'https://sepezh.dev/bs4-glozzom/src/',
    githubUrl: 'https://github.com/sepezh/glozzom/',
    image: brandhubFullImg,
    imagesMobile: [brandhubMobileImg1, brandhubMobileImg2],
    description:
      'Polished ready-to-use website template that makes it easy to present your work and services in a professional format.',
    about:
      'This project is a polished website template for showcasing skills, projects, and services in a professional format. It addresses the need for a ready-made, visually consistent personal brand presence without spending time designing from scratch. The main goal is to make it easy to communicate value and credibility through an attractive, user-friendly online profile.',
    features: [
      {
        id: 1,
        key: 'Responsive Layout',
        value:
          'Clean, responsive layout that looks great on desktop and mobile devices',
      },
      {
        id: 2,
        key: 'Profile Sections',
        value:
          'Highlight about, services, experience, and testimonial content clearly',
      },
      {
        id: 3,
        key: 'Lead Capture',
        value: 'Collect client inquiries through an integrated contact section',
      },
      {
        id: 4,
        key: 'Smooth Navigation',
        value:
          'Easy page flow with anchored sections and intuitive menu controls',
      },
      {
        id: 5,
        key: 'Brand Consistency',
        value:
          'Maintain polished visual identity with consistent styling and tones',
      },
    ],
    chanllenges: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    ],
    results: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    ],
    techStack: [
      'HTML5 & CSS3',
      'Bootstrap 4',
      'JavaScript (ES6+)',
      'jQuery',
      'SASS/SCSS for styling workflow',
      'Gulp for asset automation'
    ],
    client: 'Personal Project',
    year: 2017,
    role: 'Software Developer',
    variant: 'span2',
  },
  {
    id: 4,
    name: 'Nutrifit',
    url: 'https://nutri-fit-nu.vercel.app/',
    githubUrl: 'https://github.com/sepezh/nutrifit',
    image: nutriFitFullImg,
    imagesMobile: [nutriFitMobileImg1, nutriFitMobileImg2],
    description:
      'A modern Next.js application for discovering and sharing high-protein recipes designed for athletes and active individuals.',
    techStack: [
      'Next.js 15',
      'React 19',
      'CSS Modules',
      'SQLite (better-sqlite3)',
      'AWS S3',
      'Slugify (URL generation)',
      ' XSS (security)',
      'ESLint (code quality)',
      'Node.js',
    ],
    about:
      'NutriFit provides a centralized platform where active people can explore and contribute recipe ideas focused on high-protein nutrition. It addresses the common challenge of finding practical meal options that support training goals and healthy lifestyles. The project emphasizes a clean, responsive experience and collaborative features that help users quickly discover, upload, and navigate content across devices. By streamlining meal discovery and sharing, NutriFit demonstrates a commitment to usability and community-driven design.',
    features: [
      {
        id: 1,
        key: 'Meal Discovery',
        value:
          'Browse a curated collection of high-protein, athlete-friendly recipes',
      },
      {
        id: 2,
        key: 'Community Sharing',
        value: 'Share your own recipes with other users and get feedback',
      },
      {
        id: 3,
        key: 'Image Upload',
        value: 'Upload meal photos directly to AWS S3 with secure storage',
      },
      {
        id: 4,
        key: 'Fast Search & Navigation',
        value:
          'Instantly find meals by category, protein content, or dietary needs',
      },
      {
        id: 5,
        key: 'Responsive Design',
        value: 'Fully optimized for mobile, tablet, and desktop experiences',
      },
      {
        id: 6,
        key: 'XSS Protection',
        value: 'Secure content handling to protect against malicious input',
      },
      {
        id: 7,
        key: 'Dynamic Routing',
        value: 'Efficient meal detail pages with URL-friendly slugs',
      },
    ],
    chanllenges: [
      'Implementing secure image uploads directly to AWS S3 from the client required coordinating presigned URLs while keeping credentials safe. The solution was to generate presigned PUT URLs on the server and validate file types before returning them, ensuring uploads never exposed AWS keys.',
      'Managing dynamic routing with slugs that stay unique and SEO-friendly presented edge cases when recipes had similar names. A slug generation step now checks for conflicts in the database and appends a counter when necessary, preventing collisions without user intervention.',
    ],
    results: [
      'Delivered a fully responsive recipe platform with secure media handling and dynamic content routing.',
      'Enabled community-driven sharing, increasing engagement through user uploads and feedback.',
      'Optimized page load times using server components and direct database queries.',
      'Demonstrated proficiency in modern Next.js features and cloud integration patterns.',
    ],
    client: 'Personal Project',
    year: 2025,
    role: 'Software Developer',
    variant: 'span3',
  },
];
