import React from "react";
import { delay, containerFocus } from "./helpers/terminalFunctions";
import "./TerminalWindow.css";

export default class TerminalWindow extends React.Component {
  state = {};
  element = null;

  componentDidMount() {
    document.addEventListener("keydown", this.onEnter);
    this.onStartTerminal();
    this.element = document.querySelector("#app");
  }

  onStartTerminal = async () => {
    this.createText("Welcome");
    await delay(1000);
    this.createText("Starting the server...");
    await delay(1250);
    this.createText("You can run several commands:");

    this.createCode("about me", "Who am i and what do i do.");
    this.createCode("all", "See all commands.");
    this.createCode("social -a", "All my social networks.");

    await delay(500);
    this.newLine();
  };

  newLine = () => {
    const p = document.createElement("p");
    const span1 = document.createElement("span");
    const span2 = document.createElement("span");

    p.setAttribute("class", "path");
    p.textContent = "# user";
    span1.textContent = " in";
    span2.textContent = " ~/sujeev-uthayakumar";
    p.appendChild(span1);
    p.appendChild(span2);
    this.element.appendChild(p);
    const div = document.createElement("div");
    div.setAttribute("class", "type");
    const i = document.createElement("i");
    i.setAttribute("class", "fas fa-angle-right icone");
    const input = document.createElement("input");
    input.setAttribute("id", "terminalInput");
    input.setAttribute("autocomplete", "off");
    div.appendChild(i);
    div.appendChild(input);
    this.element.appendChild(div);
    input.focus();
  };

  onEnter = async (event) => {
    if (event.key === "Enter") {
      await delay(1000);
      this.getInputValue();

      this.removeInput();
      await delay(1000);

      this.newLine();
    }
  };

  getInputValue = () => {
    const inputValue = document.querySelector("#terminalInput");
    console.log(inputValue.value);
  };

  removeInput = () => {};

  createText(text) {
    const p = document.createElement("p");
    p.innerHTML = text;
    this.element.appendChild(p);
  }

  createCode = (code, text) => {
    const p = document.createElement("p");
    p.setAttribute("class", "code");
    p.innerHTML = `${code} <br/><span class='text'> ${text} </span>`;
    this.element.appendChild(p);
  };

  render = () => {
    return (
      <div className="container" onClick={containerFocus}>
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
