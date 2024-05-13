import { Link } from "react-router-dom";
import { useLocation } from "react-router";

export const Footer = () => {
  const location = useLocation();
  return (
    <footer
      className={location.pathname === "/Careers" ? `bg-white` : `bg-[#f4f4f4]`}
    >
      <div className="flex justify-between items-center border-b-[#757575] border-b-[1px] pb-5">
        <div className="flex flex-wrap justify-center gap-4">
          <p>Services</p>
          <p>Reviews</p>
          <Link to="/Contact" className="text-[#757575]">
            Contact
          </Link>
          <p>About Us</p>
          <Link to="/Careers" className="text-[#757575]">
            Careers
          </Link>
        </div>
      </div>
      <div className="text-center pt-5">
        <p>Copyright @ Premier Cable Services</p>
        <p>All rights reserved</p>
      </div>
    </footer>
  );
};
