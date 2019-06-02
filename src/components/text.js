import React from "react";
import "../App.css";
import AppStorePic from "./mobileStorebutton";

export default function Text() {
  return (
    <div className="container">
      <h1 className="heading">Stay informed in 60 words.</h1>
      <p className="paragraph">
        We understand you don’t have time to go through long news articles
        everyday. So we cut the clutter and deliver them, in 60-word shorts.
        Short news for the mobile generation.
      </p>
      <AppStorePic />
    </div>
  );
}
