import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("header-scroll");
    else header.classList.remove("header-scroll");
  });

  //  toogle menu
  const [Toggle, showMenu] = useState(false);
  const [activeNav, SetActiveNav] = useState("#home");
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Avinash
        </a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => SetActiveNav("#home")}
                className={
                  activeNav === "#home" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-estate nav__icon"></i>Home
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#about"
                onClick={() => SetActiveNav("#about")}
                className={
                  activeNav === "#about" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-user nav__icon"></i>About
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => SetActiveNav("#skills")}
                className={
                  activeNav === "#skills"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-file nav__icon"></i>Skills
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#qualification"
                onClick={() => SetActiveNav("#qualification")}
                className={
                  activeNav === "#qualification"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-graduation-cap nav__icon"></i>
                Qualification
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#portfolio"
                onClick={() => SetActiveNav("#portfolio")}
                className={
                  activeNav === "#portfolio"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-scenery nav__icon"></i>Portfolio
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#services"
                onClick={() => SetActiveNav("#services")}
                className={
                  activeNav === "#services"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-briefcase nav__icon"></i>Services
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#testimonial"
                onClick={() => SetActiveNav("#testimonial")}
                className={
                  activeNav === "#testimonial"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-comment nav__icon"></i>Testimonial
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => SetActiveNav("#contact")}
                className={
                  activeNav === "#contact"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-phone nav__icon"></i>Contact
              </a>
            </li>
          </ul>
          {/* ==close icon */}
          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
