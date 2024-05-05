import CenconLogo from "../../assets/CenconLogo.svg";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";

export const UndergroundServices = () => {
  return (
    <>
      <div className="bg-[#757575]">
        <div className="flex gap-2 justify-center">
          <h1 className="text-[18px] text-white">
            Partners with Cencon
            <span className="text-[18px] text-[#FF8719]">of</span>Kansas
          </h1>
          <img src={CenconLogo} alt="Cencon Logo" />
        </div>
      </div>
      <div className="flex flex-col gap-6 px-6 bg-Cencon bg-cover bg-center py-[50px]">
        <h1 className="text-[50px text-white text-center leading-[50px]">
          In need of underground services?
        </h1>
        <p className="text-center text-[#f4f4f4]">
          We are Premier Cable Services. With a team that has over 40 years in
          the industry we are providing impactful fiberoptic, and construction
          solutions in all of the midwest
        </p>
        <Link to="/Contact">
          <Button variant="secondary" className="m-auto">
            Learn more
          </Button>
        </Link>
      </div>
    </>
  );
};
