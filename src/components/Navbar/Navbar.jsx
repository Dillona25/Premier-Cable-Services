export const Navbar = ({ handleSideBarMenu }) => {
  return (
    <section className="flex items-center gap-2 pt-6 pb-0 absolute">
      <button
        onClick={handleSideBarMenu}
        className="bg-Menu h-[38px] w-[38px]"
      ></button>
    </section>
  );
};
