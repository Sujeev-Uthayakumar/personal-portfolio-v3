import React from "react";
import "./MainSection.css";
import stars from "../../assets/images/stars.png";
import moon from "../../assets/images/moon.png";
import mountainsBehind from "../../assets/images/mountains_behind.png";
import mountainsFront from "../../assets/images/mountains_front.png";

const MainSection = () => {
  return (
    <section>
      <img src={stars} id="stars" alt="stars"></img>
      <img src={moon} id="moon" alt="moon"></img>
      <img
        src={mountainsBehind}
        id="mountains_behind"
        alt="mountains_behind"
      ></img>
      <img
        src={mountainsFront}
        id="mountains_front"
        alt="mountains_front"
      ></img>
    </section>
  );
};

export default MainSection;
