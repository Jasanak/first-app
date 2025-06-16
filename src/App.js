import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Testimonial from "./components/Testimonial";
import Features from "./components/Features";
import Services from "./components/Services";
import { useState } from "react";
import emailjs from "emailjs-com";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.sendForm(
        "640750", // Replace with your actual service ID
        "template_rcp4xh6", // Replace with your actual template ID
        e.target,
        "RhX31uOT4Mhm8JT3t" // Replace with your public key
      );

      setIsSubmitted(true);
      e.target.reset();
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      alert("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section>
      <div>
        <Navbar />
        <div
          className="alert alert-info text-center mb-0 py-2 border"
          role="alert"
          style={{ marginTop: "75px", scrollMarginTop: "75px" }}
          id="home"
        >
          <strong>
            Partner with us to transform your financial operations through
            powerful IT solutions.
          </strong>
        </div>

        <Hero />
        <Testimonial />
        <Features />
      </div>

      <Services />

      <section className="about-section py-5" id="about">
        <div className="carousel">
          <div className="carousel-track" id="track">
            <div className="slide">
              <div className="container">
                <div className="row align-items-center g-5">
                  <div className="col-lg-6">
                    <h2 className="fw-bold mb-3">Who We Are</h2>
                    <p className="text-muted">
                      FinBiz Nepal is a small team of developers, designers, and
                      thinkers passionate about simplifying finance through
                      tech. We build practical financial tools that help
                      businesses work smarter, not harder.
                    </p>
                    <p className="text-muted">
                      We're just starting out but we're building tools we
                      believe every business in Nepal should have access to. At
                      AIMS, we focus on one thing: making finance and inventory
                      management simple.
                    </p>
                    <p className="text-muted mb-4">
                      We just deliver clear, useful software that works. No
                      noise. No clutter. Just tools that help you run things
                      better, every single day.
                    </p>
                    <a href="#contact" className="btn btn-outline-primary">
                      Let's Build Together
                    </a>
                  </div>
                  <div className="col-lg-6 text-center">
                    <iframe
                      title="youtube video"
                      height="480"
                      width="800"
                      src="https://www.youtube.com/embed/il_t1WVLNxk"
                    ></iframe>
                    <p className="text-muted small mt-3">
                      🚀Built to work. Designed to last.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer
        className="footer-section py-5"
        style={{ backgroundColor: "#2c3e50", color: "#ecf0f1" }}
      >
        <div id="contact" style={{ minHeight: "50vh" }}>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h4 style={{ color: "#3498db", marginBottom: "25px" }}>
                  Contact
                </h4>
                <div style={{ marginBottom: "25px" }}>
                  <h5 style={{ color: "#3498db" }}>CALL US</h5>
                  <p>
                    +977-01-1234567
                    <br />
                    +977-01-9876543
                  </p>
                </div>
                <div style={{ marginBottom: "25px" }}>
                  <h5 style={{ color: "#3498db" }}>LOCATION</h5>
                  <p>Kathmandu, Nepal</p>
                </div>
                <div>
                  <h5 style={{ color: "#3498db" }}>BUSINESS HOURS</h5>
                  <p>
                    Mon-Fri: 9am-6pm
                    <br />
                    Sat-Sun: Closed
                  </p>
                </div>
              </div>

              <div className="col-md-6">
                <h4 style={{ color: "#3498db", marginBottom: "25px" }}>
                  CONTACT US
                </h4>

                {isSubmitted && (
                  <div
                    className="alert alert-success"
                    style={{ marginBottom: "25px" }}
                  >
                    <span className="d-block mb-2">
                      ✅ Message sent successfully!
                    </span>
                    <small>We'll contact you within 24 hours.</small>
                  </div>
                )}

                <form
                  onSubmit={handleSubmit}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                  }}
                >
                  <input
                    type="text"
                    name="from_name"
                    placeholder="Enter your Name"
                    className="form-control"
                    required
                    style={{ padding: "12px 15px" }}
                  />
                  <input
                    type="email"
                    name="from_email"
                    placeholder="Enter a valid email address"
                    className="form-control"
                    required
                    style={{ padding: "12px 15px" }}
                  />
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    className="form-control"
                    rows="5"
                    required
                    style={{ padding: "12px 15px" }}
                  ></textarea>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={isLoading}
                    style={{
                      padding: "12px 30px",
                      alignSelf: "flex-start",
                      marginTop: "10px",
                      width: isLoading ? "120px" : "auto",
                    }}
                  >
                    {isLoading ? "Sending..." : "SUBMIT"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div
          className="text-center py-3"
          style={{ backgroundColor: "#1a252f" }}
        >
          <p className="mb-0">© 2025 AIMS. All rights reserved.</p>
          <p className="mb-0">
            Your trusted partner for accounting and inventory management
            solutions.
          </p>
        </div>
      </footer>
    </section>
  );
}

export default App;
