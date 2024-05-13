import { ServicesCarousel } from "../ServicesCarousel/ServicesCarousel";

export const OurServices = () => {
  return (
    <section id="services" className="flex flex-col gap-7">
      <div className="flex flex-col">
        <h1>Browse our</h1>
        <span className="leading-8">services</span>
      </div>
      <p>
        We offer a range of tailored fiberoptic services at a very competitive
        price point
      </p>
      <ServicesCarousel />
    </section>
  );
};
