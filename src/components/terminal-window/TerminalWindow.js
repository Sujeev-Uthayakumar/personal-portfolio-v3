import React from "react";
import "./TerminalWindow.css";

export default class TerminalWindow extends React.Component {
  state = {};
  element = document.querySelector("#app");

  componentDidMount() {
    document.addEventListener("keydown", this.onEnter);
  }

  delay = (time) => {
    return new Promise((res) => setTimeout(res, time));
  };

  onEnter = async (event) => {
    if (event.key === "Enter") {
      await this.delay(1000);
      console.log("hi");
    }
  };

  getInputValue = () => {};

  render = () => {
    return (
      <div className="container">
        <div className="top-bar">
          <div className="button-container">
            <div className="button red"></div>
            <div className="button yellow"></div>
            <div className="button green"></div>
          </div>
          <div className="title">
            <a href="https://github.com/Sujeev-Uthayakumar">
              <h1>github.com/sujeev-uthayakumar</h1>
            </a>
          </div>
        </div>
        <div id="app"></div>
      </div>
    );
  };
}
