import myImage from "../images/dash.png";
import { useEffect, useState } from "react";
import Localization from "../language/localization";

export default function Hero({ local }) {
  // const { t, i18n } = useTranslation();
  useEffect(() => {
    Localization.setLanguage(local);
  }, [local]);
  return (
    <div>
      <section className="hero d-flex">
        <div className="container">
          <h1>
            {/* {t("ServicesTitle")} */}
            {/* <Trans i18nKey="ServicesTitle" components={{ br: <br /> }} /> */}
          </h1>
          <br />
          <h4>
            {Localization.mainTitle}
            {/* AIMS - Accounting and Inventory Management System. The complete
            solution for modern businesses to manage finances, track inventory,
            and generate comprehensive reports with ease. */}
          </h4>
          <a href="#contact" className="btn btn-primary mt-3 me-2">
            {Localization.getIntoTouchBtn}
          </a>
          <a href="#demo" className="btn btn-success mt-3">
            {Localization.watchDemoBtn}
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
