import {
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Layers3,
  Monitor,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./Portfolio.css";

const projects = [
  {
    number: "01",
    category: "Restaurant & Hospitality",
    title: "Restaurant Website",
    description:
      "A premium restaurant website concept designed to showcase the menu, atmosphere, location, reservations and customer experience across every device.",
    tags: ["Responsive Design", "Menu Showcase", "Reservations"],
    accent: "restaurant",
  },
  {
    number: "02",
    category: "Real Estate",
    title: "Real Estate Website",
    description:
      "A conversion-focused property website concept built to present properties clearly, highlight key details and make enquiries easier for potential buyers.",
    tags: ["Property Listings", "Lead Generation", "Mobile First"],
    accent: "realestate",
  },
  {
    number: "03",
    category: "Corporate Business",
    title: "Corporate Business Website",
    description:
      "A professional corporate website concept focused on credibility, services, company information, lead generation and a strong digital presence.",
    tags: ["Business Profile", "Services", "Lead Generation"],
    accent: "corporate",
  },
  {
    number: "04",
    category: "Hotel & Hospitality",
    title: "Hotel Website",
    description:
      "A sophisticated hospitality website concept designed to present rooms, amenities, experiences, location and booking pathways in a clear structure.",
    tags: ["Room Showcase", "Booking Flow", "Hospitality"],
    accent: "hotel",
  },
  {
    number: "05",
    category: "Salon & Beauty",
    title: "Salon Website",
    description:
      "A modern salon website concept that puts services, pricing, appointment booking, contact options and visual branding at the centre of the experience.",
    tags: ["Service Menu", "Appointments", "WhatsApp CTA"],
    accent: "salon",
  },
  {
    number: "06",
    category: "E-commerce",
    title: "E-commerce Website",
    description:
      "A scalable online-store concept designed around product discovery, clear product information, responsive shopping experiences and conversion-focused layouts.",
    tags: ["Product Catalogue", "Shopping Experience", "Responsive UI"],
    accent: "commerce",
  },
];

const capabilities = [
  "Responsive layouts for phones, tablets and desktops",
  "Clear information architecture and intuitive navigation",
  "SEO-friendly page structure and semantic HTML",
  "Performance-conscious design and lightweight interactions",
  "Conversion-focused calls to action",
  "Accessible interfaces designed for a wider range of users",
];

function ProjectVisual({ project }) {
  return (
    <div className={`portfolio-visual portfolio-visual-${project.accent}`}>
      <div className="visual-glow" aria-hidden="true" />

      <div className="browser-window">
        <div className="browser-top">
          <div className="browser-dots" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>

          <div className="browser-address">
            <span>prtechnologies</span>
          </div>
        </div>

        <div className="browser-content">
          <div className="visual-kicker">{project.category}</div>

          <div className="visual-heading">
            {project.title}
          </div>

          <div className="visual-lines" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>

          <div className="visual-grid" aria-hidden="true">
            <div />
            <div />
            <div />
          </div>

          <div className="visual-button" aria-hidden="true">
            Explore
          </div>
        </div>
      </div>

      <div className="floating-device floating-device-one" aria-hidden="true">
        <Smartphone size={18} />
      </div>

      <div className="floating-device floating-device-two" aria-hidden="true">
        <Monitor size={18} />
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <main className="portfolio-page">
      {/* HERO */}
      <section className="portfolio-hero">
        <div className="portfolio-container">
          <div className="portfolio-hero-grid">
            <div className="portfolio-hero-content">
              <div className="portfolio-eyebrow">
                <Sparkles size={16} aria-hidden="true" />
                <span>PR Technologies Portfolio</span>
              </div>

              <h1>
                Website Concepts Built to
                <span> Make Businesses Stand Out.</span>
              </h1>

              <p className="portfolio-hero-description">
                Explore website concepts and digital experiences across
                restaurants, real estate, corporate businesses, hospitality,
                salons and e-commerce. Every concept is designed around
                professional presentation, usability, performance and
                conversion.
              </p>

              <div className="portfolio-hero-actions">
                <Link className="portfolio-primary-button" to="/contact">
                  Start Your Website
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>

                <Link className="portfolio-secondary-button" to="/pricing">
                  View Pricing
                </Link>
              </div>
            </div>

            <div className="portfolio-hero-visual" aria-hidden="true">
              <div className="hero-orbit hero-orbit-one" />
              <div className="hero-orbit hero-orbit-two" />

              <div className="hero-browser">
                <div className="hero-browser-top">
                  <div className="hero-browser-dots">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>

                <div className="hero-browser-body">
                  <div className="hero-mini-label">DIGITAL PRESENCE</div>

                  <div className="hero-mini-title">
                    Designed for
                    <br />
                    modern businesses.
                  </div>

                  <div className="hero-mini-bars">
                    <span />
                    <span />
                    <span />
                  </div>

                  <div className="hero-mini-cards">
                    <div />
                    <div />
                  </div>
                </div>
              </div>

              <div className="hero-floating-card hero-card-performance">
                <Layers3 size={18} />
                <div>
                  <strong>Built for the web</strong>
                  <span>Responsive & optimized</span>
                </div>
              </div>

              <div className="hero-floating-card hero-card-mobile">
                <Smartphone size={18} />
                <div>
                  <strong>Mobile ready</strong>
                  <span>Every screen size</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="portfolio-intro">
        <div className="portfolio-container">
          <div className="portfolio-section-heading">
            <div className="portfolio-eyebrow">
              <span>Our Work Direction</span>
            </div>

            <h2>
              Websites designed around
              <span> your business goals.</span>
            </h2>

            <p>
              A strong website should do more than look attractive. It should
              communicate what your business offers, help visitors find the
              information they need and create a clear path toward contacting
              or buying from you.
            </p>
          </div>

          <div className="portfolio-principles">
            <article>
              <div className="principle-icon">
                <Monitor size={22} aria-hidden="true" />
              </div>
              <h3>Professional Design</h3>
              <p>
                Modern visual systems built to create a credible and memorable
                first impression.
              </p>
            </article>

            <article>
              <div className="principle-icon">
                <Smartphone size={22} aria-hidden="true" />
              </div>
              <h3>Responsive Experience</h3>
              <p>
                Interfaces structured to remain useful and easy to navigate
                across phones, tablets and desktops.
              </p>
            </article>

            <article>
              <div className="principle-icon">
                <Layers3 size={22} aria-hidden="true" />
              </div>
              <h3>Performance Mindset</h3>
              <p>
                Lightweight interactions and thoughtful implementation help
                keep the experience fast and efficient.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="portfolio-projects" id="projects">
        <div className="portfolio-container">
          <div className="portfolio-section-heading portfolio-heading-centered">
            <div className="portfolio-eyebrow">
              <span>Selected Concepts</span>
            </div>

            <h2>
              Explore our
              <span> website concepts.</span>
            </h2>

            <p>
              A selection of business website directions that demonstrate how
              PR Technologies can structure a digital presence for different
              industries.
            </p>
          </div>

          <div className="portfolio-grid">
            {projects.map((project) => (
              <article className="portfolio-project-card" key={project.title}>
                <ProjectVisual project={project} />

                <div className="portfolio-project-content">
                  <div className="portfolio-project-number">
                    {project.number}
                  </div>

                  <div className="portfolio-project-category">
                    {project.category}
                  </div>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="portfolio-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <Link
                    className="portfolio-project-link"
                    to="/contact"
                    aria-label={`Discuss a ${project.title.toLowerCase()} with PR Technologies`}
                  >
                    Discuss a similar project
                    <ArrowRight size={17} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="portfolio-capabilities">
        <div className="portfolio-container">
          <div className="capabilities-grid">
            <div className="capabilities-content">
              <div className="portfolio-eyebrow">
                <span>What We Build Into The Experience</span>
              </div>

              <h2>
                More than a visual design.
                <span> A complete web experience.</span>
              </h2>

              <p>
                PR Technologies focuses on the structure behind a professional
                website as well as the visual presentation. From navigation
                and responsive layouts to search-friendly content and
                conversion paths, each part has a purpose.
              </p>

              <Link className="portfolio-primary-button" to="/web-development">
                Explore Web Development
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>

            <div className="capabilities-list">
              {capabilities.map((capability) => (
                <div className="capability-item" key={capability}>
                  <CheckCircle2 size={20} aria-hidden="true" />
                  <span>{capability}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="portfolio-cta">
        <div className="portfolio-container">
          <div className="portfolio-cta-card">
            <div>
              <div className="portfolio-eyebrow">
                <Sparkles size={16} aria-hidden="true" />
                <span>Have a project in mind?</span>
              </div>

              <h2>
                Let's build a website
                <span> for your business.</span>
              </h2>

              <p>
                Tell us about your business, goals and requirements. We'll
                help you choose the right website structure for your needs.
              </p>
            </div>

            <div className="portfolio-cta-actions">
              <Link className="portfolio-primary-button" to="/contact">
                Start a Project
                <ArrowRight size={18} aria-hidden="true" />
              </Link>

              <Link className="portfolio-text-link" to="/faq">
                Have questions?
                <ExternalLink size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}