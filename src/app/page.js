import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Process from './components/Process';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <div className="noise" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <About />
        <Services />
        <Gallery />
        <Process />
        <Stats />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
