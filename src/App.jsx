import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

const Home = lazy(() => import("./pages/Home"));
const WebDesign = lazy(() => import("./pages/WebDesign"));
const WebDevelopment = lazy(() => import("./pages/WebDevelopment"));
const SEO = lazy(() => import("./pages/SEO"));
const WebsiteRedesign = lazy(() => import("./pages/WebsiteRedesign"));
const Ecommerce = lazy(() => import("./pages/Ecommerce"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Pricing = lazy(() => import("./pages/Pricing"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Booking = lazy(() => import("./pages/Booking"));
const Contact = lazy(() => import("./pages/Contact"));

function LoadingScreen() {
  return (
    <div className="app-loading" aria-label="Loading page">
      <span>PR Technologies</span>
    </div>
  );
}

function NotFound() {
  return (
    <main className="not-found-page">
      <div>
        <span>404</span>
        <h1>Page Not Found</h1>
        <p>
          The page you are looking for does not exist or may have been moved.
        </p>
        <a href="/">Return Home</a>
      </div>
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/web-design" element={<WebDesign />} />
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/seo" element={<SEO />} />
          <Route
            path="/website-redesign"
            element={<WebsiteRedesign />}
          />
          <Route
            path="/ecommerce-websites"
            element={<Ecommerce />}
          />

          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      <Footer />
    </BrowserRouter>
  );
}

export default App;