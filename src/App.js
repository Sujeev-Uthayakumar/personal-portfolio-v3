import React from "react";
import MainPage from "./components/home/MainPage";
import TerminalWindow from "./components/terminal-window/TerminalWindow";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <TerminalWindow />
        {/* <MainPage /> */}
      </div>
    );
  }
}
