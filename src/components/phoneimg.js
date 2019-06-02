import React from "react";
import logo from "../iphone.png";
import "../App.css";

function PhoneImg() {
  return (
    <div className="App-phone">
      <img src={logo} className="App-pic" alt="iphone" />
    </div>
  );
}

export default PhoneImg;
