import React from "react";
import { delay, containerFocus } from "./helpers/terminalFunctions";
import "./TerminalWindow.css";

export default class TerminalWindow extends React.Component {
  state = { path: "" };
  element = null;

  componentWillUnmount() {
    document.addEventListener("keydown", this.onEnter);
    this.onStartTerminal();
  }
  componentDidMount() {
    this.element = document.querySelector("#app");
  }

  onStartTerminal = async () => {
    this.createText("Starting the server ...");
    await delay(1250);
    this.createText("You can run several commands:");

    this.createCode("ls", "Lists files and directories within the file system");
    this.createCode("cd", "Changing into a directory");
    this.createCode("cat <file-name>", "Read the contents of a file");
    this.createCode("pwd", "Display the current directory path");

    await delay(500);
    this.newLine(this.state.path);
  };

  newLine = (path) => {
    const p = document.createElement("p");
    const span1 = document.createElement("span");
    const span2 = document.createElement("span");

    p.setAttribute("class", "path");
    p.textContent = "# user";
    span1.textContent = " in";
    span2.textContent = `~/${path}`;
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
    const inputValue = document.querySelector("#terminalInput").value;
    if (event.key === "Enter" && inputValue) {
      await delay(750);
      this.getInputValue();

      this.removeInput();
      await delay(750);

      this.newLine(this.state.path);
    }
  };

  getInputValue = () => {
    const inputValue = document.querySelector("#terminalInput").value;
    if (inputValue) {
      this.createCode(inputValue, "test");
      console.log(inputValue);
    }
  };

  removeInput = () => {
    const div = document.querySelector(".type");
    if (div) {
      div.remove();
    }
  };

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
