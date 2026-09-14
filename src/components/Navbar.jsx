import { useEffect, useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const services = [
  {
    name: "Website Design",
    path: "/web-design",
  },
  {
    name: "Website Development",
    path: "/web-development",
  },
  {
    name: "SEO",
    path: "/seo",
  },
  {
    name: "Website Redesign",
    path: "/website-redesign",
  },
  {
    name: "E-commerce Websites",
    path: "/ecommerce-websites",
  },
];

const navigationLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Portfolio",
    path: "/portfolio",
  },
  {
    name: "Pricing",
    path: "/pricing",
  },
  {
    name: "FAQ",
    path: "/faq",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("nav-menu-open", menuOpen);

    return () => {
      document.body.classList.remove("nav-menu-open");
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  const toggleServices = () => {
    setServicesOpen((current) => !current);
  };

  return (
    <header className="site-header">
      <nav
        className="site-navbar"
        aria-label="Primary navigation"
      >
        <div className="navbar-container">
          {/* LOGO */}
          <Link
            to="/"
            className="navbar-logo"
            onClick={closeMenu}
            aria-label="PR Technologies - Home"
          >
            <span className="navbar-logo-mark">PR</span>

            <span className="navbar-logo-text">
              <strong>PR Technologies</strong>
              <small>BUILDING YOUR DIGITAL FUTURE</small>
            </span>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="navbar-desktop">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `navbar-link ${isActive ? "active" : ""}`
              }
            >
              Home
            </NavLink>

            {/* SERVICES */}
            <div
              className="navbar-services"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                className="navbar-services-trigger"
                onClick={toggleServices}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                Services
                <ChevronDown
                  size={15}
                  aria-hidden="true"
                  className={servicesOpen ? "rotate" : ""}
                />
              </button>

              <div
                className={`navbar-dropdown ${
                  servicesOpen ? "open" : ""
                }`}
              >
                <div className="navbar-dropdown-heading">
                  <span>OUR SERVICES</span>
                  <strong>Digital Solutions</strong>
                </div>

                {services.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className="navbar-dropdown-link"
                    onClick={closeMenu}
                  >
                    <span>{service.name}</span>
                    <ArrowRight
                      size={15}
                      aria-hidden="true"
                    />
                  </Link>
                ))}
              </div>
            </div>

            {navigationLinks
              .filter((link) => link.name !== "Home")
              .map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `navbar-link ${isActive ? "active" : ""}`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
          </div>

          {/* DESKTOP CTA */}
          <Link
            to="/booking"
            className="navbar-booking-btn"
          >
            <CalendarDays size={16} aria-hidden="true" />
            Book a Consultation
          </Link>

          {/* 3-LINE MOBILE MENU */}
          <button
            type="button"
            className={`navbar-menu-button ${
              menuOpen ? "open" : ""
            }`}
            onClick={() => setMenuOpen((current) => !current)}
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? (
              <X size={25} aria-hidden="true" />
            ) : (
              <Menu size={27} aria-hidden="true" />
            )}
          </button>
        </div>

        {/* MOBILE NAVIGATION */}
        <div
          id="mobile-navigation"
          className={`navbar-mobile ${
            menuOpen ? "open" : ""
          }`}
        >
          <div className="navbar-mobile-inner">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `navbar-mobile-link ${isActive ? "active" : ""}`
              }
              onClick={closeMenu}
            >
              <span>Home</span>
              <ArrowRight size={17} aria-hidden="true" />
            </NavLink>

            {/* MOBILE SERVICES */}
            <div className="navbar-mobile-services">
              <button
                type="button"
                className={`navbar-mobile-services-trigger ${
                  servicesOpen ? "open" : ""
                }`}
                onClick={toggleServices}
                aria-expanded={servicesOpen}
              >
                <span>Services</span>

                <ChevronDown
                  size={19}
                  aria-hidden="true"
                  className={servicesOpen ? "rotate" : ""}
                />
              </button>

              <div
                className={`navbar-mobile-service-list ${
                  servicesOpen ? "open" : ""
                }`}
              >
                {services.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    onClick={closeMenu}
                  >
                    {service.name}
                    <ArrowRight
                      size={15}
                      aria-hidden="true"
                    />
                  </Link>
                ))}
              </div>
            </div>

            {navigationLinks
              .filter((link) => link.name !== "Home")
              .map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `navbar-mobile-link ${
                      isActive ? "active" : ""
                    }`
                  }
                  onClick={closeMenu}
                >
                  <span>{link.name}</span>
                  <ArrowRight size={17} aria-hidden="true" />
                </NavLink>
              ))}

            <Link
              to="/booking"
              className="navbar-mobile-booking"
              onClick={closeMenu}
            >
              <CalendarDays size={18} aria-hidden="true" />
              Book a Consultation
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;