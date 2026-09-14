import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  FileSearch,
  Gauge,
  Globe,
  Link2,
  Search,
  Settings2,
  Smartphone,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./SEO.css";

const seoServices = [
  {
    icon: Search,
    title: "Keyword & Search Intent Research",
    text: "Identify relevant search topics and understand what potential customers are looking for before creating or optimizing website content.",
  },
  {
    icon: FileSearch,
    title: "On-Page SEO",
    text: "Improve page titles, headings, content structure, internal links, and other on-page elements so pages are easier to understand.",
  },
  {
    icon: Settings2,
    title: "Technical SEO",
    text: "Strengthen crawlability, indexability, URLs, redirects, structured data, mobile usability, and other technical foundations.",
  },
  {
    icon: Link2,
    title: "Internal Linking",
    text: "Create logical connections between important pages so visitors and search engines can discover related content more easily.",
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    text: "Reduce unnecessary page weight and improve loading efficiency while maintaining a high-quality visual experience.",
  },
  {
    icon: BarChart3,
    title: "SEO Monitoring",
    text: "Use search performance data to identify opportunities, measure progress, and continuously improve important pages.",
  },
];

const seoFoundations = [
  "Search-friendly website architecture",
  "Descriptive page titles and headings",
  "Helpful, original website content",
  "Logical internal linking",
  "Mobile-responsive implementation",
  "Fast and efficient page delivery",
  "Accessible navigation and interactions",
  "XML sitemap configuration",
  "Robots.txt configuration",
  "Canonical URL strategy where appropriate",
  "Structured data where applicable",
  "Search performance monitoring",
];

const processSteps = [
  {
    number: "01",
    title: "Audit",
    text: "Review the current website structure, technical setup, content, indexing signals, and key SEO opportunities.",
  },
  {
    number: "02",
    title: "Research",
    text: "Study relevant search topics, customer intent, competitors, and the pages needed to serve those searches.",
  },
  {
    number: "03",
    title: "Optimize",
    text: "Improve technical elements, page structure, content, internal linking, and other relevant SEO foundations.",
  },
  {
    number: "04",
    title: "Measure",
    text: "Connect appropriate search and analytics tools so website performance can be monitored using real data.",
  },
  {
    number: "05",
    title: "Improve",
    text: "Use performance insights to refine important pages, expand useful content, and address new opportunities.",
  },
];

const seoQuestions = [
  {
    icon: Globe,
    title: "Can SEO guarantee the #1 position?",
    text: "No. Search rankings depend on many factors outside any agency's control. Good SEO focuses on building a technically strong, useful, trustworthy website and improving its ability to compete in relevant searches.",
  },
  {
    icon: Smartphone,
    title: "Does mobile experience affect SEO?",
    text: "A website should provide a strong experience across devices. Responsive layouts, readable content, usable controls, and efficient performance are important parts of a modern website.",
  },
  {
    icon: TrendingUp,
    title: "How long does SEO take?",
    text: "SEO is usually a long-term process rather than an instant result. The timeframe can vary significantly based on competition, website history, content quality, technical condition, and the search topics being targeted.",
  },
];

function SEO() {
  return (
    <main className="seo-page">
      <section className="seo-hero" aria-labelledby="seo-hero-title">
        <div className="seo-hero-grid" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>

        <div className="seo-container seo-hero-layout">
          <div className="seo-hero-content">
            <span className="seo-eyebrow">
              <Search size={16} aria-hidden="true" />
              Search Engine Optimization
            </span>

            <h1 id="seo-hero-title">
              SEO That Helps Your Website Get{" "}
              <span>Discovered by the Right People.</span>
            </h1>

            <p className="seo-hero-description">
              Build a stronger search presence with technical SEO, useful
              content, clear website architecture, performance optimization,
              and data-driven improvements.
            </p>

            <div className="seo-hero-actions">
              <Link
                className="seo-button seo-button-primary"
                to="/contact"
              >
                Discuss Your SEO Goals
                <ArrowRight size={18} aria-hidden="true" />
              </Link>

              <Link
                className="seo-button seo-button-secondary"
                to="/web-development"
              >
                Explore Development
              </Link>
            </div>

            <div className="seo-hero-points">
              <span>
                <CheckCircle2 size={17} aria-hidden="true" />
                Technical foundations
              </span>
              <span>
                <CheckCircle2 size={17} aria-hidden="true" />
                Helpful content structure
              </span>
              <span>
                <CheckCircle2 size={17} aria-hidden="true" />
                Performance focused
              </span>
            </div>
          </div>

          <div className="seo-search-visual" aria-hidden="true">
            <div className="seo-search-card">
              <div className="seo-search-bar">
                <Search size={17} />
                <span>professional website design</span>
              </div>

              <div className="seo-result seo-result-main">
                <span className="seo-result-url">
                  prtechnologieslimited.com
                </span>
                <strong>Professional Website Design Services</strong>
                <p>
                  Modern websites designed and developed for businesses.
                </p>
              </div>

              <div className="seo-result">
                <span className="seo-result-url">yourbusiness.com</span>
                <strong>Grow Your Business Online</strong>
                <p>Build a better digital presence.</p>
              </div>
            </div>

            <div className="seo-ranking-orbit seo-orbit-one">
              <TrendingUp size={19} />
              <span>Visibility</span>
            </div>

            <div className="seo-ranking-orbit seo-orbit-two">
              <Gauge size={19} />
              <span>Performance</span>
            </div>
          </div>
        </div>
      </section>

      <section
        className="seo-section seo-intro"
        aria-labelledby="seo-intro-title"
      >
        <div className="seo-container seo-intro-grid">
          <div>
            <span className="seo-section-label">SEO Is More Than Keywords</span>
            <h2 id="seo-intro-title">
              Build a website search engines can understand and people can use.
            </h2>
          </div>

          <div className="seo-intro-copy">
            <p>
              Effective SEO combines technical quality, useful information,
              good user experience, clear architecture, and authority built
              over time.
            </p>

            <p>
              Instead of filling pages with keywords, we focus on creating
              content and website structures that genuinely answer customer
              questions and support business goals.
            </p>
          </div>
        </div>
      </section>

      <section
        className="seo-section seo-services"
        aria-labelledby="seo-services-title"
      >
        <div className="seo-container">
          <div className="seo-section-heading">
            <span className="seo-section-label">SEO Services</span>
            <h2 id="seo-services-title">
              A complete SEO foundation for your website.
            </h2>
            <p>
              SEO requirements differ from one website to another. We focus on
              the areas that provide meaningful value for your business and
              audience.
            </p>
          </div>

          <div className="seo-service-grid">
            {seoServices.map((service) => {
              const Icon = service.icon;

              return (
                <article className="seo-service-card" key={service.title}>
                  <div className="seo-icon-box">
                    <Icon size={23} aria-hidden="true" />
                  </div>

                  <h3>{service.title}</h3>
                  <p>{service.text}</p>

                  <span className="seo-card-line" aria-hidden="true" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className="seo-section seo-foundations"
        aria-labelledby="seo-foundations-title"
      >
        <div className="seo-container seo-foundations-grid">
          <div className="seo-foundations-copy">
            <span className="seo-section-label">Technical Foundation</span>

            <h2 id="seo-foundations-title">
              Strong fundamentals create a better starting point for organic
              growth.
            </h2>

            <p>
              Before chasing rankings, a website needs to be accessible to
              users and discoverable by search engines. Our SEO approach
              considers the technical and content foundations that support
              sustainable search visibility.
            </p>

            <Link className="seo-text-link" to="/web-development">
              See Our Development Approach
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>

          <div className="seo-foundation-list">
            {seoFoundations.map((item) => (
              <div className="seo-foundation-item" key={item}>
                <CheckCircle2 size={18} aria-hidden="true" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="seo-section seo-process"
        aria-labelledby="seo-process-title"
      >
        <div className="seo-container">
          <div className="seo-section-heading">
            <span className="seo-section-label">Our SEO Process</span>
            <h2 id="seo-process-title">
              Improve, measure, learn, and improve again.
            </h2>
            <p>
              SEO works best as an ongoing process rather than a one-time
              checklist.
            </p>
          </div>

          <div className="seo-process-grid">
            {processSteps.map((step) => (
              <article className="seo-process-card" key={step.number}>
                <span className="seo-process-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="seo-section seo-performance"
        aria-labelledby="seo-performance-title"
      >
        <div className="seo-container">
          <div className="seo-performance-box">
            <div className="seo-performance-icon" aria-hidden="true">
              <Gauge size={28} />
            </div>

            <div>
              <span className="seo-section-label">
                SEO + Website Performance
              </span>

              <h2 id="seo-performance-title">
                Search visibility starts with a technically sound website.
              </h2>

              <p>
                A fast, responsive, accessible website gives visitors a better
                experience and provides a stronger technical foundation for
                search. Performance should be considered during development,
                not only after launch.
              </p>
            </div>

            <div className="seo-metrics">
              <div>
                <strong>Mobile</strong>
                <span>Responsive experience</span>
              </div>

              <div>
                <strong>Structure</strong>
                <span>Semantic HTML</span>
              </div>

              <div>
                <strong>Content</strong>
                <span>Helpful information</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="seo-section seo-faq"
        aria-labelledby="seo-faq-title"
      >
        <div className="seo-container">
          <div className="seo-section-heading">
            <span className="seo-section-label">SEO Questions</span>
            <h2 id="seo-faq-title">
              What businesses should know about SEO.
            </h2>
          </div>

          <div className="seo-question-grid">
            {seoQuestions.map((question) => {
              const Icon = question.icon;

              return (
                <article className="seo-question-card" key={question.title}>
                  <Icon size={24} aria-hidden="true" />
                  <h3>{question.title}</h3>
                  <p>{question.text}</p>
                </article>
              );
            })}
          </div>

          <div className="seo-faq-link">
            <Link className="seo-text-link" to="/faq">
              View All Frequently Asked Questions
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="seo-section seo-cta" aria-labelledby="seo-cta-title">
        <div className="seo-container">
          <div className="seo-cta-box">
            <div className="seo-cta-glow" aria-hidden="true" />

            <Sparkles size={26} aria-hidden="true" />

            <h2 id="seo-cta-title">
              Want a stronger search foundation for your website?
            </h2>

            <p>
              Let's discuss your website, target audience, current challenges,
              and the SEO improvements that make sense for your business.
            </p>

            <div className="seo-cta-actions">
              <Link
                className="seo-button seo-button-primary"
                to="/contact"
              >
                Start an SEO Conversation
                <ArrowRight size={18} aria-hidden="true" />
              </Link>

              <Link
                className="seo-button seo-button-secondary"
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

export default SEO;