import { useLocation } from "react-router";
import PCSLogo from "../../images/PCSLogo.png";

export const Navbar = ({ handleSideBarMenu }) => {
  const location = useLocation();
  return (
    <>
      <section
        className={
          location.pathname === "/Careeers"
            ? `flex items-center gap-2 pt-6 pb-0 absolute`
            : `flex items-center gap-2 pt-6 pb-0 absolute`
        }
      >
        <button
          onClick={handleSideBarMenu}
          className={
            location.pathname === "/Careers"
              ? `bg-MenuBlack h-[38px] w-[38px] xl:hidden`
              : `bg-Menu h-[38px] w-[38px] xl:hidden`
          }
        ></button>
      </section>
      <nav className="bg-white p-5 px-8">
        <div className="flex justify-between items-center">
          <img
            alt="Premier Cable Logo"
            src={PCSLogo}
            className="w-fit h-[40px]"
          />
          <div className="flex gap-10">
            <a className="text-[18px] text-black">Fiberoptic Services</a>
            <a className="text-[18px] text-black">Construction Services</a>
            <a className="text-[18px] text-black">Reviews</a>
            <a className="text-[18px] text-black">Careers</a>
          </div>
        </div>
      </nav>
    </>
  );
};
