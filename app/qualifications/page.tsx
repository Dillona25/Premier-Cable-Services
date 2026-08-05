import type { Metadata } from "next";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import Qualifications from "../components/Qualifications";

export const metadata: Metadata = {
  title: "Why us? View Oue Qualifications | Premier Cable Services",
  description:
    "Review Premier Cable Service's qualifications, experience, certifications, equipment, and documentation support for bid-ready Fiber Optic Contract Services.",
};

export default function QualificationsPage() {
  return (
    <main className="pcs-page" id="top">
      <Navbar />
      <Qualifications />
      <Contact />
    </main>
  );
}
