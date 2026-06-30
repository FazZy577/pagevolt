import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Problem from '../components/Problem';
import Services from '../components/Services';
import Coverage from '../components/Coverage';
import Process from '../components/Process';
import Portfolio from '../components/Portfolio';
import Included from '../components/Included';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';
import LogoPreloader from '../components/LogoPreloader';
import PriceFloatingWidget from '../components/PriceFloatingWidget';

export default function Home() {
  return (
    <>
      <LogoPreloader />
      <CustomCursor />
      <PriceFloatingWidget />
      <Navbar />
      <Hero />
      <Problem />
      <Services />
      <Coverage />
      <Process />
      {/* <Portfolio /> */}
      <Included />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
