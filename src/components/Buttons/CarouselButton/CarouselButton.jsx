export const CarouselButton = ({ variant }) => {
  let buttonClass = "flex items-center justify-center h-16 w-16 rounded-full";
  let arrowClass = "w-7 h-7";

  if (variant === "back") {
    buttonClass += " bg-white border-[1px] border-[#757575]";
    arrowClass += " bg-CarouselLeft";
  } else if (variant === "forward") {
    buttonClass += " bg-[#757575]";
    arrowClass += " bg-CarouselRight";
  }

  return (
    <button className={buttonClass}>
      <div className={arrowClass}></div>
    </button>
  );
};
