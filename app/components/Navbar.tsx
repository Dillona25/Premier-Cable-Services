import Image from "next/image";
import logo from "../assets/PCS-Transparent-Logo.png";
import Button from "./Button";

const navItems = [
  { label: "Services", href: "/#services" },
  { label: "Our Work", href: "/work" },
  { label: "Trusted By", href: "/#testimonials" },
  { label: "About", href: "/#about" },
];

export default function Navbar() {
  return (
    <header className="pcs-navbar sticky-top bg-pcs-navy-glass border-bottom border-pcs-dark">
      <nav
        className="container-xl d-flex align-items-center justify-content-between gap-3 px-3 py-3"
        aria-label="Main navigation"
      >
        <a
          className="navbar-brand d-inline-flex align-items-center flex-shrink-0 m-0 p-0 me-md-5 pe-lg-4"
          href="/#top"
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
          className="pcs-navbar__cta flex-shrink-0 px-3 py-2"
          href="/#contact"
          variant="primary"
        >
          Get In Touch
        </Button>
      </nav>
    </header>
  );
}
