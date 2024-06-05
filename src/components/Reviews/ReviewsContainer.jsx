import Quote from "../../assets/Quote.svg";

export const ReviewsContainer = ({ description, name, src }) => {
  return (
    <div>
      <div className="flex flex-col w-[350px] lg:w-[450px]">
        <img alt="company Logo" src={src} className="w-fit h-[100px] m-auto" />
        <img alt="quotation mark" src={Quote} className="h-10 w-12" />
        <p className="text-[#656565] text-[18px] lg:text-[20px] font-Poppins font-bold my-3 md:line-clamp-6">
          {description}
        </p>
        <p className="text-center">{name}</p>
      </div>
    </div>
  );
};
