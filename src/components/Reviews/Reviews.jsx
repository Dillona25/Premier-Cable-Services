import { ReviewsContainer } from "./ReviewsContainer";
import { ReviewsTitle } from "./ReviewsTitle";

export const Reviews = () => {
  return (
    <>
      <ReviewsTitle />
      <div className="flex flex-col gap-5 items-center py-[50px]">
        <ReviewsContainer />
        <ReviewsContainer />
        <ReviewsContainer />
      </div>
    </>
  );
};
