import React from "react";
import { MantineProvider } from "@mantine/core";
import MainPage from "./pages/homepage/MainPage";
import TerminalWindow from "./components/terminal-window/TerminalWindow";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <TerminalWindow />
        <MantineProvider theme={{ colorScheme: "dark" }}>
          <MainPage />
        </MantineProvider>
      </div>
    );
  }
}
