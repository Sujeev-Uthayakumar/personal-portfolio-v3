import React from "react";
import Typewriter from "typewriter-effect";

import bannerBackground from "../../assets/images/banner-image.avif";
import "./MainSection.css";

const MainSection = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${bannerBackground})`,
      }}
      className="container-fluid background"
    >
      <div className="main-section d-flex flex-grow-1 justify-content-center align-items-center">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Hello World!")
              .pauseFor(2500)
              .deleteAll()
              .start();
          }}
          options={{
            loop: true,
          }}
          className="typewriter"
        />
      </div>
    </section>
  );
};

export default MainSection;
