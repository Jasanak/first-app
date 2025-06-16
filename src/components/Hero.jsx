import { Trans } from "react-i18next";
import myImage from "../images/dash.png";

export default function Hero() {
  // const { t, i18n } = useTranslation();
  return (
    <div>
      <section className="hero d-flex">
        <div className="container">
          <h1>
            {/* {t("ServicesTitle")} */}
            <Trans i18nKey="ServicesTitle" components={{ br: <br /> }} />
          </h1>
          <br />
          <h4>
            AIMS - Accounting and Inventory Management System. The complete
            solution for modern businesses to manage finances, track inventory,
            and generate comprehensive reports with ease.
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
    </div>
  );
}
