import About from './components/About';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Services from './components/Services';
import WorkBanner from './components/WorkBanner';
// import Testimonials from './components/Testimonials';

export default function App() {
  return (
    <main className="pcs-page" id="top">
      <Navbar />
      <Hero />
      <Services />
      <WorkBanner />
      {/* <Testimonials /> */}
      <About />
      <Contact />
    </main>
  );
}
