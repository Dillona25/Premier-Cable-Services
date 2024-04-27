import CheckMark from "../../assets/CheckMark.svg";
import { Button } from "../Button/Button";

export const ActionCall = () => {
  return (
    <section className="flex flex-col">
      <h1>We'd love to</h1>
      <span className="leading-8">chat</span>
      <div className="flex flex-col gap-4 mt-8">
        <div className="flex items-center gap-4">
          <img
            src={CheckMark}
            alt="Check mark image"
            className="w-[18px] h-[14px]"
          />
          <p>Over 30 years in the industry</p>
        </div>
        <div className="flex items-center gap-4">
          <img
            src={CheckMark}
            alt="Check mark image"
            className="w-[18px] h-[14px]"
          />
          <p>Trusted by multiple well known companies</p>
        </div>
        <div className="flex items-center gap-4">
          <img
            src={CheckMark}
            alt="Check mark image"
            className="w-[18px] h-[14px]"
          />
          <p>Young competetive pricing</p>
        </div>
        <div className="flex gap-4 mt-6">
          <Button variant="primary">Contact Us</Button>
          <Button variant="secondary">More About Us</Button>
        </div>
      </div>
    </section>
  );
};
