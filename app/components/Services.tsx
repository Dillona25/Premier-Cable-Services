import Image, { type StaticImageData } from "next/image";
import coImage from "../assets/central-office/CO-Service.png";
import ftthImage from "../assets/ftth/FTTH-Service.png";
import testingImage from "../assets/otdr-testing/OTDR-Testing.png";
import splicingImage from "../assets/splicing/Splice-Service.png";
import undergroundImage from "../assets/underground/Underground-Service-Vest.png";
import Button from "./Button";

type Service = {
  number: string;
  title: string;
  description: string;
  detail?: string;
  image: StaticImageData;
  imageClassName?: string;
};

const services: Service[] = [
  {
    number: "01",
    title: "Intricate Fiber Splicing",
    description:
      "Fiber Splicing from single drop enclosures to mass count ribbon enclosures, including SM/MM, ISP/OSP, and Aerial and Underground Plants.",
    detail:
      "Leveraging Sumitomo Core Alignment Fusion Splicers, Sumitomo Quantum Ribbon Splicers, AFL Fujikura R90/R100.",
    image: splicingImage,
  },
  {
    number: "02",
    title: "OTDR Testing, Fiber Characterization, Auditing and Documentation",
    description:
      "OTDR, OLTS, and CD-PMD Testing/Characterization, Auditing, documentation, and verification available in Viavi and EXFO platforms.",
    image: testingImage,
  },
  {
    number: "03",
    title: "Underground & Aerial Fiber Infrastructure",
    description:
      "Troubleshooting, restoration, Repair and Maintenance support for Underground and Aerial Fiber Infrastructure.",
    image: undergroundImage,
    imageClassName: "pcs-services__image--underground",
  },
  {
    number: "04",
    title: "FTTH & Service Drops",
    description:
      "FTTH support for Service Drops, Terminations, Testing, and final-mile network connections.",
    image: ftthImage,
  },
  {
    number: "05",
    title: "Central Office Work",
    description:
      "Fiber support for Central Office environments, Terminations, Jumpers, Testing, and organized handoff work.",
    image: coImage,
  },
];

export default function Services() {
  return (
    <section
      className="pcs-services border-bottom border-pcs-dark py-5"
      id="services"
    >
      <div className="container-xl py-4 py-lg-5">
        <div className="row g-4 g-lg-5 align-items-start">
          <div className="col-12 col-lg-5">
            <div className="position-sticky top-0 pt-lg-4">
              <div className="d-flex align-items-center gap-3 mb-4">
                <span className="pcs-eyebrow-line" aria-hidden="true" />
                <p className="text-pcs-blue fw-bold text-uppercase small mb-0">
                  Services
                </p>
              </div>

              <h2 className="display-6 fw-black text-white lh-1 mb-4">
                Fiber Contracting Services
              </h2>

              <p className="lead text-pcs-muted-light mb-4">
                We specialize in Fiber Splicing, Fiber Testing, Repair and
                Maintenance, FTTH, Underground and Aerial Fiber Infrastructure,
                and Central Office Fiber Work.
              </p>

              <Button className="mt-4 px-4 py-3" href="#contact">
                Get In Touch
              </Button>
            </div>
          </div>

          <div className="col-12 col-lg-7">
            <div className="pcs-services__list border-top border-pcs-dark">
              {services.map((service) => (
                <article
                  className="row g-3 align-items-center py-3 border-bottom border-pcs-dark"
                  key={service.number}
                >
                  <div className="col-12 col-md-3">
                    <div className="pcs-image-placeholder ratio ratio-16x9 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={`${service.title} field work`}
                        className={`object-fit-cover ${
                          service.imageClassName ?? ""
                        }`}
                        fill
                        sizes="(min-width: 992px) 14vw, (min-width: 768px) 30vw, 100vw"
                      />
                    </div>
                  </div>

                  <div className="col-12 col-md-9">
                    <div className="d-flex align-items-start gap-3">
                      <span className="text-pcs-blue fw-bold small pt-1">
                        {service.number}
                      </span>
                      <div>
                        <h3 className="h5 text-white fw-bold mb-2">
                          {service.title}
                        </h3>
                        <p className="text-pcs-muted-light small mb-0">
                          {service.description}
                        </p>
                        {service.detail ? (
                          <p className="text-pcs-muted-light small mb-0 mt-2">
                            {service.detail}
                          </p>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
