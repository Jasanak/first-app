import serv1image from "../images/serv1.png";
import serv2image from "../images/serv2.png";
import { Swiper, SwiperSlide } from "swiper/react";

import { useEffect } from "react";
import Localization from "../language/localization";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

export default function Services({ local }) {
  useEffect(() => {
    Localization.setLanguage(local);
  }, [local]);
  return (
    <section className="py-5 bg-light" id="services">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">
          {Localization.service.title}
        </h2>
        <p className="text-center mb-5 text-muted">
          {Localization.service.desc}
        </p>

        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          loop={true}
          navigation={true}
          modules={[Navigation]}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {Localization.service.list.map((serv, index) => (
            <SwiperSlide>
              {" "}
              <div className="card h-100 shadow-sm border-0">
                <img
                  src={serv1image}
                  className="card-img-top"
                  alt={serv.title}
                />
                <div className="card-body">
                  <h5 className="card-title fw-semibold">{serv.title}</h5>
                  <p className="card-text text-muted">{serv.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
          {/* <SwiperSlide>
            {" "}
            <div className="card h-100 shadow-sm border-0">
              <img
                src={serv1image}
                className="card-img-top"
                alt="Smart Accounting"
              />
              <div className="card-body">
                <h5 className="card-title fw-semibold">Smart Accounting</h5>
                <p className="card-text text-muted">
                  Automate your finances with accurate, real-time bookkeeping
                  tools.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="card h-100 shadow-sm border-0">
              <img
                src={serv2image}
                className="card-img-top"
                alt="Smart Accounting"
              />
              <div className="card-body">
                <h5 className="card-title fw-semibold">Smart Accounting</h5>
                <p className="card-text text-muted">
                  Automate your finances with accurate, real-time bookkeeping
                  tools.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="card h-100 shadow-sm border-0">
              <img
                src={serv1image}
                className="card-img-top"
                alt="Smart Accounting"
              />
              <div className="card-body">
                <h5 className="card-title fw-semibold">Smart Accounting</h5>
                <p className="card-text text-muted">
                  Automate your finances with accurate, real-time bookkeeping
                  tools.
                </p>
              </div>
            </div>
          </SwiperSlide> */}
        </Swiper>

        {/* <div className="carousel">
          <div className="carousel-track" id="track">
            <div className="slide">
              <div className="card h-100 shadow-sm border-0">
                <img
                  src={serv1image}
                  className="card-img-top"
                  alt="Smart Accounting"
                />
                <div className="card-body">
                  <h5 className="card-title fw-semibold">Smart Accounting</h5>
                  <p className="card-text text-muted">
                    Automate your finances with accurate, real-time bookkeeping
                    tools.
                  </p>
                </div>
              </div>
            </div>
            <div className="slide">
              <div className="card h-100 shadow-sm border-0">
                <img
                  src={serv2image}
                  className="card-img-top"
                  alt="Inventory Management"
                />
                <div className="card-body">
                  <h5 className="card-title fw-semibold">
                    Inventory Management
                  </h5>
                  <p className="card-text text-muted">
                    Track stock levels, orders, and deliveries with ease and
                    clarity.
                  </p>
                </div>
              </div>
            </div>
            <div className="slide">
              <div className="card h-100 shadow-sm border-0">
                <img
                  src={serv2image}
                  className="card-img-top"
                  alt="Tax Filing Support"
                />
                <div className="card-body">
                  <h5 className="card-title fw-semibold">Tax Filing Support</h5>
                  <p className="card-text text-muted">
                    Get expert help with VAT, PAN, and other compliance
                    essentials.
                  </p>
                </div>
              </div>
            </div>
            <div className="slide">
              <div className="card h-100 shadow-sm border-0">
                <img
                  src={serv2image}
                  className="card-img-top"
                  alt="Business Insights"
                />
                <div className="card-body">
                  <h5 className="card-title fw-semibold">Business Insights</h5>
                  <p className="card-text text-muted">
                    Make informed decisions with intelligent reporting and
                    analytics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
