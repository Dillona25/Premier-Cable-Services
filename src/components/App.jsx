import { Hero } from "./Hero/Hero";
import { MobileNavbar } from "../components/MobileNavbar/MobileNavbar";
import { Navbar } from "./Navbar/Navbar";
import { useState, useEffect } from "react";
import { OurServices } from "./OurServices/OurServices";
import { ActionCall } from "./ActionCall/ActionCall";
import { Reviews } from "./Reviews/Reviews";
import { Footer } from "./Footer/Footer";
import {
  BrowserRouter as ReactRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Contact } from "../routes/Contact";
import { About } from "../routes/About";
import { UndergroundServices } from "./UndergroundServices/UndergroundServices";
import { Careers } from "../routes/Careers";
import { useEscapeKey } from "../hooks/useEscape";
import { useMediaQuery } from "react-responsive";

function App() {
  const [activeModal, setActiveModal] = useState(false);
  const location = useLocation();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const handleSideBarMenu = () => {
    setActiveModal("SideBarMenu");
  };

  const closeModal = () => {
    setActiveModal("");
  };

  // Calling the hook to close modals on escape
  useEscapeKey(closeModal);

  useEffect(() => {
    closeModal(); // Reset modal state when route changes
  }, [location.pathname]);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when route changes
  }, [location.pathname]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="bg-[#f4f4f4]">
            <div className="relative bg-Hero md:bg-none bg-cover bg-center h-screen md:h-fit">
              <div className="absolute inset-0 flex flex-col">
                <Navbar handleSideBarMenu={handleSideBarMenu} />
                {activeModal === "SideBarMenu" && (
                  <MobileNavbar closeModal={closeModal} />
                )}

                {/* Only render this Hero on mobile */}
                {isMobile && (
                  <div className="flex-1 flex items-center md:items-start justify-center">
                    <div className="flex flex-col items-center">
                      <Hero />
                    </div>
                  </div>
                )}
              </div>
              {/* This hero is for desktop, the two are seperate due to complexity of flexbox classes */}
              {!isMobile && <Hero />}
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
            <Footer />
          </>
        }
      />
    </Routes>
  );
}

export default App;
