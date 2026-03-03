import { useEffect } from 'react';
import { Outlet, useMatches } from 'react-router-dom';
import Header from '../components/Header/Header';
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
