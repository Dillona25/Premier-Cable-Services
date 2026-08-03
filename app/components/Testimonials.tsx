// Trusted company section removed from render for NDA reasons.
// import Image, { type StaticImageData } from 'next/image';
// import consolidatedLogo from '../assets/Consolidated-Logo.png';
// import hamiltonLogo from '../assets/Hamilton Communications.png';
// import nctLogo from '../assets/NCT-Logo.png';
// import Button from './Button';

// const trustedCompanies: Array<{
//   name: string;
//   logo: StaticImageData;
//   className?: string;
// }> = [
//   {
//     name: 'NCT',
//     logo: nctLogo,
//     className: 'pcs-trust-logo__image--nct',
//   },
//   {
//     name: 'Hamilton Communications',
//     logo: hamiltonLogo,
//   },
//   {
//     name: 'Consolidated',
//     logo: consolidatedLogo,
//   },
// ];

export default function Testimonials() {
  return null;
  // return (
  //   <section className="pcs-testimonials border-bottom border-pcs-dark py-5" id="testimonials">
  //     <div className="container-xl py-4 py-lg-5">
  //       <div className="row g-4 align-items-end justify-content-between mb-5">
  //         <div className="col-12 col-lg-6">
  //           <div className="d-flex align-items-center gap-3 mb-4">
  //             <span className="pcs-eyebrow-line" aria-hidden="true" />
  //             <p className="text-pcs-blue fw-bold text-uppercase small mb-0">Trusted By</p>
  //           </div>
  //
  //           <h2 className="display-6 fw-black text-white lh-1 mb-0">
  //             Trusted by regional communications teams and network operators.
  //           </h2>
  //         </div>
  //
  //         <div className="col-12 col-lg-4 text-lg-end">
  //           <Button
  //             className="pcs-testimonials__cta px-4 py-3"
  //             href="mailto:billarnold@premiercableservices.com?subject=Letter%20of%20Recommendations%20Request"
  //             rel="noreferrer"
  //             target="_blank"
  //             variant="secondary"
  //           >
  //             Request Letter of Recommendations
  //           </Button>
  //           <p className="pcs-email-fallback d-none d-lg-block text-pcs-muted-light mb-0 mt-2">
  //             Or email billarnold@premiercableservices.com
  //           </p>
  //         </div>
  //       </div>
  //
  //       <div className="row g-3 g-lg-4 align-items-stretch">
  //         {trustedCompanies.map((company) => (
  //           <div className="col-12 col-md-4" key={company.name}>
  //             <div className="pcs-trust-logo d-flex align-items-center justify-content-center h-100 p-4">
  //               <Image
  //                 src={company.logo}
  //                 alt={`${company.name} logo`}
  //                 className={`pcs-trust-logo__image ${company.className ?? ''}`}
  //                 sizes="(min-width: 768px) 28vw, 80vw"
  //               />
  //             </div>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   </section>
  // );
}
