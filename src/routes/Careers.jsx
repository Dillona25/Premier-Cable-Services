import CareersImage from "../images/ContactImage.png";
import HealthInsurance from "../assets/HealthInsurance.svg";
import IRA from "../assets/IRA.svg";
import Calendar from "../assets/calendar.svg";
import { Button } from "../components/Button/Button";
import Steps from "../assets/Progress steps.svg";
import { Link } from "react-router-dom";

export const Careers = () => {
  return (
    <section className="px-0 py-0 pt-[50px]">
      <div className="bg-[#f4f4f4] mt-8 py-8 text-center flex flex-col border-y-[1px] border-[#757575]">
        <h1 className="leading-[50px]">Premier Cable Services</h1>
        <span className="leading-[50px]">careers</span>
        <Link to="/Contact">
          <Button variant="primary" className="mt-9 m-auto">
            Career Inquiry
          </Button>
        </Link>
      </div>
      <div className="flex flex-col gap-4 mt-5 px-4 text-center">
        <h1 className="text-[24px] mt-4 leading-3">More than just a check</h1>
        <p className="leading-[22px]">
          We have you covered. We know how important health, savings and
          flexibility are so we offer competitive benefits to fit your needs!
        </p>
      </div>
      <div className="flex px-4 mb-8 gap-2 mt-8">
        <img alt="Progress steps image" src={Steps} />
        <div className="flex flex-col h-[207px] justify-between">
          <div className="flex gap-2 items-center">
            <img
              src={HealthInsurance}
              alt="health insurance logo"
              className="h-8 w-8"
            />
            <p className="text-[20px] font-Poppins font-bold">
              Health insurance
            </p>
          </div>
          <div className="flex gap-2">
            <img src={IRA} alt="health insurance logo" className="h-8 w-8" />
            <p className="text-[20px] font-Poppins font-bold">
              IRA Investment match
            </p>
          </div>
          <div className="flex gap-2">
            <img
              src={Calendar}
              alt="health insurance logo"
              className="h-8 w-8"
            />
            <p className="text-[20px] font-Poppins font-bold">
              Paid holidays & vacation
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col border-y-[1px] border-[#757575] bg-[#f4f4f4] text-center pt-6 pb-12 px-4">
        <h1>Who we are</h1>
        <p className="leading-[22px] mt-5">
          Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar
          elementum tempus hac tellus libero accumsan. Lorem ipsum dolor sit
          amet consectetur adipiscing elit semper dalar elementum tempus hac
          tellus libero accumsan.{" "}
        </p>
        <img
          alt="Careers image"
          src={CareersImage}
          className="rounded-2xl mt-5"
        />
      </div>
    </section>
  );
};
