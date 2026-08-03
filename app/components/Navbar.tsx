"use client";

import Image from "next/image";
import { useState } from "react";
import logo from "../assets/PCS-Transparent-Logo.png";
import Button from "./Button";

const navItems = [
  { label: "Services", href: "/#services" },
  { label: "Our Work", href: "/work" },
  { label: "Trusted By", href: "/#testimonials" },
  { label: "About", href: "/#about" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="pcs-navbar sticky-top bg-pcs-navy-glass border-bottom border-pcs-dark">
      <nav
        className="container-xl d-flex align-items-center justify-content-between gap-3 px-3 py-3"
        aria-label="Main navigation"
      >
        <a
          className="navbar-brand d-inline-flex align-items-center flex-shrink-0 m-0 p-0 me-md-5 pe-lg-4"
          href="/#top"
          onClick={closeMenu}
          aria-label="Premier Cable Services home"
        >
          <Image
            src={logo}
            alt="PCS logo"
            className="pcs-navbar__logo d-block"
            priority
          />
        </a>

        <div className="d-none d-md-flex align-items-center justify-content-center gap-4 mx-auto ps-lg-5">
          {navItems.map((item) => (
            <Button
              className="pcs-navbar__link p-0"
              href={item.href}
              key={item.href}
              variant="text"
            >
              {item.label}
            </Button>
          ))}
        </div>

        <Button
          className="pcs-navbar__cta d-none d-md-inline-flex flex-shrink-0 px-3 py-2"
          href="/#contact"
          variant="primary"
        >
          Get In Touch
        </Button>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          className={`pcs-navbar__toggle d-inline-flex d-md-none align-items-center justify-content-center p-0 border-0 ${
            isMenuOpen ? "pcs-navbar__toggle--open" : ""
          }`}
          onClick={() => setIsMenuOpen((current) => !current)}
          type="button"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </nav>

      <div
        className={`pcs-navbar__mobile d-md-none ${
          isMenuOpen ? "pcs-navbar__mobile--open" : ""
        }`}
        id="mobile-navigation"
      >
        <div className="container-xl px-3 pb-3">
          <div className="d-flex flex-column border-top border-pcs-dark pt-2">
            {navItems.map((item) => (
              <a
                className="pcs-navbar__mobile-link py-3 text-decoration-none fw-bold"
                href={item.href}
                key={item.href}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}

            <Button
              className="pcs-navbar__mobile-cta mt-3 px-4 py-3"
              href="/#contact"
              onClick={closeMenu}
              variant="primary"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
