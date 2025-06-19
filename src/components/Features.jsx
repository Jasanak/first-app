import { useEffect } from "react";
import Localization from "../language/localization";
export default function Features({ local }) {
  useEffect(() => {
    Localization.setLanguage(local);
  }, [local]);
  return (
    <div id="features">
      <section className="features">
        <div className="container my-5">
          <h2 className="text-center mb-4 fw-bold">
            {Localization.feature.title}
          </h2>
          <div className="row text-center">
            {/* First feature is already correct */}
            {/* <div className="col-md-4 mb-4">
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
            </div> */}

            {/* Additional features */}

            {Localization.feature.list.map((feat, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="p-4 bg-light rounded shadow-sm hover-shadow">
                  <i className={feat.icon}></i>
                  <h5 className="mt-3 fw-semibold">{feat.title}</h5>
                  <p>{feat.desc}</p>
                  <a
                    href="#secure-systems"
                    className="position-absolute bottom-0 end-0 m-3 text-decoration-none text-primary"
                  >
                    <i className="bi bi-arrow-right-circle-fill fs-4"></i>
                  </a>
                </div>
              </div>
            ))}
            {/* 
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
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}
