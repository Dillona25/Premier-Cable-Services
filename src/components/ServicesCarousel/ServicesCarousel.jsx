import { useState } from "react";
import { motion } from "framer-motion";
import { CarouselButton } from "../CarouselButton/CarouselButton";
import Splicing from "../../images/splicing2.png";
import OTDR from "../../images/OTDR.jpeg";
import FTTH from "../../images/FTTH.jpeg";

const servicesData = [
  {
    src: Splicing,
    title: "Fiberoptic Splicing",
    description:
      "We offer a range of tailored fiberoptic services at a very competitive price point",
  },
  {
    src: FTTH,
    title: "Fiber To The Home",
    description:
      "We offer a range of tailored fiberoptic services at a very competitive price point",
  },
  {
    src: OTDR,
    title: "OTDR Testing",
    description:
      "We offer a range of tailored fiberoptic services at a very competitive price point",
  },
];

export const ServicesCarousel = () => {
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [direction, setDirection] = useState(1);

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
        className="bg-white w-full h-fit p-3 pb-10 rounded-[20px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
        initial={{ x: `${direction === 1 ? "100%" : "-100%"}` }}
        animate={{ x: "0" }}
        transition={{ duration: 0.2 }}
        exit={{ x: `${direction === 1 ? "-100%" : "100%"}` }}
        key={currentServiceIndex}
      >
        <div className="flex flex-col">
          <img
            src={currentService.src}
            alt={currentService.title}
            className="rounded-[20px] h-[240px] w-full"
          />
          <h1 className="text-[26px] text-center">{currentService.title}</h1>
          <p className="text-center text-[16px]">
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
