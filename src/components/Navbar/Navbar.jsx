export const Navbar = ({ handleSideBarMenu }) => {
  return (
    <div className="flex items-center px-3 pt-5 gap-2">
      <button
        onClick={handleSideBarMenu}
        className="bg-Menu h-[38px] w-[38px]"
      ></button>
    </div>
  );
};
