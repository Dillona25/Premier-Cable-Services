import type { Metadata } from 'next';
import Contact from '../components/Contact';
import Navbar from '../components/Navbar';
import Work from '../components/Work';

export const metadata: Metadata = {
  title: 'Our Work',
  description:
    'Field work photos from Premier Cable Services, including fiber splicing and central office support.',
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
