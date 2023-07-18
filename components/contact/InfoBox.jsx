import React from "react";
import { dsnCN } from "../../hooks/helper";

function InfoBox({ className }) {
  return (
    <div className={dsnCN("box-info-contact", className)}>
      <ul>
        <li>
          <h5 className="title-block mb-15">Contácto</h5>
          <p className="text-p ">+52 322 275 8229</p>
          <div className="over-hidden mt-5">
            <a
              className="link-hover"
              data-hover-text="info@example.com"
              href="#"
            >
              Felipe Arias
            </a>
          </div>
        </li>
        <li>
          <h5 className="title-block mb-15">Nuestras Oficinas</h5>
          <p className="text-p">Cordoba, Veracruz</p>
          <p className="text-p">Cancun, Quintana Roo</p>
          <p className="text-p">Puerto Vallarta, Jalisco</p>
          <p className="text-p">Hermosillo, sonora</p>
          <p className="text-p">Mazatlan, Sinaloa</p>
          <p className="text-p">Culiacán, Sinaloa</p>
        </li>
      </ul>
    </div>
  );
}

export default InfoBox;
