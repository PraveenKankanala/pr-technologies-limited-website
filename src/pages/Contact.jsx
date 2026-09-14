import {
  ArrowRight,
  CheckCircle2,
  Mail,
  MessageCircle,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./Contact.css";

const phoneNumber = "8309820381";
const whatsappNumber = "918309820381";
const emailAddress = "prtechnologies75@gmail.com";

const instagramUrl =
  "https://www.instagram.com/prtechnologieslimited?stkn=MTlxdWtuZ2p2dnA1MQ==";

const whatsappMessage = encodeURIComponent(
  "Hello PR Technologies, I would like to discuss a website project.",
);
function InstagramIcon({ size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function Contact() {
  return (
    <main className="contact-page">
      {/* Hero */}
      <section className="contact-hero">
        <div className="contact-container contact-hero-grid">
          <div className="contact-hero-content">
            <div className="contact-eyebrow">
              <MessageCircle size={16} aria-hidden="true" />
              Contact PR Technologies
            </div>

            <h1>
              Let's Build Your
              <span> Digital Future.</span>
            </h1>

            <p>
              Looking for a professional website for your business? PR
              Technologies provides modern website design, website development,
              SEO-friendly websites, website redesign, and e-commerce
              solutions designed around your business goals.
            </p>

            <div className="contact-hero-actions">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-whatsapp-btn"
                aria-label="Chat with PR Technologies on WhatsApp"
              >
                <MessageCircle size={19} aria-hidden="true" />
                WhatsApp Us
              </a>

              <a
                href={`tel:${phoneNumber}`}
                className="contact-phone-btn"
                aria-label={`Call PR Technologies at ${phoneNumber}`}
              >
                <Phone size={18} aria-hidden="true" />
                Call Us
              </a>
            </div>

            <div className="contact-trust-line">
              <CheckCircle2 size={17} aria-hidden="true" />
              <span>Let's discuss your requirements and build the right solution.</span>
            </div>
          </div>

          <div className="contact-hero-visual" aria-hidden="true">
            <div className="contact-glow" />

            <div className="contact-card-3d">
              <div className="contact-card-top">
                <div className="contact-card-logo">PR</div>

                <div className="contact-card-status">
                  <span />
                  Available
                </div>
              </div>

              <div className="contact-card-icon">
                <Send size={30} />
              </div>

              <div className="contact-card-lines">
                <span className="contact-line-large" />
                <span />
                <span className="contact-line-short" />
              </div>

              <div className="contact-card-bottom">
                Start your project
                <ArrowRight size={17} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="contact-options">
        <div className="contact-container">
          <div className="contact-section-heading">
            <div className="contact-eyebrow">
              <Sparkles size={16} aria-hidden="true" />
              Get In Touch
            </div>

            <h2>Connect with PR Technologies</h2>

            <p>
              Choose the contact method that works best for you. Share your
              website requirements, business goals, preferred features, or
              existing website with us.
            </p>
          </div>

          <div className="contact-options-grid">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-info-card contact-whatsapp-card"
              aria-label="Contact PR Technologies through WhatsApp"
            >
              <div className="contact-info-icon">
                <MessageCircle size={25} aria-hidden="true" />
              </div>

              <div className="contact-info-content">
                <span>WhatsApp</span>
                <strong>8309820381</strong>
                <small>
                  Send us your website requirements directly on WhatsApp.
                </small>
              </div>

              <ArrowRight size={19} aria-hidden="true" />
            </a>

            <a
              href={`tel:${phoneNumber}`}
              className="contact-info-card contact-phone-card"
              aria-label={`Call PR Technologies at ${phoneNumber}`}
            >
              <div className="contact-info-icon">
                <Phone size={25} aria-hidden="true" />
              </div>

              <div className="contact-info-content">
                <span>Phone</span>
                <strong>8309820381</strong>
                <small>
                  Call us to discuss your website or digital requirements.
                </small>
              </div>

              <ArrowRight size={19} aria-hidden="true" />
            </a>

            <a
              href={`mailto:${emailAddress}?subject=Website%20Project%20Enquiry`}
              className="contact-info-card"
              aria-label={`Email PR Technologies at ${emailAddress}`}
            >
              <div className="contact-info-icon">
                <Mail size={25} aria-hidden="true" />
              </div>

              <div className="contact-info-content">
                <span>Email</span>
                <strong>{emailAddress}</strong>
                <small>
                  Send detailed project requirements and enquiries by email.
                </small>
              </div>

              <ArrowRight size={19} aria-hidden="true" />
            </a>

            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-info-card"
              aria-label="Visit PR Technologies on Instagram"
            >
              <div className="contact-info-icon">
                <Instagram size={25} aria-hidden="true" />
              </div>

              <div className="contact-info-content">
                <span>Instagram</span>
                <strong>@prtechnologieslimited</strong>
                <small>
                  Follow PR Technologies and explore our digital work.
                </small>
              </div>

              <ArrowRight size={19} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* Project Section */}
      <section className="contact-project">
        <div className="contact-container">
          <div className="contact-project-grid">
            <div className="contact-project-content">
              <div className="contact-eyebrow">
                <CheckCircle2 size={16} aria-hidden="true" />
                Start Your Project
              </div>

              <h2>
                Have a website idea?
                <span> Let's make it real.</span>
              </h2>

              <p>
                Whether you are launching a new business, improving your
                existing online presence, or starting an online store, PR
                Technologies can help you create a professional digital
                experience.
              </p>

              <p>
                Tell us about your business, target audience, required
                features, and preferred website style. We can then discuss the
                appropriate design, development, SEO, and deployment approach.
              </p>
            </div>

            <div className="contact-project-list">
              <div>
                <CheckCircle2 size={19} aria-hidden="true" />
                <span>Professional responsive website design</span>
              </div>

              <div>
                <CheckCircle2 size={19} aria-hidden="true" />
                <span>Mobile, tablet, and desktop compatibility</span>
              </div>

              <div>
                <CheckCircle2 size={19} aria-hidden="true" />
                <span>SEO-friendly website structure</span>
              </div>

              <div>
                <CheckCircle2 size={19} aria-hidden="true" />
                <span>WhatsApp and enquiry integrations</span>
              </div>

              <div>
                <CheckCircle2 size={19} aria-hidden="true" />
                <span>Appointment and slot-booking solutions</span>
              </div>

              <div>
                <CheckCircle2 size={19} aria-hidden="true" />
                <span>E-commerce website development</span>
              </div>

              <div>
                <CheckCircle2 size={19} aria-hidden="true" />
                <span>Deployment and launch assistance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="contact-services">
        <div className="contact-container">
          <div className="contact-section-heading">
            <div className="contact-eyebrow">
              <Send size={16} aria-hidden="true" />
              Our Services
            </div>

            <h2>What can we build for your business?</h2>

            <p>
              Explore our website services and choose the solution that fits
              your business objectives.
            </p>
          </div>

          <div className="contact-services-grid">
            <Link to="/web-design" className="contact-service-card">
              <strong>Website Design</strong>
              <span>
                Premium and responsive website designs focused on clarity,
                usability, and brand presentation.
              </span>
              <ArrowRight size={18} aria-hidden="true" />
            </Link>

            <Link to="/web-development" className="contact-service-card">
              <strong>Website Development</strong>
              <span>
                Modern website development with responsive layouts,
                performance-conscious implementation, and scalable foundations.
              </span>
              <ArrowRight size={18} aria-hidden="true" />
            </Link>

            <Link to="/seo" className="contact-service-card">
              <strong>SEO</strong>
              <span>
                Search-friendly website foundations covering technical and
                on-page SEO essentials.
              </span>
              <ArrowRight size={18} aria-hidden="true" />
            </Link>

            <Link to="/website-redesign" className="contact-service-card">
              <strong>Website Redesign</strong>
              <span>
                Modernize an outdated website with improved design,
                navigation, responsiveness, and performance.
              </span>
              <ArrowRight size={18} aria-hidden="true" />
            </Link>

            <Link to="/ecommerce-websites" className="contact-service-card">
              <strong>E-commerce Websites</strong>
              <span>
                Professional online stores designed around products,
                customers, and business requirements.
              </span>
              <ArrowRight size={18} aria-hidden="true" />
            </Link>

            <Link to="/pricing" className="contact-service-card">
              <strong>Website Pricing</strong>
              <span>
                Explore our starting packages for landing pages, premium
                websites, and e-commerce websites.
              </span>
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="contact-final">
        <div className="contact-container">
          <div className="contact-final-box">
            <div className="contact-eyebrow">
              <MessageCircle size={16} aria-hidden="true" />
              PR Technologies
            </div>

            <h2>Ready to build your website?</h2>

            <p>
              Start a conversation with PR Technologies today. Tell us what
              you want to build and let's discuss your project.
            </p>

            <div className="contact-final-actions">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-whatsapp-btn"
              >
                <MessageCircle size={19} aria-hidden="true" />
                WhatsApp Us
              </a>

              <a
                href={`tel:${phoneNumber}`}
                className="contact-phone-btn"
              >
                <Phone size={18} aria-hidden="true" />
                8309820381
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;