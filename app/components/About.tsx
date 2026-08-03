import Image from 'next/image';
import ownerPhoto from '../assets/Owner.jpg';

export default function About() {
  return (
    <section className="pcs-about border-bottom border-pcs-dark py-5" id="about">
      <div className="container-xl py-4 py-lg-5">
        <div className="row justify-content-center mb-5">
          <div className="col-12 col-xl-10">
            <div className="d-flex align-items-center gap-3 mb-4">
              <span className="pcs-eyebrow-line" aria-hidden="true" />
              <p className="text-pcs-blue fw-bold text-uppercase small mb-0">About PCS</p>
            </div>

            <h2 className="display-6 fw-black text-white lh-1 mb-4">
              A small fiber contractor built around direct accountability.
            </h2>
          </div>
        </div>

        <div className="row g-4 g-lg-5 justify-content-center align-items-start">
          <div className="col-12 col-lg-7">
            <div className="pcs-about__story border-top border-pcs-dark pt-4">
              <p className="lead text-pcs-muted-light mb-4">
                Premier Cable Services provides hands-on fiber optic support for
                contractors, utilities, builders, network operators, and service
                providers that need clean field execution without layers of
                communication in the way.
              </p>

              <p className="text-pcs-muted-light mb-4">
                The company supports fiber splicing, OTDR testing, auditing,
                FTTH work, underground repair and maintenance, central office
                support, and field verification. Whether the job is a new build,
                a repair, a cutover, or a verification scope, the focus is the
                same: organized workmanship, accurate testing, and a network that
                is ready for dependable service.
              </p>

              <p className="text-pcs-muted-light mb-0">
                PCS is intentionally simple and owner-operated. That means the
                person coordinating the work is close to the field result, the
                details matter, and the handoff is treated as part of the job,
                not an afterthought.
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

              <p className="text-pcs-blue fw-bold text-uppercase small mb-3">About the owner</p>
              <h3 className="h2 text-white fw-black lh-1 mb-4">
                Hands-on from first call to final test.
              </h3>
              <p className="text-pcs-muted-light mb-0">
                As an owner-operated contractor, PCS keeps communication direct
                and the work personal. Every project gets the attention of
                someone whose name is attached to the result and whose standard
                is reflected in the finished fiber work.
              </p>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
