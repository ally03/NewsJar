import React from "react";
import logo from "../logo-img.png";
import "../App.css";

function Applogo() {
  return (
    <header className="App-header">
      <div>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div>
        <h1 className="font-logo">NewsJar</h1>
      </div>
      <div>
        <button className="Header-button">News</button>
      </div>
      <div>
        <button className="Header-button">Article</button>
      </div>
      <div>
        <button className="Header-button">Readlist</button>
      </div>
    </header>
  );
}

export default Applogo;
