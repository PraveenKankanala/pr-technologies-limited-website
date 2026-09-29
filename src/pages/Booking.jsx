import { useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Mail,
  MessageCircle,
  Phone,
  Send,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";
import "./Booking.css";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  date: "",
  time: "",
  message: "",
};

const timeSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
  "06:00 PM",
];

function Booking() {
  const [formData, setFormData] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    setErrorMessage("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setErrorMessage("");
    setSuccess(false);

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.date ||
      !formData.time
    ) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      /*
       * STEP 1:
       * Save the booking in Supabase.
       */
      const { data: booking, error: bookingError } = await supabase
        .from("bookings")
        .insert([
          {
            name: formData.name.trim(),
            email: formData.email.trim(),
            phone: formData.phone.trim(),
            date: formData.date,
            time: formData.time,
            message: formData.message.trim(),
          },
        ])
        .select()
        .single();

      if (bookingError) {
        console.error("Supabase booking error:", bookingError);
        throw new Error(
          bookingError.message || "Unable to save your booking.",
        );
      }

      /*
       * STEP 2:
       * Ask the secure Supabase Edge Function to send
       * the WhatsApp notification.
       *
       * IMPORTANT:
       * WhatsApp/Meta credentials stay inside the Edge Function,
       * NOT inside this React file.
       */
      const { error: whatsappError } =
        await supabase.functions.invoke("send-booking-whatsapp", {
          body: {
            booking: {
              id: booking.id,
              name: formData.name.trim(),
              email: formData.email.trim(),
              phone: formData.phone.trim(),
              date: formData.date,
              time: formData.time,
              message: formData.message.trim(),
            },
          },
        });

      if (whatsappError) {
        console.error("WhatsApp notification error:", whatsappError);

        /*
         * The booking was successfully saved even if
         * WhatsApp notification failed.
         */
        setSuccess(true);
        setErrorMessage(
          "Your consultation was booked successfully. The WhatsApp notification could not be sent right now.",
        );
        return;
      }

      /*
       * STEP 3:
       * Everything succeeded.
       */
      setSuccess(true);
      setFormData(initialForm);
    } catch (error) {
      console.error("Booking submission error:", error);

      setErrorMessage(
        error.message || "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="booking-page">
      <section className="booking-hero">
        <div className="booking-container booking-hero-grid">
          <div className="booking-hero-content">
            <span className="booking-eyebrow">
              <CalendarDays size={16} aria-hidden="true" />
              Book a Consultation
            </span>

            <h1>
              Let's Discuss Your
              <span> Website Project.</span>
            </h1>

            <p>
              Choose a convenient date and time to discuss your website design,
              web development, SEO, redesign, or e-commerce requirements with
              PR Technologies.
            </p>

            <div className="booking-hero-points">
              <div>
                <CheckCircle2 size={19} aria-hidden="true" />
                <span>Professional consultation</span>
              </div>

              <div>
                <CheckCircle2 size={19} aria-hidden="true" />
                <span>Discuss your exact requirements</span>
              </div>

              <div>
                <CheckCircle2 size={19} aria-hidden="true" />
                <span>Choose a convenient time slot</span>
              </div>
            </div>
          </div>

          <div className="booking-hero-card">
            <CalendarDays size={32} aria-hidden="true" />

            <h2>Book Your Slot</h2>

            <p>
              Tell us a little about your project and select your preferred
              consultation time.
            </p>
          </div>
        </div>
      </section>

      <section className="booking-section">
        <div className="booking-container">
          <div className="booking-layout">
            <div className="booking-form-card">
              <div className="booking-card-heading">
                <span className="booking-small-label">CONSULTATION FORM</span>

                <h2>Schedule a Consultation</h2>

                <p>
                  Complete the form below. Your booking will be securely saved
                  and our WhatsApp notification system will be triggered.
                </p>
              </div>

              {success && (
                <div className="booking-success" role="status">
                  <CheckCircle2 size={22} aria-hidden="true" />

                  <div>
                    <strong>Consultation booked successfully!</strong>
                    <p>
                      Your booking has been saved. We will follow up with you
                      regarding the consultation.
                    </p>
                  </div>
                </div>
              )}

              {errorMessage && (
                <div className="booking-error" role="alert">
                  {errorMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate>
                <div className="booking-form-grid">
                  <div className="booking-field">
                    <label htmlFor="booking-name">
                      <User size={16} aria-hidden="true" />
                      Full Name
                    </label>

                    <input
                      id="booking-name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      autoComplete="name"
                      required
                    />
                  </div>

                  <div className="booking-field">
                    <label htmlFor="booking-email">
                      <Mail size={16} aria-hidden="true" />
                      Email Address
                    </label>

                    <input
                      id="booking-email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      autoComplete="email"
                      required
                    />
                  </div>

                  <div className="booking-field">
                    <label htmlFor="booking-phone">
                      <Phone size={16} aria-hidden="true" />
                      Phone / WhatsApp Number
                    </label>

                    <input
                      id="booking-phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      autoComplete="tel"
                      required
                    />
                  </div>

                  <div className="booking-field">
                    <label htmlFor="booking-date">
                      <CalendarDays size={16} aria-hidden="true" />
                      Preferred Date
                    </label>

                    <input
                      id="booking-date"
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleChange}
                      min={new Date().toISOString().split("T")[0]}
                      required
                    />
                  </div>

                  <div className="booking-field booking-full">
                    <label htmlFor="booking-time">
                      <Clock3 size={16} aria-hidden="true" />
                      Preferred Time
                    </label>

                    <select
                      id="booking-time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a time slot</option>

                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="booking-field booking-full">
                    <label htmlFor="booking-message">
                      <MessageCircle size={16} aria-hidden="true" />
                      Tell Us About Your Project
                    </label>

                    <textarea
                      id="booking-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us what type of website you need..."
                      rows="6"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="booking-submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Booking..."
                  ) : (
                    <>
                      Book Consultation
                      <Send size={18} aria-hidden="true" />
                    </>
                  )}
                </button>
              </form>
            </div>

            <aside className="booking-info">
              <div className="booking-info-card">
                <span className="booking-small-label">WHY BOOK WITH US?</span>

                <h2>Plan Your Website With Clarity.</h2>

                <p>
                  A consultation helps us understand your business, target
                  audience, website goals, functionality, and project scope
                  before development begins.
                </p>

                <ul>
                  <li>
                    <CheckCircle2 size={18} aria-hidden="true" />
                    Website design requirements
                  </li>

                  <li>
                    <CheckCircle2 size={18} aria-hidden="true" />
                    Development and functionality
                  </li>

                  <li>
                    <CheckCircle2 size={18} aria-hidden="true" />
                    SEO-friendly website structure
                  </li>

                  <li>
                    <CheckCircle2 size={18} aria-hidden="true" />
                    E-commerce and booking requirements
                  </li>
                </ul>
              </div>

              <div className="booking-contact-card">
                <MessageCircle size={24} aria-hidden="true" />

                <h3>Prefer WhatsApp?</h3>

                <p>
                  You can also contact PR Technologies directly for your
                  website requirement.
                </p>

                <a
                  href="https://wa.me/918309820381"
                  target="_blank"
                  rel="noreferrer"
                  className="booking-whatsapp"
                >
                  Chat on WhatsApp
                  <ArrowRight size={17} aria-hidden="true" />
                </a>
              </div>

              <Link to="/pricing" className="booking-pricing-link">
                View Website Pricing
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Booking;