import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './pages/Root.tsx';
import ProjectsRoot from './pages/ProjectsRoot.tsx';
const Home = lazy(() => import('./pages/Home/Home.tsx'));
const About = lazy(() => import('./pages/About/About.tsx'));
const Projects = lazy(() => import('./pages/Projects/Projects.tsx'));
const Contact = lazy(() => import('./pages/Contact/Contact.tsx'));
const Project = lazy(() => import('./pages/Project/Project.tsx'));
import { projectLoader } from './pages/Project/projectLoader.ts';
import { ThemeProvider } from './context/theme-context.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    handle: { title: 'Home | Sepezh' },
    children: [
      {
        index: true,
        element: <Home />,
        handle: { title: 'Home | Sepezh' },
      },
      {
        path: 'about-me',
        element: <About />,
        handle: { title: 'About | Sepezh' },
      },
      {
        path: 'projects',
        element: <ProjectsRoot />,
        children: [
          {
            index: true,
            element: <Projects />,
            handle: { title: 'Projects | Sepezh' },
          },
          {
            path: ':projectName',
            element: (
              <Suspense fallback={<div>Loading project...</div>}>
                <Project />
              </Suspense>
            ),
            loader: projectLoader,
          },
        ],
      },
      {
        path: 'contact',
        element: <Contact />,
        handle: { title: 'Contact | Sepezh' },
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
