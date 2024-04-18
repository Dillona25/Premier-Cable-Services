import { CarouselButton } from "./CarouselButton";

export default {
  title: "Carousel Button",
  componenet: CarouselButton,
};

export const CarouselButtonStory = () => {
  return (
    <div className="flex gap-4">
      <CarouselButton variant="back" />
      <CarouselButton variant="forward" />
    </div>
  );
};
