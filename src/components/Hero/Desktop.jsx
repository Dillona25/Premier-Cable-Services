import Hero from "../../images/Hero.png";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";

export const HeroDesktop = () => {
  return (
    <div className="mt-[125px] mb-[50px] max-w-[1500px] m-auto">
      <div className="flex justify-evenly items-center gap-[75px]">
        <div className="flex flex-col justify-center max-w-[500px] xl:max-w-[650px]">
          <h1 className="text-[70px] xl:text-[90px] text-center lg:text-left ">
            Premier Cable
          </h1>
          <span className="text-[70px] text-center lg:text-left xl:text-[90px] xl:mt-3">
            Services
          </span>
          <p className="mt-10 text-center lg:text-left xl:max-w-[500px]">
            We are Premier Cable Services. With a team that has over 40 years in
            the industry we are providing impactful fiberoptic, and construction
            solutions in all of the midwest
          </p>
          <div className="flex m-auto lg:mx-0 gap-4 mt-10">
            <Link to="/Contact">
              <Button variant="primary">Contact</Button>
            </Link>
            <a href="#services">
              <Button variant="secondary">Services</Button>
            </a>
          </div>
        </div>
        <img
          alt="Image of splicer"
          src={Hero}
          className="hidden lg:block lg:h-[500px] xl:h-[600px] rounded-md"
        />
      </div>
    </div>
  );
};
