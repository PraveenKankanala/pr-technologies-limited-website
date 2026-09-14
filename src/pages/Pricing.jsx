import {
  ArrowRight,
  Check,
  Crown,
  ShoppingBag,
  Sparkles,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Launch",
    price: "₹30,000",
    label: "LANDING PAGE",
    icon: Zap,
    description:
      "A professional, high-converting landing page for businesses, campaigns, products and personal brands.",
    features: [
      "Premium responsive design",
      "Single-page website",
      "Mobile, tablet & desktop support",
      "Business-focused content structure",
      "Contact / enquiry CTA",
      "WhatsApp integration",
      "Basic on-page SEO",
      "Google-friendly page structure",
      "Performance optimization",
      "Domain & deployment assistance",
    ],
    button: "Build My Landing Page",
    featured: false,
  },

  {
    name: "Premium",
    price: "₹70,000",
    label: "BUSINESS WEBSITE",
    icon: Crown,
    description:
      "A complete premium website for businesses that need a stronger online presence and customer booking functionality.",
    features: [
      "Premium multi-page website",
      "Custom UI/UX design",
      "Mobile-first responsive experience",
      "Up to 8–10 core pages",
      "Online appointment / slot booking",
      "Contact & enquiry forms",
      "WhatsApp integration",
      "Google Maps integration",
      "Basic on-page SEO",
      "Performance optimization",
      "Analytics integration",
      "Domain & deployment assistance",
    ],
    button: "Build My Premium Website",
    featured: true,
  },

  {
    name: "Commerce",
    price: "₹1,00,000",
    label: "E-COMMERCE WEBSITE",
    icon: ShoppingBag,
    description:
      "A professional online store designed to showcase products, manage customers and accept online orders.",
    features: [
      "Custom e-commerce website",
      "Premium responsive design",
      "Product catalogue",
      "Product detail pages",
      "Shopping cart",
      "Checkout experience",
      "Payment gateway integration",
      "Order management",
      "Customer enquiry / support options",
      "WhatsApp integration",
      "Basic on-page SEO",
      "Performance optimization",
      "Analytics integration",
      "Domain & deployment assistance",
    ],
    button: "Build My Online Store",
    featured: false,
  },
];

const comparison = [
  ["Responsive Design", "✓", "✓", "✓"],
  ["Custom UI/UX", "✓", "✓", "✓"],
  ["SEO Foundation", "✓", "✓", "✓"],
  ["WhatsApp Integration", "✓", "✓", "✓"],
  ["Booking / Slot System", "—", "✓", "Optional"],
  ["Product Catalogue", "—", "—", "✓"],
  ["Shopping Cart", "—", "—", "✓"],
  ["Payment Gateway", "—", "—", "✓"],
];

function Pricing() {
  return (
    <main className="pricing-page">
      {/* HERO */}

      <section className="pricing-hero">
        <div className="pricing-orb pricing-orb-one" />
        <div className="pricing-orb pricing-orb-two" />

        <div className="container">
          <div className="pricing-hero-content">
            <div className="eyebrow">
              <Sparkles size={15} />
              SIMPLE & TRANSPARENT PRICING
            </div>

            <h1>
              Choose the website
              <span> your business needs.</span>
            </h1>

            <p>
              Professional website design and development packages built for
              businesses at different stages. Choose a starting package and
              we'll tailor the final solution around your goals.
            </p>
          </div>
        </div>
      </section>

      {/* PRICING CARDS */}

      <section className="pricing-section">
        <div className="container">
          <div className="pricing-grid">
            {plans.map((plan) => {
              const Icon = plan.icon;

              return (
                <article
                  className={`pricing-card ${
                    plan.featured ? "pricing-card-featured" : ""
                  }`}
                  key={plan.name}
                >
                  {plan.featured && (
                    <div className="popular-badge">
                      MOST POPULAR
                    </div>
                  )}

                  <div className="pricing-card-top">
                    <div className="pricing-icon">
                      <Icon size={22} />
                    </div>

                    <p className="pricing-label">{plan.label}</p>

                    <h2>{plan.name}</h2>

                    <p className="pricing-description">
                      {plan.description}
                    </p>

                    <div className="price">
                      <span>{plan.price}</span>
                      <small>starting price</small>
                    </div>

                    <Link
                      to="/contact"
                      className={`pricing-button ${
                        plan.featured
                          ? "pricing-button-primary"
                          : "pricing-button-secondary"
                      }`}
                    >
                      {plan.button}
                      <ArrowRight size={17} />
                    </Link>
                  </div>

                  <div className="pricing-divider" />

                  <div className="pricing-includes">
                    <p>What's included</p>

                    <ul>
                      {plan.features.map((feature) => (
                        <li key={feature}>
                          <span>
                            <Check size={14} />
                          </span>

                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* NOTE */}

      <section className="pricing-note-section">
        <div className="container">
          <div className="pricing-note">
            <div className="pricing-note-icon">
              <Sparkles size={20} />
            </div>

            <div>
              <h3>Need something more specific?</h3>

              <p>
                Your website may require custom features such as advanced
                booking workflows, membership systems, CRM integrations,
                custom dashboards or specialized business functionality.
                Contact us for a tailored quotation.
              </p>
            </div>

            <Link to="/contact">
              Discuss Custom Requirements
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* COMPARISON */}

      <section className="pricing-comparison-section">
        <div className="container">
          <div className="section-heading pricing-heading">
            <div>
              <p className="section-label">COMPARE PACKAGES</p>

              <h2>Find the right starting point.</h2>
            </div>

            <p>
              Each package is designed for a different business requirement.
              We can also customize the scope based on your project.
            </p>
          </div>

          <div className="comparison-table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>₹30K</th>
                  <th>₹70K</th>
                  <th>₹1L</th>
                </tr>
              </thead>

              <tbody>
                {comparison.map((row) => (
                  <tr key={row[0]}>
                    <td>{row[0]}</td>
                    <td>{row[1]}</td>
                    <td>{row[2]}</td>
                    <td>{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ TEASER */}

      <section className="pricing-faq-section">
        <div className="container">
          <div className="pricing-faq-box">
            <div>
              <p className="section-label">HAVE QUESTIONS?</p>

              <h2>
                Not sure which package
                <span> is right for you?</span>
              </h2>

              <p>
                Tell us about your business, the features you need and what
                you want your website to achieve. We'll help you choose the
                right starting package.
              </p>
            </div>

            <div className="pricing-faq-actions">
              <Link to="/faq" className="button button-secondary">
                View FAQs
              </Link>

              <Link to="/contact" className="button button-primary">
                Talk About Your Project
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}

      <section className="cta-section">
        <div className="container">
          <div className="cta-box">
            <div className="cta-content">
              <p className="section-label">START YOUR PROJECT</p>

              <h2>
                Your next website
                <span> starts here.</span>
              </h2>

              <p>
                Let's create a professional digital experience built around
                your business.
              </p>

              <Link to="/contact" className="button button-primary">
                Get Started
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Pricing;