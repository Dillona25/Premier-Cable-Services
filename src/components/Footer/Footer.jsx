import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="flex justify-between items-center border-b-[#757575] border-b-[1px] pb-5">
        <div className="flex flex-wrap justify-center gap-4">
          <p>Services</p>
          <p>Reviews</p>
          <p>Portfolio</p>
          <Link to="/Careers" className="text-[#757575]">
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
