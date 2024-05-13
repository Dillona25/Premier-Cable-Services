import { ReviewsContainer } from "./ReviewsContainer";
import Consolidated from "../../images/Consolidated.png";
import Viaero from "../../images/Viaero.jpeg";
import Hamilton from "../../images/Hamilton.jpeg";

export const Reviews = () => {
  return (
    <section id="reviews" className="bg-white">
      <div className="flex flex-col gap-7">
        <div className="flex flex-col">
          <h1 className="leading-[50px]">Dont just take</h1>
          <span className="leading-[50px]">our word...</span>
          <p className="mt-5 max-w-[330px]">
            We've done work for multiple trusted telecommunications companies.
            Serving over 300,000 customers.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-12 py-[50px]">
        <ReviewsContainer
          description="Premier Cable Services LLC has been our trusted partner
           for fiber optic splicing for three years now. 
           We trust Premier to efficiently provide impactful fiber optic solutions."
          name="Shelby Hardin | Consolidated Co."
          src={Consolidated}
        />
        <ReviewsContainer
          description="I've had the pleasure of working with 
          Premier Cable on numerous successful projects.
          Their team consistently demonstrates punctuality, 
          delivering quality craftsmanship and excellent customer service on every occasion."
          name="Mike Peterson | Viaero Fiber Networks"
          src={Viaero}
          className="w-[50px] h-[40px]"
        />
        <ReviewsContainer
          description="
         Premier strives to deliver the highest quality product. The team has always been respectful of our customers and their property, 
         answers customer questions and concerns."
          name="Jerome Zulkoski | Hamilton Co."
          src={Hamilton}
          className="w-[80px] h-[40px]"
        />
      </div>
    </section>
  );
};
