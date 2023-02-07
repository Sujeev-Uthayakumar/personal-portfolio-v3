import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./MainPage.css";
import MainSection from "../../sections/main/MainSection";

export default class MainPage extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <MainSection />
      </div>
    );
  }
}
