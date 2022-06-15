import React from "react";
import "./TerminalWindow.css";

export default class TerminalWindow extends React.Component {
  render() {
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
  }
}
