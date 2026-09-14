import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Mail,
  MessageCircle,
  User,
} from "lucide-react";
import { useMemo, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Link } from "react-router-dom";
import "./Booking.css";

const timeSlots = [
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
  "06:00 PM",
];

function Booking() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    requirement: "",
  });

  const formattedDate = useMemo(
    () =>
      selectedDate.toLocaleDateString("en-IN", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
    [selectedDate],
  );

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!selectedTime) {
      alert("Please select an available time slot.");
      return;
    }

    alert(
      `Booking request selected for ${formattedDate} at ${selectedTime}.`,
    );
  };

  return (
    <main className="booking-page">
      <section className="booking-hero">
        <div className="booking-container">
          <div className="booking-eyebrow">
            <CalendarDays size={16} aria-hidden="true" />
            Schedule a Conversation
          </div>

          <h1>
            Book a
            <span> Consultation.</span>
          </h1>

          <p>
            Choose a convenient date and time to discuss your website,
            e-commerce, redesign, SEO, or custom development requirements with
            PR Technologies.
          </p>
        </div>
      </section>

      <section className="booking-section">
        <div className="booking-container">
          <div className="booking-grid">
            <div className="booking-calendar-card">
              <div className="booking-card-heading">
                <CalendarDays size={22} aria-hidden="true" />

                <div>
                  <span>Select a Date</span>
                  <h2>Choose your preferred day</h2>
                </div>
              </div>

              <Calendar
                onChange={setSelectedDate}
                value={selectedDate}
                minDate={new Date()}
                next2Label={null}
                prev2Label={null}
              />

              <div className="booking-selected-date">
                <CheckCircle2 size={18} aria-hidden="true" />

                <div>
                  <span>Selected date</span>
                  <strong>{formattedDate}</strong>
                </div>
              </div>
            </div>

            <div className="booking-details-card">
              <div className="booking-card-heading">
                <Clock3 size={22} aria-hidden="true" />

                <div>
                  <span>Select a Time</span>
                  <h2>Available time slots</h2>
                </div>
              </div>

              <div className="booking-slots" aria-label="Available time slots">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    type="button"
                    className={`booking-slot ${
                      selectedTime === time ? "is-selected" : ""
                    }`}
                    onClick={() => setSelectedTime(time)}
                    aria-pressed={selectedTime === time}
                  >
                    <Clock3 size={15} aria-hidden="true" />
                    {time}
                  </button>
                ))}
              </div>

              <div className="booking-divider" />

              <form className="booking-form" onSubmit={handleSubmit}>
                <div className="booking-form-heading">
                  <h2>Your Details</h2>

                  <p>
                    Tell us a little about your project so we can prepare for
                    the conversation.
                  </p>
                </div>

                <div className="booking-form-grid">
                  <div className="booking-field">
                    <label htmlFor="booking-name">
                      <User size={15} aria-hidden="true" />
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
                      <Mail size={15} aria-hidden="true" />
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

                  <div className="booking-field booking-field-full">
                    <label htmlFor="booking-phone">
                      <MessageCircle size={15} aria-hidden="true" />
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

                  <div className="booking-field booking-field-full">
                    <label htmlFor="booking-requirement">
                      Project Requirement
                    </label>

                    <textarea
                      id="booking-requirement"
                      name="requirement"
                      value={formData.requirement}
                      onChange={handleChange}
                      placeholder="Tell us what you want to build..."
                      rows="4"
                    />
                  </div>
                </div>

                <button className="booking-submit" type="submit">
                  Request Booking
                  <ArrowRight size={18} aria-hidden="true" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="booking-bottom">
        <div className="booking-container">
          <div className="booking-bottom-box">
            <div>
              <span>Prefer WhatsApp?</span>

              <h2>Let's discuss your project directly.</h2>

              <p>
                You can also contact PR Technologies through WhatsApp if you
                prefer a direct conversation.
              </p>
            </div>

            <a
              href="https://wa.me/918309820381?text=Hello%20PR%20Technologies%2C%20I%20would%20like%20to%20discuss%20a%20website%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="booking-whatsapp"
            >
              <MessageCircle size={19} aria-hidden="true" />
              WhatsApp Us
            </a>
          </div>

          <Link className="booking-back-link" to="/contact">
            Back to Contact
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Booking;