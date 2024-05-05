import { Button } from "../components/Button/Button";
import { Form } from "../components/Form/Form";
import { FormInput } from "../components/Form/FormInput";
import { FormTextArea } from "../components/Form/FormTextInput";
import Email from "../assets/Email.svg";
import Phone from "../assets/Phone.svg";
import { Link } from "react-router-dom";

export const Contact = () => {
  return (
    <section className="flex flex-col gap-10">
      <div className="flex flex-col gap-2 mt-[50px]">
        <h1 className="text-white">Talk to us</h1>
        <p className="text-white">
          Looking for more information onj our services? Looking for a career?
          Fill out the formn below with an appropriate message and we wil get
          back to you!{" "}
        </p>
      </div>
      <div className="bg-[#f7f7f7] w-[350px] m-auto h-fit shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-[20px]">
        <Form className="py-7 flex flex-col gap-5 px-4">
          <FormInput labelText="Your Name" />
          <FormInput labelText="Your Email" />
          <FormTextArea labelText="Your Message" />
          <Button variant="primary" className="m-auto mt-4">
            Send Inquiry
          </Button>
        </Form>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex gap-3">
          <img src={Email} />
          <p>barnoldgpuc@gmail.com</p>
        </div>
        <div className="flex gap-3">
          <img src={Phone} />
          <p>(402)-750-9933</p>
        </div>
        <Link
          to="https://www.linkedin.com/in/william-arnold-810072293/"
          target="_blank"
          className="bg-LinkedIn w-[48px] h-[48px] ml-[-5px]"
        />
      </div>
    </section>
  );
};
