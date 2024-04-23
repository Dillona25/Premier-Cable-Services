import { Button } from "../Buttons/Button/Button";

export const Hero = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col">
        <h1>Premier Cable</h1>
        <span>Services</span>
      </div>
      <p>
        We are Premier Cable Services. With a team that has over 40 years in the
        industry we are providing tailored and impactful fiberoptic solutions in
        all of the Midwest.
      </p>
      <div className="flex gap-4">
        <Button variant="primary">Contact Us</Button>
        <Button variant="secondary">More About Us</Button>
      </div>
    </div>
  );
};
