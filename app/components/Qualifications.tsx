import Button from "./Button";

const summaryItems = [
  {
    label: "Legal name",
    value: "Premier Cable Services LLC",
  },
  {
    label: "Company Type",
    value: "Sole Owner/Single-Member LLC",
  },
  {
    label: "Founded",
    value: "2021",
  },
  {
    label: "Experience",
    value: "20+ years in Fiber work",
  },
  {
    label: "Service area",
    value: "Nationwide project support",
  },
  {
    label: "Bid support",
    value: "COI, W-9, references, and project details upon request",
  },
];

const capabilities = [
  "Fiber Splicing for single drop enclosures, mass count ribbon enclosures, SM/MM, ISP/OSP, and Aerial and Underground Plants.",
  "20+ years in Fiber work, including Large-Scale Fiber Splicing, Plant Construction, Testing/Validation/Documentation Projects, and Troubleshooting/Repair in ISP and OSP applications.",
  "Fiber Testing, Validation, Characterization, Auditing, and Supporting Documentation.",
  "Underground and Aerial Fiber Infrastructure Repair and Maintenance support.",
  "FTTH support for Service Drops, Terminations, Testing, and final-mile work.",
  "Central Office Fiber Work, Jumper Organization, Terminations, Testing, and handoff support.",
];

const equipmentGroups = [
  {
    label: "Fiber Splicing",
    items: [
      "Sumitomo Core Alignment Fusion Splicers",
      "Sumitomo Quantum Ribbon Splicers",
      "AFL Fujikura R90/R100",
    ],
  },
  {
    label: "Testing Platforms",
    items: [
      "Viavi OTDR, OLTS, and CD-PMD Testing/Characterization",
      "EXFO OTDR, OLTS, and CD-PMD Testing/Characterization",
    ],
  },
];

const standards = [
  "Clean routing, labeling, and splice protection practices.",
  "Organized work areas and clear closeout expectations.",
  "Owner involvement from project coordination through final test.",
  "Skilled technicians who take pride in the work from start to finish.",
  "Respect for active infrastructure, customer property, and jobsite requirements.",
];

const documentation = [
  "OTDR uni- or bi-directional traces, OLTS, multiple wavelengths, and CD-PMD with customer preference of Viavi or EXFO platforms.",
  "Closeout photos for Splice Cases, cabinets, CO Work, or field conditions.",
  "Fiber route, tray, jumper, and termination documentation when requested.",
  "Issue notes, Repair findings, and handoff details for follow-up work.",
];

const bidDocuments = [
  "Certificate of insurance",
  "W-9",
  "References",
  "Project availability",
  "Safety or onboarding forms",
  "Scope-specific pricing details",
];

const workEnvironments = [
  "Outside Plant and Field Fiber environments",
  "Splice Cases, cabinets, handholes, and Service Drops",
  "Underground and Aerial Plant Repair and Maintenance scopes",
  "Central Office Fiber rooms, racks, Jumpers, and Terminations",
  "Contractor, ISP, utility, builder, and network operator projects",
];

export default function Qualifications() {
  return (
    <section className="pcs-qualifications border-bottom border-pcs-dark">
      <div className="container-xl py-5">
        <div className="row g-4 g-lg-5 align-items-end py-4 py-lg-5 border-bottom border-pcs-dark">
          <div className="col-12 col-lg-8">
            <div className="d-flex align-items-center gap-3 mb-4">
              <span className="pcs-eyebrow-line" aria-hidden="true" />
              <p className="text-pcs-blue fw-bold text-uppercase small mb-0">
                Qualifications
              </p>
            </div>

            <h1 className="display-4 fw-black text-white lh-1 mb-4">
              Bid-ready fiber contractor qualifications.
            </h1>
            <p className="lead text-pcs-muted-light mb-0">
              Use this page to review our bid-ready details for nationwide
              field fiber work, contractor onboarding, and procurement
              qualification.
            </p>
          </div>

          <div className="col-12 col-lg-4">
            <Button
              className="pcs-qualifications__cta px-4 py-3"
              href="mailto:billarnold@premiercableservices.com?subject=Premier%20Cable%20Services%20Bid%20Qualifications"
              rel="noreferrer"
              target="_blank"
            >
              Request Bid Docs
            </Button>
            <p className="pcs-email-fallback d-none d-lg-block text-pcs-muted-light mb-0 mt-2">
              Or email billarnold@premiercableservices.com
            </p>
          </div>
        </div>

        <div className="row g-3 g-lg-4 py-5 border-bottom border-pcs-dark">
          {summaryItems.map((item) => (
            <div className="col-12 col-md-6 col-xl-4" key={item.label}>
              <div className="pcs-qualifications__summary h-100 p-4">
                <p className="text-pcs-blue small fw-bold text-uppercase mb-3">
                  {item.label}
                </p>
                <p className="h5 text-white fw-bold mb-0">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="row g-4 g-lg-5 py-5 border-bottom border-pcs-dark">
          <div className="col-12 col-lg-5">
            <h2 className="display-6 fw-black text-white lh-1 mb-4">
              Core capabilities.
            </h2>
            <p className="text-pcs-muted-light mb-0">
              We support the practical field work and closeout details that keep
              nationwide fiber scopes moving from installation to verified
              handoff.
            </p>
          </div>

          <div className="col-12 col-lg-7">
            <div className="pcs-qualifications__list">
              {capabilities.map((capability, index) => (
                <div
                  className="d-flex gap-3 py-3 border-bottom border-pcs-dark"
                  key={capability}
                >
                  <span className="text-pcs-blue small fw-bold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-pcs-muted-light mb-0">{capability}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="row g-4 g-lg-5 py-5 border-bottom border-pcs-dark">
          <div className="col-12 col-lg-5">
            <p className="text-pcs-blue small fw-bold text-uppercase mb-3">
              Equipment & Platforms
            </p>
            <h2 className="display-6 fw-black text-white lh-1 mb-4">
              Built around professional splicing and testing tools.
            </h2>
            <p className="text-pcs-muted-light mb-0">
              We bring professional splicing equipment and testing platforms to
              Single Fiber Splicing, Ribbon Splicing, OTDR, OLTS, and CD-PMD
              scopes.
            </p>
          </div>

          <div className="col-12 col-lg-7">
            <div className="row g-3">
              {equipmentGroups.map((group) => (
                <div className="col-12 col-md-6" key={group.label}>
                  <div className="pcs-qualifications__panel h-100 p-4">
                    <p className="text-pcs-blue small fw-bold text-uppercase mb-3">
                      {group.label}
                    </p>
                    <ul className="pcs-qualifications__bullets text-pcs-muted-light mb-0 ps-0">
                      {group.items.map((item) => (
                        <li className="d-flex gap-3 mb-3" key={item}>
                          <span
                            aria-hidden="true"
                            className="pcs-qualifications__dot mt-2"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="row g-4 g-lg-5 py-5 border-bottom border-pcs-dark">
          <div className="col-12 col-lg-6">
            <div className="pcs-qualifications__panel h-100 p-4 p-lg-5">
              <p className="text-pcs-blue small fw-bold text-uppercase mb-3">
                Field Standards
              </p>
              <h2 className="h2 text-white fw-black lh-1 mb-4">
                Clean work, clear handoff, direct accountability.
              </h2>
              <ul className="pcs-qualifications__bullets text-pcs-muted-light mb-0 ps-0">
                {standards.map((standard) => (
                  <li className="d-flex gap-3 mb-3" key={standard}>
                    <span aria-hidden="true" className="pcs-qualifications__dot mt-2" />
                    <span>{standard}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <div className="pcs-qualifications__panel h-100 p-4 p-lg-5">
              <p className="text-pcs-blue small fw-bold text-uppercase mb-3">
                Testing & Documentation
              </p>
              <h2 className="h2 text-white fw-black lh-1 mb-4">
                Verification support for closeout packages.
              </h2>
              <ul className="pcs-qualifications__bullets text-pcs-muted-light mb-0 ps-0">
                {documentation.map((item) => (
                  <li className="d-flex gap-3 mb-3" key={item}>
                    <span aria-hidden="true" className="pcs-qualifications__dot mt-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="row g-4 g-lg-5 py-5">
          <div className="col-12 col-lg-4">
            <p className="text-pcs-blue small fw-bold text-uppercase mb-3">
              Contractor Onboarding
            </p>
            <h2 className="display-6 fw-black text-white lh-1 mb-4">
              Bid packet details available directly.
            </h2>
            <p className="text-pcs-muted-light mb-0">
              Send the project scope, required documentation, service location,
              requested start window, and travel requirements to begin
              qualification or onboarding.
            </p>
          </div>

          <div className="col-12 col-lg-4">
            <h3 className="h5 text-white fw-bold mb-4">Available on request</h3>
            <div className="d-flex flex-wrap gap-2">
              {bidDocuments.map((document) => (
                <span
                  className="pcs-qualifications__tag small fw-bold"
                  key={document}
                >
                  {document}
                </span>
              ))}
            </div>
          </div>

          <div className="col-12 col-lg-4">
            <h3 className="h5 text-white fw-bold mb-4">
              Work environments
            </h3>
            <ul className="pcs-qualifications__bullets text-pcs-muted-light mb-0 ps-0">
              {workEnvironments.map((environment) => (
                <li className="d-flex gap-3 mb-3" key={environment}>
                  <span aria-hidden="true" className="pcs-qualifications__dot mt-2" />
                  <span>{environment}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
