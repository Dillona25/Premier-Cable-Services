import { Button } from "./Button";

export default {
  title: "Button Components",
  component: Button,
};

export const ButtonStory = () => {
  return (
    <div className="flex flex-col gap-5">
      <Button variant="primary">Contact Us</Button>
      <Button variant="secondary">More About Us</Button>
    </div>
  );
};
