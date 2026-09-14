import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Gauge,
  CreditCard,
  Globe,
  Layers3,
  LockKeyhole,
  Package,
  Search,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Truck,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./Ecommerce.css";

const ecommerceFeatures = [
  {
    icon: ShoppingBag,
    title: "Professional Online Store",
    text: "Create a polished e-commerce website that presents your products clearly and gives customers a smooth shopping experience.",
  },
  {
    icon: Smartphone,
    title: "Mobile-Friendly Shopping",
    text: "Responsive layouts help customers browse products, view details, and complete important actions across phones, tablets, and desktops.",
  },
  {
    icon: CreditCard,
    title: "Checkout & Payment Integration",
    text: "Build checkout experiences around your business requirements and connect suitable payment providers or payment workflows.",
  },
  {
    icon: Package,
    title: "Product & Category Structure",
    text: "Organize products into logical categories with clear product information, pricing, images, and calls to action.",
  },
  {
    icon: Search,
    title: "SEO-Friendly Store Structure",
    text: "Use descriptive page structures, crawlable navigation, meaningful content, internal links, and search-friendly technical foundations.",
  },
  {
    icon: LockKeyhole,
    title: "Secure Development Foundations",
    text: "Follow secure development practices and integrate third-party services carefully to support a reliable online shopping experience.",
  },
];

const ecommerceCapabilities = [
  "Product and category pages",
  "Shopping cart functionality",
  "Checkout workflows",
  "Payment gateway integration",
  "Customer enquiry forms",
  "WhatsApp integration",
  "Product search and filtering",
  "Responsive mobile-first layouts",
  "SEO-friendly page architecture",
  "Analytics-ready implementation",
  "Order and enquiry workflows",
  "Production deployment assistance",
];

const processSteps = [
  {
    number: "01",
    title: "Understand",
    text: "We understand your products, customers, business model, required features, and e-commerce goals.",
  },
  {
    number: "02",
    title: "Plan",
    text: "We plan the website structure, product categories, user journeys, important pages, integrations, and technical requirements.",
  },
  {
    number: "03",
    title: "Design",
    text: "We create a professional visual experience with clear product presentation, intuitive navigation, and conversion-focused layouts.",
  },
  {
    number: "04",
    title: "Develop",
    text: "The approved design is converted into a responsive and functional e-commerce website using modern web development practices.",
  },
  {
    number: "05",
    title: "Test",
    text: "We test important interactions, responsive layouts, forms, navigation, links, and the overall shopping experience.",
  },
  {
    number: "06",
    title: "Launch",
    text: "After final checks, we assist with production deployment and launch-related configuration.",
  },
];

function Ecommerce() {
  return (
    <main className="ecommerce-page">
      <section className="ecommerce-hero">
        <div className="ecommerce-container ecommerce-hero-grid">
          <div className="ecommerce-hero-content">
            <div className="ecommerce-eyebrow">
              <ShoppingBag size={16} aria-hidden="true" />
              E-commerce Website Development
            </div>

            <h1>
              Build a Professional
              <span> E-commerce Website</span>
              for Your Business.
            </h1>

            <p>
              Sell products online with a modern, responsive, and
              SEO-friendly e-commerce website designed around your customers,
              products, brand, and business goals.
            </p>

            <div className="ecommerce-hero-actions">
              <Link className="ecommerce-primary-btn" to="/contact">
                Start Your E-commerce Project
                <ArrowRight size={18} aria-hidden="true" />
              </Link>

              <Link className="ecommerce-secondary-btn" to="/pricing">
                View Pricing
              </Link>
            </div>

            <div className="ecommerce-trust-points">
              <span>
                <CheckCircle2 size={17} aria-hidden="true" />
                Responsive design
              </span>
              <span>
                <CheckCircle2 size={17} aria-hidden="true" />
                SEO-friendly structure
              </span>
              <span>
                <CheckCircle2 size={17} aria-hidden="true" />
                Conversion-focused UX
              </span>
            </div>
          </div>

          <div className="ecommerce-hero-visual" aria-hidden="true">
            <div className="ecommerce-glow" />

            <div className="ecommerce-store-card">
              <div className="ecommerce-store-top">
                <div className="ecommerce-store-brand">
                  <span>PR</span>
                  <strong>STORE</strong>
                </div>

                <div className="ecommerce-store-icons">
                  <Search size={16} />
                  <ShoppingBag size={16} />
                </div>
              </div>

              <div className="ecommerce-store-banner">
                <small>NEW COLLECTION</small>
                <strong>Build Your Online Store</strong>
                <span>Discover • Shop • Grow</span>
              </div>

              <div className="ecommerce-products">
                <div className="ecommerce-product-card">
                  <div className="ecommerce-product-image">
                    <Package size={25} />
                  </div>
                  <span>Product</span>
                  <strong>₹2,499</strong>
                </div>

                <div className="ecommerce-product-card">
                  <div className="ecommerce-product-image ecommerce-product-image-two">
                    <ShoppingBag size={25} />
                  </div>
                  <span>Collection</span>
                  <strong>₹3,999</strong>
                </div>
              </div>

              <div className="ecommerce-store-footer">
                <span>Secure Shopping</span>
                <span>Fast Checkout</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ecommerce-intro">
        <div className="ecommerce-container ecommerce-intro-grid">
          <div>
            <div className="ecommerce-eyebrow">
              <Sparkles size={16} aria-hidden="true" />
              Online Store Solutions
            </div>

            <h2>
              More Than Just a
              <span> Product Catalog.</span>
            </h2>
          </div>

          <div>
            <p>
              A successful e-commerce website needs more than attractive
              product pages. Customers need to find products easily,
              understand what they are buying, trust the website, and complete
              important actions without unnecessary friction.
            </p>

            <p>
              PR Technologies builds e-commerce experiences around clear
              information architecture, responsive design, user experience,
              technical SEO, performance considerations, and business
              requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="ecommerce-features">
        <div className="ecommerce-container">
          <div className="ecommerce-section-heading">
            <div className="ecommerce-eyebrow">
              <Layers3 size={16} aria-hidden="true" />
              E-commerce Features
            </div>

            <h2>
              Everything Your
              <span> Online Store Needs.</span>
            </h2>

            <p>
              Build a flexible online shopping experience with features
              selected according to your products, customers, and business
              requirements.
            </p>
          </div>

          <div className="ecommerce-feature-grid">
            {ecommerceFeatures.map((feature) => {
              const Icon = feature.icon;

              return (
                <article className="ecommerce-feature-card" key={feature.title}>
                  <div className="ecommerce-feature-icon">
                    <Icon size={25} aria-hidden="true" />
                  </div>

                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="ecommerce-capabilities">
        <div className="ecommerce-container ecommerce-capabilities-grid">
          <div className="ecommerce-capabilities-content">
            <div className="ecommerce-eyebrow">
              <Zap size={16} aria-hidden="true" />
              Store Capabilities
            </div>

            <h2>
              Create a Store
              <span> Built Around Your Business.</span>
            </h2>

            <p>
              Every business has different products, customers, payment
              requirements, and order processes. Your e-commerce website can
              be structured around the functionality your business actually
              needs.
            </p>

            <Link className="ecommerce-outline-btn" to="/contact">
              Discuss Your Requirements
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>

          <div className="ecommerce-capability-list">
            {ecommerceCapabilities.map((item) => (
              <div className="ecommerce-capability-item" key={item}>
                <CheckCircle2 size={19} aria-hidden="true" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ecommerce-business-types">
        <div className="ecommerce-container">
          <div className="ecommerce-section-heading">
            <div className="ecommerce-eyebrow">
              <Globe size={16} aria-hidden="true" />
              E-commerce Solutions
            </div>

            <h2>
              Suitable for
              <span> Different Business Models.</span>
            </h2>

            <p>
              We can design e-commerce websites for different product
              categories and online business models.
            </p>
          </div>

          <div className="ecommerce-business-grid">
            <article>
              <span>01</span>
              <h3>Fashion & Apparel</h3>
              <p>
                Product-focused online stores with categories, collections,
                product details, and mobile-friendly shopping experiences.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>Beauty & Lifestyle</h3>
              <p>
                Professional storefronts for beauty, wellness, lifestyle, and
                personal-care products.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>Electronics & Products</h3>
              <p>
                Structured product catalogs designed to help customers compare,
                explore, and enquire about products.
              </p>
            </article>

            <article>
              <span>04</span>
              <h3>Local & Growing Businesses</h3>
              <p>
                E-commerce websites for businesses moving from offline sales
                toward a stronger online presence.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="ecommerce-process">
        <div className="ecommerce-container">
          <div className="ecommerce-section-heading">
            <div className="ecommerce-eyebrow">
              <BarChart3 size={16} aria-hidden="true" />
              Our Development Process
            </div>

            <h2>
              From Product Idea
              <span> to Online Store.</span>
            </h2>

            <p>
              A structured process helps create an e-commerce website that is
              easier to use, maintain, test, and launch.
            </p>
          </div>

          <div className="ecommerce-process-grid">
            {processSteps.map((step) => (
              <article className="ecommerce-process-card" key={step.number}>
                <span className="ecommerce-step-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ecommerce-seo">
        <div className="ecommerce-container ecommerce-seo-grid">
          <div className="ecommerce-seo-visual" aria-hidden="true">
            <div className="ecommerce-seo-panel">
              <div className="ecommerce-seo-panel-top">
                <Search size={19} />
                <span>Search Visibility</span>
              </div>

              <div className="ecommerce-seo-line">
                <span />
                <strong>Product Pages</strong>
              </div>

              <div className="ecommerce-seo-line">
                <span />
                <strong>Category Pages</strong>
              </div>

              <div className="ecommerce-seo-line">
                <span />
                <strong>Internal Links</strong>
              </div>

              <div className="ecommerce-seo-line">
                <span />
                <strong>Technical SEO</strong>
              </div>
            </div>
          </div>

          <div className="ecommerce-seo-content">
            <div className="ecommerce-eyebrow">
              <Search size={16} aria-hidden="true" />
              E-commerce SEO
            </div>

            <h2>
              Build Your Store with
              <span> Search Engines in Mind.</span>
            </h2>

            <p>
              E-commerce SEO starts with a technically sound website and
              useful product content. We consider search-friendly page
              structures, descriptive content, internal linking, responsive
              design, performance, crawlability, and metadata as part of the
              website foundation.
            </p>

            <div className="ecommerce-seo-points">
              <div>
                <CheckCircle2 size={18} aria-hidden="true" />
                <span>Descriptive product and category structures</span>
              </div>

              <div>
                <CheckCircle2 size={18} aria-hidden="true" />
                <span>Search-friendly navigation and internal linking</span>
              </div>

              <div>
                <CheckCircle2 size={18} aria-hidden="true" />
                <span>Responsive and performance-conscious implementation</span>
              </div>

              <div>
                <CheckCircle2 size={18} aria-hidden="true" />
                <span>Meaningful metadata and page content</span>
              </div>
            </div>

            <p className="ecommerce-seo-note">
              SEO can improve search visibility over time, but rankings depend
              on many factors and no agency can guarantee a specific Google
              position.
            </p>
          </div>
        </div>
      </section>

      <section className="ecommerce-performance">
        <div className="ecommerce-container ecommerce-performance-box">
          <div className="ecommerce-performance-icon">
            <Gauge size={28} aria-hidden="true" />
          </div>

          <div>
            <div className="ecommerce-eyebrow">
              <Zap size={16} aria-hidden="true" />
              Performance Matters
            </div>

            <h2>
              A Faster Shopping Experience
              <span> Helps Customers Stay Engaged.</span>
            </h2>

            <p>
              We consider page weight, responsive layouts, image handling,
              efficient implementation, and unnecessary visual effects when
              building an e-commerce experience.
            </p>
          </div>
        </div>
      </section>

      <section className="ecommerce-cta">
        <div className="ecommerce-container">
          <div className="ecommerce-cta-box">
            <div className="ecommerce-eyebrow">
              <ShoppingBag size={16} aria-hidden="true" />
              Start Selling Online
            </div>

            <h2>
              Ready to Build Your
              <span> E-commerce Website?</span>
            </h2>

            <p>
              Tell PR Technologies about your products, target customers,
              required features, and preferred website style. We can discuss
              the right e-commerce approach for your business.
            </p>

            <div className="ecommerce-cta-actions">
              <Link className="ecommerce-primary-btn" to="/contact">
                Discuss Your Project
                <ArrowRight size={18} aria-hidden="true" />
              </Link>

              <Link className="ecommerce-secondary-btn" to="/faq">
                E-commerce FAQs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Ecommerce;