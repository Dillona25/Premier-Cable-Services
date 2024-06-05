import { ServicesCard } from "../ServicesCard/ServicesCard";

export const OurServicesDesktop = () => {
  return (
    <section className="bg-white">
      <div className="flex flex-col max-w-[1500px] m-auto">
        <div className="flex gap-4 justify-evenly z-50">
          <ServicesCard />
          <ServicesCard />
          <ServicesCard />
        </div>
      </div>
    </section>
  );
};
