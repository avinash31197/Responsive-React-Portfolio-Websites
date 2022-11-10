import React, { useState } from "react";
import "./Qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personel journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          {/* 1st contetn of education */}
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            {/* first title in education  */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Manipal University Jaipur
                </h3>
                <span className="qualification__subtitle">MCA</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"> 2022 - Present</i>
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>
            </div>

            {/* 2nd education */}
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  Veer Kunwar Singh University
                </h3>
                <span className="qualification__subtitle">BCA</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"> 2016 - 2019</i>
                </div>
              </div>
            </div>

            {/* 3rd education */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">A. B. R College</h3>
                <span className="qualification__subtitle">BSEB</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"> 2012 - 2015</i>
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>
            </div>

            {/* 4th education */}
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>

              <div>
                <h3 className="qualification__title">
                  Children Garden School (Bhabhua )
                </h3>
                <span className="qualification__subtitle">CBSE</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"> 2012</i>
                </div>
              </div>
            </div>
          </div>

          {/* 2nd content of experience */}
          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Product Designer</h3>
                <span className="qualification__subtitle">
                  Spain - Institute
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"> 2021 - Present</i>
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>

              <div>
                <h3 className="qualification__title">UX Designer</h3>
                <span className="qualification__subtitle">
                  Spain - Institute
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"> 2021 - Present</i>
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Development</h3>
                <span className="qualification__subtitle">
                  Spain - Institute
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"> 2021 - Present</i>
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>

              <div>
                <h3 className="qualification__title">UX Expert</h3>
                <span className="qualification__subtitle">
                  Spain - Institute
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"> 2021 - Present</i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
