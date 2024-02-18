import { useState } from "react";
import "./App.css";
import FirstCustom from "./CustomComponents/FirstCustom";
import Badge from "./CustomComponents/badge/Badge";
function App() {
  return (
    <>
      <div className="main">
        <FirstCustom />
        <Badge color="blue" shape="square">
          Hello{" "}
        </Badge>
      </div>
    </>
  );
}

export default App;
