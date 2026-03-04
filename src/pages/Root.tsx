import { lazy, useEffect } from 'react';
import { Outlet, useMatches } from 'react-router-dom';

const Header = lazy(() => import('../components/Header/Header'));
import Footer from '../components/Footer/Footer';

export default function RootLayout() {
  const matches = useMatches();

  useEffect(() => {
    const lastMatch = matches[matches.length - 1];
    const title =
      (lastMatch.handle as { title?: string })?.title ||
      (lastMatch.data as { title?: string })?.title ||
      'Full Stack Developer | Sepezh';

    document.title = title;
  }, [matches]);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
