import {
  ArrowRight,
  BarChart3,
  CalendarDays,
  CheckCircle2,
  Code2,
  Globe,
  Layout,
  MonitorSmartphone,
  Search,
  ShoppingCart,
  Sparkles,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./Home.css";

const services = [
  {
    icon: Layout,
    title: "Website Design",
    description:
      "Premium, responsive website designs built around your brand, audience, and business goals.",
    link: "/web-design",
  },
  {
    icon: Code2,
    title: "Website Development",
    description:
      "Modern website development with responsive layouts, scalable structure, performance, and clean implementation.",
    link: "/web-development",
  },
  {
    icon: Search,
    title: "SEO",
    description:
      "SEO-friendly website foundations designed to help search engines understand and discover your content.",
    link: "/seo",
  },
  {
    icon: Sparkles,
    title: "Website Redesign",
    description:
      "Transform an outdated website into a modern, responsive, accessible, and conversion-focused experience.",
    link: "/website-redesign",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Websites",
    description:
      "Professional online stores designed around products, customers, enquiries, and business requirements.",
    link: "/ecommerce-websites",
  },
];

const websiteTypes = [
  "Business Websites",
  "Corporate Websites",
  "Restaurant Websites",
  "Real Estate Websites",
  "Hotel & Hospitality",
  "Salon & Service Businesses",
  "Professional Websites",
  "Landing Pages",
];

const processSteps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We understand your business, audience, goals, content, and required functionality.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We structure the pages, navigation, content hierarchy, features, and user journey.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We create a premium visual direction focused on clarity, usability, and brand presentation.",
  },
  {
    number: "04",
    title: "Develop",
    description:
      "The approved design is transformed into a responsive production-ready website.",
  },
  {
    number: "05",
    title: "Optimize",
    description:
      "We review responsiveness, accessibility, SEO foundations, performance, and usability.",
  },
  {
    number: "06",
    title: "Launch",
    description:
      "The website is deployed and launch-related configuration is completed.",
  },
];

function Home() {
  return (
    <main className="home-page">
      {/* HERO */}
      <section className="home-hero">
        <div className="home-hero-grid home-container">
          <div className="home-hero-content">
            <div className="home-eyebrow">
              <Sparkles size={16} aria-hidden="true" />
              Premium Website Design & Development
            </div>

            <h1>
              We Build
              <span> Digital Experiences.</span>
            </h1>

            <p>
              PR Technologies creates professional websites for businesses,
              professionals, and growing brands. From premium website design
              and development to SEO-friendly foundations and e-commerce,
              we build digital experiences around your goals.
            </p>

            <div className="home-hero-actions">
              <Link className="home-primary-btn" to="/contact">
                Start Your Project
                <ArrowRight size={18} aria-hidden="true" />
              </Link>

              <Link className="home-secondary-btn" to="/portfolio">
                Explore Our Work
              </Link>
            </div>

            <div className="home-trust-points">
              <span>
                <CheckCircle2 size={17} aria-hidden="true" />
                Responsive
              </span>

              <span>
                <CheckCircle2 size={17} aria-hidden="true" />
                SEO-Friendly
              </span>

              <span>
                <CheckCircle2 size={17} aria-hidden="true" />
                Performance-Conscious
              </span>
            </div>
          </div>

          <div className="home-hero-visual" aria-hidden="true">
            <div className="home-orb home-orb-one" />
            <div className="home-orb home-orb-two" />

            <div className="home-browser">
              <div className="home-browser-top">
                <div className="home-browser-dots">
                  <span />
                  <span />
                  <span />
                </div>

                <div className="home-browser-url">
                  prtechnologieslimited.com
                </div>
              </div>

              <div className="home-browser-content">
                <div className="home-browser-nav">
                  <strong>PR</strong>

                  <div>
                    <span />
                    <span />
                    <span />
                  </div>
                </div>

                <div className="home-browser-hero">
                  <small>BUILDING YOUR DIGITAL FUTURE</small>

                  <strong>
                    Your Business.
                    <br />
                    Your Digital Presence.
                  </strong>

                  <span />
                  <span className="short" />
                </div>

                <div className="home-browser-cards">
                  <div>
                    <Layout size={18} />
                  </div>

                  <div>
                    <Code2 size={18} />
                  </div>

                  <div>
                    <Search size={18} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="home-intro">
        <div className="home-container">
          <div className="home-intro-grid">
            <div>
              <div className="home-eyebrow">
                <Globe size={16} aria-hidden="true" />
                PR Technologies
              </div>

              <h2>
                Your website should do more than
                <span> look good.</span>
              </h2>
            </div>

            <div>
              <p>
                A professional website is often the first interaction a
                potential customer has with your business. We combine visual
                design, responsive development, clear navigation, SEO
                fundamentals, and performance-conscious implementation to
                create websites that are built for real users.
              </p>

              <Link to="/web-design" className="home-text-link">
                Explore Website Design
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="home-services">
        <div className="home-container">
          <div className="home-section-heading">
            <div className="home-eyebrow">
              <Zap size={16} aria-hidden="true" />
              What We Do
            </div>

            <h2>
              Complete Website
              <span> Solutions.</span>
            </h2>

            <p>
              From your first design concept to production deployment, PR
              Technologies provides website services designed around your
              business requirements.
            </p>
          </div>

          <div className="home-services-grid">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <Link
                  key={service.title}
                  to={service.link}
                  className="home-service-card"
                >
                  <div className="home-service-icon">
                    <Icon size={24} aria-hidden="true" />
                  </div>

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <span className="home-card-link">
                    Explore Service
                    <ArrowRight size={17} aria-hidden="true" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="home-features">
        <div className="home-container">
          <div className="home-feature-grid">
            <div className="home-feature-visual" aria-hidden="true">
              <div className="home-feature-panel">
                <div className="home-feature-panel-top">
                  <span>WEBSITE QUALITY</span>
                  <BarChart3 size={20} />
                </div>

                <div className="home-quality-row">
                  <span>Responsive Experience</span>
                  <strong>Ready</strong>
                </div>

                <div className="home-quality-row">
                  <span>SEO Structure</span>
                  <strong>Ready</strong>
                </div>

                <div className="home-quality-row">
                  <span>Accessibility</span>
                  <strong>Ready</strong>
                </div>

                <div className="home-quality-row">
                  <span>Performance</span>
                  <strong>Optimized</strong>
                </div>

                <div className="home-quality-line">
                  <span />
                </div>
              </div>
            </div>

            <div className="home-feature-content">
              <div className="home-eyebrow">
                <CheckCircle2 size={16} aria-hidden="true" />
                Built With Purpose
              </div>

              <h2>
                Design that looks premium.
                <span> Development that works.</span>
              </h2>

              <p>
                We don't treat a website as just a collection of pages. We
                consider how users navigate, how content is understood, how
                search engines crawl the site, how it behaves on mobile
                devices, and how efficiently it loads.
              </p>

              <div className="home-feature-list">
                <div>
                  <MonitorSmartphone size={20} aria-hidden="true" />
                  <span>
                    Responsive experiences across mobile, tablet, and desktop.
                  </span>
                </div>

                <div>
                  <Search size={20} aria-hidden="true" />
                  <span>
                    Semantic, crawlable, and SEO-conscious website structure.
                  </span>
                </div>

                <div>
                  <Zap size={20} aria-hidden="true" />
                  <span>
                    Performance-conscious implementation and visual effects.
                  </span>
                </div>

                <div>
                  <Globe size={20} aria-hidden="true" />
                  <span>
                    Production deployment and launch assistance.
                  </span>
                </div>
              </div>

              <Link to="/web-development" className="home-primary-btn">
                Explore Development
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WEBSITE TYPES */}
      <section className="home-types">
        <div className="home-container">
          <div className="home-section-heading centered">
            <div className="home-eyebrow">
              <Globe size={16} aria-hidden="true" />
              Websites For Businesses
            </div>

            <h2>
              Built Around Your
              <span> Industry.</span>
            </h2>

            <p>
              Whether you need a simple business website or a more advanced
              digital experience, we can tailor the structure and functionality
              to your requirements.
            </p>
          </div>

          <div className="home-types-grid">
            {websiteTypes.map((type, index) => (
              <div className="home-type-card" key={type}>
                <span>0{index + 1}</span>
                <strong>{type}</strong>
                <ArrowRight size={17} aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="home-process">
        <div className="home-container">
          <div className="home-section-heading">
            <div className="home-eyebrow">
              <Code2 size={16} aria-hidden="true" />
              Our Process
            </div>

            <h2>
              From Idea to
              <span> Launch.</span>
            </h2>

            <p>
              A structured workflow helps keep the project clear, organized,
              and aligned with your business objectives.
            </p>
          </div>

          <div className="home-process-grid">
            {processSteps.map((step) => (
              <article className="home-process-card" key={step.number}>
                <span className="home-process-number">{step.number}</span>

                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section className="home-booking">
        <div className="home-container">
          <div className="home-booking-box">
            <div>
              <div className="home-eyebrow">
                <CalendarDays size={16} aria-hidden="true" />
                Schedule a Conversation
              </div>

              <h2>
                Have a website idea?
                <span> Let's discuss it.</span>
              </h2>

              <p>
                Choose a convenient date and time to discuss your website,
                redesign, SEO, e-commerce, or custom development requirements.
              </p>
            </div>

            <Link to="/booking" className="home-primary-btn">
              Book a Consultation
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="home-pricing">
        <div className="home-container">
          <div className="home-section-heading centered">
            <div className="home-eyebrow">
              <Sparkles size={16} aria-hidden="true" />
              Starting Packages
            </div>

            <h2>
              Simple Website
              <span> Pricing.</span>
            </h2>

            <p>
              Choose a starting package based on your website requirements.
              Custom functionality can be discussed separately.
            </p>
          </div>

          <div className="home-price-grid">
            <article className="home-price-card">
              <span>Landing Page</span>
              <strong>
                ₹30,000<small>+</small>
              </strong>
              <p>
                A focused professional website for businesses that need a
                strong online presence.
              </p>

              <Link to="/pricing">
                View Package
                <ArrowRight size={16} />
              </Link>
            </article>

            <article className="home-price-card featured">
              <div className="home-price-badge">POPULAR</div>

              <span>Premium Website</span>
              <strong>
                ₹70,000<small>+</small>
              </strong>
              <p>
                A complete website with advanced sections and features such as
                appointment or slot booking.
              </p>

              <Link to="/pricing">
                View Package
                <ArrowRight size={16} />
              </Link>
            </article>

            <article className="home-price-card">
              <span>E-commerce Website</span>
              <strong>
                ₹1,00,000<small>+</small>
              </strong>
              <p>
                A professional online store designed around your products,
                customers, and business requirements.
              </p>

              <Link to="/pricing">
                View Package
                <ArrowRight size={16} />
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="home-final">
        <div className="home-container">
          <div className="home-final-box">
            <div className="home-eyebrow">
              <Sparkles size={16} aria-hidden="true" />
              PR Technologies
            </div>

            <h2>
              Ready to build your
              <span> digital presence?</span>
            </h2>

            <p>
              Tell us about your business, website idea, or existing website.
              Let's create a professional digital experience designed around
              your goals.
            </p>

            <div className="home-final-actions">
              <Link className="home-primary-btn" to="/contact">
                Start Your Project
                <ArrowRight size={18} aria-hidden="true" />
              </Link>

              <Link className="home-secondary-btn" to="/booking">
                Book a Consultation
                <CalendarDays size={17} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;