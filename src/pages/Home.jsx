import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Problem from '../components/Problem';
import Services from '../components/Services';
import Process from '../components/Process';
import Portfolio from '../components/Portfolio';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';
import LogoPreloader from '../components/LogoPreloader';

export default function Home() {
  return (
    <>
      <LogoPreloader />
      <CustomCursor />
      <Navbar />
      <Hero />
      <Problem />
      <Services />
      <Process />
      {/* <Portfolio /> */}
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
