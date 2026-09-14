import {
  ArrowRight,
  CheckCircle2,
  Gauge,
  LayoutDashboard,
  MonitorSmartphone,
  Palette,
  Search,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  WandSparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./WebsiteRedesign.css";

const redesignServices = [
  {
    icon: Palette,
    title: "Modern Visual Redesign",
    text: "Refresh outdated visual styles with a cleaner interface, stronger hierarchy, consistent branding, and a more professional digital presence.",
  },
  {
    icon: MonitorSmartphone,
    title: "Responsive Experience",
    text: "Improve the experience across phones, tablets, laptops, and desktops with layouts designed for different screen sizes.",
  },
  {
    icon: LayoutDashboard,
    title: "UX & Navigation Improvements",
    text: "Simplify navigation and organize important information so visitors can find what they need with less friction.",
  },
  {
    icon: Search,
    title: "SEO-Friendly Restructure",
    text: "Review page structure, headings, URLs, internal links, and content organization while preserving valuable search signals where appropriate.",
  },
  {
    icon: Gauge,
    title: "Performance Improvements",
    text: "Identify unnecessary visual and technical weight and improve the efficiency of the redesigned website.",
  },
  {
    icon: ShieldCheck,
    title: "Migration & Launch Support",
    text: "Plan the transition carefully and check important pages, links, forms, redirects, and functionality before launch.",
  },
];

const redesignSigns = [
  "The website looks outdated",
  "The site is difficult to use on mobile",
  "Visitors struggle to find important information",
  "The branding no longer represents the business",
  "Pages feel slow or unnecessarily heavy",
  "The navigation structure is confusing",
  "The website does not clearly communicate services",
  "Important calls to action are difficult to find",
  "The website has inconsistent visual styles",
  "The current design is difficult to maintain",
];

const processSteps = [
  {
    number: "01",
    title: "Review",
    text: "Understand the current website, identify strengths and weaknesses, and determine what should be preserved or changed.",
  },
  {
    number: "02",
    title: "Strategy",
    text: "Define the new structure, content hierarchy, user journey, visual direction, and technical requirements.",
  },
  {
    number: "03",
    title: "Redesign",
    text: "Create a modern interface with clearer layouts, stronger branding, and improved usability.",
  },
  {
    number: "04",
    title: "Rebuild",
    text: "Develop the approved redesign with responsive layouts, reusable components, and appropriate functionality.",
  },
  {
    number: "05",
    title: "Optimize",
    text: "Review SEO structure, accessibility basics, performance, forms, navigation, and important user flows.",
  },
  {
    number: "06",
    title: "Launch",
    text: "Complete final checks, prepare the production environment, and publish the redesigned website.",
  },
];

const improvementAreas = [
  {
    icon: TrendingUp,
    title: "Clearer Conversion Paths",
    text: "Make important actions easier to discover with purposeful calls to action and better page hierarchy.",
  },
  {
    icon: WandSparkles,
    title: "Stronger Brand Presentation",
    text: "Create a consistent visual language that makes your business appear more credible and memorable.",
  },
  {
    icon: Gauge,
    title: "Better Performance",
    text: "Use performance-conscious design and development choices without sacrificing the visual quality of the site.",
  },
  {
    icon: Search,
    title: "Better Search Foundations",
    text: "Keep SEO considerations involved throughout the redesign rather than treating them as an afterthought.",
  },
];

function WebsiteRedesign() {
  return (
    <main className="website-redesign-page">
      <section
        className="wr-hero"
        aria-labelledby="wr-hero-title"
      >
        <div className="wr-hero-grid" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>

        <div className="wr-container wr-hero-layout">
          <div className="wr-hero-content">
            <span className="wr-eyebrow">
              <WandSparkles size={16} aria-hidden="true" />
              Website Redesign
            </span>

            <h1 id="wr-hero-title">
              Turn an Outdated Website Into a{" "}
              <span>Modern Digital Experience.</span>
            </h1>

            <p className="wr-hero-description">
              Redesign your website with a sharper visual identity, better
              user experience, responsive layouts, stronger content structure,
              and a more effective path from visitor to customer.
            </p>

            <div className="wr-hero-actions">
              <Link
                className="wr-button wr-button-primary"
                to="/contact"
              >
                Discuss a Redesign
                <ArrowRight size={18} aria-hidden="true" />
              </Link>

              <Link
                className="wr-button wr-button-secondary"
                to="/portfolio"
              >
                Explore Our Work
              </Link>
            </div>

            <div className="wr-hero-points">
              <span>
                <CheckCircle2 size={17} aria-hidden="true" />
                Modern design
              </span>
              <span>
                <CheckCircle2 size={17} aria-hidden="true" />
                Mobile-first thinking
              </span>
              <span>
                <CheckCircle2 size={17} aria-hidden="true" />
                SEO-conscious rebuild
              </span>
            </div>
          </div>

          <div className="wr-browser-visual" aria-hidden="true">
            <div className="wr-browser-back" />

            <div className="wr-browser">
              <div className="wr-browser-bar">
                <span />
                <span />
                <span />
              </div>

              <div className="wr-browser-content">
                <div className="wr-old-layout">
                  <div className="wr-old-nav" />
                  <div className="wr-old-hero" />
                  <div className="wr-old-lines">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>

                <div className="wr-new-layout">
                  <div className="wr-new-header">
                    <span />
                    <span />
                    <span />
                  </div>

                  <div className="wr-new-hero">
                    <div>
                      <span />
                      <span />
                      <span />
                    </div>

                    <div className="wr-new-image" />
                  </div>

                  <div className="wr-new-cards">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </div>
            </div>

            <div className="wr-floating-card wr-card-before">
              <span>BEFORE</span>
              <strong>Outdated experience</strong>
            </div>

            <div className="wr-floating-card wr-card-after">
              <span>AFTER</span>
              <strong>Modern experience</strong>
            </div>
          </div>
        </div>
      </section>

      <section
        className="wr-section wr-intro"
        aria-labelledby="wr-intro-title"
      >
        <div className="wr-container wr-intro-grid">
          <div>
            <span className="wr-section-label">
              Why Redesign?
            </span>

            <h2 id="wr-intro-title">
              Your website should evolve as your business evolves.
            </h2>
          </div>

          <div className="wr-intro-copy">
            <p>
              A website that worked several years ago may no longer match
              today's customers, devices, expectations, or business goals.
            </p>

            <p>
              A thoughtful redesign is more than changing colors and images.
              It is an opportunity to improve structure, usability, messaging,
              performance, and the overall customer journey.
            </p>
          </div>
        </div>
      </section>

      <section
        className="wr-section wr-services"
        aria-labelledby="wr-services-title"
      >
        <div className="wr-container">
          <div className="wr-section-heading">
            <span className="wr-section-label">
              Redesign Services
            </span>

            <h2 id="wr-services-title">
              Everything needed for a stronger website experience.
            </h2>

            <p>
              We look beyond surface-level styling to improve the parts of
              your website that affect usability, credibility, performance,
              and discoverability.
            </p>
          </div>

          <div className="wr-service-grid">
            {redesignServices.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  className="wr-service-card"
                  key={service.title}
                >
                  <div className="wr-icon-box">
                    <Icon size={23} aria-hidden="true" />
                  </div>

                  <h3>{service.title}</h3>

                  <p>{service.text}</p>

                  <span
                    className="wr-card-arrow"
                    aria-hidden="true"
                  >
                    <ArrowRight size={17} />
                  </span>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className="wr-section wr-signs"
        aria-labelledby="wr-signs-title"
      >
        <div className="wr-container wr-signs-grid">
          <div className="wr-signs-copy">
            <span className="wr-section-label">
              Is It Time?
            </span>

            <h2 id="wr-signs-title">
              Signs your website may be ready for a redesign.
            </h2>

            <p>
              You do not need to rebuild a website simply because it is old.
              But if several of these problems exist, a redesign may create a
              much better experience for your visitors and team.
            </p>

            <Link
              className="wr-text-link"
              to="/contact"
            >
              Talk About Your Current Website
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>

          <div className="wr-signs-list">
            {redesignSigns.map((sign) => (
              <div className="wr-sign-item" key={sign}>
                <CheckCircle2 size={18} aria-hidden="true" />
                <span>{sign}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="wr-section wr-improvements"
        aria-labelledby="wr-improvements-title"
      >
        <div className="wr-container">
          <div className="wr-section-heading">
            <span className="wr-section-label">
              What Can Improve
            </span>

            <h2 id="wr-improvements-title">
              Redesign with business outcomes in mind.
            </h2>

            <p>
              A successful redesign should make the website easier to
              understand, easier to use, and better aligned with what your
              business wants visitors to do.
            </p>
          </div>

          <div className="wr-improvement-grid">
            {improvementAreas.map((area) => {
              const Icon = area.icon;

              return (
                <article
                  className="wr-improvement-card"
                  key={area.title}
                >
                  <Icon size={25} aria-hidden="true" />

                  <h3>{area.title}</h3>

                  <p>{area.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className="wr-section wr-process"
        aria-labelledby="wr-process-title"
      >
        <div className="wr-container">
          <div className="wr-section-heading">
            <span className="wr-section-label">
              Redesign Process
            </span>

            <h2 id="wr-process-title">
              A careful transition from old to new.
            </h2>

            <p>
              The goal is not simply to launch a different-looking website.
              We plan the transition so important content, functionality, and
              search considerations are not overlooked.
            </p>
          </div>

          <div className="wr-process-grid">
            {processSteps.map((step) => (
              <article
                className="wr-process-card"
                key={step.number}
              >
                <span className="wr-process-number">
                  {step.number}
                </span>

                <h3>{step.title}</h3>

                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="wr-section wr-seo"
        aria-labelledby="wr-seo-title"
      >
        <div className="wr-container wr-seo-box">
          <div className="wr-seo-icon" aria-hidden="true">
            <Search size={27} />
          </div>

          <div className="wr-seo-content">
            <span className="wr-section-label">
              SEO-Conscious Redesign
            </span>

            <h2 id="wr-seo-title">
              Redesign without ignoring your existing search presence.
            </h2>

            <p>
              Website redesign can affect search visibility when URLs,
              content, navigation, internal links, or technical signals
              change. We consider these areas during the rebuild so the new
              website has a stronger foundation from launch.
            </p>

            <div className="wr-seo-points">
              <span>
                <CheckCircle2 size={17} aria-hidden="true" />
                URL structure review
              </span>

              <span>
                <CheckCircle2 size={17} aria-hidden="true" />
                Redirect planning
              </span>

              <span>
                <CheckCircle2 size={17} aria-hidden="true" />
                Internal linking
              </span>

              <span>
                <CheckCircle2 size={17} aria-hidden="true" />
                Mobile responsiveness
              </span>
            </div>
          </div>
        </div>
      </section>

      <section
        className="wr-section wr-cta"
        aria-labelledby="wr-cta-title"
      >
        <div className="wr-container">
          <div className="wr-cta-box">
            <div className="wr-cta-glow" aria-hidden="true" />

            <Sparkles size={26} aria-hidden="true" />

            <h2 id="wr-cta-title">
              Is your current website holding your business back?
            </h2>

            <p>
              Tell us what you like, what is not working, and what you want
              your new website to achieve.
            </p>

            <div className="wr-cta-actions">
              <Link
                className="wr-button wr-button-primary"
                to="/contact"
              >
                Plan Your Redesign
                <ArrowRight size={18} aria-hidden="true" />
              </Link>

              <Link
                className="wr-button wr-button-secondary"
                to="/pricing"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default WebsiteRedesign;