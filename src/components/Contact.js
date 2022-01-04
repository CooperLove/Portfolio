import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { AiOutlineSend } from "react-icons/ai";

function Contact() {
  return (
    <article className="parent-contact-container" id="contato">
      <div className="about-title">
        <h2>Entre em contato</h2>
        <div className="underline"></div>
      </div>
      <div className="contact-container">
        <div className="contact-info-container">
          <div className="contact-info-card">
            <BsWhatsapp className="contact-info-card-icon" />
            <div className="contact-info-card-text">
              <h4>WhatsApp</h4>
              {"(88) 9 8141-8311"}
            </div>
          </div>
          <div className="contact-info-card">
            <MdOutlineMail className="contact-info-card-icon" />
            <div className="contact-info-card-text">
              <h4>Email</h4>
              {/* {"godloveqwer@gmail.com"} */}
              <h5>godloveqwer@gmail.com</h5>
            </div>
          </div>
        </div>
        <div className="contact-form-container">
          <div className="form-name-email">
            <div className="input-form name">
              <label className="label-contact" htmlFor="contact-name">
                Nome
              </label>
              <input
                id="contact-name"
                type="text"
                className="input-form name"
              />
            </div>
            <div className="input-form email">
              <label className="label-contact" htmlFor="contact-name">
                Email
              </label>
              <input type="email" className="input-form email" />
            </div>
          </div>
          <div className="input-form project-name">
            <label className="label-contact" htmlFor="contact-name">
              Projeto
            </label>
            <input type="text" className="input-form project-name" />
          </div>
          <div className="input-form form-message">
            <label className="label-contact" htmlFor="contact-name">
              Mensagem
            </label>
            <input type="text" className="input-form form-message" />
          </div>
          <button type="submit" className="contactBtn sendEmail">
            Enviar
            <AiOutlineSend className="icon email-icon" />
          </button>
        </div>
      </div>
    </article>
  );
}

export default Contact;
