export const NavButton = ({ text, className }) => {
  return (
    <button
      className={`text-[24px] font-normal text-[#757575] py-3 border-[#757575] text-left pl-3 border-b w-full ${className}`}
    >
      {text}
    </button>
  );
};
