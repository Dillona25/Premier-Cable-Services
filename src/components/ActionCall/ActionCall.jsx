import CheckMark from "../../assets/CheckMark.svg";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";

export const ActionCall = () => {
  return (
    <section className="flex flex-col relative max-w-[1500px] m-auto">
      <div className="z-10">
        <h1 className="md:text-[70px] md:leading-[70px] lg:hidden">
          We'd love to
        </h1>
        <span className="leading-8 md:text-[70px] md:leading-[70px] lg:hidden">
          chat
        </span>
        <h1 className="hidden lg:block text-[70px]">
          What are you waiting for?
        </h1>
        <span className="hidden lg:block text-[70px]">Lets chat</span>
        <div className="flex flex-col gap-4 mt-8">
          <div className="flex items-center gap-4">
            <img
              src={CheckMark}
              alt="Check mark image"
              className="w-[18px] h-[14px]"
            />
            <p className="md:text-[18px]">Over 30 years in the industry</p>
          </div>
          <div className="flex items-center gap-4">
            <img
              src={CheckMark}
              alt="Check mark image"
              className="w-[18px] h-[14px]"
            />
            <p className="md:text-[18px]">
              Trusted by multiple well known companies
            </p>
          </div>
          <div className="flex items-center gap-4">
            <img
              src={CheckMark}
              alt="Check mark image"
              className="w-[18px] h-[14px]"
            />
            <p className="md:text-[18px]">Young competetive pricing</p>
          </div>
          <div className="flex gap-4 mt-6">
            <Link to="/Contact">
              <Button variant="primary">Contact Us</Button>
            </Link>
            <Link to="/About">
              <Button variant="secondary">More About Us</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
