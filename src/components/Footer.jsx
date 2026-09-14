import {
  ArrowRight,
  CalendarDays,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./Footer.css";

const phoneNumber = "8309820381";
const whatsappNumber = "918309820381";
const emailAddress = "prtechnologies75@gmail.com";

const instagramUrl =
  "https://www.instagram.com/prtechnologieslimited?stkn=MTlxdWtuZ2p2dnA1MQ==";

const whatsappMessage = encodeURIComponent(
  "Hello PR Technologies, I would like to discuss a website project.",
);

const currentYear = new Date().getFullYear();


function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-container">
          <div className="footer-grid">
            {/* BRAND */}
            <div className="footer-brand">
              <Link
                to="/"
                className="footer-logo"
                aria-label="PR Technologies - Home"
              >
                <span className="footer-logo-mark">PR</span>

                <span className="footer-logo-text">
                  <strong>PR Technologies</strong>
                  <small>BUILDING YOUR DIGITAL FUTURE</small>
                </span>
              </Link>

              <p>
                PR Technologies provides professional website design,
                website development, SEO-friendly websites, website
                redesign, and e-commerce solutions for businesses
                looking to build a strong digital presence.
              </p>

              <div className="footer-brand-actions">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-whatsapp"
                  aria-label="Contact PR Technologies on WhatsApp"
                >
                  <MessageCircle size={17} aria-hidden="true" />
                  WhatsApp
                </a>

                <a
                  href={`tel:${phoneNumber}`}
                  className="footer-call"
                  aria-label={`Call PR Technologies at ${phoneNumber}`}
                >
                  <Phone size={17} aria-hidden="true" />
                  Call Us
                </a>
              </div>
            </div>

            {/* SERVICES */}
            <div className="footer-column">
              <h2>Services</h2>

              <nav aria-label="Footer services">
                <Link to="/web-design">
                  Website Design
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>

                <Link to="/web-development">
                  Website Development
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>

                <Link to="/seo">
                  SEO
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>

                <Link to="/website-redesign">
                  Website Redesign
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>

                <Link to="/ecommerce-websites">
                  E-commerce Websites
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </nav>
            </div>

            {/* COMPANY */}
            <div className="footer-column">
              <h2>Company</h2>

              <nav aria-label="Footer company navigation">
                <Link to="/">
                  Home
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>

                <Link to="/portfolio">
                  Portfolio
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>

                <Link to="/pricing">
                  Pricing
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>

                <Link to="/faq">
                  FAQ
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>

                <Link to="/about">
                  About Us
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>

                <Link to="/contact">
                  Contact
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </nav>
            </div>

            {/* CONTACT */}
            <div className="footer-column footer-contact">
              <h2>Contact</h2>

              <a
                href={`tel:${phoneNumber}`}
                className="footer-contact-item"
              >
                <span className="footer-contact-icon">
                  <Phone size={17} aria-hidden="true" />
                </span>

                <span>
                  <small>Phone</small>
                  <strong>{phoneNumber}</strong>
                </span>
              </a>

              <a
                href={`mailto:${emailAddress}?subject=Website%20Project%20Enquiry`}
                className="footer-contact-item"
              >
                <span className="footer-contact-icon">
                  <Mail size={17} aria-hidden="true" />
                </span>

                <span>
                  <small>Email</small>
                  <strong>{emailAddress}</strong>
                </span>
              </a>

              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-contact-item"
              >
                <span className="footer-contact-icon">
                  <Instagram size={17} aria-hidden="true" />
                </span>

                <span>
                  <small>Instagram</small>
                  <strong>@prtechnologieslimited</strong>
                </span>
              </a>

              <div className="footer-contact-item footer-location">
                <span className="footer-contact-icon">
                  <MapPin size={17} aria-hidden="true" />
                </span>

                <span>
                  <small>Serving</small>
                  <strong>India &amp; Worldwide</strong>
                </span>
              </div>
            </div>
          </div>

          {/* BOOKING STRIP */}
          <div className="footer-booking">
            <div>
              <span className="footer-booking-label">
                Start Your Project
              </span>

              <h2>
                Have an idea?
                <span> Let&apos;s build it.</span>
              </h2>

              <p>
                Tell us about your business, website requirements,
                preferred features, and goals.
              </p>
            </div>

            <Link
              to="/booking"
              className="footer-booking-btn"
            >
              <CalendarDays size={18} aria-hidden="true" />
              Book a Consultation
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        <div className="footer-container footer-bottom-inner">
          <p>
            © {currentYear} PR Technologies. All rights reserved.
          </p>

          <div className="footer-bottom-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms">Terms &amp; Conditions</Link>
          </div>

          <p className="footer-tagline">
            Professional websites. Better digital experiences.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;