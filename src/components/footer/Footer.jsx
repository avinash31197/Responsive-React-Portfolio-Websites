import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Avinash</h1>

        <ul className="footer__list">
          <li>
            <a href="#" className="footer__link"></a>
          </li>

          <li>
            <a href="#" className="footer__link"></a>
          </li>

          <li>
            <a href="#" className="footer__link"></a>
          </li>

          <li>
            <a href="#" className="footer__link"></a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.facebook.com/profile.php?id=100007352349600"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-facebook"></i>
          </a>

          <a
            href="https://www.instagram.com/itsmeavinash03//"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-instagram"></i>
          </a>

          <a
            href="https://twitter.com/explore/tabs/for-you"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-twitter"></i>
          </a>
        </div>

        <span className="footer__copy">
          copright &#169; Avinash Portfolio using React all rights reserved
        </span>
      </div>
    </div>
  );
};

export default Footer;
