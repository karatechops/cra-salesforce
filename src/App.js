import React from "react";
import IconSettings from "@salesforce/design-system-react/components/icon-settings";
import Accordions from "./Accordions";
import Alert from "./Alert";
import Buttons from "./Buttons";
import DatePicker from "./DatePicker";
import Popover from "./Popover";
import "./App.css";

function App() {
  return (
    <div className="App">
      <IconSettings iconPath="/icons">
        <Accordions />
        <Alert />
        <Buttons />
        <DatePicker />
        <Popover />
      </IconSettings>
    </div>
  );
}

export default App;
