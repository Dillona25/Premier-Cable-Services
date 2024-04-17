export const Button = ({ variant, children }) => {
  let buttonClass =
    "py-4 px-6 rounded-[30px] w-fit flex items-center hover:scale-[1.05] ease-in-out duration-[0.5s]";
  let arrowClass = "";

  if (variant === "primary") {
    buttonClass += " bg-[#98C1FF] text-white";
    arrowClass = "bg-ButtonArrow";
  } else if (variant === "secondary") {
    buttonClass += " bg-white border-[1px] border-[#757575] text-black";
  }

  return (
    <button className={buttonClass}>
      {children}
      {variant === "primary" && (
        <span className={`h-[18px] w-[18px] ml-2 ${arrowClass}`} />
      )}
    </button>
  );
};
