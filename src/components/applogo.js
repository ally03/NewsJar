import React from "react";
import logo from "../newcopy.png";
import "../App.css";

function Applogo() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="font-logo">NewsJar</h1>
    </header>
  );
}

export default Applogo;
