import React from "react";
import "./Pricing.css";

const plans = [
  {
    name: "Landing Page",
    label: "STARTER",
    price: "₹30,000+",
    description:
      "A professional, high-converting website for businesses, campaigns, products and personal brands.",
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
      "Social media integration",
      "SSL & deployment setup",
      "Basic maintenance guidance",
    ],
    button: "Build My Landing Page",
  },

  {
    name: "Premium Website",
    label: "MOST POPULAR",
    price: "₹70,000+",
    description:
      "A complete professional website with advanced sections, business features and appointment or slot booking.",
    popular: true,
    features: [
      "Everything in Landing Page",
      "5–10 professional pages",
      "Premium UI/UX design",
      "Advanced animations",
      "About, Services & Portfolio pages",
      "Pricing & FAQ pages",
      "Contact page",
      "Online slot / appointment booking",
      "Booking confirmation system",
      "WhatsApp integration",
      "Email notification integration",
      "Google Maps integration",
      "Advanced on-page SEO",
      "Google Search Console setup",
      "Google Analytics setup",
      "Speed & performance optimization",
      "Custom domain & deployment",
      "Basic admin / backend integration",
    ],
    button: "Build My Premium Website",
  },

  {
    name: "E-Commerce Website",
    label: "BUSINESS",
    price: "₹1,00,000+",
    description:
      "A professional online store designed to showcase products, manage customers and support online sales.",
    features: [
      "Everything in Premium Website",
      "Complete e-commerce website",
      "Product listing system",
      "Product categories",
      "Product search & filtering",
      "Product detail pages",
      "Shopping cart",
      "Checkout system",
      "Customer account system",
      "Order management",
      "Payment gateway integration",
      "WhatsApp customer support",
      "Email order notifications",
      "Coupon / discount functionality",
      "Inventory management",
      "Responsive mobile shopping experience",
      "Advanced SEO structure",
      "Google Analytics & Search Console",
      "Performance optimization",
      "Deployment & domain setup",
    ],
    button: "Build My E-Commerce Website",
  },
];

const Pricing = () => {
  return (
    <section className="pricing-page" id="pricing">
      <div className="pricing-container">

        <div className="pricing-heading">
          <span className="pricing-eyebrow">
            ✦ SIMPLE & TRANSPARENT PRICING
          </span>

          <h1>
            Choose the website
            <br />
            your business <span>needs.</span>
          </h1>

          <p>
            Professional website design and development packages built for
            businesses at different stages. Choose a starting package and
            we&apos;ll tailor the final solution around your goals.
          </p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan) => (
            <div
              className={`pricing-card ${
                plan.popular ? "pricing-card-popular" : ""
              }`}
              key={plan.name}
            >
              {plan.popular && (
                <div className="popular-badge">
                  MOST POPULAR
                </div>
              )}

              <div className="pricing-card-top">
                <span className="plan-label">{plan.label}</span>

                <h2>{plan.name}</h2>

                <div className="plan-price">
                  {plan.price}
                </div>

                <p className="plan-description">
                  {plan.description}
                </p>
              </div>

              <div className="pricing-divider"></div>

              <div className="features-title">
                What&apos;s included
              </div>

              <ul className="pricing-features">
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <span className="check">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="/contact"
                className="pricing-button"
              >
                {plan.button}
                <span>→</span>
              </a>
            </div>
          ))}
        </div>

        <div className="pricing-note">
          <span>✦</span>
          Custom functionality, integrations and larger projects can be
          discussed separately.
        </div>

      </div>
    </section>
  );
};

export default Pricing;