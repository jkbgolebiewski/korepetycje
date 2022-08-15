import React from "react";
import "./About.css";
import ME from "../../assets/me.png";
import { MdWork } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { FaChalkboardTeacher } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5>Few words</h5>
      <h2>about me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About"></img>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <MdWork className="about__icon" />
              <h5>Experience</h5>
              <small>1 Year of training</small>
            </article>

            <article className="about__card">
              <CgWebsite className="about__icon" />
              <h5>Skills</h5>
              <small>Full Stack</small>
            </article>

            <article className="about__card">
              <FaChalkboardTeacher className="about__icon" />
              <h5>Projects</h5>
              <small>4+ sites and growing</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            ultricies cursus justo, id suscipit diam tincidunt a. Mauris
            scelerisque venenatis ipsum, sed scelerisque lorem auctor et.
            Suspendisse et ante metus. Aenean sit amet porttitor tortor. Morbi
            varius dignissim auctor.
          </p>
          <a href="#contact" className="btn btn-primary">
            Contact me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
