import Quote from "../../assets/Quote.svg";

export const ReviewsContainer = ({ description, name, src, className }) => {
  return (
    <div>
      <div className="flex flex-col w-[350px]">
        <img alt="quotation mark" src={Quote} className="h-10 w-12" />
        <p className="text-[#656565] text-[20px] font-Poppins font-bold my-3">
          {description}
        </p>
        <div className="flex gap-2 justify-center items-center">
          <img
            alt="company logo"
            src={src}
            className={`h-6 w-6 ${className}`}
          />
          <p>{name}</p>
        </div>
      </div>
    </div>
  );
};
