import {
  ArrowRight,
  Award,
  CheckCircle2,
  Code2,
  Gauge,
  Globe2,
  Layers3,
  MonitorSmartphone,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./About.css";

const principles = [
  {
    icon: Target,
    title: "Business-Focused Strategy",
    text: "We start with your business goals, target audience, services, and desired customer actions before planning the website.",
  },
  {
    icon: Sparkles,
    title: "Premium User Experience",
    text: "We create modern digital experiences with clear visual hierarchy, intuitive navigation, strong calls to action, and consistent branding.",
  },
  {
    icon: MonitorSmartphone,
    title: "Responsive by Design",
    text: "Every website is planned to provide a consistent experience across mobile phones, tablets, laptops, and desktop screens.",
  },
  {
    icon: Search,
    title: "SEO-Friendly Foundations",
    text: "Our websites are structured with search-engine-friendly fundamentals including semantic content, crawlable navigation, metadata, internal linking, and performance considerations.",
  },
  {
    icon: Gauge,
    title: "Performance Conscious",
    text: "We focus on efficient implementation, optimized assets, responsive layouts, and practical performance improvements.",
  },
  {
    icon: ShieldCheck,
    title: "Quality & Accessibility",
    text: "We consider keyboard navigation, readable content, meaningful labels, focus states, contrast, and other accessibility fundamentals.",
  },
];

const capabilities = [
  "Professional business websites",
  "Corporate websites",
  "Premium landing pages",
  "Appointment and slot-booking websites",
  "E-commerce websites",
  "Website redesign and modernization",
  "SEO-friendly website development",
  "WhatsApp and enquiry integrations",
  "Domain, hosting and deployment assistance",
  "Performance-conscious web development",
];

function About() {
  return (
    <main className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <div className="about-container about-hero-grid">
          <div className="about-hero-content">
            <div className="about-eyebrow">
              <Sparkles size={16} aria-hidden="true" />
              About PR Technologies
            </div>

            <h1>
              Building Digital Experiences
              <span> That Move Businesses Forward.</span>
            </h1>

            <p className="about-hero-text">
              PR Technologies is a website design and development company
              focused on creating professional, responsive, SEO-friendly, and
              performance-conscious websites for businesses, professionals,
              and growing brands.
            </p>

            <p className="about-hero-text about-hero-secondary">
              From a focused landing page to a complete business website or
              e-commerce platform, we combine modern design, thoughtful
              development, search-friendly structure, and conversion-focused
              user experience.
            </p>

            <div className="about-hero-actions">
              <Link className="about-primary-btn" to="/contact">
                Start Your Project
                <ArrowRight size={18} aria-hidden="true" />
              </Link>

              <Link className="about-secondary-btn" to="/portfolio">
                Explore Our Work
              </Link>
            </div>
          </div>

          <div className="about-hero-visual" aria-hidden="true">
            <div className="about-orbit about-orbit-one" />
            <div className="about-orbit about-orbit-two" />

            <div className="about-3d-card">
              <div className="about-card-top">
                <div className="about-card-logo">PR</div>

                <div className="about-card-status">
                  <span />
                  Digital Solutions
                </div>
              </div>

              <div className="about-card-icon">
                <Globe2 size={34} />
              </div>

              <div className="about-card-content">
                <span>PR TECHNOLOGIES</span>
                <strong>BUILDING YOUR DIGITAL FUTURE</strong>
              </div>

              <div className="about-card-stats">
                <div>
                  <strong>01</strong>
                  <span>Strategy</span>
                </div>

                <div>
                  <strong>02</strong>
                  <span>Design</span>
                </div>

                <div>
                  <strong>03</strong>
                  <span>Development</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="about-introduction">
        <div className="about-container">
          <div className="about-section-heading">
            <div className="about-eyebrow">
              <Users size={16} aria-hidden="true" />
              Who We Are
            </div>

            <h2>
              A Website Partner Focused on
              <span> Quality, Clarity & Growth.</span>
            </h2>

            <p>
              Your website is often the first place potential customers
              experience your brand. We believe it should communicate what you
              do clearly, establish trust quickly, work smoothly on every
              device, and make it easy for visitors to take the next step.
            </p>
          </div>

          <div className="about-introduction-grid">
            <article className="about-story-card">
              <div className="about-card-number">01</div>
              <h3>More Than Just a Website</h3>
              <p>
                We approach website projects as digital business assets rather
                than simply collections of pages. The structure, content,
                navigation, visual design, performance, and calls to action
                should work together toward a clear business objective.
              </p>
              <p>
                Whether you need a new website, a redesign, an online store,
                or a booking-enabled website, we build around the requirements
                of your business and customers.
              </p>
            </article>

            <article className="about-story-card about-story-highlight">
              <div className="about-card-number">02</div>
              <h3>Designed for Modern Businesses</h3>
              <p>
                Modern customers expect websites to load quickly, look
                professional, work naturally on mobile devices, and provide
                useful information without unnecessary friction.
              </p>
              <p>
                Our design and development process considers these expectations
                from the beginning so the finished website is visually strong
                while remaining practical and usable.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="about-mission">
        <div className="about-container">
          <div className="about-mission-box">
            <div className="about-mission-icon">
              <Award size={30} aria-hidden="true" />
            </div>

            <div>
              <div className="about-eyebrow">
                <Target size={16} aria-hidden="true" />
                Our Mission
              </div>

              <h2>
                Create Better Websites.
                <span> Create Better Digital Experiences.</span>
              </h2>

              <p>
                Our mission is to help businesses establish a stronger digital
                presence through high-quality website design, development, SEO
                foundations, responsive experiences, and reliable deployment
                support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="about-principles">
        <div className="about-container">
          <div className="about-section-heading centered">
            <div className="about-eyebrow">
              <Layers3 size={16} aria-hidden="true" />
              Our Approach
            </div>

            <h2>
              What We Believe Makes a
              <span> Great Website.</span>
            </h2>

            <p>
              A successful website needs more than attractive visuals. We
              combine design, technology, usability, search fundamentals, and
              performance to create a stronger overall experience.
            </p>
          </div>

          <div className="about-principles-grid">
            {principles.map((item) => {
              const Icon = item.icon;

              return (
                <article className="about-principle-card" key={item.title}>
                  <div className="about-principle-icon">
                    <Icon size={23} aria-hidden="true" />
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="about-capabilities">
        <div className="about-container about-capabilities-grid">
          <div className="about-capabilities-content">
            <div className="about-eyebrow">
              <Code2 size={16} aria-hidden="true" />
              What We Build
            </div>

            <h2>
              Digital Solutions for
              <span> Different Business Needs.</span>
            </h2>

            <p>
              PR Technologies provides website design and development solutions
              for businesses at different stages. Our projects can range from
              focused landing pages to larger websites with booking,
              e-commerce, integrations, and custom functionality.
            </p>

            <Link className="about-text-link" to="/services">
              Explore Our Services
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>

          <div className="about-capabilities-list">
            {capabilities.map((item) => (
              <div className="about-capability" key={item}>
                <CheckCircle2 size={19} aria-hidden="true" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO section */}
      <section className="about-seo">
        <div className="about-container">
          <div className="about-seo-grid">
            <div className="about-seo-visual" aria-hidden="true">
              <div className="about-search-window">
                <div className="about-search-bar">
                  <Search size={17} />
                  <span>Your Business</span>
                </div>

                <div className="about-search-result">
                  <small>PR TECHNOLOGIES</small>
                  <strong>Professional Website Experience</strong>
                  <p>
                    Design · Development · SEO · E-commerce · Redesign
                  </p>
                </div>

                <div className="about-search-line" />
                <div className="about-search-line short" />
              </div>
            </div>

            <div className="about-seo-content">
              <div className="about-eyebrow">
                <Search size={16} aria-hidden="true" />
                SEO-Friendly Development
              </div>

              <h2>
                Built With Search Visibility
                <span> in Mind.</span>
              </h2>

              <p>
                We structure websites with SEO fundamentals in mind from the
                development stage. This can include descriptive page titles,
                meaningful headings, semantic HTML, crawlable navigation,
                internal links, mobile-friendly layouts, structured content,
                and performance considerations.
              </p>

              <p>
                SEO is a long-term process and no legitimate website company
                can guarantee a specific Google ranking. Our goal is to create
                a technically sound and useful website that gives search
                engines and visitors a clear understanding of your business.
              </p>

              <div className="about-seo-points">
                <div>
                  <CheckCircle2 size={18} aria-hidden="true" />
                  <span>Semantic and descriptive page structure</span>
                </div>

                <div>
                  <CheckCircle2 size={18} aria-hidden="true" />
                  <span>Mobile-friendly responsive experience</span>
                </div>

                <div>
                  <CheckCircle2 size={18} aria-hidden="true" />
                  <span>Internal linking and crawlable navigation</span>
                </div>

                <div>
                  <CheckCircle2 size={18} aria-hidden="true" />
                  <span>Performance-conscious implementation</span>
                </div>
              </div>

              <Link className="about-text-link" to="/seo">
                Learn About Our SEO Approach
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="about-process">
        <div className="about-container">
          <div className="about-section-heading centered">
            <div className="about-eyebrow">
              <Layers3 size={16} aria-hidden="true" />
              Our Process
            </div>

            <h2>
              From Idea to
              <span> Live Website.</span>
            </h2>

            <p>
              We follow a structured process to keep website projects clear,
              purposeful, and focused on the final business objective.
            </p>
          </div>

          <div className="about-process-grid">
            <div className="about-process-item">
              <span>01</span>
              <h3>Understand</h3>
              <p>Learn about your business, audience, goals, and requirements.</p>
            </div>

            <div className="about-process-item">
              <span>02</span>
              <h3>Plan</h3>
              <p>Define the site structure, content direction, features, and user journey.</p>
            </div>

            <div className="about-process-item">
              <span>03</span>
              <h3>Design</h3>
              <p>Create a modern visual system that reflects your brand and objectives.</p>
            </div>

            <div className="about-process-item">
              <span>04</span>
              <h3>Develop</h3>
              <p>Build responsive, maintainable, and performance-conscious website components.</p>
            </div>

            <div className="about-process-item">
              <span>05</span>
              <h3>Optimize</h3>
              <p>Review responsiveness, accessibility, SEO foundations, and user experience.</p>
            </div>

            <div className="about-process-item">
              <span>06</span>
              <h3>Launch</h3>
              <p>Prepare the website for production deployment and launch.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="about-final">
        <div className="about-container">
          <div className="about-final-box">
            <div className="about-eyebrow">
              <Sparkles size={16} aria-hidden="true" />
              PR Technologies
            </div>

            <h2>
              Your Business Deserves a
              <span> Strong Digital Presence.</span>
            </h2>

            <p>
              Whether you need a new website, a modern redesign, an online
              store, or a booking-enabled website, let's discuss your
              requirements and build a solution around your business.
            </p>

            <div className="about-final-actions">
              <Link className="about-primary-btn" to="/contact">
                Talk About Your Project
                <ArrowRight size={18} aria-hidden="true" />
              </Link>

              <Link className="about-secondary-btn" to="/pricing">
                View Website Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;