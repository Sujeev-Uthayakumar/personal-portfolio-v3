import React from "react";
import { delay, containerFocus, parseValue } from "./helpers/terminalFunctions";
import "./TerminalWindow.css";

export default class TerminalWindow extends React.Component {
  element = null;
  state = { terminalActive: true };

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

    this.createCode("welcome", "The purpose of my website");
    this.createCode("about", "A brief description about myself");
    this.createCode("projects", "The projects that I have worked on");
    this.createCode("socials", "All my social media links");
    this.createCode("skills", "A list of skills that I have attained");

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
    span2.textContent = `~/home`;
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
    try {
      const inputValue = document.querySelector("#terminalInput").value;

      if (event.key === "Enter" && inputValue) {
        await delay(750);
        this.getInputValue();

        this.removeInput();
        await delay(750);

        this.newLine(this.state.path);
      }
    } catch (error) {
      console.log("Clicking too fast");
    }
  };

  // TODO Parse through the value and perform actions
  getInputValue = () => {
    try {
      const inputValue = document.querySelector("#terminalInput").value;

      if (inputValue) {
        const inputArray = inputValue.split(" ");
        if (inputArray.length === 1) {
          parseValue(inputArray);
          this.createCode(inputValue);
          console.log(inputArray);
        } else {
          this.createCode(inputValue, "Try a different command");
        }
      }
    } catch (error) {
      console.log("Clicking too fast");
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

  closeTerminal = (event) => {
    this.setState({ terminalActive: false });
  };

  render = () => {
    return (
      <div
        className={!this.state.terminalActive ? "display-none" : "container"}
        onClick={containerFocus}
      >
        <div className="top-bar">
          <div className="button-container">
            <div className="button red" onClick={this.closeTerminal}></div>
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
