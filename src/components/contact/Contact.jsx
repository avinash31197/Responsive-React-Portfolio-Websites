import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_2ls7eaf",
      "template_to3mpjs",
      form.current,
      "t89ZnFU8uOyzzQieo"
    );
    e.target.reset();
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Contact Me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>
          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-email contact__card-icon"></i>
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">
                avinash31197@gmail.com
              </span>{" "}
              <a
                href="mailto:examplemail@gmail.com"
                className="contact__button"
              >
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bx-whatsap contact__card-icon"></i>

              <h3 className="contact__card-title">Whatsapp</h3>
              <span className="contact__card-data">7370047016</span>

              <a href=" https://wa.me/917370047016" className="contact__button">
                Send Message{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bx-messenger contact__card-icon"></i>

              <h3 className="contact__card-title">Messenger</h3>
              <span className="contact__card-data">user.fb123</span>

              <a
                href="https://www.facebook.com/profile.php?id=100007352349600"
                className="contact__button"
              >
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Write me your project</h3>

          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="contact__form-div">
              <label className="contact__form-tag">Name</label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Write your name"
              />
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag">Email</label>
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Write your email"
              />
            </div>

            <div className="contact__form-div contact__forn-area">
              <label className="contact__form-tag">Project</label>
              <textarea
                name="project"
                id=""
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Write your project"
              ></textarea>
            </div>

            <button href="#contact" className="button button-flex">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
