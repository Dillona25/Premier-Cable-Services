import { useState } from "react";
import { motion, useCycle } from "framer-motion";
import { CarouselButton } from "../CarouselButton/CarouselButton";
import Splicing from "../../images/splicing2.png";
import OTDR from "../../images/OTDR.jpeg";
import FTTH from "../../images/FTTH.jpeg";

const servicesData = [
  {
    src: Splicing,
    title: "Fiberoptic Splicing",
    description:
      "Experience flawless connectivity with our fiberoptic splicing service. Our expert technicians ensure seamless joins for maximum data transmission efficiency, keeping your network running smoothly.",
  },
  {
    src: FTTH,
    title: "Fiber To The Home",
    description:
      "Elevate your home connectivity with our Fiber to the Home (FTTH) service. Experience lightning-fast internet speeds and crystal-clear multimedia streaming tailored to your household's needs.",
  },
  {
    src: OTDR,
    title: "OTDR Testing",
    description:
      "Optimize your network's performance with our OTDR testing service. Our skilled technicians utilize cutting-edge technology to accurately assess fiber optic networks, providing optimal functionality and reliability.",
  },
];

export const ServicesCarousel = () => {
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [angle, cycleAngle] = useCycle(45, -45);

  const nextSlide = () => {
    setCurrentServiceIndex((currentServiceIndex + 1) % servicesData.length);
    setDirection(1);
  };

  const prevSlide = () => {
    setCurrentServiceIndex(
      (currentServiceIndex - 1 + servicesData.length) % servicesData.length
    );
    setDirection(-1);
  };

  const currentService = servicesData[currentServiceIndex];

  return (
    <>
      <motion.div
        className="bg-white w-[350px] h-fit m-auto p-3 pb-10 rounded-[20px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
        initial={{ x: `${direction === 1 ? "100%" : "-100%"}`, rotate: angle }}
        animate={{ x: "0", rotate: 0 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
          duration: 0.2,
        }}
        exit={{ x: `${direction === 1 ? "-100%" : "100%"}`, rotate: angle }}
        key={currentServiceIndex}
      >
        <div className="flex flex-col">
          <img
            src={currentService.src}
            alt={currentService.title}
            className="rounded-[20px] h-[240px] w-full"
          />
          <h1 className="text-[26px] text-center">{currentService.title}</h1>
          <p className="text-center line-clamp-5">
            {currentService.description}
          </p>
        </div>
      </motion.div>
      <div className="flex gap-8 m-auto">
        <CarouselButton variant="back" onClick={prevSlide} />
        <CarouselButton variant="forward" onClick={nextSlide} />
      </div>
    </>
  );
};

export default ServicesCarousel;
