import {
  ArrowRight,
  Braces,
  CheckCircle2,
  Code2,
  Database,
  Gauge,
  Globe,
  Layers3,
  LockKeyhole,
  Rocket,
  Search,
  Server,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./WebDevelopment.css";

const developmentServices = [
  {
    icon: Code2,
    title: "Custom Website Development",
    text: "Build a website around your business goals, content, features, and customer journey instead of relying on a one-size-fits-all template.",
  },
  {
    icon: Smartphone,
    title: "Responsive Development",
    text: "Create layouts and interactions that work smoothly across mobile phones, tablets, laptops, and desktop screens.",
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    text: "Keep pages efficient with sensible assets, clean component structure, optimized loading, and performance-conscious interactions.",
  },
  {
    icon: Search,
    title: "SEO-Friendly Development",
    text: "Build a crawlable site structure with meaningful headings, internal links, descriptive content, and technically sound foundations.",
  },
  {
    icon: LockKeyhole,
    title: "Secure Foundations",
    text: "Follow practical development patterns that reduce unnecessary exposure and support safer website deployment and maintenance.",
  },
  {
    icon: Rocket,
    title: "Deployment & Launch",
    text: "Prepare the finished website for production deployment, domain connection, testing, and a smooth public launch.",
  },
];

const capabilities = [
  "Business websites",
  "Corporate websites",
  "Landing pages",
  "Appointment and booking systems",
  "E-commerce websites",
  "Contact and enquiry forms",
  "WhatsApp integration",
  "Custom website sections",
  "API-based integrations",
  "CMS-ready structures",
  "Analytics integration",
  "Production deployment",
];

const processSteps = [
  {
    number: "01",
    title: "Requirements",
    text: "Understand your business, audience, pages, features, content, and conversion goals.",
  },
  {
    number: "02",
    title: "Architecture",
    text: "Plan the page structure, navigation, content hierarchy, reusable components, and technical requirements.",
  },
  {
    number: "03",
    title: "Development",
    text: "Turn the approved structure into a responsive and maintainable website.",
  },
  {
    number: "04",
    title: "Integration",
    text: "Connect forms, booking features, WhatsApp, analytics, APIs, or other required functionality.",
  },
  {
    number: "05",
    title: "Testing",
    text: "Check responsiveness, navigation, forms, accessibility basics, performance, and common user flows.",
  },
  {
    number: "06",
    title: "Deployment",
    text: "Prepare the production build, connect the domain, configure the hosting environment, and launch.",
  },
];

const technicalPrinciples = [
  {
    icon: Layers3,
    title: "Reusable Components",
    text: "Build repeated interface elements in a structured way so the website remains easier to maintain and expand.",
  },
  {
    icon: Braces,
    title: "Clean Code Structure",
    text: "Organize the application logically to make future improvements, fixes, and feature additions easier.",
  },
  {
    icon: Globe,
    title: "Search-Friendly Architecture",
    text: "Use descriptive URLs, semantic HTML, internal linking, and content structures that help users and search engines understand the site.",
  },
  {
    icon: Server,
    title: "Production Ready",
    text: "Prepare the website for real-world hosting, domain configuration, environment settings, and deployment workflows.",
  },
];

function WebDevelopment() {
  return (
    <main className="web-development-page">
      <section className="wd-hero" aria-labelledby="wd-hero-title">
        <div className="wd-hero-orbit wd-hero-orbit-one" aria-hidden="true" />
        <div className="wd-hero-orbit wd-hero-orbit-two" aria-hidden="true" />

        <div className="wd-container wd-hero-grid">
          <div className="wd-hero-content">
            <span className="wd-eyebrow">
              <Code2 size={16} aria-hidden="true" />
              Website Development
            </span>

            <h1 id="wd-hero-title">
              Powerful Website Development Built for{" "}
              <span>Real Business Growth.</span>
            </h1>

            <p className="wd-hero-description">
              We develop modern, responsive, SEO-friendly websites designed
              around your business goals, customer experience, performance,
              and long-term scalability.
            </p>

            <div className="wd-hero-actions">
              <Link className="wd-button wd-button-primary" to="/contact">
                Start Your Project
                <ArrowRight size={18} aria-hidden="true" />
              </Link>

              <Link className="wd-button wd-button-secondary" to="/portfolio">
                Explore Our Work
              </Link>
            </div>

            <div className="wd-hero-points">
              <span>
                <CheckCircle2 size={17} aria-hidden="true" />
                Mobile responsive
              </span>
              <span>
                <CheckCircle2 size={17} aria-hidden="true" />
                SEO-friendly structure
              </span>
              <span>
                <CheckCircle2 size={17} aria-hidden="true" />
                Performance conscious
              </span>
            </div>
          </div>

          <div className="wd-code-showcase" aria-hidden="true">
            <div className="wd-code-window">
              <div className="wd-code-topbar">
                <span />
                <span />
                <span />
              </div>

              <div className="wd-code-body">
                <div className="wd-code-line wd-code-muted">
                  <span>01</span>
                  <b>&lt;main</b> className=
                  <em>"business-site"</em>
                  <b>&gt;</b>
                </div>

                <div className="wd-code-line">
                  <span>02</span>
                  <i>&lt;section&gt;</i>
                </div>

                <div className="wd-code-line wd-code-indent">
                  <span>03</span>
                  <b>&lt;h1&gt;</b>Grow Your Business<b>&lt;/h1&gt;</b>
                </div>

                <div className="wd-code-line wd-code-indent">
                  <span>04</span>
                  <b>&lt;p&gt;</b>Built for your customers<b>&lt;/p&gt;</b>
                </div>

                <div className="wd-code-line">
                  <span>05</span>
                  <i>&lt;/section&gt;</i>
                </div>

                <div className="wd-code-line">
                  <span>06</span>
                  <b>&lt;/main&gt;</b>
                </div>

                <div className="wd-code-status">
                  <span className="wd-status-dot" />
                  Production-ready architecture
                </div>
              </div>
            </div>

            <div className="wd-floating-card wd-floating-card-performance">
              <Gauge size={20} aria-hidden="true" />
              <div>
                <strong>Performance</strong>
                <span>Optimized foundation</span>
              </div>
            </div>

            <div className="wd-floating-card wd-floating-card-responsive">
              <Smartphone size={20} aria-hidden="true" />
              <div>
                <strong>Responsive</strong>
                <span>Every screen</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="wd-section wd-intro" aria-labelledby="wd-intro-title">
        <div className="wd-container wd-intro-grid">
          <div>
            <span className="wd-section-label">Development That Matters</span>
            <h2 id="wd-intro-title">
              A website should do more than simply look good.
            </h2>
          </div>

          <div className="wd-intro-text">
            <p>
              Good development connects design, content, functionality,
              performance, accessibility, and search visibility into one
              coherent experience.
            </p>

            <p>
              Our approach focuses on building websites that are useful for
              visitors today while keeping the technical foundation flexible
              enough for tomorrow's requirements.
            </p>
          </div>
        </div>
      </section>

      <section
        className="wd-section wd-services"
        aria-labelledby="wd-services-title"
      >
        <div className="wd-container">
          <div className="wd-section-heading">
            <span className="wd-section-label">What We Develop</span>
            <h2 id="wd-services-title">
              Website development services for modern businesses.
            </h2>
            <p>
              From a focused landing page to a feature-rich online store, we
              can build the technical foundation around your requirements.
            </p>
          </div>

          <div className="wd-service-grid">
            {developmentServices.map((service) => {
              const Icon = service.icon;

              return (
                <article className="wd-service-card" key={service.title}>
                  <div className="wd-icon-box">
                    <Icon size={23} aria-hidden="true" />
                  </div>

                  <h3>{service.title}</h3>
                  <p>{service.text}</p>

                  <span className="wd-card-arrow" aria-hidden="true">
                    <ArrowRight size={17} />
                  </span>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className="wd-section wd-capabilities"
        aria-labelledby="wd-capabilities-title"
      >
        <div className="wd-container wd-capabilities-grid">
          <div className="wd-capabilities-copy">
            <span className="wd-section-label">Built Around Your Needs</span>

            <h2 id="wd-capabilities-title">
              Flexible functionality without unnecessary complexity.
            </h2>

            <p>
              Every business needs a different combination of pages,
              integrations, and features. We focus on what your website
              actually needs rather than adding technology simply for the sake
              of it.
            </p>

            <Link className="wd-text-link" to="/pricing">
              View Website Packages
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>

          <div className="wd-capability-list">
            {capabilities.map((capability) => (
              <div className="wd-capability-item" key={capability}>
                <CheckCircle2 size={18} aria-hidden="true" />
                <span>{capability}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="wd-section wd-process"
        aria-labelledby="wd-process-title"
      >
        <div className="wd-container">
          <div className="wd-section-heading">
            <span className="wd-section-label">Our Process</span>
            <h2 id="wd-process-title">
              From business idea to production website.
            </h2>
            <p>
              A structured development process helps keep your project
              organized, testable, and aligned with its original goals.
            </p>
          </div>

          <div className="wd-process-grid">
            {processSteps.map((step) => (
              <article className="wd-process-card" key={step.number}>
                <span className="wd-process-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="wd-section wd-principles"
        aria-labelledby="wd-principles-title"
      >
        <div className="wd-container">
          <div className="wd-section-heading">
            <span className="wd-section-label">Technical Foundation</span>
            <h2 id="wd-principles-title">
              Developed with long-term quality in mind.
            </h2>
          </div>

          <div className="wd-principles-grid">
            {technicalPrinciples.map((principle) => {
              const Icon = principle.icon;

              return (
                <article className="wd-principle-card" key={principle.title}>
                  <Icon size={24} aria-hidden="true" />
                  <h3>{principle.title}</h3>
                  <p>{principle.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="wd-section wd-seo" aria-labelledby="wd-seo-title">
        <div className="wd-container wd-seo-box">
          <div className="wd-seo-icon" aria-hidden="true">
            <Search size={28} />
          </div>

          <div className="wd-seo-content">
            <span className="wd-section-label">SEO + Performance</span>

            <h2 id="wd-seo-title">
              Technical development that supports search visibility.
            </h2>

            <p>
              Search-friendly development starts with a strong technical
              foundation. We consider crawlable navigation, semantic HTML,
              descriptive URLs, internal linking, responsive layouts, page
              performance, and accessible interaction patterns.
            </p>

            <div className="wd-seo-points">
              <span>
                <CheckCircle2 size={17} aria-hidden="true" />
                Semantic page structure
              </span>
              <span>
                <CheckCircle2 size={17} aria-hidden="true" />
                Mobile-first layouts
              </span>
              <span>
                <CheckCircle2 size={17} aria-hidden="true" />
                Descriptive internal links
              </span>
              <span>
                <CheckCircle2 size={17} aria-hidden="true" />
                Performance-conscious assets
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="wd-section wd-cta" aria-labelledby="wd-cta-title">
        <div className="wd-container">
          <div className="wd-cta-box">
            <div className="wd-cta-glow" aria-hidden="true" />

            <Sparkles size={26} aria-hidden="true" />

            <h2 id="wd-cta-title">
              Ready to build a website for your business?
            </h2>

            <p>
              Tell us what you want to build, and we can plan the right
              website structure and functionality for your goals.
            </p>

            <div className="wd-cta-actions">
              <Link className="wd-button wd-button-primary" to="/contact">
                Discuss Your Project
                <ArrowRight size={18} aria-hidden="true" />
              </Link>

              <Link className="wd-button wd-button-secondary" to="/faq">
                Read FAQs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default WebDevelopment;