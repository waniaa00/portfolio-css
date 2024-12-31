import React from "react";
import { TbMail } from "react-icons/tb";
import { BsTelephone } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import "@/app/styles/contact.css"


const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      <div className="contact-grid md:grid-cols-2">
        <div className="contact-space">
          <h2 className="contact-heading" data-aos="zoom-in-up">Get In touch</h2>
          <p className="contact-text" data-aos="zoom-in-up">
            Curious About My Work? Reach out!
          </p>
          <div className="contact-flex " data-aos="zoom-in-up">
            <TbMail size={30} />
            <a href="mailto:waniaakram777@gmail.com">waniaakram777@gmail.com</a>
          </div>
          <div className="contact-flex" data-aos="zoom-in-up">
            <BsTelephone size={30} /> 03322200290
          </div>
          <div className="contact-flex" data-aos="zoom-in-up">
            <FaLinkedin size={30} />
            <a
              href="https://www.linkedin.com/in/wania-akram-87945a2b6"
              target="_blank"
            >
              www.LinkedIn.com
            </a>
          </div>
        </div>
        <div className="contact-space">
          <div className="form" data-aos="zoom-in-up">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              className="input-field"
              id="name"
            />
          </div>

          <div className="form" data-aos="zoom-in-up">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              className="input-field"
              id="email"
            />
          </div>

          <div className="form" data-aos="zoom-in-up">
            <label htmlFor="msg">Message:</label>
            <textarea
              className="input-field"
              id="msg"
              rows={8}
            />
          </div>
          <button className="button" data-aos="zoom-in-up">Send</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
