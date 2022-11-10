import React from "react";
import "./ScrollUp.css";

const ScrollUp = () => {
  window.addEventListener("scroll", function () {
    const ScrollUp = document.querySelector(".scrollup");
    if (this.scrollY >= 500) ScrollUp.classList.add("show-scroll");
    else ScrollUp.classList.remove("show-scroll");
  });
  return (
    <a href="#" className="scrollup">
      <i className="uil uil-arrow-up scroll__icon"></i>
    </a>
  );
};

export default ScrollUp;
