import {
  ArrowRight,
  ChevronDown,
  HelpCircle,
  MessageCircle,
  Search,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import "./FAQ.css";

const faqItems = [
  {
    question: "How much does a professional website cost?",
    answer:
      "Our website packages start from ₹30,000 for a professional landing page. Premium websites with features such as appointment or slot booking start from ₹70,000, while e-commerce websites start from ₹1,00,000. Custom requirements can be discussed separately.",
  },
  {
    question: "What is included in the ₹30,000 landing page package?",
    answer:
      "The landing page package is designed for businesses that need a focused professional online presence. The scope can include responsive design, clear sections, contact or enquiry actions, WhatsApp integration where required, SEO-friendly structure, and production deployment.",
  },
  {
    question: "What is included in the ₹70,000 premium website?",
    answer:
      "The premium website package is intended for businesses that need a more complete website experience. Depending on requirements, it can include multiple pages, appointment or slot booking, enquiry forms, WhatsApp integration, responsive design, SEO-friendly structure, performance-conscious development, and deployment.",
  },
  {
    question: "Can you build a website with online appointment or slot booking?",
    answer:
      "Yes. We can design and develop websites with appointment or slot-booking functionality based on your business requirements. The exact booking workflow and integrations depend on the type of service you provide.",
  },
  {
    question: "Can you build an e-commerce website?",
    answer:
      "Yes. We can build e-commerce websites with product presentation, shopping flows, enquiry or checkout functionality, responsive layouts, and other features based on the project requirements.",
  },
  {
    question: "Will my website work on mobile phones?",
    answer:
      "Yes. Websites are designed with responsive layouts so the experience can adapt to mobile phones, tablets, laptops, and desktop screens.",
  },
  {
    question: "Will my website be SEO-friendly?",
    answer:
      "We build websites with SEO fundamentals in mind, including semantic HTML, descriptive page structure, crawlable navigation, responsive design, performance considerations, internal linking, and appropriate metadata. SEO can improve search visibility, but no agency can guarantee a specific Google ranking.",
  },
  {
    question: "Do you provide domain and hosting setup?",
    answer:
      "Yes. We can assist with domain, hosting, DNS, deployment, SSL, and other launch-related configuration depending on your project requirements.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "The timeline depends on the number of pages, design complexity, content availability, integrations, revisions, and required functionality. A simple website can be completed faster than a larger e-commerce or custom application.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes. We can review an existing website and redesign its visual presentation, navigation, mobile experience, conversion paths, SEO foundations, and performance while considering the existing business requirements.",
  },
  {
    question: "Can you add WhatsApp to my website?",
    answer:
      "Yes. WhatsApp contact actions can be incorporated into appropriate areas of a website so visitors can quickly start a conversation with your business.",
  },
  {
    question: "Can I request custom features?",
    answer:
      "Yes. Custom features can be discussed before development. The final scope, timeline, and pricing depend on the functionality, integrations, technical complexity, and third-party services involved.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFAQs = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    if (!query) {
      return faqItems;
    }

    return faqItems.filter((item) =>
      `${item.question} ${item.answer}`.toLowerCase().includes(query),
    );
  }, [searchTerm]);

  const handleToggle = (index) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <main className="faq-page">
      <section className="faq-hero">
        <div className="faq-container faq-hero-grid">
          <div className="faq-hero-content">
            <div className="faq-eyebrow">
              <HelpCircle size={16} aria-hidden="true" />
              Frequently Asked Questions
            </div>

            <h1>
              Questions About <span>Our Websites?</span>
            </h1>

            <p>
              Find clear answers about website design, development, SEO,
              pricing, booking systems, e-commerce, redesigns, and deployment.
            </p>

            <div className="faq-hero-actions">
              <Link className="faq-primary-btn" to="/contact">
                Start a Project
                <ArrowRight size={18} aria-hidden="true" />
              </Link>

              <Link className="faq-secondary-btn" to="/pricing">
                View Pricing
              </Link>
            </div>
          </div>

          <div className="faq-hero-card">
            <div className="faq-hero-card-icon">
              <MessageCircle size={28} aria-hidden="true" />
            </div>

            <h2>Need a specific answer?</h2>

            <p>
              If your requirement is different from the questions below, tell
              us what you need and we can discuss the right approach.
            </p>

            <Link to="/contact">
              Discuss Your Requirement
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="faq-content">
        <div className="faq-container">
          <div className="faq-search-wrapper">
            <Search size={20} aria-hidden="true" />

            <label htmlFor="faq-search" className="faq-sr-only">
              Search frequently asked questions
            </label>

            <input
              id="faq-search"
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search your question..."
            />
          </div>

          <div className="faq-layout">
            <aside className="faq-sidebar">
              <div className="faq-sidebar-card">
                <ShieldCheck size={24} aria-hidden="true" />

                <h2>Built With Strong Foundations</h2>

                <p>
                  Our approach considers responsive design, accessibility,
                  SEO fundamentals, performance, and maintainable development.
                </p>
              </div>

              <nav className="faq-side-links" aria-label="FAQ topics">
                <a href="#pricing">Pricing</a>
                <a href="#booking">Booking</a>
                <a href="#seo">SEO</a>
                <a href="#ecommerce">E-commerce</a>
                <a href="#deployment">Deployment</a>
              </nav>
            </aside>

            <div className="faq-list">
              {filteredFAQs.length > 0 ? (
                filteredFAQs.map((item, index) => {
                  const isOpen = openIndex === index;

                  return (
                    <article
                      className={`faq-item ${isOpen ? "is-open" : ""}`}
                      key={item.question}
                      id={
                        index === 0
                          ? "pricing"
                          : index === 3
                            ? "booking"
                            : index === 6
                              ? "seo"
                              : index === 4
                                ? "ecommerce"
                                : index === 7
                                  ? "deployment"
                                  : undefined
                      }
                    >
                      <button
                        type="button"
                        className="faq-question"
                        onClick={() => handleToggle(index)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${index}`}
                      >
                        <span>{item.question}</span>

                        <ChevronDown
                          size={21}
                          aria-hidden="true"
                          className="faq-chevron"
                        />
                      </button>

                      <div
                        id={`faq-answer-${index}`}
                        className="faq-answer"
                        hidden={!isOpen}
                      >
                        <p>{item.answer}</p>
                      </div>
                    </article>
                  );
                })
              ) : (
                <div className="faq-empty">
                  <Search size={28} aria-hidden="true" />
                  <h2>No matching questions</h2>
                  <p>
                    Try a different search term or contact us about your
                    requirement.
                  </p>

                  <Link to="/contact">
                    Contact PR Technologies
                    <ArrowRight size={17} aria-hidden="true" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="faq-cta">
        <div className="faq-container">
          <div className="faq-cta-box">
            <div className="faq-eyebrow">
              <MessageCircle size={16} aria-hidden="true" />
              Let's Build
            </div>

            <h2>Still Have Questions?</h2>

            <p>
              Tell us about your business, website idea, or existing website.
              We can discuss the requirements and recommend the right approach.
            </p>

            <Link className="faq-primary-btn" to="/contact">
              Contact Us
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default FAQ;