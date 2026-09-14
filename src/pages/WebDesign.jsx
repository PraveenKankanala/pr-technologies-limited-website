import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Gauge,
  Layout,
  Search,
  Smartphone,
  Sparkles,
  Target,
  WandSparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./WebDesign.css";

const designServices = [
  {
    icon: Layout,
    title: "Custom Website Design",
    description:
      "A unique visual direction created around your business, audience, brand identity and goals instead of relying on a generic template.",
  },
  {
    icon: Smartphone,
    title: "Responsive Web Design",
    description:
      "Layouts that adapt naturally across smartphones, tablets, laptops and large desktop screens for a consistent user experience.",
  },
  {
    icon: Target,
    title: "Conversion-Focused UX",
    description:
      "Clear page structure, calls to action and user journeys designed to help visitors understand your offer and take the next step.",
  },
  {
    icon: Search,
    title: "SEO-Friendly Structure",
    description:
      "Semantic page sections, logical headings, descriptive links and crawl-friendly content foundations that support search visibility.",
  },
  {
    icon: Gauge,
    title: "Performance-Conscious Design",
    description:
      "Visual effects and interactions are planned with performance in mind so the design does not unnecessarily slow down the experience.",
  },
  {
    icon: Code2,
    title: "Development-Ready UI",
    description:
      "Design decisions are made with real implementation in mind, helping create a smoother transition from visual concept to working website.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We learn about your business, customers, services, competitors and the action you want visitors to take.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We organize the information architecture, page hierarchy, navigation and important conversion paths.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We create the visual direction, responsive layouts, typography, spacing and interface details around your brand.",
  },
  {
    number: "04",
    title: "Build",
    description:
      "The approved design is developed into a responsive website using a performance-conscious implementation.",
  },
  {
    number: "05",
    title: "Optimize",
    description:
      "We review responsiveness, accessibility, technical structure, content presentation and key performance considerations.",
  },
  {
    number: "06",
    title: "Launch",
    description:
      "The finished website is prepared for deployment so your business has a professional digital presence ready for visitors.",
  },
];

const websiteTypes = [
  "Business websites",
  "Corporate websites",
  "Restaurant websites",
  "Real estate websites",
  "Hotel and hospitality websites",
  "Salon and service-business websites",
  "Personal and professional websites",
  "Landing pages",
];

const designPrinciples = [
  "Clear visual hierarchy",
  "Mobile-first thinking",
  "Accessible interaction patterns",
  "Readable typography",
  "Descriptive navigation",
  "Meaningful calls to action",
  "Consistent brand presentation",
  "Performance-aware visual effects",
];

export default function WebDesign() {
  return (
    <main className="web-design-page">
      {/* HERO */}
      <section className="web-design-hero">
        <div className="web-design-container">
          <div className="web-design-hero-grid">
            <div className="web-design-hero-content">
              <div className="web-design-eyebrow">
                <Sparkles size={16} aria-hidden="true" />
                <span>Professional Website Design</span>
              </div>

              <h1>
                Website Design That Turns
                <span> First Impressions Into Opportunities.</span>
              </h1>

              <p className="web-design-hero-description">
                PR Technologies creates modern, responsive and
                conversion-focused website designs for businesses that want a
                stronger digital presence. We combine premium visual design
                with usability, accessibility, SEO-friendly structure and
                performance-conscious development.
              </p>

              <div className="web-design-hero-actions">
                <Link className="web-design-primary-button" to="/contact">
                  Start Your Website
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>

                <Link className="web-design-secondary-button" to="/portfolio">
                  Explore Portfolio
                </Link>
              </div>

              <div className="web-design-trust-row">
                <div>
                  <CheckCircle2 size={17} aria-hidden="true" />
                  <span>Responsive</span>
                </div>

                <div>
                  <CheckCircle2 size={17} aria-hidden="true" />
                  <span>SEO-ready</span>
                </div>

                <div>
                  <CheckCircle2 size={17} aria-hidden="true" />
                  <span>Performance-aware</span>
                </div>
              </div>
            </div>

            <div className="web-design-hero-visual" aria-hidden="true">
              <div className="web-design-orbit web-design-orbit-one" />
              <div className="web-design-orbit web-design-orbit-two" />

              <div className="web-design-browser">
                <div className="web-design-browser-top">
                  <div className="web-design-browser-dots">
                    <span />
                    <span />
                    <span />
                  </div>

                  <div className="web-design-browser-url">
                    yourbusiness.com
                  </div>
                </div>

                <div className="web-design-browser-content">
                  <div className="design-preview-nav">
                    <span className="design-preview-logo">
                      YOUR BRAND
                    </span>

                    <div className="design-preview-links">
                      <span>Services</span>
                      <span>About</span>
                      <span>Contact</span>
                    </div>
                  </div>

                  <div className="design-preview-body">
                    <div className="design-preview-copy">
                      <span className="design-preview-label">
                        YOUR BUSINESS. YOUR DIGITAL PRESENCE.
                      </span>

                      <strong>
                        Make your
                        <br />
                        business
                        <br />
                        stand out.
                      </strong>

                      <div className="design-preview-cta">
                        Get Started
                      </div>
                    </div>

                    <div className="design-preview-art">
                      <div />
                      <div />
                      <div />
                    </div>
                  </div>

                  <div className="design-preview-stats">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </div>

              <div className="web-design-floating-card web-design-card-one">
                <WandSparkles size={18} />
                <div>
                  <strong>Custom UI</strong>
                  <span>Designed for your brand</span>
                </div>
              </div>

              <div className="web-design-floating-card web-design-card-two">
                <Smartphone size={18} />
                <div>
                  <strong>Responsive</strong>
                  <span>Every screen size</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE */}
      <section className="web-design-value">
        <div className="web-design-container">
          <div className="web-design-section-heading">
            <div className="web-design-eyebrow">
              <span>Why Website Design Matters</span>
            </div>

            <h2>
              Your website should look impressive
              <span> and work intelligently.</span>
            </h2>

            <p>
              Good website design is not only about colours, animations or
              attractive layouts. It is about making information easy to
              understand, creating confidence in your business and guiding
              visitors toward useful actions.
            </p>
          </div>

          <div className="web-design-value-grid">
            <article>
              <span className="web-design-value-number">01</span>
              <h3>Build Trust</h3>
              <p>
                A polished digital presence can communicate professionalism
                and make it easier for potential customers to understand your
                business.
              </p>
            </article>

            <article>
              <span className="web-design-value-number">02</span>
              <h3>Improve Usability</h3>
              <p>
                Clear navigation and well-structured content help visitors
                find services, information and contact options without
                unnecessary friction.
              </p>
            </article>

            <article>
              <span className="web-design-value-number">03</span>
              <h3>Support Growth</h3>
              <p>
                A properly structured website can provide a foundation for
                search visibility, lead generation, online bookings and future
                digital features.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="web-design-services" id="website-design-services">
        <div className="web-design-container">
          <div className="web-design-section-heading web-design-centered">
            <div className="web-design-eyebrow">
              <span>Website Design Services</span>
            </div>

            <h2>
              Everything needed for a
              <span> professional website experience.</span>
            </h2>

            <p>
              Our website design approach combines visual quality with
              practical usability, technical awareness and business-focused
              structure.
            </p>
          </div>

          <div className="web-design-services-grid">
            {designServices.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  className="web-design-service-card"
                  key={service.title}
                >
                  <div className="web-design-service-icon">
                    <Icon size={22} aria-hidden="true" />
                  </div>

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHAT WE DESIGN */}
      <section className="web-design-types">
        <div className="web-design-container">
          <div className="web-design-types-grid">
            <div className="web-design-types-content">
              <div className="web-design-eyebrow">
                <span>Website Types</span>
              </div>

              <h2>
                Designed for different
                <span> business needs.</span>
              </h2>

              <p>
                Every industry has different customers, information and
                conversion goals. The website structure should reflect those
                differences instead of forcing every business into the same
                layout.
              </p>

              <Link
                className="web-design-text-link"
                to="/portfolio"
              >
                View website concepts
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>

            <div className="web-design-types-list">
              {websiteTypes.map((type) => (
                <div className="web-design-type-item" key={type}>
                  <CheckCircle2 size={19} aria-hidden="true" />
                  <span>{type}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="web-design-process" id="design-process">
        <div className="web-design-container">
          <div className="web-design-section-heading web-design-centered">
            <div className="web-design-eyebrow">
              <span>Our Website Design Process</span>
            </div>

            <h2>
              From business idea to
              <span> finished website.</span>
            </h2>

            <p>
              A structured process keeps the website focused on your business
              objectives while reducing unnecessary design and development
              decisions.
            </p>
          </div>

          <div className="web-design-process-grid">
            {processSteps.map((step) => (
              <article
                className="web-design-process-card"
                key={step.number}
              >
                <span className="web-design-process-number">
                  {step.number}
                </span>

                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="web-design-principles">
        <div className="web-design-container">
          <div className="web-design-principles-grid">
            <div>
              <div className="web-design-eyebrow">
                <span>Design Principles</span>
              </div>

              <h2>
                Beautiful design should never
                <span> compromise usability.</span>
              </h2>

              <p>
                We aim for interfaces that feel premium while remaining
                understandable, responsive and practical. Visual effects are
                used to support the experience rather than distract from the
                content.
              </p>
            </div>

            <div className="web-design-principles-list">
              {designPrinciples.map((principle) => (
                <div
                  className="web-design-principle"
                  key={principle}
                >
                  <CheckCircle2 size={18} aria-hidden="true" />
                  <span>{principle}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SEO + PERFORMANCE */}
      <section className="web-design-technical">
        <div className="web-design-container">
          <div className="web-design-technical-card">
            <div className="web-design-technical-icon">
              <Search size={25} aria-hidden="true" />
            </div>

            <div>
              <div className="web-design-eyebrow">
                <span>Built With Search & Performance In Mind</span>
              </div>

              <h2>
                A premium design with a
                <span> strong technical foundation.</span>
              </h2>

              <p>
                Website design is only one part of building an effective
                digital presence. Our approach considers semantic structure,
                content hierarchy, responsive behaviour, accessibility,
                performance and the technical requirements needed for a
                search-friendly website.
              </p>

              <div className="web-design-technical-points">
                <span>Semantic structure</span>
                <span>Responsive layouts</span>
                <span>Accessible interactions</span>
                <span>Performance awareness</span>
                <span>Clear internal linking</span>
                <span>Search-friendly content</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="web-design-cta">
        <div className="web-design-container">
          <div className="web-design-cta-card">
            <div>
              <div className="web-design-eyebrow">
                <Sparkles size={16} aria-hidden="true" />
                <span>Ready to Build Your Website?</span>
              </div>

              <h2>
                Give your business a website
                <span> it can be proud of.</span>
              </h2>

              <p>
                Tell PR Technologies about your business and what you want
                your website to achieve. We'll help shape the right digital
                experience for your requirements.
              </p>
            </div>

            <div className="web-design-cta-actions">
              <Link
                className="web-design-primary-button"
                to="/contact"
              >
                Discuss Your Project
                <ArrowRight size={18} aria-hidden="true" />
              </Link>

              <Link
                className="web-design-secondary-button"
                to="/pricing"
              >
                View Website Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}