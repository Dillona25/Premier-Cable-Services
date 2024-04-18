export const Button = ({ variant, children }) => {
  const buttonClasses = {
    base: "font-DMSans py-4 px-6 rounded-[30px] w-fit flex items-center hover:scale-[1.05] ease-in-out duration-[0.5s]",
    primary: "bg-[#98C1FF] text-white",
    secondary: "bg-white border-[1px] border-[#757575] text-black",
  };

  const arrowClass = variant === "primary" ? "bg-ButtonArrow" : "";

  const combinedClass = `${buttonClasses.base} ${buttonClasses[variant]}`;

  return (
    <button className={combinedClass}>
      {children}
      {variant === "primary" && (
        <span className={`h-[18px] w-[18px] ml-2 ${arrowClass}`} />
      )}
    </button>
  );
};
