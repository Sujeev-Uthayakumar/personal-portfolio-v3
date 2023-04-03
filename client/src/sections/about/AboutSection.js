import React from "react";

import "./AboutSection.css";

const AboutSection = () => {
  return (
    <section
      style={{ backgroundColor: "#1f3140", minHeight: "75vh" }}
      className="container-fluid background"
    >
      <div className="about-section">
        <div className="container">
          <div className="row">
            <h2>A bit about myself</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
