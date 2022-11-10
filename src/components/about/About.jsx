import React from "react";
import "./About.css";
import AboutImg from "../../assets/profile1.png";
import CV from "../../assets/AVINASH's Resumes.pdf";

import Info from "./Info";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About ME</h2>
      <span className="section__subtitle">My Introduction</span>

      <div className="about__container container grid">
        <img src={AboutImg} alt="" className="about__img" />

        <div className="about__data">
          <Info />

          <p className="about__description">
            Frontend developer, I have knowledge of HTML5, CSS3/SASS,
            JAVASCRIPT, JQUERY and also have knowledge CSS framework BOOTSTRAP
            5.I have experience of Personal projects .To continuously enhance my
            knowledge, skill and explore different technology that are used in
            the industry. I'm very passionate and dedicated to my work.
          </p>

          <a
            download={""}
            href={CV}
            className="button button--flex about-button"
          >
            Download CV <i className="uil uil-download-alt download-icon"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
