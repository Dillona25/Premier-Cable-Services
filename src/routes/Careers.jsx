import CareersImage from "../images/ContactImage.png";
import HealthInsurance from "../assets/HealthInsurance.svg";
import IRA from "../assets/IRA.svg";
import Calendar from "../assets/calendar.svg";
import { Form } from "../components/Form/Form";
import { FormInput } from "../components/Form/FormInput";
import { FormTextArea } from "../components/Form/FormTextInput";
import { Button } from "../components/Button/Button";

export const Careers = () => {
  return (
    <section>
      <div className="mt-[50px] flex flex-col gap-4 border-b-[1px] border-[#757575] pb-7">
        <h1 className="text-[50px] leading-none">Join our team</h1>
        <p>
          Looking to join our team? We offer great benfits and flexibility. Fill
          out the form below and we will get back within 1-3 business days!
        </p>
        <img
          alt="Careers image"
          src={CareersImage}
          className="rounded-[10px]"
        />
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <p className="text-[20px]">What we offer</p>
        <div className="flex gap-2  items-center">
          <img alt="Insurance Image" src={HealthInsurance} />
          <p className="text-[18px]">Health Insurance</p>
        </div>
        <div className="flex gap-2  items-center">
          <img alt="Insurance Image" src={IRA} />
          <p className="text-[18px]">Matched investment account</p>
        </div>
        <div className="flex gap-2  items-center">
          <img alt="Insurance Image" src={Calendar} />
          <p className="text-[18px]">Paid holidays & vacation</p>
        </div>
      </div>
      <div className="bg-[#f7f7f7] mt-10 w-[350px] m-auto h-fit shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-[20px]">
        <Form className="py-7 flex flex-col gap-5 px-4">
          <FormInput labelText="Your Name" />
          <FormInput labelText="Your Email" />
          <FormTextArea labelText="Your Message" />
          <Button variant="primary" className="m-auto mt-4">
            Send Inquiry
          </Button>
        </Form>
      </div>
    </section>
  );
};
