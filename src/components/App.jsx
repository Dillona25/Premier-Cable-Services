import { Hero } from "./Hero/Hero";
import { MobileNavbar } from "../components/MobileNavbar/MobileNavbar";
import { Navbar } from "./Navbar/Navbar";
import { useState } from "react";
import { OurServices } from "./OurServices/OurServices";
import { ActionCall } from "./ActionCall/ActionCall";
import { Reviews } from "./Reviews/Reviews";

function App() {
  const [activeModal, setActiveModal] = useState("");

  const handleSideBarMenu = () => {
    setActiveModal("SideBarMenu");
  };

  const closeModal = () => {
    setActiveModal("");
  };

  return (
    <div className="bg-[#f4f4f4]">
      <div className="relative bg-Hero bg-cover bg-center h-screen">
        <div className="absolute inset-0 flex flex-col">
          <Navbar handleSideBarMenu={handleSideBarMenu} />
          {activeModal === "SideBarMenu" && (
            <MobileNavbar closeModal={closeModal} />
          )}
          <div className="flex-1 flex items-center justify-center">
            <div className="flex flex-col items-center">
              <Hero />
            </div>
          </div>
        </div>
      </div>
      <OurServices />
      <Reviews />
      {/* <ActionCall /> */}
    </div>
  );
}

export default App;
