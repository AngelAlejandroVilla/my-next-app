import React from "react";
import { dsnCN } from "../../../hooks/helper";

function MenuContent({ className }) {
  const socialData = [
    { link: "#0", name: "Dribbble." },
    { link: "#0", name: "Behance." },
    { link: "#0", name: "Linkedin." },
    { link: "#0", name: "Twitter." },
  ];
  return (
    <div
      className={dsnCN(
        "container-content  d-flex flex-column justify-content-center",
        className
      )}
    >
      <div className="nav__info">
        <div className="nav-content">
          <h5 className="sm-title-block mb-10">Oficinas</h5>
          <p>
            Puerto Vallarta, Jalisco <br /> Medina Ascencio, Zona Hotelera,
            Versalles
          </p>
        </div>
        <div className="nav-content mt-30">
          <h5 className="sm-title-block mb-10">Contact</h5>
          <p className="links over-hidden mb-1">
            <a
              className="link-hover"
              href="tel:+52 322 275 8229"
              data-hover-text="+52 322 275 8229"
            >
              +52 322 275 8229
            </a>
          </p>
          <p className="links over-hidden">
            <a
              className="link-hover"
              href="mailto:info@dsngrid.com"
              data-hover-text="FELIPE ARIAS"
            >
              Felipe Arias
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default MenuContent;
