export const Button = ({ variant, children, className }) => {
  const buttonClasses = {
    base: `font-DMSans py-4 px-6 rounded-[30px] text-[18px] w-fit flex items-center hover:scale-[1.05] ease-in-out duration-[0.5s] ${className}`,
    primary: "bg-[#98C1FF] text-white",
    secondary: "bg-white border-[1px] text-[#757575] border-[#757575]",
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
