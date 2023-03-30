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
      <div className="main-section d-flex flex-grow-1  align-items-center">
        <div className="container">
          <div className="row d-flex">
            <div className="col-lg-12">
              <h1 className="start-text">Hi, my name is </h1>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Sujeev Uthayakumar")
                    .pauseFor(2500)
                    .deleteAll()
                    .start();
                }}
                options={{
                  loop: true,
                  wrapperClassName: "typewriter",
                  cursorClassName: "cursor",
                }}
              />
              <h3 className="big-text">I engineer software for the web.</h3>
              <p className="small-text">
                I’m a software engineer who's experienced in working on
                fullstack applicatins. Currently, I'm focused on gaining as much
                experience as possible working as a Software Engineering Intern
                at <a href="https://www.celestica.com/">Celestica</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
