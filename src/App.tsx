import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home/Home.tsx';
import RootLayout from './pages/Root.tsx';
import About from './pages/About/About.tsx';
import Projects from './pages/Projects/Projects.tsx';
import Contact from './pages/Contact/Contact.tsx';
import { ThemeProvider } from './context/theme-context.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    handle: { title: 'Home | Sepezh' },
    children: [
      {
        path: '',
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
        element: <Projects />,
        handle: { title: 'Projects | Sepezh' },
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
