import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Error404Img from '../assets/error404.png';
import Button from '../components/ui/Button/Button';

export default function Error() {
  return (
    <>
      <Header />
      <div className="error404-page">
        <img src={Error404Img} alt="Error 404" />
        <p>Ops! It seems this path is broken.</p>
        <Button href="/" variant="primary">
          Go back to home
        </Button>
      </div>
      <Footer />
    </>
  );
}
