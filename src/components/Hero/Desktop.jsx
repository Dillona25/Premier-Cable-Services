import Hero from "../../images/Hero.png";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";

export const HeroDesktop = () => {
  return (
    <div className="mt-[125px] mb-[50px]">
      <div className="flex justify-evenly gap-[75px]">
        <div className="flex flex-col justify-center max-w-[500px] xl:max-w-[700px]">
          <h1 className="text-[70px] xl:text-[90px] xl:mb-5">Premier Cable</h1>
          <span className="text-[70px] xl:text-[90px]">Services</span>
          <p className="mt-10 xl:max-w-[500px]">
            We are Premier Cable Services. With a team that has over 40 years in
            the industry we are providing impactful fiberoptic, and construction
            solutions in all of the midwest
          </p>
          <div className="flex gap-4 mt-10">
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
          className="h-[600px] xl:h-[700px] rounded-md"
        />
      </div>
    </div>
  );
};
