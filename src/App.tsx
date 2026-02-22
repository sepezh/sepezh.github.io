import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home/Home.tsx';
import RootLayout from './pages/Root.tsx';
import About from './pages/About/About.tsx';
import Projects from './pages/Projects/Projects.tsx';
import Project, { projectLoader } from './pages/Project/Project.tsx';
import Contact from './pages/Contact/Contact.tsx';
import { ThemeProvider } from './context/theme-context.tsx';
import ProjectsRoot from './pages/ProjectsRoot.tsx';

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
            element: <Project />,
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
