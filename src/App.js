import React from "react";
import Top from "./components/Top.js";
import Side from "./components/Side.js";
import TopNavWidget from "./components/TopNavWidget.js";

function App() {
  return (
    <div className="App">
      <Top />
      <TopNavWidget/>
      <Side />
    </div>
  );
}

export default App;
