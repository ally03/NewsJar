import React from "react";
import Applogo from "./components/applogo";
import "./App.css";
import Text from "./components/text";
import PhoneImg from "./components/phoneimg";
import NewsList from "./components/newsList";

function App() {
  return (
    <div className="main">
      <div>
        <Applogo />
      </div>
      <div className="App">
        <div className="item">
          <Text />
        </div>
        <div className="item">
          <PhoneImg />
        </div>
      </div>
      <div>
        <NewsList />
      </div>
    </div>
  );
}

export default App;
