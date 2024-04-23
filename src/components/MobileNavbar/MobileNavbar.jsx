import PCSLogo from "../../images/PCSLogo.png";

export const MobileNavbar = ({ closeModal }) => {
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-5 backdrop-filter backdrop-blur-md"></div>
      <div className="bg-white w-[250px] z-50 h-screen absolute left-0">
        <button
          onClick={closeModal}
          className="bg-closeMenu h-[38px] w-[38px] mx-3 mt-5"
        ></button>
        <div className="flex flex-col">
          <img alt="PCS Logo" src={PCSLogo} />
          <ul className="font-Poppins font-bold">
            <NavButton text="Our Services" className="border-t" />
            <NavButton text="Client Reviews" />
            <NavButton text="Portfolio" />
            <NavButton text="Contact" />
            <NavButton text="About us" />
          </ul>
          <div className="flex flex-col absolute bottom-10 px-3">
            <p className="text-[14px] text-[#757575]">William Arnold</p>
            <p className="text-[14px] text-[#757575]">Owner and Operator</p>
            <p className="text-[14px] text-[#757575]">(402)-750-9933</p>
            <button className="bg-LinkedIn h-[48px] w-[48px] mt-2 ml-[-5px]"></button>
          </div>
        </div>
      </div>
    </>
  );
};

const NavButton = ({ text, className }) => {
  return (
    <button
      className={`text-[24px] text-[#757575] py-3 border-[#757575] text-left pl-3 border-b w-full ${className}`}
    >
      {text}
    </button>
  );
};
