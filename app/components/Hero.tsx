import Image from "next/image";
import type { StaticImageData } from "next/image";
import consolidatedLogo from "../assets/Consolidated-Logo.png";
import hamiltonLogo from "../assets/Hamilton Communications.png";
import heroImage from "../assets/man-splicing.jpeg";
import viaeroLogo from "../assets/Viaero.png";
import Button from "./Button";

const trustedCompanies: Array<{
  name: string;
  logo: StaticImageData;
  className?: string;
}> = [
  {
    name: "Viaero",
    logo: viaeroLogo,
    className: "pcs-hero-trust__logo--viaero",
  },
  {
    name: "Hamilton Communications",
    logo: hamiltonLogo,
    className: "pcs-hero-trust__logo--hamilton",
  },
  {
    name: "Consolidated",
    logo: consolidatedLogo,
    className: "pcs-hero-trust__logo--consolidated",
  },
];

export default function Hero() {
  return (
    <section className="pcs-hero position-relative overflow-hidden border-bottom border-pcs-dark">
      <div className="pcs-hero__image-wrap" aria-hidden="true">
        <Image
          src={heroImage}
          alt=""
          className="pcs-hero__image"
          fill
          priority
          sizes="(min-width: 992px) 62vw, 100vw"
        />
      </div>

      <div className="container-xl position-relative z-1">
        <div className="row align-items-center">
          <div className="col-12 col-lg-8 col-xl-7 py-5 my-lg-5">
            <div className="d-flex align-items-center gap-3 mb-4">
              <span className="pcs-eyebrow-line" aria-hidden="true" />
              <p className="text-pcs-blue fw-bold text-uppercase small mb-0">
                Premier Cable Services
              </p>
            </div>

            <h1 className="pcs-hero__heading display-4 fw-black text-white lh-1 mb-4">
              Expanding Broadband &
              <span className="d-block">Connecting Communities.</span>
            </h1>

            <p className="lead text-pcs-muted-light mb-4 pe-lg-4">
              Premier Cable Services provides owner-operated fiber splicing,
              OTDR testing, auditing, FTTH support, and repair and maintenance
              for fiber infrastructure. We strive to ensure every job is
              completed to a high standard with clean workmanship.
            </p>

            <div className="d-flex flex-wrap align-items-center gap-3 mb-5">
              <Button className="px-4 py-3" href="#contact" variant="primary">
                Get In Touch
              </Button>
              <Button
                className="px-4 py-3"
                href="#services"
                variant="secondary"
              >
                View Services
              </Button>
            </div>

            <div className="pcs-hero-trust">
              <p className="text-pcs-muted-light small fw-bold text-uppercase mb-3">
                Trusted by
              </p>
              <div className="d-flex flex-wrap align-items-center gap-2 gap-sm-3">
                {trustedCompanies.map((company) => (
                  <div
                    className="pcs-hero-trust__tile d-flex align-items-center justify-content-center px-3 py-2"
                    key={company.name}
                  >
                    <Image
                      src={company.logo}
                      alt={`${company.name} logo`}
                      className={`pcs-hero-trust__logo ${
                        company.className ?? ""
                      }`}
                      sizes="9rem"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
