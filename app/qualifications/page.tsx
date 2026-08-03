import type { Metadata } from "next";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import Qualifications from "../components/Qualifications";

export const metadata: Metadata = {
  title: "Qualifications",
  description:
    "Bid-ready qualifications for Premier Cable Services, including Fiber Splicing, Ribbon Splicing, Fiber Testing, Validation, Characterization, Underground and Aerial Fiber Infrastructure, documentation support, and contractor onboarding details.",
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
