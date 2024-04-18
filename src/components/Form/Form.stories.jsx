import { FormError } from "./FormError";
import { FormInput } from "./FormInput";

export default {
  title: "Form Components",
  components: FormError,
  FormInput,
};

export const FormComponentStory = () => {
  return (
    <>
      <FormInput placeholder="Name" labelText="Name" />
      <FormError message={"You need at least 5 letters in your password"} />
    </>
  );
};
