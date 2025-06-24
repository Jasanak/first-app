import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import emailjs from "emailjs-com";
import Localization from "./language/localization";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [curLang, setCurLang] = useState("en");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await emailjs.sendForm(
        "640750",
        "template_rcp4xh6",
        e.target,
        "RhX31uOT4Mhm8JT3t"
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

  useEffect(() => {
    Localization.setLanguage(curLang);
  }, [curLang]);

  return (
    <div className="App">
      <div
        className="alert alert-info text-center mb-0 py-2 border"
        style={{ marginTop: "75px", scrollMarginTop: "75px" }}
        id="home"
      >
        <strong>{Localization.banner}</strong>
      </div>

      <Navbar />
      <Hero local={curLang} />
      <Testimonial />
      <Features local={curLang} />
      <Services local={curLang} />

      <section className="about-section py-5" id="about">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <h2 className="fw-bold mb-3">{Localization.whoAreWe.title}</h2>
              <p className="text-muted">{Localization.whoAreWe.desc}</p>
              <a href="#contact" className="btn btn-outline-primary">
                {Localization.whoAreWe.btn}
              </a>
            </div>
            <div className="col-lg-6 text-center">
              <iframe
                title="youtube-video"
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/il_t1WVLNxk"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="footer-section py-5 bg-dark text-light">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-4 mb-md-0">
              {/* Fixed Language Toggle Buttons */}
              <div className="mb-4">
                <button
                  onClick={() => setCurLang("en")}
                  className={`btn btn-sm me-2 ${
                    curLang === "en" ? "btn-primary" : "btn-outline-primary"
                  }`}
                >
                  नेपाली
                </button>
                <button
                  onClick={() => setCurLang("np")}
                  className={`btn btn-sm ${
                    curLang === "np" ? "btn-primary" : "btn-outline-primary"
                  }`}
                >
                  English
                </button>
              </div>
              

              <div style={{ marginBottom: "25px" }}>
                <h5 style={{ color: "#3498db" }}>
                  {Localization.contactInfo?.callUs || "CALL US"}
                </h5>
                <p>
                  {Localization.contactInfo?.phones?.[0] || "+977-01-1234567"}
                  <br />
                  {Localization.contactInfo?.phones?.[1] || "+977-01-9876543"}
                </p>
              </div>
              <div style={{ marginBottom: "25px" }}>
                <h5 style={{ color: "#3498db" }}>
                  {Localization.contactInfo?.location || "LOCATION"}
                </h5>
                <p>{Localization.contactInfo?.address || "Kathmandu, Nepal"}</p>
              </div>
              <div>
                <h5 style={{ color: "#3498db" }}>
                  {Localization.contactInfo?.businessHours || "BUSINESS HOURS"}
                </h5>
                <p>
                  {Localization.contactInfo?.hours?.weekdays ||
                    "Mon-Fri: 9am-6pm"}
                  <br />
                  {Localization.contactInfo?.hours?.weekend ||
                    "Sat-Sun: Closed"}
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <h4 style={{ color: "#3498db", marginBottom: "25px" }}>
                {Localization.contact}
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
                  placeholder={
                    Localization.contactInfo?.formLabels?.name ||
                    "Enter your Name"
                  }
                  className="form-control"
                  required
                  style={{ padding: "12px 15px" }}
                />
                <input
                  type="email"
                  name="from_email"
                  placeholder={
                    Localization.contactInfo?.formLabels?.email ||
                    "Enter a valid email address"
                  }
                  className="form-control"
                  required
                  style={{ padding: "12px 15px" }}
                />
                <textarea
                  name="message"
                  placeholder={
                    Localization.contactInfo?.formLabels?.message ||
                    "Your Message"
                  }
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
                  {isLoading
                    ? "Sending..."
                    : Localization.contactInfo?.submit || "SUBMIT"}
                </button>
              </form>
            </div>
          </div>
        </div>
        <div
          className="text-center py-3"
          style={{ backgroundColor: "#1a252f" }}
        >
          <p className="mb-0">
            {Localization.contactInfo?.footer?.copyright ||
              "© 2025 AIMS. All rights reserved."}
          </p>
          <p className="mb-0">
            {Localization.contactInfo?.footer?.tagline ||
              "Your trusted partner for accounting and inventory management solutions."}
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;