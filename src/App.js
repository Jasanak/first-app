import "./App.css";
import myImage from "./images/dash.png";
import p1image from "./images/p1.png";
import p2image from "./images/p2.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();

  return (
    <section>
      {/* <div>
        <div style={{ padding: "10px", textAlign: "right" }}>
          <button
            onClick={() => i18n.changeLanguage("en")}
            style={{ margin: "0 5px", padding: "5px 10px" }}
          >
            English
          </button>
          <button
            onClick={() => i18n.changeLanguage("ne")}
            style={{ margin: "0 5px", padding: "5px 10px" }}
          >
            नेपाली
          </button>
        </div>
      </div> */}
      <div>
        <Navbar />

        <div
          className="alert alert-info text-center mb-0 py-2 border"
          role="alert"
        >
          <strong>
            Partner with us to transform your financial operations through
            powerful IT solutions.
          </strong>
        </div>

        <section className="hero d-flex">
          <div className="container">
            <h1>
              {t("documentation")}
              Professional Accounting Solutions Streamline Your Financial
              Operations with AIMS
            </h1>
            <br />
            <h4>
              AIMS - Accounting and Inventory Management System. The complete
              solution for modern businesses to manage finances, track
              inventory, and generate comprehensive reports with ease.
            </h4>
            <a href="#contact" className="btn btn-primary mt-3 me-2">
              Get in Touch
            </a>
            <a href="#demo" className="btn btn-success mt-3">
              Watch Demo
            </a>
          </div>
          <div className="dash">
            <img
              src={myImage}
              className="img-fluid rounded shadow-sm"
              alt="dash"
            />
          </div>
        </section>

        <section className="section 3">
          <div
            id="testimonialCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="2500"
          >
            <div className="carousel-inner">
              <div className="carousel-item active"> 
                <div className="container py-5">
                  <div className="row align-items-center">
                    <div className="col-md-3 text-center">
                      <img
                        src={p1image}
                        className="img-fluid rounded shadow-sm"
                        alt="p1"
                      />
                    </div>
                    <div className="col-md-9">
                      <h1 className="text-success">“</h1>
                      <p className="fs-5">
                        It would have taken months to build the product team
                        that we <strong>inherited overnight</strong> with
                        Finbiz. <strong>They’re built for startup speed</strong>
                        , and they have consistently delivered a well product
                        for us.
                      </p>
                      <h5 className="text-success fw-bold">Russ Sherpa, MD</h5>
                      <p className="text-muted">CEO of KIA</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="container py-5">
                  <div className="row align-items-center">
                    <div className="col-md-3 text-center">
                      <img
                        src={p2image}
                        className="img-fluid rounded shadow-sm"
                        alt="p2"
                      />
                    </div>
                    <div className="col-md-9">
                      <h1 className="text-success">“</h1>
                      <p className="fs-5">
                        Our partnership with Finbiz was a game-changer. Their{" "}
                        <strong>technical excellence</strong> and{" "}
                        <strong>fast onboarding</strong> helped us scale with
                        confidence.
                      </p>
                      <h5 className="text-success fw-bold">Reya Thapa</h5>
                      <p className="text-muted">Co-Founder/VP, Engineering</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="text-center mt-3">
            <button
              type="button"
              data-bs-target="#testimonialCarousel"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#testimonialCarousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
          </div>
        </section>

        <section className="features">
          <div className="container my-5">
            <h2 className="text-center mb-4 fw-bold">AIMS Features</h2>
            <div className="row text-center">
              {/* First feature is already correct */}
              <div className="col-md-4 mb-4">
                <div className="p-4 bg-light rounded shadow-sm hover-shadow">
                  <i className="bi bi-shield-lock fs-1 text-primary"></i>
                  <h5 className="mt-3 fw-semibold">Secure Systems</h5>
                  <p>Robust protection for your financial data. </p>
                  <a
                    href="#secure-systems"
                    className="position-absolute bottom-0 end-0 m-3 text-decoration-none text-primary"
                  >
                    <i className="bi bi-arrow-right-circle-fill fs-4"></i>
                  </a>
                </div>
              </div>

              {/* Additional features */}
              <div className="col-md-4 mb-4">
                <div className="p-4 bg-light rounded shadow-sm hover-shadow">
                  <i className="bi bi-bar-chart-line fs-1 text-success"></i>
                  <h5 className="mt-3 fw-semibold">Analytics</h5>
                  <p>Live financial insights to guide your decisions.</p>
                  <a
                    href="#secure-systems"
                    className="position-absolute bottom-0 end-0 m-3 text-decoration-none text-primary"
                  >
                    <i className="bi bi-arrow-right-circle-fill fs-4"></i>
                  </a>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div className="p-4 bg-light rounded shadow-sm hover-shadow">
                  <i className="bi bi-cloud-check fs-1 text-info"></i>
                  <h5 className="mt-3 fw-semibold">Cloud Access</h5>
                  <p>Access your platform from anywhere securely.</p>
                  <a
                    href="#secure-systems"
                    className="position-absolute bottom-0 end-0 m-3 text-decoration-none text-primary"
                  >
                    <i className="bi bi-arrow-right-circle-fill fs-4"></i>
                  </a>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div className="p-4 bg-light rounded shadow-sm hover-shadow">
                  <i className="bi bi-people fs-1 text-danger"></i>
                  <h5 className="mt-3 fw-semibold">Team Collaboration</h5>
                  <p>Work together in secure communication tools.</p>
                  <a
                    href="#secure-systems"
                    className="position-absolute bottom-0 end-0 m-3 text-decoration-none text-primary"
                  >
                    <i className="bi bi-arrow-right-circle-fill fs-4"></i>
                  </a>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div className="p-4 bg-light rounded shadow-sm hover-shadow">
                  <i className="bi bi-credit-card-2-back fs-1 text-warning"></i>
                  <h5 className="mt-3 fw-semibold">Easy Payments</h5>
                  <p>Easy payment integrations.</p>
                  <a
                    href="#secure-systems"
                    className="position-absolute bottom-0 end-0 m-3 text-decoration-none text-primary"
                  >
                    <i className="bi bi-arrow-right-circle-fill fs-4"></i>
                  </a>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div className="p-4 bg-light rounded shadow-sm hover-shadow">
                  <i className="bi bi-layers fs-1 text-secondary"></i>
                  <h5 className="mt-3 fw-semibold">Scalable Solutions</h5>
                  <p>Grow your business without tech limits.</p>
                  <a
                    href="#secure-systems"
                    className="position-absolute bottom-0 end-0 m-3 text-decoration-none text-primary"
                  >
                    <i className="bi bi-arrow-right-circle-fill fs-4"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* services */}

      <Services />
      {/* About Us Section */}

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
                      We’re just starting out but we’re building tools we
                      believe every business in Nepal should have access to. At
                      AIMS, we focus on one thing: making finance and inventory
                      management simple. Whether you're running a startup or a
                      growing business, our platform takes the guesswork out of
                      your numbers, so you can focus on what really matters —
                      growing your business.
                    </p>
                    <p className="text-muted mb-4">
                      We just deliver clear, useful software that works. No
                      noise. No clutter. Just tools that help you run things
                      better, every single day.
                    </p>
                    <a href="#contact" className="btn btn-outline-primary">
                      Let’s Build Together
                    </a>
                  </div>
                  <div className="col-lg-6 text-center">
                    {/* <video controls loop autoPlay>
                      <source
                        src="https://www.youtube.com/watch?v=6_nsKL7WNAw&pp=ygUGb2ZmaWNl"
                        type="video/mp4"
                      />
                    </video> */}
                    <iframe
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

      {/* Footer */}
      <footer className="footer-section text-white py-5">
        <div className="container">
          <div className="row">
            {/* About */}
            <div className="col-md-3 mb-4">
              <h5 className="fw-bold">AIMS</h5>
              <p>
                Your trusted partner for accounting and inventory management
                solutions.
              </p>
            </div>

            {/* Services */}
            <div className="col-md-3 mb-4">
              <h6 className="fw-semibold">Services</h6>
              <ul className="list-unstyled">
                <li>Accounting Software</li>
                <li>Inventory Control</li>
                <li>GST Solutions</li>
                <li>Cloud Backup</li>
              </ul>
            </div>

            {/* Resources */}
            <div className="col-md-3 mb-4">
              <h6 className="fw-semibold">Resources</h6>
              <ul className="list-unstyled">
                <li>Documentation</li>
                <li>FAQs</li>
                <li>Case Studies</li>
                <li>Blog</li>
              </ul>
            </div>

            {/* Contact */}
            <div className="col-md-3 mb-4">
              <h6 className="fw-semibold">Contact</h6>
              <ul className="list-unstyled">
                <li>Email: info@aims.com</li>
                <li>Phone: +977-01-1234567</li>
                <li>Location: Kathmandu, Nepal</li>
              </ul>
            </div>
          </div>

          <hr className="border-light" />
          <div className="text-center">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} AIMS. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default App;
