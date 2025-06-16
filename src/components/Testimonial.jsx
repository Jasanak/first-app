import React from "react";
import testimonialData from "./testimonialdata";

function Testimonial() {
  return (
    <div>
      <section className="section">
        <div
          id="testimonialCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="2500"
        >
          <div className="carousel-inner">
            {testimonialData?.map((t, index) => (
              <div
                key={t.id}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <div className="container py-5">
                  <div className="row align-items-center">
                    <div className="col-md-3 text-center">
                      <img
                        src={t.img}
                        className="img-fluid rounded shadow-sm"
                        alt={t.name}
                      />
                    </div>
                    <div className="col-md-9">
                      <h1 className="text-success">"</h1>
                      <p className="fs-5">{t.content}</p>
                      <h5 className="text-success fw-bold">
                        {t.name}, {t.title}
                      </h5>
                      <p className="text-muted">{t.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="text-center mt-3">
          {testimonialData?.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#testimonialCarousel"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Testimonial;
