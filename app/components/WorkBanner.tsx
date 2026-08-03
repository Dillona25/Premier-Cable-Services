import Button from "./Button";

export default function WorkBanner() {
  return (
    <section className="pcs-work-banner py-4">
      <div className="container-xl">
        <div className="d-flex flex-column flex-lg-row align-items-start align-items-lg-center justify-content-between gap-3">
          <div>
            <p className="text-white fw-bold text-uppercase small mb-2">
              Our Work
            </p>
            <h2 className="h3 fw-black text-white mb-0">
              See images of our Splice Cases, Central Office Work, and more.
            </h2>
          </div>

          <Button
            className="pcs-work-banner__cta px-4 py-3"
            href="/work"
            variant="secondary"
          >
            View Our Work
          </Button>
        </div>
      </div>
    </section>
  );
}
