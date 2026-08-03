import Image from "next/image";
import ownerPhoto from "../assets/Owner.jpg";

export default function About() {
  return (
    <section
      className="pcs-about border-bottom border-pcs-dark py-5"
      id="about"
    >
      <div className="container-xl py-4 py-lg-5">
        <div className="row justify-content-center mb-5">
          <div className="col-12 col-xl-10">
            <div className="d-flex align-items-center gap-3 mb-4">
              <span className="pcs-eyebrow-line" aria-hidden="true" />
              <p className="text-pcs-blue fw-bold text-uppercase small mb-0">
                About Premier Cable Services
              </p>
            </div>

            <h2 className="display-6 fw-black text-white lh-1 mb-4">
              Fiber services built around skilled field work.
            </h2>
          </div>
        </div>

        <div className="row g-4 g-lg-5 justify-content-center align-items-start">
          <div className="col-12 col-lg-7">
            <div className="pcs-about__story border-top border-pcs-dark pt-4">
              <p className="lead text-pcs-muted-light mb-4">
                Premier Cable Services provides hands-on fiber optic contract
                services for providers that need clean field execution without
                layers of communication in the way.
              </p>

              <p className="text-pcs-muted-light mb-4">
                We specialize in Fiber Splicing, Fiber Testing, Fiber Auditing,
                FTTH Work, Underground and Aerial Fiber Infrastructure, Central
                Office Support, and Field Verification. Whether the job is a new
                build, Repair, Cutover, or Verification scope, the focus is the
                same: organized workmanship, accurate testing, and a network
                that is ready for dependable service.
              </p>

              <p className="text-pcs-muted-light mb-0">
                PCS keeps the owner involved while placing real trust in skilled
                technicians who enjoy the work they do. From start to finish, the
                focus is pride in the work, attention to detail, and a finished
                result that meets the highest standard.
              </p>
            </div>
          </div>

          <div className="col-12 col-lg-5">
            <aside className="pcs-owner-panel p-4 p-lg-5">
              <Image
                src={ownerPhoto}
                alt="William Arnold, owner of Premier Cable Services"
                className="pcs-owner__photo d-block mb-4"
              />

              <p className="text-pcs-blue fw-bold text-uppercase small mb-3">
                About the owner
              </p>
              <h3 className="h2 text-white fw-black lh-1 mb-4">
                William Arnold
              </h3>
              <p className="text-pcs-muted-light mb-0">
                With more than 20 years in Fiber infrastructure and OSP
                Engineering, William helped bury thousands of miles of fiber
                across the rural Midwest before starting Premier Cable Services.
                He brings that wealth of experience into every project at PCS,
                keeping the work organized, accountable, and completed to a high
                standard with clean workmanship.
              </p>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
