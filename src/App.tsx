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
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'about-me',
        element: <About />,
      },
      {
        path: 'projects',
        element: <Projects />,
      },
      {
        path: 'contact',
        element: <Contact />,
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
