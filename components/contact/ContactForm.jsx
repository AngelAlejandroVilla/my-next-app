import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { dsnCN } from "../../hooks/helper";
import TitleSection from "../heading/TitleSection";

function ContactForm({ className }) {
  const form = useRef();
  const [loading, setLoading] = useState();
  const [result, setResult] = useState();

  const sendEmail = (e) => {
    e.preventDefault();
    setResult(false);
    setLoading(true);
    emailjs
      .sendForm(
        "service_mxt8ue9",
        "template_1f1243o",
        form.current,
        "bvnMqTU1Ir-7kgLNL"
      )
      .then(
        (result) => {
          setLoading(false);
          setResult(true);
          form.current.reset();
        },
        (error) => {
          setLoading(false);
        }
      );
  };

  setTimeout(() => setResult(false), 5000);

  return (
    <div className={dsnCN("form-box", className)}>
      <div className="line line-top" />
      <div className="line line-bottom" />
      <div className="line line-left" />
      <div className="line line-right" />

      <TitleSection description="Mantente Informado" defaultSpace={false}>
        Contactanos Ahora
      </TitleSection>

      <form className="form" ref={form} onSubmit={sendEmail}>
        <div className="input__wrap controls">
          <div className="form-group">
            <div className="entry-box">
              <label>Tu Nombre *</label>
              <input
                id="form_name"
                type="text"
                name="name"
                placeholder="Ingresa tu nombre"
                required="required"
                data-error="name is required."
              />
            </div>
          </div>

          <div className="form-group">
            <div className="entry-box">
              <label>Tu E-Mail *</label>
              <input
                id="form_email"
                type="email"
                name="email"
                placeholder="Ingresa email"
                required="required"
                data-error="Valid email is required."
              />
            </div>
          </div>

          <div className="form-group">
            <div className="entry-box">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <label>Te Escuchamos</label>
              <textarea
                id="form_message"
                className="form-control"
                name="message"
                rows={4}
                placeholder="Escribe tu mensaje aqui."
                required="required"
                data-error="Please,leave us a message."
              />
            </div>
          </div>

          <div className="text-right">
            <div
              className="image-zoom w-auto d-inline-block"
              data-dsn="parallax"
            >
              <button
                type="submit"
                className="dsn-button"
                style={{ cursor: "pointer" }}
              >
                <span className="dsn-border border-color-default" />
                <span className="text-button">Enviar</span>
              </button>
            </div>
            {loading && (
              <div className="loading-message mt-20">Message Send ...</div>
            )}
            {result && (
              <p className="success-message mt-20">
                Your Message has been successfully sent. I will contact you
                soon.
              </p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
