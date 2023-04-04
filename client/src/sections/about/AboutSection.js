import React from "react";

import "./AboutSection.css";

const AboutSection = () => {
  return (
    <section
      style={{ backgroundColor: "#1f3140" }}
      className="container-fluid about-background"
    >
      <div className="about-section">
        <div className="container">
          <div className="row">
            <h2 className="numbered-heading">About Myself</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
