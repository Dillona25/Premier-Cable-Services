import About from './components/About';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Work from './components/Work';

export default function App() {
  return (
    <main className="pcs-page" id="top">
      <Navbar />
      <Hero />
      <Services />
      <Work />
      <Testimonials />
      <About />
      <Contact />
    </main>
  );
}
