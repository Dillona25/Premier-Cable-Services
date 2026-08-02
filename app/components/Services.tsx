'use client';

import { useState } from 'react';

const services = [
  [
    {
      number: '01',
      title: 'Fiber Splicing',
      description:
        'Clean fusion splicing for new builds, repairs, cutovers, enclosures, cabinets, and service extensions.',
    },
    {
      number: '02',
      title: 'OTDR Testing & Auditing',
      description:
        'Trace testing, documentation, and verification to confirm fiber performance before handoff.',
    },
    {
      number: '03',
      title: 'Underground Repair & Maintenance',
      description:
        'Troubleshooting, restoration, and maintenance support for buried fiber infrastructure and field networks.',
    },
    {
      number: '04',
      title: 'FTTH & Service Drops',
      description:
        'Fiber-to-the-home support for drops, terminations, testing, and final-mile network connections.',
    },
  ],
  [
    {
      number: '05',
      title: 'And More...',
      description:
        'Additional field support for specialized fiber scopes, emergency issues, and contractor punch-list needs.',
    },
    {
      number: '06',
      title: 'Central Office (CO) Work',
      description:
        'Fiber support for central office environments, terminations, jumpers, testing, and organized handoff work.',
    },
    {
      number: '07',
      title: 'Data Center Fiber Support',
      description:
        'Structured fiber assistance for data center connections, testing, patching, and network turn-up support.',
    },
    {
      number: '08',
      title: 'Emergency Troubleshooting',
      description:
        'Responsive field support for outages, damaged fiber, failed links, and time-sensitive service restoration.',
    },
  ],
];

export default function Services() {
  const [activePage, setActivePage] = useState(0);
  const lastPage = services.length - 1;
  const visibleServices = services[activePage];

  const showPrevious = () => {
    setActivePage((page) => Math.max(page - 1, 0));
  };

  const showNext = () => {
    setActivePage((page) => Math.min(page + 1, lastPage));
  };

  return (
    <section className="pcs-services border-bottom border-pcs-dark py-5" id="services">
      <div className="container-xl py-4 py-lg-5">
        <div className="row g-5 align-items-start">
          <div className="col-12 col-lg-5">
            <div className="position-sticky top-0 pt-lg-4">
              <div className="d-flex align-items-center gap-3 mb-4">
                <span className="pcs-eyebrow-line" aria-hidden="true" />
                <p className="text-pcs-blue fw-bold text-uppercase small mb-0">Services</p>
              </div>

              <h2 className="display-6 fw-black text-white lh-1 mb-4">
                Field-ready fiber services from installation to repair.
              </h2>

              <p className="lead text-pcs-muted-light mb-4">
                Practical support for contractors, utilities, builders, and network
                operators who need dependable fiber work in the field.
              </p>

              <div className="pcs-image-placeholder ratio ratio-4x3 mt-4" aria-label="Project image placeholder" />
            </div>
          </div>

          <div className="col-12 col-lg-7">
            <div className="d-flex align-items-center justify-content-between gap-3 mb-3">
              <p className="text-pcs-muted-light small fw-bold text-uppercase mb-0">
                {visibleServices[0].number}-{visibleServices[visibleServices.length - 1].number}
              </p>
              <p className="text-pcs-muted-light small mb-0">
                {activePage + 1} / {services.length}
              </p>
            </div>

            <button
              aria-label="Show previous services"
              className="btn btn-sm pcs-services__control mb-3"
              disabled={activePage === 0}
              onClick={showPrevious}
              type="button"
            >
              &uarr;
            </button>

            <div className="pcs-services__list border-top border-pcs-dark">
              {visibleServices.map((service) => (
                <article
                  className="row g-4 align-items-center py-3 border-bottom border-pcs-dark"
                  key={service.number}
                >
                  <div className="d-none d-md-block col-md-4">
                    <div
                      className="pcs-image-placeholder ratio ratio-16x9"
                      aria-label={`${service.title} image placeholder`}
                    />
                  </div>

                  <div className="col-12 col-md-8">
                    <div className="d-flex align-items-start gap-3">
                      <span className="text-pcs-blue fw-bold small pt-1">
                        {service.number}
                      </span>
                      <div>
                        <h3 className="h4 text-white fw-bold mb-2">{service.title}</h3>
                        <p className="text-pcs-muted-light mb-0">{service.description}</p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="d-flex justify-content-end mt-3">
              <button
                aria-label="Show more services"
                className="btn btn-sm pcs-services__control"
                disabled={activePage === lastPage}
                onClick={showNext}
                type="button"
              >
                &darr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
