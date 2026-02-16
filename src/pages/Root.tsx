import { useEffect } from 'react';
import { Outlet, useMatches } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

export default function RootLayout() {
  const matches = useMatches();

  useEffect(() => {
    const handle = matches[matches.length - 1]?.handle as
      | { title?: string }
      | undefined;
    const title = handle?.title || 'Sepezh | Full Stack Developer';
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
