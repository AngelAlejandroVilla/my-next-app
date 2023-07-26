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
          <h5 className="title-block mb-15">Nuestras Oficinas</h5>
          <p className="text-p">Córdoba, Veracruz</p>
          <p className="text-p">Cancún, Quintana Roo</p>
          <p className="text-p">Puerto Vallarta, Jalisco</p>
          <p className="text-p">Hermosillo, Sonora</p>
          <p className="text-p">Mazatlán, Sinaloa</p>
          <p className="text-p">Culiacán, Sinaloa</p>
          <p className="text-p">León, Guanajuato</p>
          <p className="text-p">Toluca, Estado de México</p>
        </div>
        <div className="nav-content mt-30">
          <h5 className="sm-title-block mb-10">Contact</h5>
          <p className="links over-hidden mb-1">
            <a
              className="link-hover"
              href="tel:+52 477-219-3116"
              data-hover-text="+52 477-219-3116"
            >
              +52 477-219-3116
            </a>
          </p>
          <p className="links over-hidden">
            <a
              className="link-hover"
              href="mailto:info@dsngrid.com"
              data-hover-text="Director General"
            >
              Fernando Aguilar
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default MenuContent;
