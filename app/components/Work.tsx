'use client';

import Image, { type StaticImageData } from 'next/image';
import { useState } from 'react';
import coTwo from '../assets/central-office/CO-2.jpeg';
import coThree from '../assets/central-office/CO-3.jpeg';
import coFour from '../assets/central-office/CO-4.jpeg';
import coFive from '../assets/central-office/CO-5.jpeg';
import splicingFour from '../assets/splicing/Sploicing-4.jpeg';
import splicingTwo from '../assets/splicing/Splicing-2.jpeg';
import splicingThree from '../assets/splicing/Splicing-3.jpeg';
import splicingSix from '../assets/splicing/Splicing-6.jpeg';
import splicingSeven from '../assets/splicing/Splicing-7.jpeg';
import splicingOne from '../assets/splicing/Splicing.jpeg';

const categories = ['All Work', 'Splicing', 'Central Office'] as const;

type WorkCategory = (typeof categories)[number];

type WorkItem = {
  category: Exclude<WorkCategory, 'All Work'>;
  title: string;
  description: string;
  image: StaticImageData;
  imageClassName?: string;
};

const workItems: WorkItem[] = [
  {
    category: 'Splicing',
    title: 'Splice Case Prep',
    description: 'We keep field setup and Splice Case work clean for organized Fiber Builds.',
    image: splicingOne,
  },
  {
    category: 'Splicing',
    title: 'Fiber Tray Organization',
    description: 'We focus on detailed Fiber Routing, tray organization, and Splice Protection.',
    image: splicingTwo,
  },
  {
    category: 'Splicing',
    title: 'Fusion Splicing',
    description: 'We handle hands-on Fusion Splicing for Repairs, Cutovers, and Service Extensions.',
    image: splicingThree,
  },
  {
    category: 'Splicing',
    title: 'Splice Enclosure Detail',
    description: 'We finish enclosure work with attention to Routing, Labeling, and cleanup.',
    image: splicingFour,
    imageClassName: 'pcs-work__image--splice-detail',
  },
  {
    category: 'Splicing',
    title: 'Splice Case Detail',
    description: 'Our close-up Fiber Work shows tray layout, Routing, and Splice Protection.',
    image: splicingSix,
  },
  {
    category: 'Splicing',
    title: 'Field Splicing Setup',
    description: 'We organize Splicing Setup for clean, dependable Field Execution.',
    image: splicingSeven,
  },
  {
    category: 'Central Office',
    title: 'Central Office Rack Work',
    description: 'We organize Central Office Fiber Routing, Jumpers, and Terminations.',
    image: coTwo,
  },
  {
    category: 'Central Office',
    title: 'CO Fiber Management',
    description: 'We support Fiber Management and patching in Central Office environments.',
    image: coThree,
  },
  {
    category: 'Central Office',
    title: 'Termination Support',
    description: 'We complete Central Office Termination work with clear Routing and dependable handoff.',
    image: coFour,
  },
  {
    category: 'Central Office',
    title: 'CO Testing & Handoff',
    description: 'We provide Testing, verification, and closeout support for Central Office Fiber Scopes.',
    image: coFive,
  },
];

export default function Work() {
  const [activeCategory, setActiveCategory] = useState<WorkCategory>('All Work');
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);
  const visibleWork =
    activeCategory === 'All Work'
      ? workItems
      : workItems.filter((item) => item.category === activeCategory);

  return (
    <section className="pcs-work border-bottom border-pcs-dark py-5" id="work">
      <div className="container-xl py-4 py-lg-5">
        <div className="row g-4 align-items-end mb-5">
          <div className="col-12 col-lg-7">
            <div className="d-flex align-items-center gap-3 mb-4">
              <span className="pcs-eyebrow-line" aria-hidden="true" />
              <p className="text-pcs-blue fw-bold text-uppercase small mb-0">Recent Work</p>
            </div>

            <h2 className="display-6 fw-black text-white lh-1 mb-3">
              A closer look at our field work.
            </h2>
            <p className="lead text-pcs-muted-light mb-0">
              We use this gallery to show Splice Cases, Testing, Repairs,
              Service Drops, Underground and Aerial Fiber Infrastructure, and
              Central Office Fiber Work.
            </p>
          </div>

          <div className="col-12 col-lg-5">
            <div className="d-flex flex-wrap justify-content-lg-end gap-2" role="tablist">
              {categories.map((category) => (
                <button
                  aria-selected={activeCategory === category}
                  className={`btn btn-sm pcs-work__tab ${activeCategory === category ? 'active' : ''}`}
                  key={category}
                  onClick={() => {
                    setActiveCategory(category);
                  }}
                  role="tab"
                  type="button"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="row g-4">
          {visibleWork.map((item, index) => (
            <article className="col-12 col-md-6 col-xl-4" key={`${item.category}-${item.title}`}>
              <div className="pcs-gallery-card h-100 overflow-hidden">
                <button
                  aria-label={`View ${item.title} image`}
                  className="pcs-gallery-card__image-button d-block w-100 border-0 p-0"
                  onClick={() => setSelectedWork(item)}
                  type="button"
                >
                  <span className="pcs-image-placeholder ratio ratio-4x3 d-block overflow-hidden">
                    <Image
                      src={item.image}
                      alt={`${item.title} field work`}
                      className={`object-fit-cover ${item.imageClassName ?? ''}`}
                      fill
                      sizes="(min-width: 1200px) 33vw, (min-width: 768px) 50vw, 100vw"
                    />
                  </span>
                </button>

                <div className="d-flex align-items-start justify-content-between gap-3 p-4">
                  <div>
                    <p className="text-pcs-blue small fw-bold text-uppercase mb-2">
                      {item.category}
                    </p>
                    <h3 className="h4 text-white fw-bold mb-2">{item.title}</h3>
                    <p className="text-pcs-muted-light mb-0">{item.description}</p>
                    <button
                      className="pcs-gallery-card__open text-pcs-blue small fw-bold mt-3 p-0 border-0"
                      onClick={() => setSelectedWork(item)}
                      type="button"
                    >
                      Open Image
                    </button>
                  </div>
                  <span className="text-pcs-muted-light small fw-bold">{String(index + 1).padStart(2, '0')}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {selectedWork ? (
          <div
            aria-modal="true"
            className="pcs-work-modal d-flex"
            onClick={() => setSelectedWork(null)}
            role="dialog"
          >
            <div
              className="pcs-work-modal__dialog d-flex flex-column gap-3"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                className="pcs-work-modal__close align-self-end p-0 border-0"
                onClick={() => setSelectedWork(null)}
                type="button"
              >
                Close
              </button>

              <div className="pcs-work-modal__image-card overflow-hidden">
                <Image
                  src={selectedWork.image}
                  alt={`${selectedWork.title} field work`}
                  className="pcs-work-modal__image"
                  sizes="92vw"
                />
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
