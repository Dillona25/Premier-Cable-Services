import type { Metadata } from 'next';
import Contact from '../components/Contact';
import Navbar from '../components/Navbar';
import Work from '../components/Work';

export const metadata: Metadata = {
  title: 'Our Work',
  description:
    'A look at our Field Work, including Fiber Splicing, Underground and Aerial Fiber Infrastructure, and Central Office support.',
};

export default function WorkPage() {
  return (
    <main className="pcs-page" id="top">
      <Navbar />
      <Work />
      <Contact />
    </main>
  );
}
