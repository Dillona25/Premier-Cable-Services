import { ReviewsContainer } from "./ReviewsContainer";

export const Reviews = () => {
  return (
    <section className="bg-white">
      <div className="flex flex-col gap-7">
        <div className="flex flex-col">
          <h1 className="leading-[50px]">Dont just take</h1>
          <span className="leading-[50px]">our word...</span>
          <p className="mt-5 max-w-[330px]">
            We've done work for over 5 trusted telecommunications companies.
            Serving over 300,000 customers. See what they have said.{" "}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-5 items-center py-[50px]">
        <ReviewsContainer />
        <ReviewsContainer />
        <ReviewsContainer />
      </div>
    </section>
  );
};
