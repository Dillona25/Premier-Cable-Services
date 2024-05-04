import PCSLogo from "../../images/PCSLogo.png";
import { NavButton } from "../Navbar/NavButton";
import { motion } from "framer-motion";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

export const MobileNavbar = ({ closeModal }) => {
  const location = useLocation();

  const navButtons = [
    { text: "Our Services", className: "border-t" },
    { text: "Client Reviews" },
    { text: "Portfolio" },
    { text: "Contact", to: "/Contact" },
    { text: "About us", to: "/About" },
  ];

  const showHomeButton =
    location.pathname === "/Contact" ||
    location.pathname === "/About" ||
    location.pathname === "/Careers";

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-5 backdrop-filter backdrop-blur-md"></div>
      <motion.div
        initial={{ x: -250 }}
        animate={{ x: 0 }}
        exit={{ opacity: 0 }}
        className="bg-white w-[250px] z-50 h-screen absolute left-0"
      >
        <button
          onClick={closeModal}
          className="bg-closeMenu h-[38px] w-[38px] mx-3 mt-5"
        ></button>
        <div className="flex flex-col">
          <img alt="PCS Logo" src={PCSLogo} />
          {showHomeButton && (
            <Link to="/">
              <NavButton
                text="Home"
                path="/"
                className="border-t-[#757575] border-t-[1px] border-b-0"
              />
            </Link>
          )}
          <ul className="font-Poppins font-bold">
            {navButtons.map((button, index) => (
              <Link to={button.to} key={index}>
                <NavButton text={button.text} className={button.className} />
              </Link>
            ))}
          </ul>
          <div className="flex flex-col absolute bottom-10 px-3">
            <p className="text-[14px] text-[#757575]">William Arnold</p>
            <p className="text-[14px] text-[#757575]">Owner and Operator</p>
            <p className="text-[14px] text-[#757575]">(402)-750-9933</p>
            <button className="bg-LinkedIn h-[48px] w-[48px] mt-2 ml-[-5px]"></button>
          </div>
        </div>
      </motion.div>
    </>
  );
};
