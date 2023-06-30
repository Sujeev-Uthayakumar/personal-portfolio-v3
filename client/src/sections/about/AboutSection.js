import React from "react";

import profilePicture from "../../assets/images/profile-picture.jpeg";
import "./AboutSection.css";

const AboutSection = () => {
  return (
    <section
      style={{ backgroundColor: "#1f3140" }}
      className="container-fluid about-background"
    >
      <div className="about-section" id="about">
        <div className="container">
          <div className="row">
            <h4 className="numbered-heading">About Me</h4>
            <h2 className="about-header">A bit about myself</h2>
          </div>
          <div className="row about-content">
            <div className="about-text col-sm-7">
              <p>
                Hello! I'm a software engineer based in the Toronto, Canada. I
                enjoy creating things that live on the internet, whether that be
                websites, applications, or anything in between.
              </p>
              <p>
                I'm always eager to learn new things and expand my knowledge.
                Outside of building software, I enjoy cooking, traveling and
                playing basketball.
              </p>
              <p>Here are some of the technologies I have worked with:</p>
              <div>
                <ul className="columns" data-columns="2">
                  <li>Java</li>
                  <li>JavaScript</li>
                  <li>Node.js</li>
                  <li>Spring Boot</li>
                  <li>TypeScript</li>
                  <li>Angular</li>
                </ul>
              </div>
            </div>
            <div className="col-sm-5">
              <img
                className="about-image"
                alt="Standing outside in front of a building"
                src={profilePicture}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
