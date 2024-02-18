import { useState } from "react";
import "./App.css";
import FirstCustom from "./CustomComponents/FirstCustom";
import Badge from "./CustomComponents/badge/Badge";
import Tooltip from "./CustomComponents/tooltip/tooltip";

function App() {
  return (
    <>
      <div className="main">
        <FirstCustom />
        <Badge color="blue" shape="square">
          Badge
        </Badge>
        <Tooltip Type="error" />
      </div>
    </>
  );
}

export default App;
