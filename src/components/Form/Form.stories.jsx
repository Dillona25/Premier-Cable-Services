import { FormError } from "./FormError";
import { FormInput } from "./FormInput";
import { FormTextArea } from "./FormTextInput";
import { Button } from "../Buttons/Button/Button";
import { Form } from "./Form";

export default {
  title: "Form Components",
  components: FormError,
  FormInput,
};

export const FormComponentStory = () => {
  return (
    <Form className="w-[420px]">
      <div className="flex gap-4 w-[420px]">
        <FormInput placeholder="First Name" labelText="First Name" />
        <FormInput placeholder="Last Name" labelText="Last Name" />
      </div>
      <FormInput placeholder="Email" labelText="Email" className="w-full" />
      <FormTextArea
        placeholder="Your message to us"
        labelText="Your Message"
        className="w-full"
      />
      <Button className="mt-4 m-auto" variant="primary">
        Send Message
      </Button>
    </Form>
  );
};
