import React from "react";
import logo from "../logo-img.png";
import "../App.css";
// import * as Scroll from "react-scroll";
import { animateScroll as scroll } from "react-scroll";

class Applogo extends React.Component {
  constructor(props) {
    super(props);
  }

  scrollTo() {
    scroll.scrollTo(750);
  }

  render() {
    return (
      <header className="App-header">
        <div>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div>
          <h1 className="font-logo">NewsJar</h1>
        </div>
        <div>
          <button className="Header-button" onClick={this.scrollTo}>
            News
          </button>
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
}

export default Applogo;
