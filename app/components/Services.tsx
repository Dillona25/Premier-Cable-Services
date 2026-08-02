import Image, { type StaticImageData } from "next/image";
import coImage from "../assets/central-office/CO-Service.png";
import ftthImage from "../assets/ftth/FTTH-Service.png";
import testingImage from "../assets/otdr-testing/OTDR-Testing.png";
import splicingImage from "../assets/splicing/Splice-Service.png";
import undergroundImage from "../assets/underground/Underground-Service.png";
import Button from "./Button";

type Service = {
  number: string;
  title: string;
  description: string;
  image: StaticImageData;
  imageClassName?: string;
};

const services: Service[] = [
  {
    number: "01",
    title: "Intricate Fiber Splicing",
    description:
      "Clean fusion splicing for new builds, repairs, cutovers, enclosures, cabinets, and service extensions.",
    image: splicingImage,
  },
  {
    number: "02",
    title: "OTDR Testing & Auditing",
    description:
      "Trace testing, documentation, and verification to confirm fiber performance before handoff.",
    image: testingImage,
  },
  {
    number: "03",
    title: "Underground Repair & Maintenance",
    description:
      "Troubleshooting, restoration, and maintenance support for buried fiber infrastructure and field networks.",
    image: undergroundImage,
    imageClassName: "pcs-services__image--underground",
  },
  {
    number: "04",
    title: "FTTH & Service Drops",
    description:
      "Fiber-to-the-home support for drops, terminations, testing, and final-mile network connections.",
    image: ftthImage,
  },
  {
    number: "05",
    title: "Central Office (CO) Work",
    description:
      "Fiber support for central office environments, terminations, jumpers, testing, and organized handoff work.",
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
        <div className="row g-5 align-items-start">
          <div className="col-12 col-lg-5">
            <div className="position-sticky top-0 pt-lg-4">
              <div className="d-flex align-items-center gap-3 mb-4">
                <span className="pcs-eyebrow-line" aria-hidden="true" />
                <p className="text-pcs-blue fw-bold text-uppercase small mb-0">
                  Services
                </p>
              </div>

              <h2 className="display-6 fw-black text-white lh-1 mb-4">
                Fiber Optic Services
              </h2>

              <p className="lead text-pcs-muted-light mb-4">
                Owner-operated support for splicing, testing, repair, FTTH, and
                central office fiber work.
              </p>

              <p className="text-pcs-muted-light mb-0">
                From new network builds to field restoration, PCS keeps the
                scope direct, organized, and ready for dependable handoff.
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
                  <div className="col-4 col-md-3">
                    <div className="pcs-image-placeholder ratio ratio-16x9 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={`${service.title} field work`}
                        className={`object-fit-cover ${
                          service.imageClassName ?? ""
                        }`}
                        fill
                        sizes="(min-width: 992px) 14vw, 30vw"
                      />
                    </div>
                  </div>

                  <div className="col-8 col-md-9">
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
