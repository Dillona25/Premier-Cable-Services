import Image from "next/image";
import type { CSSProperties } from "react";
import logo from "../assets/PCS-Transparent-Logo.png";
import trucksImage from "../assets/Trucks.jpeg";

const contactMethods = [
  {
    label: "Call",
    value: "402-750-9933",
    href: "tel:+14027509933",
  },
  {
    label: "Email",
    value: "billarnold@premiercableservices.com",
    href: "mailto:billarnold@premiercableservices.com",
  },
  {
    label: "LinkedIn",
    value: "William Arnold",
    href: "https://www.linkedin.com/in/william-arnold-810072293/",
  },
];

export default function Contact() {
  const currentYear = new Date().getFullYear();
  const contactBackgroundStyle = {
    "--pcs-contact-bg": `url(${trucksImage.src})`,
  } as CSSProperties & { "--pcs-contact-bg": string };

  return (
    <section className="pcs-contact py-5" id="contact" style={contactBackgroundStyle}>
      <div className="container-xl pcs-contact__content py-4 py-lg-5">
        <div className="row g-5 align-items-end border-bottom border-pcs-dark pb-5 mb-5">
          <div className="col-12 col-lg-8">
            <div className="d-flex align-items-center gap-3 mb-4">
              <span className="pcs-eyebrow-line" aria-hidden="true" />
              <p className="text-pcs-blue fw-bold text-uppercase small mb-0">
                Contact
              </p>
            </div>

            <h2 className="display-5 fw-black text-white lh-1 mb-4">
              Ready to talk through a fiber job?
            </h2>
            <p className="lead text-pcs-muted-light mb-0">
              Reach out directly for fiber splicing, testing, repair,
              maintenance, FTTH, or CO support. No forms, no handoff queue, just
              a clear way to start the conversation.
            </p>
          </div>

          <div className="col-12 col-lg-4">
            <a
              className="btn pcs-button pcs-button--primary w-100 px-4 py-3 fw-bold"
              href="mailto:billarnold@premiercableservices.com"
            >
              Email Us
            </a>
          </div>
        </div>

        <div className="row g-4">
          {contactMethods.map((method) => (
            <div className="col-12 col-md-4" key={method.label}>
              <a
                className="pcs-contact__method d-flex flex-column justify-content-between h-100 p-3 p-lg-4 text-decoration-none"
                href={method.href}
                rel={method.label === "LinkedIn" ? "noreferrer" : undefined}
                target={method.label === "LinkedIn" ? "_blank" : undefined}
              >
                <span className="d-flex align-items-center justify-content-between gap-3 mb-3">
                  <span className="text-pcs-blue small fw-bold text-uppercase">
                    {method.label}
                  </span>
                  {method.label === "LinkedIn" ? (
                    <span className="pcs-contact__linkedin" aria-hidden="true">
                      <svg viewBox="0 0 448 512" role="img">
                        <path
                          d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8 0 24.1 24.1 0 53.79 0s53.79 24.1 53.79 53.8c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  ) : null}
                </span>
                <span className="pcs-contact__value">{method.value}</span>
              </a>
            </div>
          ))}
        </div>

        <div className="d-flex flex-column flex-lg-row align-items-lg-center justify-content-between gap-4 pt-5 mt-5 border-top border-pcs-dark">
          <div>
            <Image
              src={logo}
              alt="PCS logo"
              className="pcs-footer__logo d-block mb-3"
            />
            <p className="text-pcs-muted-light mb-0">
              Copyright @premiercableservices {currentYear}
            </p>
          </div>

          <nav
            className="d-flex flex-wrap justify-content-lg-end gap-3 gap-lg-4"
            aria-label="Footer navigation"
          >
            <a
              className="text-pcs-muted-light text-decoration-none fw-bold"
              href="#services"
            >
              Services
            </a>
            <a
              className="text-pcs-muted-light text-decoration-none fw-bold"
              href="#work"
            >
              Work
            </a>
            <a
              className="text-pcs-muted-light text-decoration-none fw-bold"
              href="#testimonials"
            >
              Testimonials
            </a>
            <a
              className="text-pcs-muted-light text-decoration-none fw-bold"
              href="#about"
            >
              About
            </a>
            <a
              className="text-pcs-muted-light text-decoration-none fw-bold"
              href="#contact"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </section>
  );
}
