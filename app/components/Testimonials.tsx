const testimonials = [
  {
    name: 'Client Name',
    company: 'Utility Partner',
    review:
      'Premier Cable Services handled the fiber work with clear communication, clean splicing, and dependable testing from start to finish.',
  },
  {
    name: 'Client Name',
    company: 'Network Contractor',
    review:
      'The work was organized, documented, and completed to the standard we needed for a smooth project handoff.',
  },
  {
    name: 'Client Name',
    company: 'Broadband Provider',
    review:
      'PCS was responsive in the field and helped resolve fiber issues quickly without sacrificing quality or documentation.',
  },
];

export default function Testimonials() {
  return (
    <section className="pcs-testimonials border-bottom border-pcs-dark py-5" id="testimonials">
      <div className="container-xl py-4 py-lg-5">
        <div className="row g-4 align-items-end mb-5">
          <div className="col-12 col-lg-7">
            <div className="d-flex align-items-center gap-3 mb-4">
              <span className="pcs-eyebrow-line" aria-hidden="true" />
              <p className="text-pcs-blue fw-bold text-uppercase small mb-0">Testimonials</p>
            </div>

            <h2 className="display-6 fw-black text-white lh-1 mb-0">
              Straightforward feedback from the people who rely on the work.
            </h2>
          </div>
          <div className="col-12 col-lg-5">
            <p className="lead text-pcs-muted-light mb-0">
              Replace these placeholders with real customer quotes as they become
              available.
            </p>
          </div>
        </div>

        <div className="row g-4">
          {testimonials.map((testimonial) => (
            <div className="col-12 col-md-4" key={`${testimonial.company}-${testimonial.name}`}>
              <article className="pcs-testimonial h-100 p-4">
                <div className="d-flex align-items-center gap-3 mb-4">
                  <div
                    className="pcs-testimonial__logo flex-shrink-0"
                    aria-label={`${testimonial.company} logo placeholder`}
                  />
                  <div>
                    <h3 className="h5 text-white fw-bold mb-1">{testimonial.name}</h3>
                    <p className="text-pcs-blue small fw-bold mb-0">{testimonial.company}</p>
                  </div>
                </div>

                <p className="text-pcs-muted-light mb-0">{testimonial.review}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
