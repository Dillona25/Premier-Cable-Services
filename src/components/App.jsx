import { Hero } from "./Hero/Hero";
import { MobileNavbar } from "../components/MobileNavbar/MobileNavbar";
import { Navbar } from "./Navbar/Navbar";
import { useState, useEffect } from "react";
import { OurServices } from "./OurServices/OurServices";
import { ActionCall } from "./ActionCall/ActionCall";
import { Reviews } from "./Reviews/Reviews";
import { Footer } from "./Footer/Footer";
import { BrowserRouter as ReactRouter, Routes, Route } from "react-router-dom";
import { Contact } from "../routes/Contact";
import { About } from "../routes/About";
import { UndergroundServices } from "./UndergroundServices/UndergroundServices";
import { Careers } from "../routes/Careers";

function App() {
  const [activeModal, setActiveModal] = useState("");

  const handleSideBarMenu = () => {
    setActiveModal("SideBarMenu");
  };

  const closeModal = () => {
    setActiveModal("");
  };

  return (
    <ReactRouter>
      <Routes>
        <Route
          path="/"
          element={
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
              <UndergroundServices />
              <ActionCall />
              <Reviews />
              <Footer />
            </div>
          }
        />
        <Route
          path="/Contact"
          element={
            <div className="h-screen relative">
              <div className=" bg-Contact bg-cover bg-center absolute h-1/2">
                <Navbar handleSideBarMenu={handleSideBarMenu} />
                {activeModal === "SideBarMenu" && (
                  <MobileNavbar closeModal={closeModal} />
                )}
                <Contact />
              </div>
            </div>
          }
        />
        <Route
          path="/About"
          element={
            <>
              <Navbar handleSideBarMenu={handleSideBarMenu} />
              {activeModal === "SideBarMenu" && (
                <MobileNavbar closeModal={closeModal} />
              )}
              <About />
              {/* <Footer /> */}
            </>
          }
        />
        <Route
          path="/Careers"
          element={
            <>
              <Navbar handleSideBarMenu={handleSideBarMenu} />
              {activeModal === "SideBarMenu" && (
                <MobileNavbar closeModal={closeModal} />
              )}
              <Careers />
              {/* <Footer /> */}
            </>
          }
        />
      </Routes>
    </ReactRouter>
  );
}

export default App;
