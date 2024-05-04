import { useLocation } from "react-router";

export const Navbar = ({ handleSideBarMenu }) => {
  const location = useLocation();
  return (
    <section className="flex items-center gap-2 pt-6 pb-0 absolute">
      <button
        onClick={handleSideBarMenu}
        className={
          location.pathname === "/Careers"
            ? `bg-MenuBlack h-[38px] w-[38px]`
            : `bg-Menu h-[38px] w-[38px]`
        }
      ></button>
    </section>
  );
};
