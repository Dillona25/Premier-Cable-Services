import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Services from './components/Services';

export default function App() {
  return (
    <main className="pcs-page" id="top">
      <Navbar />
      <Hero />
      <Services />
    </main>
  );
}
