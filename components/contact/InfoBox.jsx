import React from "react";
import { dsnCN } from "../../hooks/helper";

function InfoBox({ className }) {
  return (
    <div className={dsnCN("box-info-contact", className)}>
      <ul>
        <li>
          <h5 className="title-block mb-15">Contácto</h5>
          <p className="text-p ">+52 477-219-3116</p>
          <div className="over-hidden mt-5">
            <a
              className="link-hover"
              data-hover-text="info@example.com"
              href="#"
            >
              Director General Fernando Aguilar
            </a>
          </div>
        </li>
        <li>
          <h5 className="title-block mb-15">Nuestras Oficinas</h5>
          <p className="text-p">Córdoba, Veracruz</p>
          <p className="text-p">Cancún, Quintana Roo</p>
          <p className="text-p">Puerto Vallarta, Jalisco</p>
          <p className="text-p">Hermosillo, Sonora</p>
          <p className="text-p">Mazatlán, Sinaloa</p>
          <p className="text-p">Culiacán, Sinaloa</p>
          <p className="text-p">León, Guanajuato</p>
          <p className="text-p">Toluca, Estado de México</p>
        </li>
      </ul>
    </div>
  );
}

export default InfoBox;
