import React from "react";
import "./TerminalWindow.css";

export default class TerminalWindow extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="menu">
          <div className="button-flex">
            <div className="button red"></div>
            <div className="button yellow"></div>
            <div className="button green"></div>
          </div>
          <div class="title">
            <a href="https://github.com/Sujeev-Uthayakumar">
              <h1>
                <i class="fab fa-github"></i>github.com/Sujeev-Uthayakumar
              </h1>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
